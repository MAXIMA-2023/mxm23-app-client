"use client";

import Link from "next/link";
import Head from "next/head";

//importing local components
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

//importing chakra ui components
import {
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Button,
  Stack,
  Img,
  HStack,
  Icon,
  Image,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  background,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BsPlus, BsTrash, BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { HandleAxiosError, ResponseModel, useApi } from "@/services/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import LoadingSpinner from "@/components/LoadingSpinner";
import { useForm } from "react-hook-form";

// ngadi ngadi dikit ga ngaruh
type SnapSuccess = {
  status_code: string;
  status_message: string;
  transaction_id: string;
  order_id: string;
  gross_amount: string;
  payment_type: string;
  transaction_time: string;
  transaction_status: string;
  fraud_status: string;
  payment_code: string;
  pdf_url: string;
  finish_redirect_url: string;
};

type SnapError = {
  status_code: string;
  status_message: string[];
};
type Snap = {
  pay: (
    token: string,
    {
      onSuccess,
      onPending,
      onError,
      onClose,
    }: {
      onSuccess?: (result: SnapSuccess) => void;
      onPending?: (result: SnapSuccess) => void;
      onError?: (result: SnapError) => void;
      onClose?: () => void;
    }
  ) => void;
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: Record<string, any>;
    snap: Snap;
  }
}

// internal
type MalpunData = {
  id: number;
  tickedClaimed: boolean;
};

// external
type ExternalBuyerForm = {
  name: string;
  email: string;
  whatsapp: string;
};

type External = {
  transactionID: string;
  name: string;
  whatsapp: string;
  email: string;
  token: string;
  created_at: Date;
  alfagiftID: string;
  ticketBuyed: boolean;
  isAttendedMalpun: boolean;
};

// profile for checking ticket
type Profile = {
  nim: number;
  name: string;
  email: string;
  whatsapp: string;
  angkatan: number;
  idLine: string;
  prodi: string;
  token: string;
  ticketClaimed: boolean;
  tokenMalpun: string;
};

// Malpunpage
type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
};

const ClaimTicket = () => {
  const session = useSession();
  const router = useRouter();
  const api = useApi();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("facio sayang banget alfagift :D");
  }, []);

  useEffect(() => {
    api.get<Toggle[]>("/toggle").then(({ data }) => {
      if (!data.find((v) => v.name === "Malpunpage")?.toggle) {
        Swal.fire({
          title: "Malpun ditutup!",
          color: "#062D5F",
          text: "Maaf, saat ini Malpun belum dibuka/sudah ditutup. Silahkan cek kembali nanti!",
          icon: "error",
          confirmButtonColor: "#F7B70C",
        });
        router.push("/");
        return;
      }
    });

    if (session.status === "authenticated") {
      api
        .get<ResponseModel<Profile>>(`/mahasiswa/profile`)
        .then(({ data }) => {
          if (data.data?.ticketClaimed) {
            router.push(`/malpun/tiket/${data.data.tokenMalpun}`);
          }
        })
        .catch(HandleAxiosError)
        .finally(() => setIsLoading(false));
    }

    if (session.status === "unauthenticated") {
      setIsLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const [step, setStep] = useState<number>(1);

  if (session.status === "loading" || isLoading) {
    return <LoadingSpinner />;
  }

  const MenuEntry = ({
    children,
    src,
    alt,
  }: {
    children: React.ReactNode;
    src: string;
    alt: string;
  }) => {
    return (
      <Stack direction={"row"} align={"center"} py={"0.25em"}>
        <Image src={src} alt={alt} boxSize={"1.5em"} />
        <Text
          fontWeight={"bold"}
          fontSize={["sm", "md", "md", "md", "md"]}
          mx={"0.5em"}
        >
          {children}
        </Text>
      </Stack>
    );
  };

  const TicketDetailsMenu = () => {
    return (
      <Stack
        direction={"column"}
        py={["none", "18em", "14em", "12em", "12em"]}
        px={["4em", "6em", "10em", "12em", "12em"]}
        // m={["none", "12em", "12em", "8em", "8em"]}
        mt={["5em", "none"]}
        w={["full", "30em", "46em", "60em", "64em"]}
        h={"full"}
        color={"#1B4173"}
        align={"center"}
        justify={"center"}
        bgImage={[
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_Mobile.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_Mobile.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay.webp",
        ]}
        bgPos={"center"}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        overflow={"hidden"}
      >
        <Stack
          direction={["column", "column", "row", "row", "row"]}
          w={"full"}
          //   h={"full"}
          justify={"space-evenly"}
          align={"center"}
        >
          <Stack
            w={["10em", "55%", "55%", "55%", "55%"]}
            h={"full"}
            rounded={"sm"}
            align={"center"}
            justify={"center"}
            // p={"4em"}
          >
            <Image
              src="https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Ticket.webp"
              alt="tiket"
            />
          </Stack>
          <Stack
            direction={"column"}
            // w={"full"}
            // w={["full", "35%", "35%", "35%", "35%"]}
            h={"full"}
            mx={["1em", "1em", "2em", "2em", "2em"]}
            align={[
              "center",
              "center",
              "space-around",
              "space-around",
              "space-around",
            ]}
            py={["2em", "none"]}
          >
            <Text
              fontSize={["2xl", "2xl", "2xl", "3xl", "4xl"]}
              fontWeight={"bold"}
            >
              Tiket Malam Puncak MAXIMA 2023
            </Text>
            <Stack
              w={"full"}
              direction={"column"}
              my={["0.5em", "1em", "1em", "2em", "2em"]}
            >
              <MenuEntry src="/assets/malpun/calendar.svg" alt="tanggal">
                7 Oktober 2023
              </MenuEntry>
              <MenuEntry src="/assets/malpun/clock.svg" alt="jam">
                16:00 WIB
              </MenuEntry>
              <MenuEntry src="/assets/malpun/location.svg" alt="lokasi">
                Lapangan Parkir UMN
              </MenuEntry>
              {session.status == "unauthenticated" && (
                <MenuEntry src="/assets/malpun/ticket.svg" alt="harga">
                  Rp 35.000
                </MenuEntry>
              )}
            </Stack>
            <Stack w={"full"} align={"end"}>
              <Button
                color={"white"}
                bgColor={"#D01E20"}
                border={"2px solid white"}
                fontWeight={"bold"}
                rounded={"full"}
                w={["full", "full", "8em", "8em", "8em"]}
                size={"md"}
                onClick={async () => {
                  try {
                    // internal maba
                    if (session.status === "authenticated") {
                      const alfagift = await Swal.fire({
                        title: "Apakah kamu sudah punya Alfagift?",
                        color: "#062D5F",
                        confirmButtonColor: "#F7B70C",
                        confirmButtonText: "Sudah",
                        cancelButtonColor: "#D33",
                        showCancelButton: true,
                        cancelButtonText: "Belum",
                      });

                      if (alfagift.isConfirmed) {
                        const inputResult = await Swal.fire({
                          title: "Masukan nomor member Alfagift",
                          color: "#062D5F",
                          confirmButtonColor: "#F7B70C",
                          confirmButtonText: "Kirim",
                          input: "text",
                          inputValidator: (value) => {
                            if (
                              !value.startsWith("99900") &&
                              value.length !== 16
                            )
                              return "Nomor member tidak valid";
                          },
                        });

                        if (inputResult.isConfirmed && inputResult.value) {
                          await api.put("/mahasiswa/malpun/update/alfagift", {
                            alfagiftID: inputResult.value,
                          });
                        }
                      }

                      if (alfagift.isDismissed) {
                        await Swal.fire({
                          title:
                            "Jangan lupa untuk Download aplikasi Alfagift ya!",
                          color: "#062D5F",
                          confirmButtonColor: "#F7B70C",
                          confirmButtonText: "Oke",
                          imageUrl:
                            "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/alfagift/qr.png",
                          imageAlt: "QR Alfagift",
                          imageHeight: 250,
                          imageWidth: 250,
                          html: `
                          <a 
                            href="https://alfagift.onelink.me/1087556432/giftxima?af_qr=true" 
                            style="text-decoration:underline;" 
                            target="_blank" 
                            noreferrer 
                            noopener
                          >
                            Klik disini untuk download Alfagift
                          </a>
                        `,
                        });
                      }

                      const { data } = await api.post<ResponseModel<string>>(
                        "/mahasiswa/malpun/claimticket"
                      );
                      router.push(`/malpun/tiket/${data.data}?init=true`);
                    }

                    // external public
                    if (session.status === "unauthenticated") {
                      setStep(2);
                    }
                  } catch (err) {
                    HandleAxiosError(err);
                  }
                }}
              >
                {session.status === "authenticated" ? "CLAIM" : "BELI"}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  };

  const ExternalRegisterMenu = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ExternalBuyerForm>();
    return (
      <Stack
        direction={"column"}
        py={["none", "18em", "14em", "12em", "12em"]}
        px={["4em", "6em", "10em", "12em", "12em"]}
        // m={["none", "12em", "12em", "8em", "8em"]}
        mt={["5em", "none"]}
        w={["full", "30em", "46em", "60em", "64em"]}
        h={"full"}
        color={"#1B4173"}
        align={"center"}
        justify={"center"}
        bgImage={[
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_Mobile.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_Mobile.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_Mobile.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay.webp",
        ]}
        bgPos={"center"}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        overflow={"hidden"}
      >
        <Text fontSize={["2xl", "2xl", "xl", "2xl", "3xl"]} fontWeight={"bold"}>
          Detail Pembeli
        </Text>
        <Stack
          as={"form"}
          onSubmit={handleSubmit(async (form) => {
            const alfagift = await Swal.fire({
              title: "Apakah kamu sudah punya Alfagift?",
              color: "#062D5F",
              confirmButtonColor: "#F7B70C",
              confirmButtonText: "Sudah",
              cancelButtonColor: "#D33",
              showCancelButton: true,
              cancelButtonText: "Belum",
            });

            if (alfagift.isDismissed) {
              const downloadAlfagift = await Swal.fire({
                title: "Silahkan download aplikasi Alfagift terlebih dahulu!",
                color: "#062D5F",
                confirmButtonColor: "#F7B70C",
                confirmButtonText: "Download",
                cancelButtonColor: "#D33",
                showCancelButton: true,
                imageUrl:
                  "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/alfagift/qr.png",
                imageAlt: "QR Alfagift",
                imageHeight: 250,
                imageWidth: 250,
              });

              if (downloadAlfagift.isConfirmed) {
                window.open(
                  "https://alfagift.onelink.me/1087556432/giftxima?af_qr=true",
                  "_blank",
                  "noreferrer noopener"
                );
              }

              return;
            }

            if (alfagift.isConfirmed) {
              const inputResult = await Swal.fire({
                title: "Masukan nomor member Alfagift",
                color: "#062D5F",
                confirmButtonColor: "#F7B70C",
                confirmButtonText: "Kirim",
                input: "text",
                inputValidator: (value) => {
                  if (!value.startsWith("99900") && value.length !== 16)
                    return "Nomor member tidak valid";
                },
              });

              if (inputResult.isConfirmed && inputResult.value) {
                try {
                  const { data } = await api.post<
                    ResponseModel<
                      ExternalBuyerForm & {
                        transaction_id: string;
                        token: string;
                      }
                    >
                  >("/external/register", {
                    name: form.name,
                    email: form.email,
                    whatsapp: form.whatsapp,
                    alfagiftID: inputResult.value,
                  });

                  window.snap.pay(data.data?.token!, {
                    onSuccess: async (result) => {
                      try {
                        await api.post("/malpun/payment", result);
                        const { data } = await api.post<
                          ResponseModel<External>
                        >("/external/get_token", {
                          order_id: result.order_id,
                        });

                        router.push(
                          `/malpun/tiket/${data.data?.token}?init=true`
                        );
                      } catch (err) {
                        HandleAxiosError(err);
                      }
                    },
                    onPending: (result) =>
                      Swal.fire({
                        title: "Pembayaranmu masih pending!",
                        color: "#062D5F",
                        confirmButtonColor: "#F7B70C",
                        confirmButtonText: "Oke",
                      }),
                    onError: (err) =>
                      Swal.fire({
                        title: "Pembayaranmu gagal!",
                        color: "#062D5F",
                        confirmButtonColor: "#F7B70C",
                        confirmButtonText: "Oke",
                      }),
                  });
                } catch (err) {
                  console.error(err);
                  HandleAxiosError(err);
                }
              }
            }
          })}
          direction={"column"}
          w={"full"}
        >
          <Stack
            my={["1.5em", "3em", "1.5em", "1.5em", "1.5em"]}
            px={["none", "none", "4em", "8em", "8em"]}
          >
            <FormControl isInvalid={!!errors.name}>
              <FormLabel
                color={"#1B4173"}
                fontSize={["xl", "md", "xl", "xl", "xl"]}
                opacity={"0.9"}
              >
                Nama Lengkap
              </FormLabel>
              <Input
                placeholder="Nama Lengkap"
                {...register("name", {
                  required: "Nama tidak boleh kosong",
                  maxLength: {
                    value: 50,
                    message: "Nama tidak boleh lebih dari 50 karakter",
                  },
                  minLength: {
                    value: 3,
                    message: "Nama tidak boleh kurang dari 3 karakter",
                  },
                })}
                size={["md", "sm", "md", "md", "md"]}
                // borderLeft={"none"}
                bgColor={"white"}
                borderColor={"#1B4173"}
                _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                type={"text"}
                textColor={"black"}
                borderRadius={"full"}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel
                color={"#1B4173"}
                fontSize={["xl", "md", "xl", "xl", "xl"]}
                opacity={"0.9"}
              >
                Email
              </FormLabel>
              <Input
                placeholder="Email"
                {...register("email", {
                  required: "Email tidak boleh kosong",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email tidak valid",
                  },
                })}
                size={["md", "sm", "md", "md", "md"]}
                // borderLeft={"none"}
                bgColor={"white"}
                borderColor={"#1B4173"}
                _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                type={"text"}
                textColor={"black"}
                borderRadius={"full"}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.whatsapp}>
              <FormLabel
                color={"#1B4173"}
                fontSize={["xl", "md", "xl", "xl", "xl"]}
                opacity={"0.9"}
              >
                No. Whatsapp
              </FormLabel>
              <Input
                placeholder="No. WhatsApp"
                {...register("whatsapp", {
                  required: "No. Whatsapp harus diisi",
                  pattern: {
                    value: /^(\+62|62|0)8[1-9][0-9]{6,12}$/,
                    message: "No. Whatsapp tidak valid",
                  },
                })}
                size={["md", "sm", "md", "md", "md"]}
                // borderLeft={"none"}
                bgColor={"white"}
                borderColor={"#1B4173"}
                _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                type={"tel"}
                textColor={"black"}
                borderRadius={"full"}
              />
              <FormErrorMessage>
                {errors.whatsapp && errors.whatsapp.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <Stack direction={"row"} w={"full"} justify={"space-between"}>
            <Button
              color={"#1B4173"}
              bgColor={"#F7B70C"}
              border={"2px solid white"}
              fontWeight={"bold"}
              size={["md", "md", "lg", "lg", "lg"]}
              // px={"2em"}
              w={"8em"}
              rounded={"full"}
              onClick={() => setStep(1)}
            >
              KEMBALI
            </Button>
            <Button
              color={"#1B4173"}
              bgColor={"#F7B70C"}
              border={"2px solid white"}
              fontWeight={"bold"}
              size={["md", "md", "lg", "lg", "lg"]}
              w={"8em"}
              // px={"2em"}
              rounded={"full"}
              type={"submit"}
            >
              BELI
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
  };

  return (
    <>
      <script
        src={process.env.NEXT_PUBLIC_MIDTRANS_INTERFACE_URL}
        type="text/javascript"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_KEY}
        async
      />

      <Layout title={"MAXIMA 2023 - STATE"}>
        <Flex
          // mt={"16vh"}]
          w={"full"}
          h={"100vh"}
          bgImage={[
            "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/MaximaBG_Malpun_Mobile.webp",
            "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/MaximaBG_Malpun_Mobile.webp",
            "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/MaximaBG_Malpun_Desktop.webp",
            "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/MaximaBG_Malpun_Desktop.webp",
            "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/MaximaBG_Malpun_Desktop.webp",
          ]}
          bgPosition={"bottom"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          direction={"column"}
          align={"center"}
          justify={"center"}
        >
          {step === 1 && <TicketDetailsMenu />}
          {step === 2 && <ExternalRegisterMenu />}
        </Flex>
      </Layout>
    </>
  );
};

export default ClaimTicket;
