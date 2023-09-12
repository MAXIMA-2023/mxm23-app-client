"use client";
import Layout from "@/components/Layout";
import { Box, Flex, Center, Image, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Providers } from "./providers";

export default function NotFound() {
  return (
    <>
      <Providers>
        <Layout title={"MAXIMA 2023 - Not found :("} showLogoHeader showNavbar={false}>
          <Center w={"full"} h={"100vh"} position={"absolute"} top={"0"} bottom={"0"} left={"0"} right={"0"} justifyContent={"center"} alignItems={"center"}>
            <Box>
              <Center>
                <Text align={"center"} fontWeight={"bold"} fontSize={"9xl"}>
                  404
                </Text>
              </Center>
              <Center w={"full"}>
                <Text w={"75%"} align={"center"} fontWeight={"normal"} fontSize={["sm", "lg"]} color={"#6B6773"}>
                  Halaman yang kamu cari mungkin sudah dihapus, dipindahkan, atau bahkan tidak pernah ada, seperti dirimu dibenaknya 😢
                </Text>
              </Center>
              <Center w={"full"} mt={["1em", "0em"]}>
                <Button as={motion.a} href={"/"} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} mt={"1em"} colorScheme={"blue"} variant={"outline"}>
                  Kembali ke Beranda
                </Button>
              </Center>
            </Box>
          </Center>
        </Layout>
      </Providers>
    </>
  );
}
