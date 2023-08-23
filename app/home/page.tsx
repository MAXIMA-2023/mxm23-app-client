"use client";
import { Center, Box, Text, HStack, Flex, Image } from "@chakra-ui/react";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Box
        w={"full"}
        h={"115vh"}
        bgImage={"/assets/home/MaximaBG_HoME_Desktop.svg"}
        bgPosition={"bottom"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box>
          <Navbar /> {/* Add the Navbar component here */}
        </Box>
        <Box
          pt={["7em", "11em"]}
          mx={["2em", "7em", "7em", "7em", "9em"]}
          textAlign={"right"}
        >
          <Box textColor={"#FF6835"}>
            <Text
              fontSize={["4xl", "4xl", "6xl", "8xl", "9xl"]}
              fontWeight={"bold"}
              lineHeight={"1em"}
            >
              HoME
            </Text>
            <Text fontSize={["2xl", "5xl"]} fontWeight={"bold"}>
              MAXIMA 2023
            </Text>
            <Flex
              w={"full"}
              justifyContent={"end"}
              textShadow={"2px 2px 4px rgba(0, 0, 0, 0.4)"}
            >
              <Text
                w={["80%", "80%", "60%", "40%", "40%"]}
                fontSize={["14px", "24px"]}
                fontWeight={"normal"}
                color={"#FFFFFF"}
              >
                Halo Maximers! Yuk kunjungi pameran UKM, Organisasi, LSO, dan
                Media Kampus Universitas Multimedia Nusantara.
              </Text>
            </Flex>
          </Box>
          <Box
            mt={["12em", "12em", "17.6em", "15.4em", "15.6em", "22.8em"]}
            p={"2"}
            h={"auto"}
            rounded="xl"
            bgColor={"rgb(255, 255, 255, 0.47)"}
            w={["100%", "90%", "58%", "52%", "36%", "27%"]}
          >
            <Flex alignItems={"center"}>
              <Image
                src={"/assets/home/LocIcon.svg"}
                boxSize={["15px", "15px", "15px", "20px", "20px"]}
                mx={"5px"}
              />
              <Box>
                <Text
                  textColor={"#062D5F"}
                  textAlign={"start"}
                  fontSize={["14px", "18px", "18px", "2xl", "2xl"]}
                  fontWeight={"extrabold"}
                >
                  Function Hall, Gedung A UMN
                </Text>
              </Box>
            </Flex>
            <Box ml={"1.8em"}>
              <Text
                textColor={"#062D5F"}
                textAlign={"start"}
                fontSize={"14px"}
                fontWeight={"bold"}
              >
                Tanggal, Jam
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"full"}
        h={"15em"}
        bgColor={"#6F563A"}
      >
        <Flex
          mr={"0.75em"}
          rounded={"12px"}
          bg={"#FFFFFF"}
          w={["30%", "30%", "28%", "20%", "15%", "12%"]}
          h={"5em"}
        >
          <Flex justifyContent={"center"} alignItems={"center"} p={"1em"}>
            <Image
              src={"/assets/home/ChallengeIcon.svg"}
              boxSize={"3em"}
              mr={"1em"}
            ></Image>
            <Text
              fontSize={"xl"}
              fontWeight={"bold"}
              textColor={"#1B4173"}
              alignItems={"center"}
            >
              Challenge
            </Text>
          </Flex>
        </Flex>

        <Flex
          rounded={"12px"}
          bg={"#FFFFFF"}
          w={["30%", "30%", "28%", "20%", "15%", "12%"]}
          h={"5em"}
        >
          <Flex justifyContent={"center"} alignItems={"center"} p={"1em"}>
            <Image
              src={"/assets/home/QRIcon.svg"}
              boxSize={"3em"}
              mr={"1em"}
            ></Image>
            <Text
              fontSize={"xl"}
              fontWeight={"bold"}
              textColor={"#1B4173"}
              alignItems={"center"}
            >
              QR Absensi
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
