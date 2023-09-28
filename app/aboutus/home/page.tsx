"use client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

//importing local components
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Img } from "@chakra-ui/react";

const HoME: NextPage = () => {
  return (
    <Layout title={"MAXIMA 2023 - About Us (HoME)"} backButton showSponsorFooter sponsorFooterMarginTop={"4.5em"}>
      <Flex
        minH={"100vh"}
        bgImage={[
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_AboutUs_Mobile.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_AboutUs_Mobile.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_AboutUs_Mobile.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_AboutUs_Desktop.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_AboutUs_Desktop.webp",
        ]}
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
              p={["1em 2em", "3em 5em", "3em 3em", "3em 4em", "4em 5em"]}
              mt={["17.5vh", "17.5vh", "16vh", "17vh", "14vh"]}
              mb={"3em"}
              w={["85%", "85%", "85%", "55%", "55%"]}
              h={"auto"}
              minH={["77vh", "81vh", "77vh", "81vh", "83vh"]}
              bgColor={"white"}
              borderRadius={"xl"}
              boxShadow={"0px 3px 3px 3px rgb(0,0,0,0.25)"}
            >
              <Center w={"100%"} h={["100%"]}>
                <Box>
                  <Center mt={"0em"}>
                    <Img src={"https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/aboutus/AboutUs_Home.svg"} w={["12.5em", "10em", "20em", "20em", "auto"]}></Img>
                  </Center>
                  <Center display={["none", "block"]}>
                    <Text fontSize={["md", "md", "xl", "xl", "xl"]} color={"#1B4173"} textAlign={"center"}>
                      <Text as={"span"} fontWeight={"bold"}>
                        Hall of Maxima Exhibition (HoME){" "}
                      </Text>{" "}
                      merupakan kegiatan pertama yang membuka seluruh rangkaian MAXIMA berupa sebuah pameran perkenalan dari UKM, Organisasi, LSO, Media yang ada di Kampus Universitas Multimedia Nusantara. HoME bertujuan untuk menarik
                      perhatian mahasiswa baru agar memiliki gambaran dan pengetahuan tentang UKM/Organisasi/LSO/Media Kampus yang diminati.
                    </Text>
                  </Center>
                  <Center display={["block", "none"]}>
                    <Text fontSize={["md", "md", "lg", "xl", "2xl"]} color={"#1B4173"} textAlign={"center"}>
                      <Text as={"span"} fontWeight={"bold"}>
                        Hall of Maxima Exhibition (HoME){" "}
                      </Text>{" "}
                      merupakan kegiatan pertama yang membuka seluruh rangkaian MAXIMA berupa sebuah pameran perkenalan dari UKM, Organisasi, LSO, Media yang ada di Kampus Universitas Multimedia Nusantara. HoME bertujuan untuk menarik
                      perhatian mahasiswa baru agar memiliki gambaran dan pengetahuan tentang UKM/Organisasi/LSO/Media Kampus yang diminati.
                    </Text>
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

export default HoME;
