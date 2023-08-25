"use client";
import Layout from "@/components/Layout";
import { HandleAxiosError, ResponseModel, useApi } from "@/services/api";
import { Center, Box, Text, HStack, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Spacer, Skeleton, Image } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import QRCode from "react-qr-code";

type Profile = {
  nim: number;
  name: string;
  email: string;
  whatsapp: string;
  angkatan: number;
  idLine: string;
  prodi: string;
  token: string;
};

export default function Profile() {
  const [profile, setProfile] = useState<Profile | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const api = useApi();
  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated: () => {
      Swal.fire({
        title: "Anda belum signin!",
        color: "#062D5F",
        text: "Maaf, kamu harus signin terlebih dahulu untuk mengakses Profile",
        icon: "error",
        confirmButtonColor: "#F7B70C",
      });
      router.push("/signin");
    },
  });

  useEffect(() => {
    if (session.status === "authenticated") {
      api
        .get<ResponseModel<Profile>>(`/mahasiswa/profile`)
        .then(({ data }) => {
          setProfile(data.data!);
        })
        .catch(HandleAxiosError)
        .finally(() => setIsLoading(false));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <Layout title={"MAXIMA 2023 - Profile"}>
      <Flex
        w={"full"}
        h={"auto"}
        minH={"100vh"}
        p={["none", "none", "none", "1em", "1em"]}
        justifyContent={"center"}
        alignItems={"center"}
        bgImage={["none", "none", "none", "/assets/profile/MaximaBG_Profile_Desktop.svg", "/assets/profile/MaximaBG_Profile_Desktop.svg"]}
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Stack
          direction={["column", "column", "column", "row", "row"]}
          justify={"center"}
          align={["center", "center", "center", "start", "start"]}
          w={"full"}
          h={"full"}
          mt={["8em", "8em", "8em", "4em", "4em"]}
          gap={["none", "none", "none", "1em", "1em"]}
          mx={["none", "none", "none", "8em", "16em", "32em"]}
        >
          {/* QR Panel */}
          <Skeleton isLoaded={!isLoading} my={["1em", "0", "0", "0", "0"]}>
            <Flex h={"full"} boxShadow={["none", "none", "none", "lg", "lg"]} bgColor={"white"} rounded={["none", "none", "none", "md", "md"]} align={["center", "center", "center", "start", "start"]} justify={"center"}>
              <Flex bgColor={"#C4C4C4"} m={"2em"} boxSize={"14em"} rounded={"md"} align={"center"} justify={"center"}>
                {profile?.token && <Image as={QRCode} alt="qr-absensi" value={profile?.token!} fgColor="#1B4173" />}
              </Flex>
            </Flex>
          </Skeleton>

          {/* Profile Panel */}
          <Skeleton
            as={Stack}
            isLoaded={!isLoading}
            direction={"column"}
            w={"full"}
            h={"full"}
            bgColor={"white"}
            boxShadow={["none", "none", "none", "lg", "lg"]}
            p={["2em", "4em", "4em", "2em", "2em"]}
            rounded={["none", "none", "none", "md", "md"]}
          >
            <Box w={"full"} mb={"2em"}>
              <Text align={"left"} color={"#1B4173"} fontSize={"xl"} fontWeight={"bold"}>
                Hai,
              </Text>
              <Text align={"left"} color={"#1B4173"} fontSize={"4xl"} fontWeight={"extrabold"}>
                {profile?.name}
              </Text>
            </Box>

            <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"}>
              Email Student
            </Text>
            <InputGroup w={"full"} rounded={"2xl"}>
              <Input
                type={"email"}
                disabled
                _disabled={{
                  opacity: "1",
                }}
                value={profile?.email.split("@")[0]}
                rounded={"3xl"}
              />
              <InputRightAddon rounded={"3xl"} bg={"#F7B70C"} textColor={"#FFFFFF"}>
                @student.umn.ac.id
              </InputRightAddon>
            </InputGroup>

            <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"}>
              NIM
            </Text>
            <InputGroup w={"full"} rounded={"2xl"}>
              <InputLeftAddon rounded={"3xl"} bg="#F7B70C" textColor={"#FFFFFF"}>
                000000
              </InputLeftAddon>
              <Input
                type={"text"}
                rounded={"3xl"}
                disabled
                _disabled={{
                  opacity: "1",
                }}
                value={profile?.nim}
              />
            </InputGroup>

            <Stack direction={["column", "column", "row"]} spacing={"1em"}>
              <Box w={"full"}>
                <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"} mb={"5px"}>
                  Program Studi
                </Text>
                <InputGroup w={"full"} rounded={"2xl"}>
                  <Input
                    type={"text"}
                    rounded={"3xl"}
                    disabled
                    _disabled={{
                      opacity: "1",
                    }}
                    value={profile?.prodi}
                  />
                </InputGroup>
              </Box>
              <Box w={"full"}>
                <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"} mb={"5px"}>
                  Angkatan
                </Text>
                <InputGroup w={"full"} rounded={"2xl"}>
                  <Input
                    type={"text"}
                    rounded={"3xl"}
                    disabled
                    _disabled={{
                      opacity: "1",
                    }}
                    value={profile?.angkatan}
                  />
                </InputGroup>
              </Box>
            </Stack>

            <Stack direction={["column", "column", "row"]} spacing={"1em"}>
              <Box w={"full"}>
                <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"} mb={"5px"}>
                  Whatsapp
                </Text>
                <InputGroup w={"full"} rounded={"2xl"}>
                  <Input
                    type="tel"
                    rounded={"3xl"}
                    disabled
                    _disabled={{
                      opacity: "1",
                    }}
                    value={profile?.whatsapp}
                  />
                </InputGroup>
              </Box>
              <Box w={"full"}>
                <Text align={"left"} color={"#1B4173"} fontSize={"md"} fontWeight={"semibold"} opacity={"0.9"} mb={"5px"}>
                  ID Line
                </Text>
                <InputGroup w={"full"} rounded={"2xl"}>
                  <Input
                    type={"text"}
                    rounded={"3xl"}
                    disabled
                    _disabled={{
                      opacity: "1",
                    }}
                    value={profile?.idLine}
                  />
                </InputGroup>
              </Box>
            </Stack>
          </Skeleton>
        </Stack>
      </Flex>
    </Layout>
  );
}
