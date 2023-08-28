"use client";
import React, { useEffect, useState, useRef } from "react";
import { Center, Box, Text, HStack, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import { motion, transform, useInView } from "framer-motion";

import Layout from "@/components/Layout";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { HandleAxiosError, useApi } from "@/services/api";

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
};

export default function Home() {
  const router = useRouter();
  const api = useApi();

  const fetchToggle = async () => {
    try {
      const { data } = await api.get<Toggle[]>("/toggle");

      if (!data.find((v) => v.name === "HoMEpage")?.toggle) {
        Swal.fire({
          title: "HoME belum dibuka!",
          color: "#062D5F",
          text: "Maaf, saat ini HoMe belum dibuka. Silahkan cek kembali nanti!",
          icon: "error",
          confirmButtonColor: "#F7B70C",
        });
        router.push("/");
      }
    } catch (error) {
      HandleAxiosError(error);
    }
  };

  useEffect(() => {
    fetchToggle();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //framer motion components
  const InView1 = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s ease-in-out 0.5s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InView2 = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s ease-in-out 1s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewWords = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s ease-in-out 1.5s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewHoMEInfo = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s ease-in-out 2s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewButtonLeft = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(-25px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease-in-out 0.25s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewButtonRight = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(25px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease-in-out 0.25s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  return (
    <Layout title={"MAXIMA 2023 - HoME"}>
      <Box
        w={"full"}
        h={["844px", "844px", "1200px", "114vh", "114vh"]}
        bgImage={["./assets/home/MaximaBG_HoME_Mobile.svg", "./assets/home/MaximaBG_HoME_Mobile.svg", "./assets/home/MaximaBG_HoME_Desktop.svg", "./assets/home/MaximaBG_HoME_Desktop.svg", "./assets/home/MaximaBG_HoME_Desktop.svg"]}
        bgPosition={["bottom", "bottom", "top"]}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box pt={["11em", "11em", "18vh", "8em", "9em"]} mx={["1em", "1em", "3em", "3em", "9em"]} textAlign={"right"}>
          <Box textColor={"#FF6835"}>
            <InView1>
              <Text as={motion.p} fontSize={["6xl", "6xl", "8xl", "8xl", "9xl"]} fontWeight={"bold"} lineHeight={"1em"}>
                HoME
              </Text>
            </InView1>
            <InView2>
              <Text fontSize={["4xl", "4xl", "6xl", "7xl"]} fontWeight={"bold"}>
                MAXIMA 2023
              </Text>
            </InView2>
            <InViewWords>
              <Flex w={"full"} justifyContent={"end"} textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}>
                <Text display={["none", "none", "flex"]} fontSize={["lg", "xl"]} fontWeight={"normal"} color={"#FFFFFF"} textAlign={"right"}>
                  Halo Maximers! Yuk kunjungi pameran UKM, <br /> Organisasi, LSO, dan Media Kampus <br /> Universitas Multimedia Nusantara.
                </Text>
                <Text display={["flex", "flex", "none"]} w={["100%", "80%", "70%", "50%", "50%"]} fontSize={["lg", "xl"]} fontWeight={"normal"} color={"#FFFFFF"} textAlign={"right"}>
                  Halo Maximers! Yuk kunjungi pameran UKM, Organisasi, LSO, dan Media Kampus Universitas Multimedia Nusantara.
                </Text>
              </Flex>
            </InViewWords>
          </Box>
          <InViewHoMEInfo>
            <Box mt={["5em", "5m", "5em", "5em", "10em"]} p={["1em 0.5em", "1em 0.5em", "1em"]} rounded="xl" bgColor={"rgb(255, 255, 255, 0.8)"} w={["100%", "70%", "32.5em", "32.5em", "40em"]}>
              <Flex alignItems={"center"}>
                <Image src={"./assets/home/LocationIcon_Red.svg"} alt={"Location Icon"} boxSize={["1.25em", "1.25em", "1.75em", "1.75em", "1.75em"]} mr={["0.5em", "0.5em", "1em"]} />
                <Box>
                  <Text textColor={"#062D5F"} textAlign={"start"} fontSize={["lg", "lg", "2xl", "2xl", "3xl"]} fontWeight={"extrabold"} letterSpacing={["0em", "0em", "0.07em"]}>
                    Function Hall, Gedung A UMN
                  </Text>
                </Box>
              </Flex>
              <Box ml={["1.75em", "1.75em", "2.75em", "1.25em", "1.25em"]}>
                <Text textColor={"#062D5F"} textAlign={"start"} fontSize={["md", "md", "xl", "xl", "2xl"]} fontWeight={"bold"} paddingLeft={[0, 0, 0, 0, "1em"]}>
                  11 - 15 September
                </Text>
              </Box>
            </Box>
          </InViewHoMEInfo>
        </Box>
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"} w={"full"} h={"15em"} bgColor={"#6F563A"}>
        <InViewButtonLeft>
          <Flex mt={["-7.5em", "-7.5em", "0em"]} mr={"1em"} px={["0em", "0em", "0.5em"]} rounded={"xl"} bg={"#FFFFFF"} py={"0.5em"} boxShadow={["0px 4px 4px rgb(0, 0, 0, 0.25)", "0px 4px 4px rgb(0, 0, 0, 0.25)", "none"]}>
            <Flex display={["block", "block", "flex"]} justifyContent={"center"} alignItems={"center"} p={"1em"}>
              <Center>
                <Image src={"./assets/home/ChallengeIcon.svg"} alt={"Challenge Icon"} boxSize={["4.5em", "5em", "3em"]} mr={["0em", "0em", "2em"]} />
              </Center>
              <Text mt={["1.25em", "1.25em", "0em"]} fontSize={"xl"} fontWeight={"bold"} textColor={"#1B4173"} alignItems={"center"}>
                Challenge
              </Text>
            </Flex>
          </Flex>
        </InViewButtonLeft>
        <InViewButtonRight>
          <Flex mt={["-7.5em", "-7.5em", "0em"]} px={["0em", "0em", "0.5em"]} rounded={"xl"} bg={"#FFFFFF"} py={"0.5em"} boxShadow={["0px 4px 4px rgb(0, 0, 0, 0.25)", "0px 4px 4px rgb(0, 0, 0, 0.25)", "none"]}>
            <Flex display={["block", "block", "flex"]} justifyContent={"center"} alignItems={"center"} p={"1em"}>
              <Center>
                <Image src={"./assets/home/QRIcon.svg"} alt={"QR Icon"} boxSize={["4.5em", "5em", "3em"]} mr={["0em", "0em", "2em"]} />
              </Center>
              <Text mt={["1.25em", "1.25em", "0em"]} fontSize={"xl"} fontWeight={"bold"} textColor={"#1B4173"} alignItems={"center"}>
                QR Absensi
              </Text>
            </Flex>
          </Flex>
        </InViewButtonRight>
      </Flex>
    </Layout>
  );
}
