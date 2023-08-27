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
    <Layout title={"MAXIMA 2023 - About Us (HoME)"} backButton>
      <Flex
        minH={"100vh"}
        bgImage={["../assets/MaximaBG_AboutUs_Mobile.svg", "../assets/MaximaBG_AboutUs_Mobile.svg", "../assets/MaximaBG_AboutUs_Mobile.svg", "../assets/MaximaBG_AboutUs_Desktop.svg", "../assets/MaximaBG_AboutUs_Desktop.svg"]}
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
                    <Img src={"../assets/aboutus/AboutUs_Home.svg"} w={["12.5em", "10em", "20em", "20em", "auto"]}></Img>
                  </Center>
                  <Center display={["none", "block"]}>
                    <Text fontSize={["md", "md", "xl", "xl", "2xl"]} color={"#1B4173"} textAlign={"center"}>
                      <span style={{ fontWeight: "1000" }}>Hall of Maxima Exhibition (HoME) </span> merupakan pameran UKM, komunitas dan media kampus yang ada di Universitas Multimedia Nusantara. HoME bertujuan untuk memperkenalkan dan
                      menginformasikan garis besar kegiatan serta visi misi setiap organisasi.
                    </Text>
                  </Center>
                  <Center display={["block", "none"]}>
                    <Text fontSize={["md", "md", "lg", "xl", "2xl"]} color={"#1B4173"} textAlign={"center"}>
                      <span style={{ fontWeight: "1000", fontSize: "17px" }}>Hall of Maxima Exhibition (HoME) </span> <br /> merupakan pameran UKM, komunitas dan media kampus yang ada di Universitas Multimedia Nusantara. <br /> <br /> HoME
                      bertujuan untuk memperkenalkan dan menginformasikan garis besar kegiatan serta visi misi setiap organisasi.
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
