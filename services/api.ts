"use client";
import axios, { isAxiosError, AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Swal from "sweetalert2";

/*
  *ResponseModel Type*,
  Type untuk schema response dari API,
  
  code: kode response,
  message: pesan dari response,
  data: data dari response,
  error: error dari response

  NOTE: Gak semua endpoint schema response nya begini,
        check di postman
  */
export type ResponseModel<T> = {
  code?: number;
  message: string;
  data?: T;
  error?: any;
};

export type ZodError = {
  issues: ZodIssue[];
};

type ZodIssue = {
  code: string;
  message: string;
  path: string[];
};

export const baseUrl =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api";

/*
  *HandleAxiosError*,
  Function helper untuk handling API error,
  gunakan di catch block axios request
  
  
  await api.get("/profile").then(...).catch(HandleAxiosError)
  
  */
export const HandleAxiosError = (error: any) => {
  console.error(error);
  if (!isAxiosError(error)) {
    Swal.fire("Error", "Terjadi kesalahan pada request", "error");
    return;
  }

  const { response } = error as AxiosError<{
    message: string;
    error?: ZodError;
  }>;
  if (!response) {
    Swal.fire("Error", "Tidak dapat terhubung ke server", "error");
    return;
  }

  if (response.data.error) {
    const errorString = response.data.error.issues
      .map((issue) => {
        const { message } = issue;
        return message;
      })
      .join(", ");

    Swal.fire("Error", errorString, "error");
    return;
  }

  Swal.fire(
    "Error",
    response.data.message ?? "Terjadi kesalahan saat request",
    "error"
  );
};

/*
  *rawApi*,
  Axios instance yang belom di di config,
  harap gunakan useApi
*/
export const rawApi = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

/*
  *Hook useApi*,
  gunakan hook ini untuk melakukan request ke API
*/
export const useApi = () => {
  const session = useSession();

  useEffect(() => {
    const interceptor = rawApi.interceptors.request.use((config) => {
      if (!config.headers["Authorization"] && session.data) {
        config.headers["Authorization"] = `Bearer ${session.data.jwt.token}`;
      }
      return config;
    });

    return () => {
      rawApi.interceptors.request.eject(interceptor);
    };
  }, [session]);

  return rawApi;
};
