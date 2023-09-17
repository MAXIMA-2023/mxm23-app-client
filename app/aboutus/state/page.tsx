"use client";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import React from "react";

//importing local components
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

//importing chakra ui components
import {
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Button,
  Stack,
  Img,
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const STATE: NextPage = () => {
  return (
    <Layout title={"MAXIMA 2023 - About Us (STATE)"} backButton>
      <Flex
        minH={"100vh"}
        bgImage={[
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_AboutUs_Mobile.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_AboutUs_Mobile.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_AboutUs_Mobile.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_AboutUs_Desktop.webp",
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaBG_AboutUs_Desktop.webp",
        ]}
        bgPosition={["center", "bottom", "bottom", "bottom"]}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box w={"full"} zIndex={"0"}>
          <Box
            display={["block", "block", "block", "none", "none"]}
            position={"absolute"}
            bottom={0}
          >
            {/* Image BG Mobile */}
          </Box>
          <Center>
            <Box
              p={["1em 2em", "3em 5em", "3em 3em", "3em 4em", "4em 5em"]}
              mt={["17.5vh", "17.5vh", "16vh", "17vh", "14vh"]}
              mb={"3em"}
              w={["85%", "85%", "85%", "55%", "55%"]}
              h={"auto"}
              minH={["77vh", "auto", "76vh", "81vh", "83vh"]}
              bgColor={"white"}
              borderRadius={"xl"}
              boxShadow={"0px 3px 3px 3px rgb(0,0,0,0.25)"}
            >
              <Center w={"100%"} h={["100%"]}>
                <Box>
                  <Center mt={"0em"}>
                    <Img
                      src={"/assets/aboutus/AboutUs_STATE.svg"}
                      w={["10em", "15em", "40vw", "15em", "25em"]}
                    ></Img>
                  </Center>
                  <Center display={["none", "block"]}>
                    <Stack direction={"column"} spacing={[8, 6, 7, 5, 8]}>
                      <Text
                        fontSize={["md", "md", "2.3vh", "md", "lg"]}
                        color={"#1B4173"}
                        textAlign={"center"}
                      >
                        <span style={{ fontWeight: "1000" }}>
                          Student Activities Unit Explore (STATE){" "}
                        </span>{" "}
                        merupakan kegiatan dimana mahasiswa baru dapat
                        mendapatkan informasi dan mengeksplorasi UKM dan Media
                        Kampus yang ada di UMN. Dari kegiatan ini UKM dan Media
                        Kampus dapat memperkenalkan UKM dan Media Kampus mereka
                        kepada mahasiswa baru.
                      </Text>
                      <Center>
                        <Text
                          w={["50%", "80%", "70%", "60%", "50%"]}
                          fontSize={["md", "md", "2.3vh", "md", "lg"]}
                          color={"#1B4173"}
                          textAlign={"center"}
                        >
                          <span style={{ fontWeight: "1000" }}>
                            Registrasi STATE{" "}
                          </span>{" "}
                          <br /> dapat dilakukan pada tanggal <br /> XX
                          September - XX September 2023
                        </Text>
                      </Center>
                      <Center>
                        <Text
                          w={["50%", "90%", "70%", "60%", "50%"]}
                          fontSize={["md", "md", "2.3vh", "md", "lg"]}
                          color={"#1B4173"}
                          textAlign={"center"}
                        >
                          <span style={{ fontWeight: "1000" }}>
                            Pelaksanaan STATE{" "}
                          </span>{" "}
                          <br /> diselenggarakan pada tanggal <br /> 18
                          September - 26 September 2023
                        </Text>
                      </Center>
                    </Stack>
                  </Center>
                  <Center display={["block", "none"]}>
                    <Stack direction={"column"} spacing={[4, 4, 7, 5, 8]}>
                      <Text
                        fontSize={["sm", "sm", "2.3vh", "md", "xl"]}
                        color={"#1B4173"}
                        textAlign={"center"}
                      >
                        <span style={{ fontWeight: "1000", fontSize: "17px" }}>
                          Student Activities Unit Explore (STATE){" "}
                        </span>{" "}
                        <br /> merupakan kegiatan dimana mahasiswa baru dapat
                        mendapatkan informasi dan mengeksplorasi UKM dan Media
                        Kampus yang ada di UMN. Dari kegiatan ini UKM dan Media
                        Kampus dapat memperkenalkan UKM dan Media Kampus mereka
                        kepada mahasiswa baru.
                      </Text>
                      <Center>
                        <Text
                          w={["100%", "100%", "70%", "60%", "50%"]}
                          fontSize={["sm", "sm", "2.3vh", "md", "xl"]}
                          color={"#1B4173"}
                          textAlign={"center"}
                        >
                          <span style={{ fontWeight: "1000" }}>
                            Registrasi STATE{" "}
                          </span>{" "}
                          <br /> dapat dilakukan pada tanggal <br /> XX
                          September - XX September 2023
                        </Text>
                      </Center>
                      <Center>
                        <Text
                          w={["100%", "100%", "70%", "60%", "50%"]}
                          fontSize={["sm", "sm", "2.3vh", "md", "xl"]}
                          color={"#1B4173"}
                          textAlign={"center"}
                        >
                          <span style={{ fontWeight: "1000" }}>
                            Pelaksanaan STATE{" "}
                          </span>{" "}
                          <br /> diselenggarakan pada tanggal <br /> 18
                          September - 26 September 2023
                        </Text>
                      </Center>
                    </Stack>
                  </Center>
                </Box>
              </Center>
            </Box>
          </Center>
        </Box>
      </Flex>
    </Layout>
  );
};

export default STATE;
