"use client";
import Layout from "@/components/Layout";
import { Center, Box, Text, HStack, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack } from "@chakra-ui/react";

export default function Profile({ params }: { params: { nim: number } }) {
  return (
    <Layout>
      <Center w={"full"} h={"100vh"}>
        <Center w={"full"} h={"100vh"} mt={"12.5em"} bgImage={"/assets/profile/MaximaBG_Profile_Desktop.svg"} bgPosition={"bottom"} bgSize={"cover"} bgRepeat={"no-repeat"}>
          <Flex display={["block", "block", "block", "flex"]} justifyContent={"center"} alignItems={"center"} w={"full"} h={"35em"}>
            <Box w={"25em"} h={"full"} boxShadow={"lg"} bgColor={"white"} rounded={"md"} mr={10}>
              <Box w={"full"} p={"2em"} rounded={"md"}>
                <Box bgColor={"#C4C4C4"} width={"100%"} height={"18.5em"} rounded={"md"}></Box>
              </Box>
            </Box>
            <Box w={"40em"} h={"full"} bgColor={"white"} boxShadow={"lg"} p={"3em"} rounded={"md"}>
              <Box w={"full"} mb={"2em"}>
                <Text align={"left"} color={"1B4173"} fontSize={"xl"} fontWeight={"normal"}>
                  Hai,
                </Text>
                <Text align={"left"} color={"#1B4173"} fontSize={"4xl"} fontWeight={"extrabold"}>
                  Nama Lengkap
                </Text>
              </Box>
              <Stack direction={"column"} spacing={"1em"}>
                <Box>
                  <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"}>
                    Email Student
                  </Text>
                  <InputGroup w={"full"} rounded={"2xl"}>
                    <Input type={"email"} rounded={"3xl"} />
                    <InputRightAddon rounded={"3xl"} bg={"#F7B70C"} textColor={"#FFFFFF"}>
                      @student.umn.ac.id
                    </InputRightAddon>
                  </InputGroup>
                </Box>
                <Box>
                  <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"}>
                    NIM
                  </Text>
                  <InputGroup w={"full"} rounded={"2xl"}>
                    <InputLeftAddon rounded={"3xl"} bg="#F7B70C" textColor={"#FFFFFF"}>
                      000000
                    </InputLeftAddon>
                    <Input type={"text"} rounded={"3xl"} />
                  </InputGroup>
                </Box>
                <Stack direction={"row"} spacing={"1em"}>
                  <Box w={"full"}>
                    <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"} mb={"5px"}>
                      Program Studi
                    </Text>
                    <InputGroup w={"full"} rounded={"2xl"}>
                      <Input type={"text"} rounded={"3xl"} />
                    </InputGroup>
                  </Box>

                  <Box w={"full"}>
                    <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"} mb={"5px"}>
                      Angkatan
                    </Text>
                    <InputGroup w={"full"} rounded={"2xl"}>
                      <Input type={"text"} rounded={"3xl"} />
                    </InputGroup>
                  </Box>
                </Stack>
                <Stack direction={"row"} spacing={"1em"}>
                  <Box w={"full"}>
                    <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"} mb={"5px"}>
                      Whatsapp
                    </Text>
                    <InputGroup w={"full"} rounded={"2xl"}>
                      <Input type="tel" rounded={"3xl"} />
                    </InputGroup>
                  </Box>
                  <Box w={"full"}>
                    <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"} mb={"5px"}>
                      ID Line
                    </Text>
                    <InputGroup w={"full"} rounded={"2xl"}>
                      <Input type={"text"} rounded={"3xl"} />
                    </InputGroup>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </Center>
    </Layout>
  );
}
