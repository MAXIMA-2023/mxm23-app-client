"use client";
import axios, { isAxiosError, AxiosError } from "axios";
import { signOut, useSession } from "next-auth/react";
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
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Terjadi kesalahan saat request",
      color: "#062D5F",
      confirmButtonColor: "#F7B70C",
    });
    return;
  }

  const { response } = error as AxiosError<{
    message: string;
    error?: ZodError;
  }>;
  if (!response) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Tidak dapat terhubung ke server",
      color: "#062D5F",
      confirmButtonColor: "#F7B70C",
    });
    return;
  }

  if (response.data.error && response.data.error.issues) {
    const errorString = response.data.error.issues
      .map((issue) => {
        const { message } = issue;
        return message;
      })
      .join(", ");

    Swal.fire({
      icon: "error",
      title: "Error!",
      text: errorString,
      color: "#062D5F",
      confirmButtonColor: "#F7B70C",
    });
    return;
  }

  Swal.fire({
    title: "Error!",
    text: response.data.message ?? "Terjadi kesalahan saat request",
    icon: "error",
    color: "#062D5F",
    confirmButtonColor: "#F7B70C",
  });
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
    const interceptReq = rawApi.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"] && session.data) {
          config.headers["Authorization"] = `Bearer ${session.data.jwt.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // add interceptor for response that check for expired token (401)
    const interceptRes = rawApi.interceptors.response.use(
      (response) => response,
      (error: AxiosError<ResponseModel<undefined>>) => {
        if (
          error.response?.status === 401 &&
          error.response.data.message ===
            "Token anda tidak valid, harap login ulang!"
          // iya tau ini jelek handling gini, tp mau gmn lagi :)
        ) {
          signOut({
            callbackUrl: "/signin",
          }).then(() =>
            Swal.fire({
              title: "Error!",
              text:
                error.response?.data.message ??
                "Sesi anda telah berakhir, silahkan login kembali",
              icon: "error",
              color: "#062D5F",
              confirmButtonColor: "#F7B70C",
            })
          );
        }
        return Promise.reject(error);
      }
    );

    return () => {
      rawApi.interceptors.request.eject(interceptReq);
      rawApi.interceptors.response.eject(interceptRes);
    };
  }, [session]);

  return rawApi;
};
