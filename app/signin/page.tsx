"use client";
import { Center, Box, Text, HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center w={"100%"} h={"100vh"}>
      <Box w={"25em"} h={"auto"} boxShadow={"lg"}>
        <Box w={"full"} p={"2em"} bg={"RGBA(0, 0, 0, 0.92)"} rounded={"md"}>
          <HStack spacing={3}>
            <Box boxSize={"1em"} bg={"white"} rounded={"full"}></Box>
            <Box boxSize={"1em"} bg={"white"} rounded={"full"}></Box>
            <Box boxSize={"1em"} bg={"white"} rounded={"full"}></Box>
          </HStack>
          <Box mt={"1em"}>
            <Text align={"left"} color={"white"} fontSize={"xl"} fontWeight={"normal"}>
              Ini Signin page
            </Text>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
