"use client";

import Link from "next/link";

//importing local components
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img, HStack, Icon, Image, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BsPlus, BsTrash, BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { HandleAxiosError, ResponseModel, useApi } from "@/services/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import LoadingSpinner from "@/components/LoadingSpinner";

// internal
type MalpunData = {
  id: number;
  isTicketClaimed: boolean;
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

const Malpun = () => {
  const session = useSession();
  const api = useApi();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const [malpunData, setMalpunData] = useState<Profile | undefined>();

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
          setMalpunData(data.data!);
        })
        .catch(HandleAxiosError)
        .finally(() => setIsLoading(false));
    }

    if (session.status === "unauthenticated") {
      setIsLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  if (session.status === "loading" || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Layout title={"MAXIMA 2023 - STATE"} showSponsorFooter>
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
          <Stack
            direction={"column"}
            // p={"4em"}
            textColor={"white"}
            align={"center"}
            justify={"center"}
          >
            <Text fontWeight={"extrabold"} fontSize={["5xl", "6xl", "7xl", "8xl", "8xl"]} textShadow={"0px 0px 8px black"} my={"-0.35em"}>
              Malam Puncak
            </Text>
            <Text fontWeight={"extrabold"} fontSize={["4xl", "5xl", "5xl", "6xl", "6xl"]} textShadow={"0px 0px 8px black"}>
              MAXIMA 2023
            </Text>

            <Box my={"4em"}>
              <Button
                as={Link}
                href={session.status === "authenticated" && malpunData?.ticketClaimed ? `/malpun/tiket/${malpunData?.tokenMalpun}/` : "/malpun/tiket"}
                color={"#1B4173"}
                bgColor={"#F7B70C"}
                border={"2px solid white"}
                fontWeight={"bold"}
                size={"lg"}
                px={"2em"}
                rounded={"full"}
              >
                {session.status === "authenticated" ? (malpunData?.ticketClaimed ? "LIHAT TIKET" : "CLAIM TIKET") : "BELI TIKET"}
              </Button>
            </Box>
          </Stack>
        </Flex>
      </Layout>
    </>
  );
};

export default Malpun;
