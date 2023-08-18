"use client"

import Link from "next/link";

//importing local components
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img, HStack } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";


const STATE = () => {
	const Header = () => {
    return (
      <Box>  
        <Box display={["block","block", "none"]} mt={10}>
          <Box mr={"3.5em"} mt={10}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: 'spring', 
                  bounce: 0.5 }}
                exit={{ scale: 0 }}
            >
              <Text color={"#D01E20"} align={"end"} fontSize={["6xl", "5xl", "9vh", "7xl", "8xl"]} fontWeight={"bold"} textShadow={"0px 0px 8px white"}>
                  STATE
              </Text>
              <Text mt={"-0.3em"} color={"#D01E20"} align={"end"} fontSize={["6xl", "5xl", "6vh", "5xl", "7xl"]}  fontWeight={"bold"} textShadow={"0px 0px 8px white"}>
                  MAXIMA 2023
              </Text>
            </motion.div>
            <Text mt={{base:"1em", lg:"0vh"}} ps={["2.5em", "20em", "40vw", "55vw", "61vw"]} color={"#D01E20"} align={"end"} fontSize={["16px", "16px", "2.5vh", "16px", "20px"]} fontWeight={"bold"} textShadow={"0px 2px 4px 0px rgb(0,0,0,0.25)"}>
              Selamat datang di STATE MAXIMA 2023!
              Di sini kamu dapat memilih UKM yang ingin kamu ketahui!
            </Text>
            <Flex mt={"2em"} justifyContent={"end"} alignItems={"center"}>
                  <Link legacyBehavior href={"/state/pilihstate"}>
                    <a>
                      <Button style={{ border: "5px  solid rgb(210, 223, 165, 47%)", borderRadius: "20px"}} w={["18em", "18em", "14em", "18em", "18em",]} size={["sm", "sm", "lg", "sm", "md"]} bgColor={"#FF6835"} shadow={"0px 2.5px 4px 0px rgb(0,0,0,0.2)"}>
                        <Text display={["none", "none", "none", "block", "block"]} color={["white"]}  fontWeight={["black","bold"]}>
                          Pilih UKM & Komunitas
                        </Text>
                        <Text display={["block", "block", "block", "none", "none"]}color={["white"]}  fontWeight={["black","bold"]}>
                          PILIH SEKARANG!
                        </Text>
                      </Button>
                    </a>
                  </Link>
                </Flex>
          </Box>
        </Box>
        <Box display={["none","none", "block"]} mt={{base:"22vh", lg:"0vh"}} me={["8em","8em","6em","7em","8em"]}>
          <Box>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: 'spring', 
                  bounce: 0.5 }}
                exit={{ scale: 0 }}
            >
              <Text color={"#D01E20"} align={"end"} fontSize={["6xl", "5xl", "9vh", "7xl", "8xl"]} fontWeight={"bold"} textShadow={"0px 0px 8px white"}>
                  STATE
              </Text>
              <Text mt={"-0.3em"} color={"#D01E20"} align={"end"} fontSize={["6xl", "5xl", "6vh", "5xl", "7xl"]}  fontWeight={"bold"} textShadow={"0px 0px 8px white"}>
                  MAXIMA 2023
              </Text>
            </motion.div>
            <Box>
              <Text mt={{base:"1em", lg:"0vh"}} ps={["0em", "20em", "40vw", "55vw", "61vw"]} color={"#D01E20"} align={"end"} fontSize={["16px", "16px", "2.5vh", "16px", "20px"]} fontWeight={"bold"} textShadow={"0px 2px 4px 0px rgb(0,0,0,0.25)"}>
                Selamat datang di STATE MAXIMA 2023! <br />
                Di sini kamu dapat memilih UKM <br /> 
                yang ingin kamu ketahui!
              </Text>
                <Flex mt={"2.5em"} justifyContent={"end"} alignItems={"center"}>
                  <Link legacyBehavior href={"/state/pilihstate"}>
                    <a>
                      <Button style={{ border: "5px  solid rgb(210, 223, 165, 47%)", borderRadius: "20px"}} w={["18em", "18em", "14em", "18em", "18em",]} size={["sm", "sm", "lg", "sm", "md"]} bgColor={"#FF6835"} boxShadow={"0 2.5px 4px 0px rgb(0,0,0,0.25)"}>
                        <Text display={["none", "none", "none", "block", "block"]} color={["white"]}  fontWeight={["black","bold"]}>
                          Pilih UKM & Komunitas
                        </Text>
                        <Text display={["block", "block", "block", "none", "none"]}color={["white"]}  fontWeight={["black","bold"]}>
                          PILIH SEKARANG!
                        </Text>
                      </Button>
                    </a>
                  </Link>
                </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Layout>
      <Flex>
        <Box w={"full"} mt={"20vh"}>
          <Header />
        </Box>
      </Flex>
    </Layout>
	);
};

export default STATE;