"use client";
import React from "react";
import Layout from "@/components/Layout";
import { Flex, Text, Box, Center, Button, Image } from "@chakra-ui/react";

export default function Testing() {
  return (
    <>
      <Layout>
        <Box>
          <Box position={"absolute"} w={"full"} h={"100vh"} bgImage={"/Assets/MaximaBG_Desktop.svg"} bgPosition={"bottom"} bgSize={"cover"} bgRepeat={"no-repeat"}></Box>
        </Box>
      </Layout>
    </>
  );
}
