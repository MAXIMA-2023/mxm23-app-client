"use client";
import React from "react";
import Layout from "@/components/Layout";
import { Flex, Text, Box, Center, Button, Image } from "@chakra-ui/react";

export default function Testing() {
  return (
    <>
      <Layout>
        <Flex w={"full"} h={"auto"} minH={"100vh"} p={"1em"} justifyContent={"center"} alignItems={"center"} bgImage={"/Assets/MaximaBG_Desktop.svg"} bgPosition={"bottom"} bgSize={"cover"} bgRepeat={"no-repeat"}>
          <Box display={["none", "block"]} w={"100%"} h={["100vh", "100vh", "65vh"]}>
            <Box lineHeight={"5em"}>
              <Text fontSize={["3xl", "7xl"]} fontWeight={["extrabold", "bold"]} color={"white"} align={"center"}>
                SELAMAT DATANG,
              </Text>
              <Text fontSize={"5xl"} fontWeight={"bold"} color={"white"} align={"center"}>
                MAXIMERS!
              </Text>
            </Box>
            <Center>
              <Button
                position={"absolute"}
                bottom={"10vh"}
                w={["7em", "10em"]}
                h={"2.5em"}
                variant={"none"}
                fontSize={"xl"}
                bgColor={"#F7B70C"}
                boxShadow={"0px 4px 4px rgb(0,0,0,0.25)"}
                color={"#062D5F"}
                borderRadius={"full"}
                fontWeight={"black"}
              >
                START
              </Button>
            </Center>
          </Box>
          <Box display={["block", "none"]} w={"100%"} h={["80vh", "100vh", "65vh"]}>
            <Box mt={"5em"} mb={"1em"}>
              <Center>
                <Image boxSize={"5em"} p={"0.75em"} src={"./assets/MaximaLogo_Mobile.svg"} alt={"MAXIMA Logo"} bgColor={"white"} borderRadius={"full"} />
              </Center>
            </Box>
            <Box lineHeight={"3.5em"}>
              <Text fontSize={["4xl", "7xl"]} fontWeight={["extrabold", "bold"]} color={"white"} align={"center"}>
                Selamat Datang,
              </Text>
              <Text fontSize={"5xl"} fontWeight={"bold"} color={"white"} align={"center"}>
                MAXIMERS!
              </Text>
            </Box>
            <Center>
              <Button
                position={"absolute"}
                bottom={"10vh"}
                w={["7em", "10em"]}
                h={"2.5em"}
                variant={"none"}
                fontSize={"xl"}
                bgColor={"#F7B70C"}
                boxShadow={"0px 4px 4px rgb(0,0,0,0.25)"}
                color={"#062D5F"}
                borderRadius={"full"}
                fontWeight={"black"}
              >
                START
              </Button>
            </Center>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
