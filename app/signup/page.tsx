"use client";
import {
  Center,
  Box,
  Text,
  HStack,
  Flex,
  Input,
  Stack,
  Select,
  Button,
} from "@chakra-ui/react";

import { InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center w={"100%"} h={"100vh"} bgColor={"#D9D9D9"}>
      <Box w={"45em"} h={"auto"} boxShadow={"lg"}>
        <Box w={"full"} pt={"1.5em"} pb={"1em"} bg={"#FFFFFF"} rounded={"md"}>
          <Box w={"full"}>
            <Text
              align={"center"}
              color={"#1B4173"}
              fontSize={"3xl"}
              fontWeight={"bold"}
            >
              Daftar Sekarang
            </Text>
            <Flex justifyContent={"center"}>
              <HStack spacing={"2"}>
                <Text
                  align={"center"}
                  color={"#1B4173"}
                  fontSize={"lg"}
                  fontWeight={"medium"}
                >
                  Sudah punya akun?
                </Text>
                <Text
                  align={"center"}
                  color={"#F7B70C"}
                  fontSize={"lg"}
                  fontWeight={"bold"}
                  textDecor={"underline"}
                >
                  Masuk
                </Text>
              </HStack>
            </Flex>
            <Text
              align={"left"}
              color={"#1B4173"}
              fontSize={"lg"}
              fontWeight={"semibold"}
              pl={"3.5em"}
              pt={"1em"}
              opacity={"0.9"}
            >
              Nama Lengkap
            </Text>
            <Input
              justifyContent={"center"}
              variant="outline"
              placeholder=""
              size="md"
              mt="0.5em"
              ml="3.5em"
              rounded="3xl"
              borderColor="#E2E8F0"
              borderWidth="2px"
              focusBorderColor="#F7B70C"
              w={"86%"}
            />

            <Flex px="3.5em" mt="10px">
              <Box mb="15px">
                <Text
                  align={"left"}
                  color={"#1B4173"}
                  fontSize={"md"}
                  fontWeight={"semibold"}
                  opacity={"0.9"}
                  mb={"5px"}
                >
                  NIM
                </Text>
                <InputGroup w={"100%"} rounded={"2xl"}>
                  <InputLeftAddon
                    children="000000"
                    rounded={"3xl"}
                    bg="#F7B70C"
                    textColor={"#FFFFFF"}
                  />
                  <Input
                    type="tel"
                    placeholder="phone number"
                    rounded={"3xl"}
                  />
                </InputGroup>
              </Box>

              <Box pl="3em" mb="15px">
                <Text
                  align={"left"}
                  color={"#1B4173"}
                  fontSize={"md"}
                  fontWeight={"semibold"}
                  opacity={"0.9"}
                  mb={"5px"}
                  ml={"1em"}
                >
                  Email Student
                </Text>
                <InputGroup ml={"1em"} rounded={"2xl"}>
                  <Input
                    type="tel"
                    placeholder="phone number"
                    rounded={"3xl"}
                    w="120%"
                  />
                  <InputRightAddon
                    children="@student.umn.ac.id"
                    rounded={"3xl"}
                    bg={"#F7B70C"}
                    textColor={"#FFFFFF"}
                  />
                </InputGroup>
              </Box>
            </Flex>

            <Flex mt={"10px"} px="3.5em" justifyContent={"space-between"}>
              <Box mb="15px">
                <Text
                  align={"left"}
                  color={"#1B4173"}
                  fontSize={"lg"}
                  fontWeight={"semibold"}
                  opacity={"0.9"}
                  mb={"5px"}
                >
                  Program Studi
                </Text>
                <Select
                  variant="outline"
                  placeholder="Studi Jurusan"
                  w="125%"
                  rounded="3xl"
                >
                  <option value="">IF</option>
                  <option value="">SI</option>
                  <option value="">SC</option>
                </Select>
              </Box>

              <Box mb="15px" mr={"12em"}>
                <Text
                  align={"left"}
                  color={"#1B4173"}
                  fontSize={"md"}
                  fontWeight={"semibold"}
                  opacity={"0.9"}
                  mb={"5px"}
                >
                  Angkatan
                </Text>
                <Select
                  mr={"-1em"}
                  variant="outline"
                  placeholder="Angkatan"
                  rounded="3xl"
                  w="285%"
                >
                  <option value="">2021</option>
                  <option value="">2022</option>
                  <option value="">2023</option>
                </Select>
              </Box>
            </Flex>

            <Flex px="3.5em" justifyContent={"space-between"}>
              <Box mb="15px">
                <Text
                  align={"left"}
                  color={"#1B4173"}
                  fontSize={"md"}
                  fontWeight={"semibold"}
                  opacity={"0.9"}
                  mb={"5px"}
                >
                  Whatsapp
                </Text>
                <InputGroup w={"108%"} rounded={"2xl"}>
                  <Input type="tel" placeholder="Whatsapp" rounded={"3xl"} />
                </InputGroup>
              </Box>

              <Box pl="3em" mb="15px" mr={"5.5em"}>
                <Text
                  align={"left"}
                  color={"#1B4173"}
                  fontSize={"md"}
                  fontWeight={"semibold"}
                  opacity={"0.9"}
                  mb={"5px"}
                  ml="2em"
                >
                  ID Line
                </Text>
                <InputGroup w={"125%"} ml="2.5em" rounded={"2xl"}>
                  <Input type="tel" placeholder="ID Line" rounded={"3xl"} />
                </InputGroup>
              </Box>
            </Flex>
            <Box textAlign={"center"}>
              <Button
                rounded={"full"}
                bg={"#F7B70C"}
                size="md"
                textColor={"#FFFFFF"}
              >
                DAFTAR
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
