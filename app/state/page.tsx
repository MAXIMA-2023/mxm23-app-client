"use client";

import Link from "next/link";

//importing local components
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img, HStack, Icon, Image, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BsPlus, BsTrash, BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { HandleAxiosError, ResponseModel, useApi } from "@/services/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import LoadingSpinner from "@/components/LoadingSpinner";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      const { data } = await api.get<ResponseModel<StateReg[]>>(`/state/regData`);
      setDataState(data.data!);
    } catch (error) {
      HandleAxiosError(error);
    }
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      Promise.all([fetchToggle(), fetchStateReg()]).finally(() => setIsLoading(false));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  // toggles
  const stateRegToggle = toggle.find((v) => v.name === "stateRegistration")?.toggle;

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
        boxSize={["7.5em", "10em", "10em", "12em", "1`4em`"]}
        bgColor={
          // kalo udah lewatin day state nya, kita kasih result
          stateDate < today.getTime()
            ? data?.isFirstAttended && data?.isLastAttended
              ? "#BDFFC4" // lulus -- absen full
              : "#FFABAB" // fail -- absen ga full
            : "white" // kosong -- belum state
        }
        rounded={"full"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"#F7B70C"}
        p={["0.75em", "0.75em", "0.75em", "1em", "1em"]}
        shadow={"0px 0px 32px rgb(255,255,255,0.5)"}
        _hover={{
          shadow: "0px 0px 64px rgb(255,255,255,0.75)",
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
            {/* DISABLING BUTTON (REQUEST DARI INSPICE)  */}
            {/* {stateDate > today.getTime() && ( */}
            {/*   <IconButton */}
            {/*     aria-label="delete-state" */}
            {/*     position={"absolute"} */}
            {/*     top={0} */}
            {/*     left={0} */}
            {/*     rounded={"full"} */}
            {/*     icon={<BsTrashFill />} */}
            {/*     bgColor={"white"} */}
            {/*     color={"red.500"} */}
            {/*     shadow={"0px 0px 4px rgb(0,0,0,0.25)"} */}
            {/*     _hover={{ */}
            {/*       bgColor: "white", */}
            {/*       shadow: "0px 0px 16px rgb(255,255,255,0.75)", */}
            {/*     }} */}
            {/*     onClick={() => */}
            {/*       Swal.fire({ */}
            {/*         title: `Batalkan registrasi STATE?`, */}
            {/*         color: "#062D5F", */}
            {/*         text: `Apakah kamu yakin untuk membatalkan registrasi state ${data.name}?`, */}
            {/*         icon: "warning", */}
            {/*         showCancelButton: true, */}
            {/*         confirmButtonColor: "#D33", */}
            {/*         focusCancel: true, */}
            {/*         cancelButtonColor: "#F7B70C", */}
            {/*         confirmButtonText: "Batal", */}
            {/*         cancelButtonText: "Kembali", */}
            {/*       }).then((result) => { */}
            {/*         if (result.isConfirmed) { */}
            {/*           // api call -- delete state */}
            {/*           api */}
            {/*             .delete<ResponseModel<undefined>>(`/state/cancel_registration/${data.stateID}`) */}
            {/*             .then(({ data }) => { */}
            {/*               Swal.fire({ */}
            {/*                 title: "Berhasil!", */}
            {/*                 color: "#062D5F", */}
            {/*                 text: data.message, */}
            {/*                 icon: "success", */}
            {/*                 confirmButtonColor: "#F7B70C", */}
            {/*                 cancelButtonText: "Kembali", */}
            {/*               }); */}
            {/*               fetchStateReg(); */}
            {/*             }) */}
            {/*             .catch(HandleAxiosError); */}
            {/*         } */}
            {/*       }) */}
            {/*     } */}
            {/*   /> */}
            {/* )} */}
          </>
        ) : (
          <>
            {stateRegToggle ? ( // check toggle stateRegistration
              <Stack position={"absolute"} direction={"column"} align={"center"} justify={"center"} mt={"1em"}>
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
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Text textColor={"#D01E20"} align={"end"} fontSize={["6xl", "6xl", "8xl", "8xl", "8xl"]} fontWeight={"bold"} lineHeight={"1em"} textShadow={"0px 0px 32px white"}>
            STATE
          </Text>
          <Text
            textColor={"#D01E20"}
            align={"end"}
            textShadow={"0px 0px 32px white"}
            fontSize={["5xl", "5xl", "8xl", "8xl", "8xl"]}
            fontWeight={"bold"}
            lineHeight={"1em"}
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
          fontSize={["lg", "xl"]}
          fontWeight={"normal"}
          textAlign={"right"}
          textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
        >
          Selamat datang di STATE MAXIMA 2023! Di sini kamu dapat memilih UKM yang ingin kamu ketahui!
        </Text>
        <Flex justify={"end"} w={"full"}>
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
            <Text color={"white"} fontWeight={["black", "bold"]}>
              Pilih UKM & Komunitas
            </Text>
          </Button>
        </Flex>
      </Stack>
    );
  };

  if (session.status === "loading" || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Layout title={"MAXIMA 2023 - STATE"} backButton backbuttonBgColor={"#FF6835"}>
        <Flex
          // mt={"16vh"}]
          w={"full"}
          h={"100vh"}
          px={["1em", "1em", "1em", "8em", "8em"]}
          py={["16em", "16em", "16em", "12em", "12em"]}
          // justify={"center"}
          // align={"center"}
          bgImage={["./assets/state/MaximaBG_STATE_Mobile.svg", "./assets/state/MaximaBG_STATE_Desktop.svg", "./assets/state/MaximaBG_STATE_Desktop.svg", "./assets/state/MaximaBG_STATE_Desktop.svg"]}
          bgPosition={"bottom"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          direction={"column"}
        >
          <Header />
        </Flex>
        <Flex
          mt="-4px" // ini buat ngilangin border top
          h={"100vh"}
          align={"end"}
          justify={"center"}
          ref={pilihStateRef} // ini buat scrollIntoView
          justifyContent={"space-evenly"}
          px={["none", "none", "4em", "8em", "16em"]}
          bgImage={["./assets/state/MaximaBG_STATE_Mobile_Bottom.svg", "./assets/state/MaximaBG_STATE_Desktop_Bottom.svg", "./assets/state/MaximaBG_STATE_Desktop_Bottom.svg", "./assets/state/MaximaBG_STATE_Desktop_Bottom.svg"]}
          bgPosition={["50% 28%", "center", "center", "bottom", "bottom"]}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          <Flex display={["none", "none", "none", "flex", "flex"]} w={"full"} justify={"space-evenly"}>
            {Array.from({ length: 3 }, (_, index) => dataState[index]).map((data, index) => (
              <Flex key={`state ${index}`} bgImage={"./assets/state/MaximaAssets_STATE_Lampu.svg"} bgPosition={"center"} bgSize={"contain"} bgRepeat={"no-repeat"} h={"32em"} w={"16em"} pt={"3.5em"} justify={"center"}>
                <STATEButton data={data} />
              </Flex>
            ))}
          </Flex>

          <Stack direction={"row"} align={"end"} justify={"center"} w={"full"} display={["flex", "flex", "flex", "none", "none"]}>
            <Flex
              bgImage={"./assets/state/MaximaAssets_STATE_Mobile_Lampu_Short.svg"}
              bgPosition={"bottom"}
              bgSize={"contain"}
              bgRepeat={"no-repeat"}
              h={["22em", "28em"]}
              w={"12em"}
              pt={["2em", "2.3em"]}
              justify={"center"}
              mr={["-6em", "-2em"]}
              zIndex={3}
            >
              <STATEButton data={dataState[0]} />
            </Flex>

            <Flex bgImage={"./assets/state/MaximaAssets_STATE_Mobile_Lampu.svg"} bgPosition={"bottom"} bgSize={"contain"} bgRepeat={"no-repeat"} h={["33em", "42em"]} w={"12em"} pt={["2em", "2.3em", "2.3em"]} justify={"center"} mb={"11em"}>
              <STATEButton data={dataState[1]} />
            </Flex>
            <Flex bgImage={"./assets/state/MaximaAssets_STATE_Mobile_Lampu.svg"} bgPosition={"bottom"} bgSize={"contain"} bgRepeat={"no-repeat"} h={["33em", "42em"]} w={"12em"} pt={["2em", "2.3em"]} justify={"center"} ml={["-6em", "-2em"]}>
              <STATEButton data={dataState[2]} />
            </Flex>
          </Stack>
        </Flex>
      </Layout>
      <Modal isOpen={selectedItem !== null} onClose={() => setSelectedItem(null)} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="md" m={"1em"} p={4}>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Box>
              <Center flexDirection={"column"}>
                <Img src={selectedItem?.stateLogo} boxSize={["135px", "165px"]} objectFit="contain" borderRadius="2xl" />
              </Center>
              <Center flexDirection={"column"}>
                <Text mt={4} color="#062D5F" fontSize="md" fontWeight="semibold" textAlign="center" letterSpacing={0.2}>
                  {selectedItem?.name}
                </Text>
                <Text color="#062D5F" fontSize="md" fontWeight="semibold" textAlign="center" letterSpacing={0.2}>
                  {new Date(selectedItem?.date!)
                    .toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "numeric",
                    })
                    .replace("pukul", "")}
                </Text>
                <Text color="#062D5F" fontSize="md" fontWeight="semibold" textAlign="center" letterSpacing={0.2}>
                  {selectedItem?.location}
                </Text>
                <Text my={"1em"}>{selectedItem?.stateDesc}</Text>
              </Center>
            </Box>
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
            <Button onClick={() => setSelectedItem(null)} color={"white"} bgColor={"#F7B70C"}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default STATE;
