"use client";
import Link from "next/link";
import { Center, Box, Text, HStack, Flex, Input, Stack, Select, Button } from "@chakra-ui/react";

import { InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center w={"100%"} h={"100vh"} bgColor={"#D9D9D9"}>
      <Box w={"45em"} h={"auto"} boxShadow={"lg"}>
        <Box w={"full"} p={"3.5em"} py={"2em"} bg={"#FFFFFF"} rounded={"md"}>
          <Box w={"full"}>
            <Text align={"center"} color={"#1B4173"} fontSize={"3xl"} fontWeight={"bold"}>
              Daftar Sekarang
            </Text>
            <Flex justifyContent={"center"}>
              <HStack spacing={"2"}>
                <Text align={"center"} color={"#1B4173"} fontSize={"lg"} fontWeight={"medium"}>
                  Sudah punya akun?
                </Text>
                <Link href={"/signin"}>
                  <Text align={"center"} color={"#F7B70C"} fontSize={"lg"} fontWeight={"bold"} textDecoration={"underline"} _hover={{ cursor: "pointer", textColor: "#DFB031" }}>
                    Masuk
                  </Text>
                </Link>
              </HStack>
            </Flex>
            <Stack my={"1.5em"} direction={"column"} spacing={"1.25em"}>
              <Box>
                <Text align={"left"} color={"#1B4173"} fontSize={"lg"} fontWeight={"semibold"} opacity={"0.9"}>
                  Nama Lengkap
                </Text>
                <Input w={"full"} justifyContent={"center"} variant={"outline"} placeholder={""} size={"md"} rounded={"3xl"} borderColor={"#E2E8F0"} borderWidth={"2px"} focusBorderColor={"#F7B70C"} />
              </Box>
              <Flex w={"full"}>
                <Box w={"35%"} mr={"1em"}>
                  <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"}>
                    NIM
                  </Text>
                  <InputGroup w={"full"}>
                    <InputLeftAddon children={"000000"} rounded={"3xl"} bg={"#F7B70C"} textColor={"#FFFFFF"} />
                    <Input w={"full"} type={"tel"} placeholder={""} rounded={"3xl"} borderColor={"#E2E8F0"} borderWidth={"2px"} focusBorderColor={"#F7B70C"} />
                  </InputGroup>
                </Box>
                <Box w={"65%"}>
                  <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"}>
                    Email Student
                  </Text>
                  <InputGroup w={"full"}>
                    <Input w={"full"} type={"tel"} placeholder={""} rounded={"3xl"} borderColor={"#E2E8F0"} borderWidth={"2px"} focusBorderColor={"#F7B70C"} />
                    <InputRightAddon children={"@student.umn.ac.id"} rounded={"3xl"} bg={"#F7B70C"} textColor={"#FFFFFF"} />
                  </InputGroup>
                </Box>
              </Flex>
              <Flex w={"full"} justifyContent={"space-between"}>
                <Box w={"full"} mr={"1em"}>
                  <Text align={"left"} color={"#1B4173"} fontSize={"lg"} fontWeight={"semibold"} opacity={"0.9"}>
                    Program Studi
                  </Text>
                  <Select w={"full"} variant={"outline"} placeholder={"Studi Jurusan"} rounded={"3xl"} borderColor={"#E2E8F0"} borderWidth={"2px"} focusBorderColor={"#F7B70C"}>
                    <option value="">IF</option>
                    <option value="">SI</option>
                    <option value="">SC</option>
                  </Select>
                </Box>
                <Box w={"full"}>
                  <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"}>
                    Angkatan
                  </Text>
                  <Select w={"full"} variant={"outline"} placeholder={"Angkatan"} rounded={"3xl"} borderColor={"#E2E8F0"} borderWidth={"2px"} focusBorderColor={"#F7B70C"}>
                    <option value="">2021</option>
                    <option value="">2022</option>
                    <option value="">2023</option>
                  </Select>
                </Box>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Box w={"full"} mr={"1em"}>
                  <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"}>
                    Whatsapp
                  </Text>
                  <InputGroup w={"full"}>
                    <Input w={"full"} type={"tel"} placeholder={"No. WhatsApp"} rounded={"3xl"} borderColor={"#E2E8F0"} borderWidth={"2px"} focusBorderColor={"#F7B70C"} />
                  </InputGroup>
                </Box>
                <Box w={"full"}>
                  <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"}>
                    ID Line
                  </Text>
                  <InputGroup w={"full"}>
                    <Input type="tel" placeholder={"ID Line"} rounded={"3xl"} borderColor={"#E2E8F0"} borderWidth={"2px"} focusBorderColor={"#F7B70C"} />
                  </InputGroup>
                </Box>
              </Flex>
            </Stack>
            <Box mt={"2.5em"} textAlign={"center"}>
              <Button w={"8.5em"} rounded={"full"} bgColor={"#F7B70C"} size={"lg"} textColor={"#FFFFFF"} _hover={{ bgColor: "#DFB031" }}>
                DAFTAR
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
