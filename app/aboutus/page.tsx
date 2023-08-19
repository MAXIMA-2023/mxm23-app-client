"use client";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

//importing local components
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Img, Container, useMediaQuery } from "@chakra-ui/react";

const AboutUs: NextPage = () => {
  const [isSmallerThan320] = useMediaQuery("(max-width: 320px)");
  const LinkButton = () => {
    const linkData = [
      {
        name: "HoME (Hall of Maxima Exhibition) ",
        link: "aboutus/home",
      },
      {
        name: "STATE (Student Activities Unit Explore)",
        link: "aboutus/state",
      },
      {
        name: "Malam Puncak",
        link: "aboutus/malampuncak",
      },
    ];

    return (
      <Box mt={["1.5em", "1.5em", "2vh", "0.2em", "0.8em"]}>
        <Container maxW="full">
          {linkData.map((item, index) => {
            return (
              <Center key={index}>
                <Link href={item.link}>
                  <Button
                    w={["full", "auto"]}
                    my={["0.7em", "0.7em", "0.7em", "0.7em", "0.7em"]}
                    p={["0 1.5em", "0 1.5em", "2vh 1.5em", "0 1.5em", "0 1.5em"]}
                    size={["xs", "sm"]}
                    bgColor={"#FF6835"}
                    color={"white"}
                    borderRadius={"full"}
                    boxShadow={"0px 2px 2px 2px rgb(0,0,0,0.25)"}
                    zIndex={"1"}
                  >
                    <Text fontSize={["xs", "sm", "2.2vh", "sm", "lg"]}>{item.name}</Text>
                  </Button>
                </Link>
              </Center>
            );
          })}
        </Container>
      </Box>
    );
  };

  

  return (
    <Layout>
      <Flex
        minH={"100vh"}
        bgImage={["/Assets/BG_MaximaD.svg", "/Assets/BG_MaximaD.svg", "/Assets/BG_MaximaD.svg", "/Assets/BG_MaximaD.svg", "/Assets/BG_MaximaD.svg"]}
        bgPosition={["center"]}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box w={"full"} zIndex={"0"}>
          <Box display={isSmallerThan320 ? "none" : ["block", "none", "none", "none", "none"]} mb={["30.35rem", "45.35rem", "", "30.35rem", "30.35rem"]} position={"absolute"} bottom={0}>
            {/* image BG mobile */}
          </Box>
          <Center>
            <Box
              p={["1em 0.5em", "1em 0.5em", "1.5em 3em", "1em 3em", "4em 4em"]}
              mt={["17.5vh", "17.5vh", "16vh", "17vh", "14vh"]}
              mb={["0", "3em", "0"]}
              w={["85%", "85%", "85%", "55%", "55%"]}
              h={["77vh", "auto", "76vh", "81vh", "83vh"]}
              bgColor={"white"}
              borderRadius={"xl"}
              boxShadow={"0px 3px 3px 3px rgb(0,0,0,0.25)"}
            >
              <Center w={"100%"} h={["100%"]}>
                <Box>
                  <Center mt={["1em", "1em", "0em", "1em", "1em"]}>
                    <Img src={"/Assets/aboutus/AboutUs.svg"} w={["12.5em", "15em", "42vw", "20em", "27em"]}></Img>
                  </Center>
                  <Center display={["none", "block"]}>
                    <Text fontSize={["md", "lg", "2.5vh", "17.5px", "xl"]} color={"#1B4173"} textAlign={"center"}>
                      <span style={{ fontWeight: "1000" }}>MAXIMA 2023 </span>
                      adalah kegiatan yang diselenggarakan bagi mahasiswa baru dengan tujuan untuk memperkenalkan kegiatan non-akademik yang ada di UMN. <br />
                      <br />
                      Perkenalan ini akan dilaksanakan melalui 3 rangkaian acara yaitu:
                    </Text>
                  </Center>
                  <Center display={["block", "none"]}>
                    <Text fontSize={["md", "md", "lg", "xl", "2xl"]} color={"#1B4173"} textAlign={"center"}>
                      <span style={{ fontWeight: "1000", fontSize: "20px" }}>MAXIMA 2023 </span>
                      <br />
                      adalah kegiatan yang diselenggarakan bagi mahasiswa baru dengan tujuan untuk memperkenalkan kegiatan non-akademik yang ada di UMN. <br />
                      <br />
                      Perkenalan ini akan dilaksanakan melalui 3 rangkaian acara yaitu:
                    </Text>
                  </Center>
                  <Center>
                    <LinkButton />
                  </Center>
                </Box>
              </Center>
            </Box>
          </Center>
        </Box>
      </Flex>
      <BackButton />
    </Layout>
  );
};

export default AboutUs;