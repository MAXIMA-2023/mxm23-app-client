"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Stack, Img, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, FormErrorMessage, InputRightElement, Icon, InputRightAddon, Select } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSession, signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { BiHide, BiShow } from "react-icons/bi";

type LoginData = {
  nim: number;
  password: string;
};

export default function Signup() {
  const [isSelanjutnya, setIsSelanjutnya] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  function handleSelanjutnya() {
    setIsSelanjutnya(true);
  }

  function handleKembali() {
    setIsSelanjutnya(false);
  }

  const router = useRouter();
  return (
    <>
      <Layout showNavbar={false} showLogoHeader showTitleFooter>
        <Flex
          display={["block", "block", "flex"]}
          w={"full"}
          h={"auto"}
          minH={"100vh"}
          p={["1em", "1em", "5em"]}
          my={["3em", "3em", "0em"]}
          justifyContent={"center"}
          alignItems={"center"}
          bgImage={["", "", "", "/Assets/signup/MaximaBG_Signup_Desktop.svg"]}
          bgPosition={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          <Box w={["full", "full", "35em"]} h={"auto"} px={["1em", "1em", "2.5em"]} py={["0", "1.5em"]} bgColor={"white"} borderRadius={"lg"} boxShadow={["none", "none", "-1.2px 5px 4px rgb(0,0,0,0.25)"]}>
            <Box>
              <Box>
                <Text fontSize={"3xl"} fontWeight={"bold"} color={"#1B4173"} align={"center"}>
                  Daftar Sekarang
                </Text>
              </Box>
              <Box>
                <Text fontSize={"md"} fontWeight={"medium"} color={"#1B4173"} align={"center"}>
                  Sudah punya akun?{" "}
                  <span
                    style={{ color: "#F7B70C", textDecoration: "underline", fontWeight: "bold", cursor: "pointer" }}
                    onClick={() => {
                      router.push("/signin");
                    }}
                  >
                    Masuk
                  </span>
                </Text>
              </Box>
            </Box>
            <Flex mt={"1.5em"}>
              <form style={{ width: "100%", height: "auto", minHeight: "25em", display: "flex", flexDirection: "column" }}>
                <FormControl mb={["2em", "2em", "1em"]}>
                  <Center w={"full"}>
                    <Stack w={"full"} spacing={"1em"}>
                      <Flex display={["block", "block", "flex"]} justifyContent={"space-between"} alignItems={"center"}>
                        <Box w={["full", "full", "55%"]} mr={["0em", "0em", "1em"]} mb={["1em", "1em", "0em"]}>
                          <FormLabel>
                            <Text fontSize={"sm"} fontWeight={"semibold"} color={"rgb(27,65,114,0.8)"}>
                              Nama Lengkap
                            </Text>
                          </FormLabel>
                          <InputGroup>
                            <Input type={"text"} border={"2px"} borderColor={"#E2E8F0"} borderRadius={"full"} />
                          </InputGroup>
                        </Box>
                        <Box w={["full", "full", "45%"]}>
                          <FormLabel>
                            <Text fontSize={"sm"} fontWeight={"semibold"} color={"rgb(27,65,114,0.8)"}>
                              NIM
                            </Text>
                          </FormLabel>
                          <InputGroup>
                            <InputLeftAddon rounded={"3xl"} bg={"#F7B70C"} textColor={"#FFFFFF"} fontWeight={"semibold"} fontSize={"sm"}>
                              000000
                            </InputLeftAddon>
                            <Input type={"text"} border={"2px"} borderColor={"#E2E8F0"} borderRadius={"full"} />
                          </InputGroup>
                        </Box>
                      </Flex>
                      <Flex display={["block", "block", "flex"]} justifyContent={"space-between"} alignItems={"center"}>
                        <Box w={"full"} mr={["0em", "0em", "1em"]} mb={["1em", "1em", "0em"]}>
                          <FormLabel>
                            <Text fontSize={"sm"} fontWeight={"semibold"} color={"rgb(27,65,114,0.8)"}>
                              Email Student
                            </Text>
                          </FormLabel>
                          <InputGroup>
                            <Input type={"text"} border={"2px"} borderColor={"#E2E8F0"} borderRadius={"full"} />
                            <InputRightAddon rounded={"3xl"} bg={"#F7B70C"} textColor={"#FFFFFF"} fontWeight={"semibold"} fontSize={"sm"}>
                              @student.umn.ac.id
                            </InputRightAddon>
                          </InputGroup>
                        </Box>
                        <Box>
                          <FormLabel>
                            <Text fontSize={"sm"} fontWeight={"semibold"} color={"rgb(27,65,114,0.8)"}>
                              Password
                            </Text>
                          </FormLabel>
                          <InputGroup>
                            <Input w={"full"} type={showPassword ? "text" : "password"} rounded={"full"} borderColor={"#E2E8F0"} borderWidth={"2px"} />
                            <InputRightElement py={"1.25em"} width="4.5rem">
                              <Button variant={"none"} onClick={handleShowPassword}>
                                {showPassword ? <Icon as={BiShow} boxSize={5} /> : <Icon as={BiHide} boxSize={5} />}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                        </Box>
                      </Flex>
                      <Stack w={"full"} spacing={"1em"}>
                        <Stack w={"full"} direction={["column", "column", "row"]} spacing={"1em"}>
                          <Box w={["full", "full", "85%"]}>
                            <FormLabel>
                              <Text fontSize={"sm"} fontWeight={"semibold"} color={"rgb(27,65,114,0.8)"}>
                                Program Studi
                              </Text>
                            </FormLabel>
                            <Select border={"2px"} borderColor={"#E2E8F0"} borderRadius={"full"} />
                          </Box>
                          <Box w={["full", "full", "45%"]}>
                            <FormLabel>
                              <Text fontSize={"sm"} fontWeight={"semibold"} color={"rgb(27,65,114,0.8)"}>
                                Angkatan
                              </Text>
                            </FormLabel>
                            <Select border={"2px"} borderColor={"#E2E8F0"} borderRadius={"full"} />
                          </Box>
                        </Stack>
                        <Stack w={"full"} direction={["column", "column", "row"]} spacing={"1em"}>
                          <Box w={["full", "full", "85%"]}>
                            <FormLabel>
                              <Text fontSize={"sm"} fontWeight={"semibold"} color={"rgb(27,65,114,0.8)"}>
                                Whatsapp
                              </Text>
                            </FormLabel>
                            <InputGroup>
                              <Input type={"text"} border={"2px"} borderColor={"#E2E8F0"} borderRadius={"full"} />
                            </InputGroup>
                          </Box>
                          <Box w={["full", "full", "45%"]}>
                            <FormLabel>
                              <Text fontSize={"sm"} fontWeight={"semibold"} color={"rgb(27,65,114,0.8)"}>
                                ID LINE
                              </Text>
                            </FormLabel>
                            <InputGroup>
                              <Input type={"text"} border={"2px"} borderColor={"#E2E8F0"} borderRadius={"full"} />
                            </InputGroup>
                          </Box>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Center>
                </FormControl>
                <Center w={"full"} h={"auto"} mt={"auto"}>
                  <Stack w={"full"} spacing={"1em"}>
                    <Center>
                      <Button w={["full", "full", "10em"]} py={"1.5em"} rounded={"full"} bg={"#F7B70C"} color={"#FFFFFF"} fontWeight={"bold"} _hover={{ bg: "#C89E30" }}>
                        DAFTAR
                      </Button>
                    </Center>
                  </Stack>
                </Center>
              </form>
            </Flex>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
