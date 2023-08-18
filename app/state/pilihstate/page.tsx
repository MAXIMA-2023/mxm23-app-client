"use client"

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

//importing local components
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Img, Wrap, WrapItem, Tab, TabList, TabPanel, TabPanels, Tabs, Divider,  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody} from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";


const PilihState = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<any | null>(null); // Data yang dipilih

  //data dummy
  const day = [
    { hari: 1, date: "Mon, 05 Sep 2023" },
    { hari: 2, date: "Tue, 06 Sep 2023" },
    { hari: 3, date: "Wed, 07 Sep 2023" },
    { hari: 4, date: "Thu, 08 Sep 2023" },
    { hari: 5, date: "Fri, 09 Sep 2023" },
  ];

  const stateData = [
    {
      id: 1,
      date: "Mon, 05 Sep 2023",
      stateLogo: "/Assets/dummy/imgUKM.svg",
      name: "UMN Documentation",
      quota: 100,
      registered: 50,
      stateID: 1,
    },
    {
      id: 2,
      date: "Mon, 05 Sep 2023",
      stateLogo: "/Assets/dummy/imgUKM.svg",
      name: "UMN Documentation",
      quota: 80,
      registered: 80,
      stateID: 2,
    },
    {
      id: 3,
      date: "Mon, 05 Sep 2023",
      stateLogo: "/Assets/dummy/imgUKM.svg",
      name: "UMN Documentation",
      quota: 120,
      registered: 90,
      stateID: 3,
    },
    {
      id: 4,
      date: "Tue, 06 Sep 2023",
      stateLogo: "/Assets/dummy/imgUKM.svg",
      name: "UMN Documentation",
      quota: 100,
      registered: 100,
      stateID: 1,
    },
    {
      id: 5,
      date: "Tue, 06 Sep 2023",
      stateLogo: "/Assets/dummy/imgUKM.svg",
      name: "UMN Documentation",
      quota: 80,
      registered: 80,
      stateID: 2,
    },
    {
      id: 6,
      date: "Tue, 06 Sep 2023",
      stateLogo: "/Assets/dummy/imgUKM.svg",
      name: "UMN Documentation",
      quota: 120,
      registered: 120,
      stateID: 3,
    },
  ];

  const Body = () => {
    return (
      <Center mt={["60vh", "65vh", "60vh", "60vh", "60vh"]} mb={"15vh"} zIndex={"4"}>
        <Box>
          <Center mt={"3em"} mb={"0.8em"}>
            <Text
              color={"#062D5F"}
              fontSize={["3xl", "4xl"]}
              fontWeight={["extrabold", "bold"]}
            >
              Pilih STATE
            </Text>
          </Center>
          <Center>
            <Box borderRadius={"xl"}>
              <Center w={["100%", "100%"]} h={["100%"]}>
                <Box w={["92%", "95%", "90vw", "95vw", "70vw"]} maxW={"auto"}>
                  <Tabs variant="soft-rounded" isFitted>
                    <Center>
                      <Box
                        w={["30em", "full", "full", "35em", "40em"]}
                        p={["0.5em 1em 1em 1em", "1.5em"]}
                        bgColor={"#FDF0CC"}
                        borderRadius={["xl", "xl", "full"]}
                        boxShadow={[
                          "none",
                          "none",
                          "0px 4px 4px 0px rgb(0,0,0,0.25)",
                        ]}
                      >
                        <Center
                          mb={"0.5em"}
                          fontSize={["md", "lg", "lg", "lg", "lg"]}
                          fontWeight={"bold"}
                          color={"#D01E20"}
                        >
                          Hari ke
                        </Center>
                        <Center>
                          <Box w={["100%", "100%", "80%"]}>
                            <TabList>
                              {day.map((item: any) => (
                                <Tab
                                  key={item.id}
                                  py={["0.2em", "0.5em", "0"]}
                                  mx={["0.3em", "0.5em", "0.5em", "0.5em", "0.3em"]}
                                  fontSize={["lg", "xs", "md", "sm", "2xl"]}
                                  color={"#FF6835"}
                                  bgColor={"none"}
                                  border={"2px solid #FF6835"}
                                  _selected={{
                                    color: "#FF6835",
                                    bg: "white",
                                    border: "3px solid #FF6835",
                                  }}
                                >
                                  {item.hari}
                                </Tab>
                              ))}
                            </TabList>
                          </Box>
                        </Center>
                      </Box>
                    </Center>
                    <TabPanels mt={["1.5em","1.5em","5em"]}>
                      <TabPanel w={"100%"} mt={"1em"} p={["0.5em 0em 1em 0em","1.5em 0em 1.5em 0em"]} bgColor={"#FDF0CC"} borderRadius={["xl"]}>
                        <Box>
                          <Center>
                            <Text fontSize={["3xl", "3xl", "xl", "2xl", "2xl"]} fontWeight={"black"} color={"#1B4173"} letterSpacing={0.5}>
                              STATE HARI KE-{day[0]?.hari}
                            </Text>
                          </Center>
                          <Center mt={"-0.2em"}>
                            <Text fontSize={["lg", "xs", "sm", "md", "md"]} fontWeight={"bold"} color={"#FF6835"}>
                              {day[0]?.date}
                            </Text>
                          </Center>
                        </Box>
                        <Divider w={"full"} mt={"1em"} mb={"2.5em"} borderWidth={"0.12em"} style={{ borderRadius: "20px",}} borderColor={"white"} opacity={1}/>
                        <Box>
                          <Wrap spacing={["1em","2.5em"]} justify="center" py={"0.5em"}>
                            {stateData
                              .filter((item: any) => item.date === "Mon, 05 Sep 2023")
                              .map((item: any) => {
                              return (
                                <>
                                  <WrapItem key={item.id}
                                  p={["0.8em 0", "0.8em"]}
                                  bgColor={"white"}
                                  borderRadius={["2xl", "lg"]}
                                  shadow={"md"}
                                  transition={"0.1s ease-in-out"}
                                  cursor={"pointer"}
                                  _hover={{
                                  transform: "scale(1.05)",
                                  }}
                                  onClick={() => {
                                    setSelectedItemId(item.id);
                                    setSelectedItem(item);
                                  }}
                                  >
                                    <Center>
                                      <Box>
                                        <Box w={["full"]} h={["9em","10em"]} maxH={"10em"}>
                                          <Center>
                                            <Img src={item.stateLogo} boxSize={["135px","165px"]} objectFit={"contain"} borderRadius={["2xl", "lg"]} />
                                          </Center>
                                        </Box>
                                        <Center w={"10em"} h={"5em"} my={["0.5em", "1em"]}>
                                          <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                            {item.name}
                                          </Text>
                                        </Center>
                                        <Center w={"10em"} my={["0.5em", "1em"]} px={"1em"}>
                                          <Flex w={"full"} h={"1.5em"} bgColor={"#FFCFBF"} style={{borderRadius: "20px"}} justifyContent={"center"} alignItems={"center"}>
                                            <Center w={"full"} h={"1.5em"} bgColor={"#FF6835"} borderLeftRadius={"full"}>
                                              <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} color={"white"}>
                                                Kuota
                                              </Text>
                                            </Center>
                                            <Center mx={"0.85em"}>
                                              <Text color={"#FF6835"} fontSize={"xs"} fontWeight={"semibold"} textAlign={"center"}>
                                                {item.registered}/{item.quota}
                                              </Text>
                                            </Center>
                                          </Flex>
                                        </Center>
                                      </Box>
                                    </Center>
                                  </WrapItem>
                                  <Modal isOpen={selectedItemId !== null} onClose={() => setSelectedItemId(null)} size="lg">
                                    <ModalOverlay />
                                    <ModalContent bg="white" borderRadius="xl" p={4}>
                                      <ModalCloseButton />
                                      <ModalBody>
                                        <Box>
                                          <Center>
                                            <Img src={selectedItem?.stateLogo} boxSize={["135px", "165px"]} objectFit="contain" borderRadius="2xl" />
                                          </Center>
                                          <Center>
                                            <Text mt={4} color="#062D5F" fontSize="md" fontWeight="semibold" textAlign="center" letterSpacing={0.2}>
                                              {selectedItem?.name}
                                            </Text>
                                          </Center>
                                          <Center>
                                            <Text color="#062D5F" fontSize="md" fontWeight="semibold" textAlign="center" letterSpacing={0.2}>
                                              {selectedItem?.date}
                                            </Text>
                                          </Center>
                                          <Flex mt={4} justifyContent="center" alignItems="center">
                                            <Button colorScheme="blue" mr={3} onClick={() => setSelectedItemId(null)}>
                                              Kembali
                                            </Button>
                                            <Button bgColor={selectedItem?.registered === selectedItem?.quota ? '#FF6835' : '#1B4173'} size={['sm', 'md']} isDisabled={selectedItem?.registered === selectedItem?.quota}>
                                              <Text textColor="white">{selectedItem?.registered === selectedItem?.quota ? 'PENUH' : 'Ambil'}</Text>
                                            </Button>
                                          </Flex>
                                        </Box>
                                      </ModalBody>
                                    </ModalContent>
                                  </Modal>
                                </>
                              );
                            })}
                          </Wrap>
                        </Box>
                      </TabPanel>
                      <TabPanel w={"100%"} mt={"1em"} p={["0.5em 0em 1em 0em","1.5em 0em 1.5em 0em"]} bgColor={"#FDF0CC"} borderRadius={["xl"]}>
                        <Box>
                          <Center>
                            <Text fontSize={["3xl", "3xl", "xl", "2xl", "2xl"]} fontWeight={"black"} color={"#1B4173"} letterSpacing={0.5}>
                              STATE HARI KE-{day[1]?.hari}
                            </Text>
                          </Center>
                          <Center mt={"-0.2em"}>
                            <Text fontSize={["lg", "xs", "sm", "md", "md"]} fontWeight={"bold"} color={"#FF6835"}>
                              {day[1]?.date}
                            </Text>
                          </Center>
                        </Box>
                        <Divider w={"full"} mt={"1em"} mb={"2.5em"} borderWidth={"0.12em"} style={{ borderRadius: "20px",}} borderColor={"white"} opacity={1}/>
                        <Box>
                          <Wrap spacing={["1em","2.5em"]} justify="center" py={"0.5em"}>
                            {stateData
                              .filter((item: any) => item.date === "Tue, 06 Sep 2023")
                              .map((item: any) => {
                              return (
                                <>
                                  <WrapItem key={item.id}
                                  p={["0.8em 0", "0.8em"]}
                                  bgColor={"white"}
                                  borderRadius={["2xl", "lg"]}
                                  shadow={"md"}
                                  transition={"0.1s ease-in-out"}
                                  cursor={"pointer"}
                                  _hover={{
                                  transform: "scale(1.05)",
                                  }}
                                  onClick={() => {
                                    setSelectedItemId(item.id);
                                    setSelectedItem(item);
                                  }}
                                  >
                                    <Center>
                                      <Box>
                                        <Box w={["full"]} h={["9em","10em"]} maxH={"10em"}>
                                          <Center>
                                            <Img src={item.stateLogo} boxSize={["135px","165px"]} objectFit={"contain"} borderRadius={["2xl", "lg"]} />
                                          </Center>
                                        </Box>
                                        <Center w={"10em"} h={"5em"} my={["0.5em", "1em"]}>
                                          <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                            {item.name}
                                          </Text>
                                        </Center>
                                        <Center w={"10em"} my={["0.5em", "1em"]} px={"1em"}>
                                          <Flex w={"full"} h={"1.5em"} bgColor={"#FFCFBF"} style={{borderRadius: "20px"}} justifyContent={"center"} alignItems={"center"}>
                                            <Center w={"full"} h={"1.5em"} bgColor={"#FF6835"} borderLeftRadius={"full"}>
                                              <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} color={"white"}>
                                                Kuota
                                              </Text>
                                            </Center>
                                            <Center mx={"0.85em"}>
                                              <Text color={"#FF6835"} fontSize={"xs"} fontWeight={"semibold"} textAlign={"center"}>
                                                {item.registered}/{item.quota}
                                              </Text>
                                            </Center>
                                          </Flex>
                                        </Center>
                                      </Box>
                                    </Center>
                                  </WrapItem>
                                  <Modal isOpen={selectedItemId !== null} onClose={() => setSelectedItemId(null)} size="lg">
                                    <ModalOverlay />
                                    <ModalContent bg="white" borderRadius="xl" p={4}>
                                      <ModalCloseButton />
                                      <ModalBody>
                                        <Box>
                                          <Center>
                                            <Img src={selectedItem?.stateLogo} boxSize={["135px", "165px"]} objectFit="contain" borderRadius="2xl" />
                                          </Center>
                                          <Center>
                                            <Text mt={4} color="#062D5F" fontSize="md" fontWeight="semibold" textAlign="center" letterSpacing={0.2}>
                                              {selectedItem?.name}
                                            </Text>
                                          </Center>
                                          <Center>
                                            <Text color="#062D5F" fontSize="md" fontWeight="semibold" textAlign="center" letterSpacing={0.2}>
                                              {selectedItem?.date}
                                            </Text>
                                          </Center>
                                          <Flex mt={4} justifyContent="center" alignItems="center">
                                            <Button colorScheme="blue" mr={3} onClick={() => setSelectedItemId(null)}>
                                              Kembali
                                            </Button>
                                            <Button bgColor={selectedItem?.registered === selectedItem?.quota ? '#FF6835' : '#1B4173'} size={['sm', 'md']} isDisabled={selectedItem?.registered === selectedItem?.quota}>
                                              <Text textColor="white">{selectedItem?.registered === selectedItem?.quota ? 'PENUH' : 'Ambil'}</Text>
                                            </Button>
                                          </Flex>
                                        </Box>
                                      </ModalBody>
                                    </ModalContent>
                                  </Modal>
                                </>
                              );
                            })}
                          </Wrap>
                        </Box>
                      </TabPanel>

                      {/*Buat Day Selanjutnya tinggal pakai code TabPanel diatas ganti index sama datenya cuma penginnya reusable, udah dicobaa cumaa ga berhasil, watashi menyerah desu ndak ngerti child child component*/}
                      
                    </TabPanels>
                  </Tabs>
                </Box>
              </Center>
            </Box>
          </Center>
        </Box>
      </Center>
    );
  };

  return (
    <Layout>
      <Flex>
        <Box w={"full"} zIndex={"0"}>
          <Body />
          <BackButton />
        </Box>
      </Flex>
    </Layout>
  );
};

export default PilihState;