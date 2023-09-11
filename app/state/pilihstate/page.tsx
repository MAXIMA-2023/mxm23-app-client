"use client";

import { useState, useEffect } from "react";

//importing local components
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Img, Wrap, WrapItem, Tab, TabList, TabPanel, TabPanels, Tabs, Divider, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Stack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { HandleAxiosError, ResponseModel, useApi } from "@/services/api";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import LoadingSpinner from "@/components/LoadingSpinner";

type DayManagement = {
  day: string;
  hari: number;
  date: string;
};

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
};

type StateActivities = {
  stateID: number;
  name: string;
  stateLogo: string;
  stateDesc: string;
  quota: number;
  registered: number;
  date: string; // date
  location: string;
};

const PilihState = () => {
  const [dataState, setDataState] = useState<StateActivities[]>([]);
  const [dataDay, setDataDay] = useState<DayManagement[]>([]);

  const [selectedItem, setSelectedItem] = useState<StateActivities | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tabIndex, setTabIndex] = useState<number>(0);

  const session = useSession({
    required: true,
    onUnauthenticated: () => {
      Swal.fire({
        title: "Anda belum signin!",
        color: "#062D5F",
        text: "Maaf, kamu harus signin terlebih dahulu untuk mengakses STATE",
        icon: "error",
        confirmButtonColor: "#F7B70C",
      });
      router.push("/signin");
    },
  });
  const api = useApi();
  const router = useRouter();

  useEffect(() => {
    // handle toggle disini beb, kalo false ya kasi message dan redirect ke /

    if (session.status === "authenticated") {
      api.get<Toggle[]>(`/toggle`).then(({ data }) => {
        if (!data.find((toggle) => toggle.name === "stateRegistration")?.toggle) {
          Swal.fire({
            title: "Registrasi STATE telah ditutup!",
            color: "#062D5F",
            text: "Maximers, registrasi STATE telah ditutup.",
            icon: "error",
            confirmButtonColor: "#F7B70C",
          });
          router.push("/state");
          return;
        }

        const fetchDay = api
          .get<DayManagement[]>(`/dayManagement`)
          .then(({ data }) => setDataDay(data))
          .catch(HandleAxiosError);
        const fetchState = api
          .get<StateActivities[]>(`/state`)
          .then(({ data }) => setDataState(data))
          .catch(HandleAxiosError);
        Promise.all([fetchDay, fetchState]).finally(() => setIsLoading(false));
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const StateCard = ({ data }: { data: StateActivities }) => {
    return (
      <WrapItem
        key={data.stateID}
        p={["0.8em 0", "0.8em"]}
        bgColor={data.quota === data.registered ? "#FFC1C1" : "white"}
        borderRadius={["2xl", "lg"]}
        shadow={"md"}
        transition={"0.1s ease-in-out"}
        cursor={"pointer"}
        _hover={{
          transform: "scale(1.05)",
        }}
        alignContent={"center"}
        justifyContent={"center"}
        onClick={() => setSelectedItem(data)}
      >
        <Box>
          <Box w={["full"]} h={["9em", "10em"]} maxH={"10em"}>
            <Center>
              <Img src={data.stateLogo} boxSize={["135px", "165px"]} objectFit={"contain"} borderRadius={["2xl", "lg"]} />
            </Center>
          </Box>
          <Center w={"10em"} h={"5em"} my={["0.5em", "1em"]}>
            <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
              {data.name}
            </Text>
          </Center>
          <Center w={"10em"} my={["0.5em", "1em"]} px={"1em"}>
            <Flex w={"full"} h={"1.5em"} bgColor={data.quota === data.registered ? "white" : "#FFCFBF"} style={{ borderRadius: "20px" }} justifyContent={"center"} alignItems={"center"}>
              {data.quota === data.registered ? (
                <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} color={"red.500"}>
                  PENUH
                </Text>
              ) : (
                <>
                  <Center w={"full"} h={"1.5em"} bgColor={"#FF6835"} borderLeftRadius={"full"}>
                    <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} color={"white"}>
                      Kuota
                    </Text>
                  </Center>
                  <Center mx={"0.85em"}>
                    <Text color={"#FF6835"} fontSize={"xs"} fontWeight={"semibold"} textAlign={"center"}>
                      {data.registered}/{data.quota}
                    </Text>
                  </Center>
                </>
              )}
            </Flex>
          </Center>
        </Box>
      </WrapItem>
    );
  };

  const StateTabPanel = ({ day }: { day: DayManagement }) => {
    return (
      <TabPanel w={"100%"} mt={"1em"} p={["0.5em 0em 1em 0em", "1.5em 0em 1.5em 0em"]} bgColor={"#FDF0CC"} borderRadius={["xl"]}>
        <Center>
          <Text fontSize={["3xl", "3xl", "xl", "2xl", "2xl"]} fontWeight={"black"} color={"#1B4173"} letterSpacing={0.5}>
            STATE HARI KE-{day.hari}
          </Text>
        </Center>
        <Center mt={"-0.2em"}>
          <Text fontSize={["lg", "xs", "sm", "md", "md"]} fontWeight={"bold"} color={"#FF6835"}>
            {new Date(day.date).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </Center>
        <Divider w={"full"} mt={"1em"} mb={"2.5em"} borderWidth={"0.12em"} borderRadius={"20px"} borderColor={"white"} opacity={1} />
        <Wrap spacing={["1em", "2.5em"]} justify={"center"} p={"0.5em"}>
          {dataState
            .filter((state) => state.date === day.date)
            .map((data) => (
              <StateCard data={data} key={data.stateID} />
            ))}
        </Wrap>
      </TabPanel>
    );
  };

  const Body = () => {
    return (
      <Stack
        mt={["35vh", "35vh", "50vh", "68vh", "75vh"]}
        mb={"5vh"}
        direction={"column"}
        // zIndex={"4"}
        justify={"center"}
        align={"center"}
      >
        <Box bgColor={"rgb(0,0,0,0.25)"} p="2em" py="0.5em" px="2em" rounded={"xl"}>
          <Text color={"#F7B70C"} fontSize={["3xl", "4xl"]} fontWeight={["extrabold", "bold"]}>
            Pilih STATE
          </Text>
        </Box>
        {/* <Box borderRadius={"xl"}> */}
        <Box w={["92%", "95%", "90vw", "95vw", "65vw"]} maxW={"auto"}>
          <Tabs
            variant="soft-rounded"
            isFitted
            isLazy
            index={tabIndex}
            onChange={(index) => setTabIndex(index)} // kalo re render, nggak ilang index nya xixixi
          >
            <Stack
              direction={"column"}
              align={"center"}
              // w={["30em", "full", "full", "35em", "40em"]}
              p={["0.5em 1em 1em 1em", "1.5em"]}
              bgColor={"#FDF0CC"}
              borderRadius={["xl", "xl", "full"]}
              boxShadow={["none", "none", "0px 4px 4px 0px rgb(0,0,0,0.25)"]}
            >
              <Text mb={"0.5em"} fontSize={["md", "lg", "lg", "lg", "lg"]} fontWeight={"bold"} color={"#D01E20"}>
                Hari ke
              </Text>
              {/* <Box w={["100%", "100%", "80%"]}> */}
              <TabList>
                {dataDay.map((day) => (
                  <Tab
                    key={day.hari}
                    // py={["0.2em", "0.5em", "0"]}
                    w={["2em", "2em", "4em", "4em", "6em"]}
                    h={["1em", "1em", "2em", "2em", "3em"]}
                    mx={["0.15em", "0.5em", "0.5em", "0.5em", "0.3em"]}
                    fontSize={["md", "md", "lg", "xl", "lg"]}
                    color={"#FF6835"}
                    bgColor={"none"}
                    border={"2px solid #FF6835"}
                    _selected={{
                      color: "#FF6835",
                      bg: "white",
                      border: "3px solid #FF6835",
                    }}
                  >
                    {day.hari}
                  </Tab>
                ))}
              </TabList>
              {/* </Box> */}
            </Stack>
            <TabPanels mt={["1.5em", "1.5em", "5em"]}>
              {dataDay.map((day, index) => (
                <StateTabPanel day={day} key={index} />
              ))}
            </TabPanels>
          </Tabs>
        </Box>
        {/* </Box> */}
        {/* single modal cukup */}
      </Stack>
    );
  };

  if (session.status === "loading" || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Layout title={"MAXIMA 2023 - Pilih STATE"}>
      <Flex
        w={"full"}
        h={"auto"}
        minH={"100vh"}
        // p={"3.5em"}
        // justify={"center"}
        // align={"center"}
        bgColor={"#3A3A3C"}
        // px={["1em", "1em", "1em", "8em", "8em"]}
        // py={["0em", "16em", "16em", "12em", "12em"]}
        bgImage={["../assets/state/MaximaBG_PilihSTATE_Mobile.svg", "../assets/state/MaximaBG_STATE_Desktop.svg", "../assets/state/MaximaBG_STATE_Desktop.svg", "../assets/state/MaximaBG_STATE_Desktop.svg"]}
        // bgColor={"gray.900"} // sambi nunggu assets dari desig
        bgSize={"100vw auto"}
        bgRepeat={"no-repeat"}
        direction={"column"}
        top={"0"}
      >
        <Body />
        {/* <BackButton /> */}
      </Flex>
      <Modal isOpen={selectedItem !== null} onClose={() => setSelectedItem(null)} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent bg="white" borderRadius="xl" p={4}>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Center flexDirection={"column"}>
                <Img src={selectedItem?.stateLogo} boxSize={["135px", "165px"]} objectFit="contain" borderRadius="2xl" />
              </Center>
              <Text mt={4} color="#062D5F" fontSize="md" fontWeight="semibold" textAlign="center" letterSpacing={0.2}>
                {selectedItem?.name}
              </Text>
              <Text color="#062D5F" fontSize="md" fontWeight="semibold" textAlign="center" letterSpacing={0.2}>
                {new Date(selectedItem?.date!).toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
              <Text color="#062D5F" fontSize="md" fontWeight="semibold" textAlign="center" letterSpacing={0.2}>
                {selectedItem?.location}
              </Text>
              <Text my={"1em"} textAlign={"justify"}>
                {selectedItem?.stateDesc}
              </Text>
              <Flex mt={4} justifyContent="center" alignItems="center">
                <Button
                  color={"white"}
                  mr={"1em"}
                  bgColor={selectedItem?.registered === selectedItem?.quota ? "#FF6835" : "#1B4173"}
                  // size={["sm", "md"]}
                  isDisabled={selectedItem?.registered === selectedItem?.quota}
                  onClick={() => {
                    api
                      .post<ResponseModel<undefined>>(`/state/registration`, {
                        nim: session.data?.user.nim,
                        stateID: selectedItem?.stateID,
                      })
                      .then(({ data }) => {
                        setSelectedItem(null);
                        Swal.fire({
                          title: "Berhasil!",
                          text: data.message,
                          icon: "success",
                          color: "#062D5F",
                          confirmButtonColor: "#F7B70C",
                          cancelButtonText: "Close",
                        });
                        router.push("/state");
                      })
                      .catch((err) => {
                        setSelectedItem(null);
                        HandleAxiosError(err);
                      });
                  }}
                >
                  {selectedItem?.registered === selectedItem?.quota ? "PENUH" : "Ambil"}
                </Button>
                <Button bgColor={"#F7B70C"} color={"white"} onClick={() => setSelectedItem(null)}>
                  Kembali
                </Button>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export default PilihState;
