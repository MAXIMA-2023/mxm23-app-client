"use client";
import React from "react";
import Layout from "@/components/Layout";
import { Flex, Text, Box, Center, Button, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function App() {
  return (
    <>
      <Layout title={"MAXIMA 2023 - Selamat Datang"}>
        <Flex
          w={"full"}
          h={"auto"}
          minH={"100vh"}
          p={"1em"}
          justifyContent={"center"}
          alignItems={"center"}
          bgImage={[
            "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_Mobile.webp",
            "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_Desktop.webp",
            "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_Mobile.webp",
            "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_Desktop.webp",
          ]}
          bgPosition={"bottom"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          <Box w={"100%"} h={["80vh", "100vh", "65vh"]}>
            <Box display={["block", "none"]} mt={"5em"} mb={"1em"}>
              <Center>
                <Box
                  as={motion.div}
                  boxShadow={"2px 4px 4px rgb(0,0,0,0.25)"}
                  p={"1em"}
                  rounded={"full"}
                  bgColor={"white"}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.5, type: "spring" },
                  }}
                >
                  <Image
                    boxSize={"5em"}
                    src={
                      "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaLogo_Mobile.webp"
                    }
                    objectFit={"contain"}
                    alt={"MAXIMA Logo"}
                    // bgColor={"white"}
                  />
                </Box>
              </Center>
            </Box>
            <Box
              mt={["0em", "5em", "0em"]}
              lineHeight={["3.5em", "3.5em", "5em"]}
            >
              <Text
                as={motion.div}
                fontSize={["4xl", "4xl", "7xl"]}
                fontWeight={["extrabold", "bold"]}
                color={"white"}
                align={"center"}
                textTransform={["none", "none", "uppercase"]}
                textShadow={[
                  "3px 4px 4px rgb(0,0,0,0.25)",
                  "3px 4px 4px rgb(0,0,0,0.25)",
                  "0px 4px 4px rgb(0,0,0,0.25)",
                ]}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 1, type: "spring" },
                }}
              >
                Selamat Datang,
              </Text>
              <Text
                as={motion.div}
                fontSize={"5xl"}
                fontWeight={"bold"}
                color={"white"}
                align={"center"}
                textShadow={[
                  "3px 4px 4px rgb(0,0,0,0.25)",
                  "3px 4px 4px rgb(0,0,0,0.25)",
                  "0px 4px 4px rgb(0,0,0,0.25)",
                ]}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 1.3, type: "spring" },
                }}
              >
                MAXIMERS!
              </Text>
            </Box>
            <Center>
              <Button
                as={motion.div}
                position={"absolute"}
                bottom={"10vh"}
                w={["7em", "7em", "10em"]}
                h={"2.5em"}
                variant={"none"}
                fontSize={"xl"}
                bgColor={"#F7B70C"}
                boxShadow={"0px 4px 4px rgb(0,0,0,0.25)"}
                color={"#062D5F"}
                borderRadius={"full"}
                fontWeight={"black"}
                _hover={{ bgColor: "#C89E30", cursor: "pointer" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 1.6, type: "spring" },
                }}
              >
                <Link href={"/home"}>START</Link>
              </Button>
            </Center>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
