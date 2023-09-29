"use client";

import Link from "next/link";
import Error from "next/error";

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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BsPlus, BsTrash, BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { HandleAxiosError, ResponseModel, useApi } from "@/services/api";
import { useSession } from "next-auth/react";

import LoadingSpinner from "@/components/LoadingSpinner";
import QRCode from "react-qr-code";

type TicketData = {
  token: string;
  name: string;
  isInternal: boolean;
};

const TicketDetail = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { init: string };
}) => {
  const session = useSession();
  const api = useApi();

  const [isLoading, setIsLoading] = useState(true);

  //   mock api
  const [ticketData, setTicketData] = useState<TicketData | undefined>();

  useEffect(() => {
    api
      .get<ResponseModel<TicketData>>(`/malpun/get_tiket_by_token/${params.id}`)
      .then(({ data }) => {
        setTicketData(data.data);
      })
      .catch(HandleAxiosError)
      .finally(() => setIsLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (session.status === "loading" || isLoading) {
    return <LoadingSpinner />;
  }

  const TicketClaimedMenu = () => {
    return (
      <Stack
        direction={"column"}
        py={["none", "8em", "12em", "8em", "8em"]}
        px={["4em", "4em", "10em", "12em", "12em"]}
        // m={["none", "12em", "12em", "8em", "8em"]}
        mt={["5em", "none"]}
        w={["full", "30em", "46em", "60em", "64em"]}
        h={"full"}
        color={"#1B4173"}
        align={"center"}
        justify={"center"}
        bgImage={
          ticketData?.isInternal
            ? [
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_Mobile.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_Mobile.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay.webp",
              ]
            : [
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_External_Mobile.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_External_Mobile.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_External.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_External.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_External.webp",
              ]
        }
        bgPos={"center"}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        overflow={"hidden"}
        textAlign={"center"}
      >
        <Text
          fontSize={["3xl", "3xl", "2xl", "3xl", "4xl"]}
          fontWeight={"bold"}
          mb={"-0.25em"}
        >
          Selamat!
        </Text>
        <Text fontSize={["md", "lg", "xl", "2xl", "3xl"]} fontWeight={"bold"}>
          Kamu telah mendapatkan tiket!
        </Text>
        <Image
          src="https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Ticket_Finished.webp"
          alt="ticket-claimed"
          w={["75%", "75%", "50%", "50%", "50%"]}
          my={"2em"}
        />
        <Text
          fontWeight={"semibold"}
          fontSize={["sm", "sm", "sm", "md", "md"]}
          mx={"0.5em"}
        >
          Jangan lupa cek email untuk mengkonfirmasi tiketmu!
        </Text>
        <Button
          as={ticketData ? Link : undefined}
          href={ticketData ? `/malpun/tiket/${ticketData?.token}/` : undefined}
          color={"white"}
          bgColor={"#D01E20"}
          border={"2px solid white"}
          fontWeight={"bold"}
          rounded={"full"}
          w={"8em"}
          size={"md"}
          isDisabled={!ticketData}
        >
          LIHAT TIKET
        </Button>
      </Stack>
    );
  };

  const TicketDetails = () => {
    return (
      <Stack
        direction={["column", "column", "row", "row", "row"]}
        py={["none", "8em", "12em", "8em", "8em"]}
        px={["4em", "6em", "10em", "12em", "12em"]}
        // m={["none", "12em", "12em", "8em", "8em"]}
        mt={["5em", "none"]}
        w={["full", "30em", "46em", "60em", "64em"]}
        h={"full"}
        color={"#1B4173"}
        align={"center"}
        justify={"center"}
        bgImage={
          ticketData?.isInternal
            ? [
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_Mobile.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_Mobile.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay.webp",
              ]
            : [
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_External_Mobile.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_External_Mobile.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_External.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_External.webp",
                "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/malpun/Maxima_Malpun_Overlay_External.webp",
              ]
        }
        bgPos={"center"}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        overflow={"hidden"}
      >
        <Stack my={"1em"} mx={["2em"]} align={"center"}>
          <Image
            as={QRCode}
            alt="qr-ticket-malpun"
            value={ticketData?.token}
            fgColor="#1B4173"
            bgColor={"white"}
            p={"1em"}
            rounded={"xl"}
            boxSize={["12em", "12em", "10em", "12em", "12em"]}
          />
        </Stack>
        <Stack direction={"column"} w={"full"}>
          <Text
            align={"left"}
            color={"#1B4173"}
            fontSize={["md", "md", "md", "lg", "lg"]}
            fontWeight={"bold"}
            mb={"-0.5em"}
          >
            Hai,
          </Text>
          <Text
            align={"left"}
            color={"#1B4173"}
            fontSize={["lg", "lg", "lg", "xl", "2xl"]}
            fontWeight={"extrabold"}
          >
            {ticketData?.name}
          </Text>
          <Text
            align={"left"}
            color={"#1B4173"}
            fontSize={["sm", "sm", "xs", "xs", "md"]}
            mb={"-0.5em"}
            fontWeight={"semibold"}
            textAlign={"justify"}
          >
            Selamat datang di{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Malam Puncak MAXIMA 2023
            </Text>
            . Ini ticket buat kamu biar bisa nikmatin{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Malam Puncak MAXIMA 2023
            </Text>{" "}
            bersama{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Maxi
            </Text>
            ,{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Xima
            </Text>
            , dan teman-teman kamu!!!
            <Text my={"1em"} fontWeight={"extrabold"}>
              Jangan lupa bawa ticketnya ya!!!
            </Text>
          </Text>
        </Stack>
      </Stack>
    );
  };

  return (
    <>
      <Layout title={"MAXIMA 2023 - Malam Puncak (Ticket)"} showSponsorFooter>
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
          {searchParams.init && <TicketClaimedMenu />}
          {!searchParams.init && ticketData && <TicketDetails />}
        </Flex>
      </Layout>
    </>
  );
};

export default TicketDetail;
