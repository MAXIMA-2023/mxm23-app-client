"use client";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import React from "react";

//importing local components
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Stack, Img } from "@chakra-ui/react";

const MalamPuncak: NextPage = () => {
  return (
    <Layout title={"MAXIMA 2023 - About Us (Malam Puncak)"} backButton>
      <Flex
        minH={"100vh"}
        bgImage={["../assets/BG_MaximaD.svg", "../assets/BG_MaximaD.svg", "../assets/BG_MaximaD.svg", "../assets/BG_MaximaD.svg", "../assets/BG_MaximaD.svg"]}
        bgPosition={["center", "bottom", "bottom", "bottom"]}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box w={"full"} zIndex={"0"}>
          <Box display={["block", "block", "block", "none", "none"]} position={"absolute"} bottom={0}>
            {/* Image BG Mobile */}
          </Box>
          <Center>
            <Box
              p={["1em 2em", "3em 5em", "3em 3em", "3em 4em", "4em 5.5em"]}
              mt={["17.5vh", "17.5vh", "16vh", "17vh", "14vh"]}
              w={["85%", "85%", "85%", "55%", "55%"]}
              h={["77vh", "81vh", "77vh", "81vh", "83vh"]}
              bgColor={"white"}
              borderRadius={"xl"}
              boxShadow={"0px 3px 3px 3px rgb(0,0,0,0.25)"}
            >
              <Center w={"100%"} h={["100%"]}>
                <Box>
                  <Center mt={"0em"}>
                    <Img src={"../assets/aboutus/AboutUs_Malpun.svg"} w={["10em", "15em", "40vw", "15em", "18em"]}></Img>
                  </Center>
                  <Center display={["none", "block"]}>
                    <Stack direction={"column"} spacing={[5, 5, 7, 5, 8]}>
                      <Text fontSize={["md", "md", "2.3vh", "md", "xl"]} color={"#1B4173"} textAlign={"center"}>
                        <span style={{ fontWeight: "1000" }}>Malam Puncak </span> adalah acara penutup dari rangkaian kegiatan MAXIMA. Malam puncak MAXIMA juga menjadi ajang bagi organisator untuk semakin mengenalkan organisasi
                        masing-masing kepada mahasiswa lewat berbagai penampilan di atas panggung dan booth-booth yang tersedia.
                      </Text>
                      <Center>
                        <Text w={["50%", "80%", "70%", "60%", "50%"]} fontSize={["md", "md", "2.3vh", "md", "xl"]} color={"#1B4173"} textAlign={"center"}>
                          <span style={{ fontWeight: "1000" }}>Pelaksanaan Malam Puncak </span> <br /> akan dilakukan pada tanggal <br /> 7 Oktober 2023
                        </Text>
                      </Center>
                    </Stack>
                  </Center>
                  <Center display={["block", "none"]}>
                    <Stack direction={"column"} spacing={[4, 4, 7, 5, 8]}>
                      <Text fontSize={["15px", "15px", "2.3vh", "md", "xl"]} color={"#1B4173"} textAlign={"center"}>
                        <span style={{ fontWeight: "1000", fontSize: "17px" }}>Malam Puncak </span> <br /> merupakan kegiatan dimana mahasiswa baru dapat mendapatkan informasi dan mengeksplorasi UKM dan Media Kampus yang ada di UMN. Dari
                        kegiatan ini UKM dan Media Kampus dapat memperkenalkan UKM dan Media Kampus mereka kepada mahasiswa baru.
                      </Text>
                      <Center>
                        <Text w={["100%", "100%", "70%", "60%", "50%"]} fontSize={["15px", "15px", "2.3vh", "md", "xl"]} color={"#1B4173"} textAlign={"center"}>
                          <span style={{ fontWeight: "1000" }}>Pelaksanaan Malam Puncak </span> <br /> akan dilakukan pada tanggal <br /> 7 Oktober 2023
                        </Text>
                      </Center>
                    </Stack>
                  </Center>
                </Box>
              </Center>
            </Box>
          </Center>
        </Box>
      </Flex>
    </Layout>
  );
};

export default MalamPuncak;
