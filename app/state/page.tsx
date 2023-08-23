"use client";

import Link from "next/link";

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
  HStack,
  Icon,
  Image,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BsPlus, BsTrash, BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { HandleAxiosError, ResponseModel, useApi } from "@/services/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type StateReg = {
  stateID: number;
  name: string;
  stateLogo: string;
  stateDesc: string;
  quota: number;
  registered: number;
  date: string;
  location: string;
  isFirstAttended: boolean;
  isLastAttended: boolean;
};

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
};

const STATE = () => {
  const [dataState, setDataState] = useState<StateReg[]>([]);
  const [selectedItem, setSelectedItem] = useState<StateReg | null>(null);
  const [toggle, setToggle] = useState<Toggle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pilihStateRef = useRef<HTMLDivElement>(null);
  const today = new Date();

  const api = useApi();
  const router = useRouter();
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

  const fetchToggle = async () => {
    try {
      const { data } = await api.get<Toggle[]>("/toggle");

      if (!data.find((v) => v.name === "STATEpage")?.toggle) {
        Swal.fire({
          title: "STATE belum dibuka!",
          color: "#062D5F",
          text: "Maaf, saat ini STATE belum dibuka. Silahkan cek kembali nanti!",
          icon: "error",
          confirmButtonColor: "#F7B70C",
        });
        router.push("/");
        return;
      }

      setToggle(data);
    } catch (error) {
      HandleAxiosError(error);
    }
  };

  const fetchStateReg = async () => {
    try {
      const { data } = await api.get<ResponseModel<StateReg[]>>(
        `/state/regData`
      );
      setDataState(data.data!);
    } catch (error) {
      HandleAxiosError(error);
    }
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      Promise.all([fetchToggle(), fetchStateReg()]).finally(() =>
        setIsLoading(false)
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  // toggles
  const stateRegToggle = toggle.find(
    (v) => v.name === "stateRegistration"
  )?.toggle;

  const STATEButton = ({ data }: { data?: StateReg }) => {
    const stateDate = Date.parse(data?.date!);
    return (
      <Box
        // kalo undefined dan stateReg masih buka, buat bola jadi link ke pilih state
        as={!data && stateRegToggle ? Link : undefined}
        href={!data && stateRegToggle ? "/state/pilihstate" : ""}
        position={"relative"}
        display={"flex"}
        flexDir={"column"}
        boxSize={["8em", "8em", "10em", "12em", "1`4em`"]}
        bgColor={
          // kalo udah lewatin day state nya, kita kasih result
          stateDate < today.getTime()
            ? data?.isFirstAttended && data?.isLastAttended
              ? "#00FF19" // lulus -- absen full
              : "#FF0000" // fail -- absen ga full
            : "white" // kosong -- belum state
        }
        rounded={"full"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"#F7B70C"}
        p={["0.75em", "0.75em", "0.75em", "1em", "1em"]}
        shadow={"0px 0px 8px rgb(255,255,255,0.5)"}
        _hover={{
          shadow: "0px 0px 16px rgb(255,255,255,0.75)",
        }}
        transition={"all 0.2s ease-in-out"}
        cursor={"pointer"}
      >
        {data ? (
          <>
            <Box
              p={"1em"}
              // position={"absolute"}
              // top={0}
              // left={0}
              boxSize={"full"}
              rounded={"full"}
              bgColor={"white"}
            >
              <Image
                p={["none", "0.5em", "0.5em", "0.5em", "1em"]}
                w={"full"}
                h={"full"}
                fit={"contain"}
                src={data.stateLogo}
                // rounded={"full"}
                alt="state-logo"
                onClick={() => {
                  if (data) {
                    setSelectedItem(data);
                  }
                }}
              />
            </Box>
            {stateDate > today.getTime() && (
              <IconButton
                aria-label="delete-state"
                position={"absolute"}
                top={0}
                left={0}
                rounded={"full"}
                icon={<BsTrashFill />}
                bgColor={"white"}
                color={"red.500"}
                shadow={"0px 0px 4px rgb(0,0,0,0.25)"}
                _hover={{
                  bgColor: "white",
                  shadow: "0px 0px 16px rgb(255,255,255,0.75)",
                }}
                onClick={() =>
                  Swal.fire({
                    title: `Batalkan registrasi STATE?`,
                    color: "#062D5F",
                    text: `Apakah kamu yakin untuk membatalkan registrasi state ${data.name}?`,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#D33",
                    focusCancel: true,
                    cancelButtonColor: "#F7B70C",
                    confirmButtonText: "Batal",
                    cancelButtonText: "Kembali",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      // api call -- delete state
                      api
                        .delete<ResponseModel<undefined>>(
                          `/state/cancel_registration/${data.stateID}`
                        )
                        .then(({ data }) => {
                          Swal.fire({
                            title: "Berhasil!",
                            color: "#062D5F",
                            text: data.message,
                            icon: "success",
                            confirmButtonColor: "#F7B70C",
                            cancelButtonText: "Kembali",
                          });
                          fetchStateReg();
                        })
                        .catch(HandleAxiosError);
                    }
                  })
                }
              />
            )}
          </>
        ) : (
          <>
            {stateRegToggle ? ( // check toggle stateRegistration
              <Stack
                position={"absolute"}
                direction={"column"}
                align={"center"}
                justify={"center"}
                mt={"1em"}
              >
                <Icon as={BsPlus} boxSize={"3em"} />
                <Text fontWeight={"bold"} mt={"-1em"}>
                  Add
                </Text>
              </Stack>
            ) : (
              <></>
            )}
          </>
        )}
      </Box>
    );
  };

  const Header = () => {
    return (
      <Stack direction={"column"} align={"end"} w={"full"} h={"fit-content"}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.5,
          }}
          exit={{ scale: 0 }}
        >
          <Text
            color={"white"}
            align={"end"}
            fontSize={["4xl", "6xl", "7xl", "8xl"]}
            fontWeight={"bold"}
            textShadow={"0px 0px 8px #1B4173"}
          >
            STATE
          </Text>
          <Text
            mt={"-0.3em"}
            color={"white"}
            align={"end"}
            fontSize={["4xl", "6xl", "7xl", "8xl"]}
            fontWeight={"bold"}
            textShadow={"0px 0px 8px #1B4173"}
            // style={{
            //   WebkitTextStroke: "8px rgba(31, 67, 115, 0.35)",
            //   paintOrder: "stroke fill",
            // }}
          >
            MAXIMA 2023
          </Text>
        </motion.div>
        <Text
          // ps={["2.5em", "20em", "40vw", "55vw", "61vw"]}
          maxW={["100%", "100%", "65%", "50%"]}
          color={"white"}
          align={"end"}
          fontSize={["14px", "14px", "16px", "20px"]}
          fontWeight={"bold"}
          textShadow={"0px  0px 8px rgb(0,0,0,0.75)"}
        >
          Selamat datang di STATE MAXIMA 2023! Di sini kamu dapat memilih UKM
          yang ingin kamu ketahui!
        </Text>
        <Flex justify={["center", "center", "center", "end"]} w={"full"}>
          <Button
            // as={Link}
            // href={"#pilih-state"}
            onClick={() => {
              pilihStateRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            mt={"2em"}
            w={["18em", "18em", "14em", "18em", "18em"]}
            size={["sm", "sm", "lg", "sm", "md"]}
            borderRadius={"full"}
            fontWeight={"black"}
            bgColor={"#F7B70C"}
            boxShadow={"0px 0px 4px rgb(0,0,0,0.25)"}
            variant={"none"}
          >
            <Text
              display={["block", "block", "block", "none", "none"]}
              color={"white"}
              fontWeight={["black", "bold"]}
            >
              Pilih Sekarang!
            </Text>
            <Text
              display={["none", "none", "none", "block", "block"]}
              color={"white"}
              fontWeight={["black", "bold"]}
            >
              Pilih UKM & Komunitas
            </Text>
          </Button>
        </Flex>
      </Stack>
    );
  };

  return (
    <>
      <Layout>
        <Flex
          w={"full"}
          h={"auto"}
          minH={"100vh"}
          p={"3.5em"}
          // justify={"center"}
          // align={"center"}
          // bgImage={["", "", "", "/Assets/MaximaBG_Desktop.svg"]}
          bgColor={"gray.900"} // DEBUG - tunggu assets dari design
          bgPosition={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          direction={"column"}
        >
          <Flex mt={"16vh"}>
            <Header />
          </Flex>
          <Flex
            mt={"32vh"}
            minH={"68vh"}
            align={"center"}
            justify={"center"}
            ref={pilihStateRef} // ini buat scrollIntoView
            justifyContent={"space-evenly"}
            px={["none", "none", "4em", "8em", "16em"]}
          >
            <Flex
              display={["none", "none", "none", "flex", "flex"]}
              w={"full"}
              align={"center"}
              justify={"space-evenly"}
            >
              {Array.from({ length: 3 }, (_, index) => dataState[index]).map(
                (data, index) => (
                  <STATEButton data={data} key={`state ${index}`} />
                )
              )}
            </Flex>

            <Box display={["block", "block", "block", "none", "none"]}>
              <Box mr={["10em", "20em", "none", "none", "none"]} my={"3em"}>
                <STATEButton data={dataState[0]} />
              </Box>

              <Box ml={["10em", "20em", "none", "none", "none"]} my={"3em"}>
                <STATEButton data={dataState[1]} />
              </Box>

              <Box mr={["10em", "20em", "none", "none", "none"]} my={"3em"}>
                <STATEButton data={dataState[2]} />
              </Box>
            </Box>

            {/* <STATEButton
              data={{
                date: "2023-08-18T10:15:00.000Z",
                isFirstAttended: false,
                isLastAttended: false,
                stateLogo:
                  "https://mxmdev.jamu.online/69e2d485-80c0-420a-b8c2-51ccd87c4910.png",
              }}
            /> */}
          </Flex>
        </Flex>
      </Layout>
      <Modal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        size="lg"
        isCentered
      >
        <ModalOverlay />
        <ModalContent borderRadius="md" m={"1em"} p={4}>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Box>
              <Center flexDirection={"column"}>
                <Img
                  src={selectedItem?.stateLogo}
                  boxSize={["135px", "165px"]}
                  objectFit="contain"
                  borderRadius="2xl"
                />
              </Center>
              <Center flexDirection={"column"}>
                <Text
                  mt={4}
                  color="#062D5F"
                  fontSize="md"
                  fontWeight="semibold"
                  textAlign="center"
                  letterSpacing={0.2}
                >
                  {selectedItem?.name}
                </Text>
                <Text
                  color="#062D5F"
                  fontSize="md"
                  fontWeight="semibold"
                  textAlign="center"
                  letterSpacing={0.2}
                >
                  {new Date(selectedItem?.date!).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
                <Text
                  color="#062D5F"
                  fontSize="md"
                  fontWeight="semibold"
                  textAlign="center"
                  letterSpacing={0.2}
                >
                  {selectedItem?.location}
                </Text>
                <Text my={"1em"}>{selectedItem?.stateDesc}</Text>
              </Center>
            </Box>
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
            <Button
              onClick={() => setSelectedItem(null)}
              color={"white"}
              bgColor={"#F7B70C"}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default STATE;
