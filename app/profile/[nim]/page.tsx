"use client";
import {
  Center,
  Box,
  Text,
  HStack,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";

export default function Profile({ params }: { params: { nim: number } }) {
  return (
    <Center w={"100%"} h={"100vh"}>
      <Flex>
        <Box
          w={"25em"}
          h={"77vh"}
          boxShadow={"lg"}
          bg={"whiteAlpha.100"}
          rounded={"md"}
          mr={10}
        >
          <Box w={"full"} p={"2em"} rounded={"md"}>
            <Box
              bg={"blackAlpha.100"}
              width={"100%"}
              height={"35vh"}
              rounded={"md"}
            ></Box>
          </Box>
        </Box>

        <Box w={"50em"} h={"auto"} boxShadow={"lg"}>
          <Box w={"full"} py={"1.5em"} px="3em" rounded={"md"}>
            <Text
              align={"left"}
              color={"1B4173"}
              fontSize={"xl"}
              fontWeight={"normal"}
            >
              Hai,
            </Text>
            <Text
              align={"left"}
              color={"#1B4173"}
              fontSize={"4xl"}
              fontWeight={"extrabold"}
            >
              Nama Lengkap
            </Text>
          </Box>

          <Box px="3em" mb="15px">
            <Text
              align={"left"}
              color={"#1B4173"}
              fontSize={"md"}
              fontWeight={"semibold"}
              opacity={"0.9"}
              mb={"5px"}
            >
              Email Student
            </Text>
            <InputGroup w={"70%"} rounded={"2xl"}>
              <Input type="tel" placeholder="phone number" rounded={"3xl"} />
              <InputRightAddon
                children="@student.umn.ac.id"
                rounded={"3xl"}
                bg={"#F7B70C"}
                textColor={"#FFFFFF"}
              />
            </InputGroup>
          </Box>

          <Box px="3em" mb="15px">
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
            <InputGroup w={"50%"} rounded={"2xl"}>
              <InputLeftAddon
                children="000000"
                rounded={"3xl"}
                bg="#F7B70C"
                textColor={"#FFFFFF"}
              />
              <Input type="tel" placeholder="phone number" rounded={"3xl"} />
            </InputGroup>
          </Box>

          <Box px="3em" mb="15px">
            <Text
              align={"left"}
              color={"#1B4173"}
              fontSize={"md"}
              fontWeight={"semibold"}
              opacity={"0.9"}
              mb={"5px"}
            >
              Program Studi
            </Text>
            <Select
              variant="outline"
              placeholder="Studi Jurusan"
              w="50%"
              rounded="3xl"
            >
              <option value="">IF</option>
              <option value="">SI</option>
              <option value="">SC</option>
            </Select>
          </Box>

          <Box px="3em" mb="15px">
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
              variant="outline"
              placeholder="Angkatan"
              w="50%"
              rounded="3xl"
            >
              <option value="">2021</option>
              <option value="">2021</option>
              <option value="">2021</option>
              <option value="">2021</option>
              <option value="">2021</option>
              <option value="">2021</option>
            </Select>
          </Box>

          <Box px="3em" mb="15px">
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
            <InputGroup w={"50%"} rounded={"2xl"}>
              <Input type="tel" placeholder="Whatsapp" rounded={"3xl"} />
            </InputGroup>
          </Box>

          <Box px="3em" mb="15px">
            <Text
              align={"left"}
              color={"#1B4173"}
              fontSize={"md"}
              fontWeight={"semibold"}
              opacity={"0.9"}
              mb={"5px"}
            >
              ID Line
            </Text>
            <InputGroup w={"50%"} rounded={"2xl"}>
              <Input type="tel" placeholder="ID Line" rounded={"3xl"} />
            </InputGroup>
          </Box>
        </Box>
      </Flex>
    </Center>
  );
}
