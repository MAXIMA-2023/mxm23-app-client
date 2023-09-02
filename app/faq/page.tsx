"use client";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

//importing local components
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img, Tabs, TabList, TabPanels, Tab, TabPanel, Container, List, ListItem, ListIcon, OrderedList, UnorderedList, useMediaQuery } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const FAQ: NextPage = () => {
  const [isSmallerThan320] = useMediaQuery("(max-width: 320px)");
  return (
    <Layout title={"MAXIMA 2023 - FAQ"} backButton>
      <Flex
        minH={"100vh"}
        bgImage={["./assets/MaximaBG_AboutUs_Mobile.svg", "./assets/MaximaBG_AboutUs_Mobile.svg", "./assets/MaximaBG_AboutUs_Mobile.svg", "./assets/MaximaBG_AboutUs_Desktop.svg", "./assets/MaximaBG_AboutUs_Desktop.svg"]}
        bgPosition={["center"]}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box w={"full"} zIndex={"0"}>
          <Box display={isSmallerThan320 ? "none" : ["block", "none", "none", "none", "none"]} mb={["30.35rem", "45.35rem", "", "30.35rem", "30.35rem"]} position={"absolute"} bottom={0}>
            {/* Image Mobile */}
          </Box>
          <Center>
            <Box
              p={["1em 0.5em", "1em 0.5em", "1.5em 3em", "1em 3em", "4em 4em"]}
              mt={["17.5vh", "17.5vh", "16vh", "17vh", "14vh"]}
              w={["85%", "85%", "85%", "55%", "55%"]}
              h={"auto"}
              minH={"40em"}
              mb={"2em"}
              bgColor={"white"}
              borderRadius={"xl"}
              boxShadow={"0px 3px 3px 3px rgb(0,0,0,0.25)"}
            >
              <Box w={"100%"}>
                <Center mt={["1em", "1em", "0em", "1em", "1em"]}>
                  <Img src={"./assets/faq/FAQ.svg"} w={["5em", "5em", "15vw", "5em", "10em"]}></Img>
                </Center>
                <Center display={["none", "none", "block"]}>
                  <Tabs variant="soft-rounded" isFitted>
                    <TabList w={"auto"} p={[" 0.5em 0.5em", " 0.5em 0.5em", " 0.5em 2em", " 0.5em 1em", " 0.5em 2em"]} bgColor={"rgb(247,183,21,0.21)"} borderRadius={"full"}>
                      <Tab mx={["0.2em", "0.2em", "0.5em", "0.5em", "1em"]} fontSize={["xs", "xs", "md", "sm", "lg"]} color={"white"} bgColor={"rgb(255,104,53,0.35)"} _selected={{ color: "white", bg: "#FF6835" }}>
                        HoME
                      </Tab>
                      <Tab mx={["0.2em", "0.2em", "0.5em", "0.5em", "1em"]} fontSize={["xs", "xs", "md", "sm", "lg"]} color={"white"} bgColor={"rgb(255,104,53,0.35)"} _selected={{ color: "white", bg: "#FF6835" }}>
                        STATE
                      </Tab>
                      <Tab mx={["0.2em", "0.2em", "0.5em", "0.5em", "1em"]} fontSize={["xs", "xs", "md", "sm", "lg"]} color={"white"} bgColor={"rgb(255,104,53,0.35)"} _selected={{ color: "white", bg: "#FF6835" }}>
                        MalPun
                      </Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel mt={"1em"} h={"auto"} overflow={"auto"}>
                        <Stack spacing={[2, 2, 2, 2, 3]}>
                          <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                            Apa itu HoME?
                          </Text>
                          <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]}>
                            HoME merupakan kegiatan exhibition atau pameran berbagai organisasi di UMN, seperti Unit Kegiatan Mahasiswa, Lembaga Semi Otonom (LSO), Lembaga Kampus, Himpunan, Media
                            Kampus, dan sebagainya. Pameran tersebut terdiri dari penjelasan organisasi, foto-foto organisasi, prestasi organisasi, serta berbagai kegiatan menarik.
                          </Text>
                        </Stack>
                        <Stack spacing={[2, 2, 2, 2, 3]} mt={["1.5em", "1.5em", "1em", "1em", "1.5em"]}>
                          <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                            Ada apa saja di HoME?
                          </Text>
                          <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]}>
                            Pameran 61 organisasi, Challenge MAXPRESSION, dan Photo Spot.
                          </Text>
                        </Stack>
                        <Stack spacing={[2, 2, 2, 2, 3]} mt={["1.5em", "1.5em", "1em", "1em", "1.5em"]}>
                          <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                            Kapan HoME Maxima 2023 akan dilaksanakan?
                          </Text>
                          <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]}>
                            11-15 September 2023.
                          </Text>
                        </Stack>
                        <Stack spacing={[2, 2, 2, 2, 3]} mt={["1.5em", "1.5em", "1em", "1em", "1.5em"]}>
                          <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                            Ikut HoME dapat SKKM atau tidak?
                          </Text>
                          <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]}>
                            MAXIMERS bisa mendapatkan SKKM apabila mengikuti challenge 
                            <span
                                    style={{
                                      fontWeight: "bold",
                                      color: "#D01E20",
                                    }}
                                  >
                                    {" "}
                                    MAXPRESSION.
                                  </span>
                          </Text>
                        </Stack>
                        {/* <Box mt={["1.5em", "1.5em", "1em", "1em", "1.5em"]}>
                          <Text>
                            <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                              Apa itu HoME?
                            </Text>
                            <OrderedList mt={"0.5em"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]} color={"#1B4173"} spacing={3}>
                              <ListItem>
                                <Text color={"#1B4173"} fontSize={["lg", "lg", "2.2vh", "sm", "lg"]}>
                                  HoME dapat diakses secara online melalui website
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      color: "#D01E20",
                                    }}
                                  >
                                    {" "}
                                    maxima.umn.ac.id
                                  </span>
                                </Text>
                              </ListItem>
                              <ListItem>
                                <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]}>
                                  Kamu perlu melakukan registrasi terlebih dahulu untuk mengkonfirmasi NIM dan token kamu di website MAXIMA tersebut.
                                </Text>
                              </ListItem>
                              <ListItem>
                                <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]}>
                                  Setelah registrasi, ikuti instruksi untuk mengakses HoME pada website agar kamu dapat melihat berbagai cluster organisasi yang ada di UMN. Klik pada cluster yang ingin kamu kunjungi untuk melihat
                                  organisasi-organisasi yang ada di dalamnya.
                                </Text>
                              </ListItem>
                            </OrderedList>
                          </Text>
                        </Box> */}
                      </TabPanel>
                      <TabPanel>
                        <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                          Coming Soon!
                        </Text>
                      </TabPanel>
                      <TabPanel>
                        <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                          Coming Soon!
                        </Text>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Center>
                <Center display={["block", "block", "none"]}>
                  <Tabs variant="soft-rounded" align={"center"}>
                    <TabList w={"auto"} p={[" 0.5em 0.5em", " 0.5em 0.5em", " 0.5em 2em", " 0.5em 1em", " 0.5em 2em"]} bgColor={"rgb(247,183,21,0.21)"} borderRadius={"full"}>
                      <Tab mx={["0.3em", "0.5em", "0.5em", "0.5em", "1em"]} fontSize={["xs", "sm", "sm", "sm", "lg"]} color={"white"} bgColor={"rgb(255,104,53,0.35)"} _selected={{ color: "white", bg: "#FF6835" }}>
                        HoME
                      </Tab>
                      <Tab mx={["0.3em", "0.5em", "0.5em", "0.5em", "1em"]} fontSize={["xs", "sm", "sm", "sm", "lg"]} color={"white"} bgColor={"rgb(255,104,53,0.35)"} _selected={{ color: "white", bg: "#FF6835" }}>
                        STATE
                      </Tab>
                      <Tab mx={["0.3em", "0.5em", "0.5em", "0.5em", "1em"]} fontSize={["xs", "sm", "sm", "sm", "lg"]} color={"white"} bgColor={"rgb(255,104,53,0.35)"} _selected={{ color: "white", bg: "#FF6835" }}>
                        MalPun
                      </Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel h={"auto"} overflow={"auto"}>
                        <Stack spacing={[1, 1, 2, 2, 3]}>
                          <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                            Apa itu HoME?
                          </Text>
                          <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]}>
                            HoME merupakan kegiatan exhibition atau pameran berbagai organisasi di UMN, seperti Unit Kegiatan Mahasiswa, Lembaga Semi Otonom (LSO), Lembaga Kampus, Himpunan, Media
                            Kampus, dan sebagainya. Pameran tersebut terdiri dari penjelasan organisasi, foto-foto organisasi, prestasi organisasi, serta berbagai kegiatan menarik.
                          </Text>
                        </Stack>
                        <Stack spacing={[1, 1, 2, 2, 3]} mt={["0.5em", "0.5em", "1em", "1em", "1.5em"]}>
                          <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                            Ada apa saja di HoME?
                          </Text>
                          <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]}>
                            Pameran 61 organisasi, Challenge MAXPRESSION, dan Photo Spot.
                          </Text>
                        </Stack>
                        <Stack spacing={[1, 1, 2, 2, 3]} mt={["0.5em", "0.5em", "1em", "1em", "1.5em"]}>
                          <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                            Kapan HoME Maxima 2023 akan dilaksanakan?
                          </Text>
                          <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]}>
                            11-15 September 2023.
                          </Text>
                        </Stack>
                        <Stack spacing={[1, 1, 2, 2, 3]} mt={["0.5em", "0.5em", "1em", "1em", "1.5em"]}>
                          <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                            Ikut HoME dapat SKKM atau tidak?
                          </Text>
                          <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.2vh", "sm", "lg"]}>
                            MAXIMERS bisa mendapatkan SKKM apabila mengikuti challenge 
                            <span
                              style={{
                              fontWeight: "bold",
                              color: "#D01E20",
                              }}
                            >
                            {" "}
                              MAXPRESSION.
                            </span>
                          </Text>
                        </Stack>
                        {/* <Box mt={["0.5em", "0.5em", "1em", "1em", "1.5em"]}>
                          <Text>
                            <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                              Bagaimana tata cara mengakses HoME MAXIMA 2023?
                            </Text>
                            <OrderedList mt={"0.5em"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]} color={"#1B4173"} spacing={3}>
                              <ListItem>
                                <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.2vh", "sm", "lg"]}>
                                  HoME dapat diakses secara online melalui website
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      color: "#D01E20",
                                    }}
                                  >
                                    {" "}
                                    maximaumn.com.
                                  </span>
                                </Text>
                              </ListItem>
                              <ListItem>
                                <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]}>
                                  Kamu perlu melakukan registrasi terlebih dahulu untuk mengkonfirmasi NIM dan identitas kamu di website MAXIMA tersebut.
                                </Text>
                              </ListItem>
                              <ListItem>
                                <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]}>
                                  Setelah registrasi, ikuti instruksi untuk mengakses HoME pada website agar kamu dapat melihat berbagai cluster organisasi yang ada di UMN. Klik pada cluster yang ingin kamu kunjungi untuk melihat
                                  organisasi-organisasi yang ada di dalamnya.
                                </Text>
                              </ListItem>
                            </OrderedList>
                          </Text>
                        </Box> */}
                      </TabPanel>
                      <TabPanel h={"23em"} overflow={"auto"}>
                        <p>COMING SOON!</p>
                      </TabPanel>
                      <TabPanel h={"23em"} overflow={"auto"}>
                        <p>COMING SOON!</p>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Center>
              </Box>
            </Box>
          </Center>
        </Box>
      </Flex>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(FAQ), {
  ssr: false,
});
