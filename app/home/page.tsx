"use client";
import { Center, Box, Text, HStack, Flex, Image, useMediaQuery } from "@chakra-ui/react";

import Layout from "@/components/Layout";

export default function Home() {
  const [isSmallerThan320] = useMediaQuery("(max-width: 320px)");
  return (
    <Layout>
      <Flex minH={"100vh"} bgImage={["/assets/home/MaximaBG_HoME_Desktop.svg", "/assets/home/MaximaBG_HoME_Desktop.svg", "/assets/home/MaximaBG_HoME_Desktop.svg", "/assets/home/MaximaBG_HoME_Desktop.svg"]} bgPosition={["center"]} bgSize={"cover"} bgRepeat={"no-repeat"}>
      <Box w={"full"} zIndex={"0"}>
        <Box display={isSmallerThan320 ? "none" : ["block", "none", "none", "none", "none"]} position={"absolute"} width={"auto"}>
            <Image src={"/assets/home/MaximaBG_HoME_Mobile.svg"} />
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
              mt={["12em", "12em", "8.6em", "6.4em", "15.6em", "8.8em"]}
              p={"2"}
              h={"auto"}
              rounded="xl"
              bgColor={"rgb(255, 255, 255, 0.47)"}
              w={["100%", "90%", "58%", "52%", "36%", "50%"]}
            >
              <Flex alignItems={"center"}>
                <Image
                  src={"/assets/home/LocIcon.svg"}
                  boxSize={["15px", "15px", "15px", "20px", "40px"]}
                  mx={"5px"}
                />
                <Box>
                  <Text
                    textColor={"#062D5F"}
                    textAlign={"start"}
                    fontSize={["14px", "18px", "18px", "2xl", "3xl"]}
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
                  fontSize={["14px", "14px", "14px", "xl", "2xl"]}
                  fontWeight={"bold"}
                  paddingLeft={[0, 0, 0, 0, "1em"]}
                >
                  Tanggal, Jam
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
          <Flex
              w={"full"}
              h={"10em"}
              justifyContent={"center"}
              alignItems={"center"}
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
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}
