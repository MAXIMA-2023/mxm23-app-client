"use client";
import React from "react";
import Layout from "@/components/Layout";
import { Flex, Text, Box, Center, Button, Image } from "@chakra-ui/react";

export default function Testing() {
  return (
    <>
      <Layout>
        <Box>
          <Box
            position={"absolute"}
            w={"full"}
            h={"100vh"}
            bgImage={
              "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/Assets/MaximaBG_Desktop.svg"
            }
            bgPosition={"bottom"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>
      </Layout>
    </>
  );
}
