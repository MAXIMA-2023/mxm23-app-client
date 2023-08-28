"use client";
import { Center, Box, Text, HStack, Flex, Image, useMediaQuery } from "@chakra-ui/react";

import Layout from "@/components/Layout";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { HandleAxiosError, useApi } from "@/services/api";
import { useEffect } from "react";

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
            <Text fontSize={["6xl", "6xl", "8xl", "8xl", "9xl"]} fontWeight={"bold"} lineHeight={"1em"}>
              HoME
            </Text>
            <Text fontSize={["4xl", "4xl", "6xl", "7xl"]} fontWeight={"bold"}>
              MAXIMA 2023
            </Text>
            <Flex w={"full"} justifyContent={"end"} textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}>
              <Text display={["none", "none", "flex"]} fontSize={["lg", "xl"]} fontWeight={"normal"} color={"#FFFFFF"} textAlign={"right"}>
                Halo Maximers! Yuk kunjungi pameran UKM, <br /> Organisasi, LSO, dan Media Kampus <br /> Universitas Multimedia Nusantara.
              </Text>
              <Text display={["flex", "flex", "none"]} w={["100%", "80%", "70%", "50%", "50%"]} fontSize={["lg", "xl"]} fontWeight={"normal"} color={"#FFFFFF"} textAlign={"right"}>
                Halo Maximers! Yuk kunjungi pameran UKM, Organisasi, LSO, dan Media Kampus Universitas Multimedia Nusantara.
              </Text>
            </Flex>
          </Box>
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
        </Box>
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"} w={"full"} h={"15em"} bgColor={"#6F563A"}>
        <Flex mt={["-7.5em", "-7.5em", "0em"]} mr={"1em"} px={["0em", "0em", "0.5em"]} rounded={"xl"} bg={"#FFFFFF"} py={"0.5em"}>
          <Flex display={["block", "block", "flex"]} justifyContent={"center"} alignItems={"center"} p={"1em"}>
            <Center>
              <Image src={"./assets/home/ChallengeIcon.svg"} alt={"Challenge Icon"} boxSize={["4.5em", "5em", "3em"]} mr={["0em", "0em", "2em"]} />
            </Center>
            <Text mt={["1.25em", "1.25em", "0em"]} fontSize={"xl"} fontWeight={"bold"} textColor={"#1B4173"} alignItems={"center"}>
              Challenge
            </Text>
          </Flex>
        </Flex>
        <Flex mt={["-7.5em", "-7.5em", "0em"]} px={["0em", "0em", "0.5em"]} rounded={"xl"} bg={"#FFFFFF"} py={"0.5em"}>
          <Flex display={["block", "block", "flex"]} justifyContent={"center"} alignItems={"center"} p={"1em"}>
            <Center>
              <Image src={"./assets/home/QRIcon.svg"} alt={"QR Icon"} boxSize={["4.5em", "5em", "3em"]} mr={["0em", "0em", "2em"]} />
            </Center>
            <Text mt={["1.25em", "1.25em", "0em"]} fontSize={"xl"} fontWeight={"bold"} textColor={"#1B4173"} alignItems={"center"}>
              QR Absensi
            </Text>
          </Flex>
        </Flex>
        {/* <Flex display={["block", "block", "flex"]} mr={"0.75em"} px={"0.5em"} rounded={"2xl"} bg={"#FFFFFF"} py={"0.5em"}>
          <Flex justifyContent={"center"} alignItems={"center"} p={"1em"}>
            <Image src={"./assets/home/QRIcon.svg"} alt={"QR Icon"} boxSize={"3em"} mr={"2em"} />
            <Text fontSize={"xl"} fontWeight={"bold"} textColor={"#1B4173"} alignItems={"center"}>
              QR Absensi
            </Text>
          </Flex>
        </Flex> */}
      </Flex>
    </Layout>
  );
}
