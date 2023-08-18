"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Stack, Image, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, FormErrorMessage, InputRightElement, Icon } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSession, signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { BiHide, BiShow } from "react-icons/bi";

type LoginData = {
  nim: number;
  password: string;
};

export default function Signin() {
  const router = useRouter();
  return (
    <>
      <Layout showNavbar={false} showLogoHeader showTitleFooter>
        <Center display={["block", "block", "flex"]} w={"full"} h={["auto", "auto", "100vh"]} py={["0em", "2em", "27.5em", "0em"]} mt={["2em", "0em"]} mb={["5em", "0em"]}>
          <Stack w={["full", "full", "80%"]} h={"auto"} direction={"row"} spacing={"3em"}>
            <Center display={["none", "none", "none", "flex"]} w={"65%"}>
              <Image src={"./assets/signin/MaximaBG_Signin_Desktop.svg"} alt={"MAXIMA Logo"} />
            </Center>
            <Box
              w={["full", "full", "full", "35%"]}
              h={"auto"}
              p={["2em", "2em", "2.5em"]}
              bgColor={"white"}
              boxShadow={["none", "none", "0px 4px 4px rgb(0,0,0,0.25)"]}
              border={["none", "none", "1px"]}
              borderColor={["none", "none", "rgb(27,65,115,0.25)"]}
              borderRadius={"lg"}
            >
              <Box mb={"2em"}>
                <Box>
                  <Text fontSize={"3xl"} fontWeight={"bold"} color={"#1B4173"} align={"center"}>
                    Masuk
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={"md"} fontWeight={"medium"} color={"#1B4173"} align={"center"}>
                    Belum punya akun?{" "}
                    <Link href={"/signup"}>
                      <span style={{ color: "#F7B70C", textDecoration: "underline", fontWeight: "bold", cursor: "pointer" }}>Daftar</span>
                    </Link>
                  </Text>
                </Box>
                <Center display={["flex", "flex", "flex", "none"]} w={"full"} my={"2em"}>
                  <Image w={"full"} h={"10em"} src={""} bgColor={"grey"} />
                </Center>
              </Box>
              <form>
                <FormControl>
                  <Stack direction={"column"} spacing={"1.5em"}>
                    <Box>
                      <FormLabel>
                        <Text fontSize={"sm"} fontWeight={"semibold"} color={"rgb(27,65,114,0.8)"}>
                          NIM
                        </Text>
                      </FormLabel>
                      <InputGroup>
                        <InputLeftAddon py={"1.5em"} rounded={"3xl"} bg={"#F7B70C"} textColor={"#FFFFFF"} fontWeight={"semibold"} fontSize={"sm"}>
                          000000
                        </InputLeftAddon>
                        <Input py={"1.25em"} type={"text"} border={"2px"} borderColor={"#E2E8F0"} borderRadius={"full"} />
                      </InputGroup>
                    </Box>
                    <Box>
                      <FormLabel>
                        <Text fontSize={"sm"} fontWeight={"semibold"} color={"rgb(27,65,114,0.8)"}>
                          Password
                        </Text>
                      </FormLabel>
                      <InputGroup>
                        <Input type={"text"} py={"1.25em"} border={"2px"} borderColor={"#E2E8F0"} borderRadius={"full"} />
                      </InputGroup>
                      <Text mt={"0.5em"} fontSize={"sm"} fontWeight={"semibold"} color={"rgb(27,65,114,0.8)"}>
                        Lupa kata sandimu?{" "}
                        <Link href={"/forgot-password"}>
                          <span style={{ color: "#F7B70C", textDecoration: "underline", fontWeight: "bold", cursor: "pointer" }}>Klik disini</span>
                        </Link>
                      </Text>
                    </Box>
                  </Stack>
                </FormControl>
                <Center mt={"2em"}>
                  <Button w={["full", "full", "10em"]} py={"1.5em"} rounded={"full"} bg={"#F7B70C"} color={"#FFFFFF"} fontWeight={"bold"} _hover={{ bg: "#C89E30" }}>
                    MASUK
                  </Button>
                </Center>
              </form>
            </Box>
          </Stack>
        </Center>
      </Layout>
    </>
  );
}
