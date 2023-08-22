"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";

//importing chakra ui components
import {
  Box,
  Flex,
  Center,
  Text,
  Button,
  Stack,
  Image,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormErrorMessage,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSession, signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { BiHide, BiShow } from "react-icons/bi";
import { useApi } from "@/services/api";

type LoginData = {
  nim: number;
  password: string;
};

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const session = useSession();
  const api = useApi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Layout showNavbar={false} showLogoHeader showTitleFooter>
        <Center
          display={["block", "block", "flex"]}
          w={"full"}
          h={["auto", "auto", "100vh"]}
          py={["0em", "2em", "27.5em", "0em"]}
          mt={["2em", "0em"]}
          mb={["5em", "0em"]}
        >
          <Stack
            w={["full", "full", "80%"]}
            h={"auto"}
            direction={"row"}
            spacing={"3em"}
          >
            <Center display={["none", "none", "none", "flex"]} w={"65%"}>
              <Image
                src={"./assets/signin/MaximaBG_Signin_Desktop.svg"}
                alt={"MAXIMA Logo"}
              />
            </Center>
            <Box
              w={["full", "full", "full", "35%"]}
              h={"auto"}
              p={["2em", "2em", "2.5em"]}
              bgColor={"white"}
              boxShadow={["none", "none", "0px 4px 4px rgb(0,0,0,0.25)"]}
              border={["none", "none", "1px"]}
              borderColor={["none", "none", "rgb(27,65,115,0.25)"]}
              borderRadius={"lg"}
            >
              <Box mb={"2em"}>
                <Text
                  fontSize={"3xl"}
                  fontWeight={"bold"}
                  color={"#1B4173"}
                  align={"center"}
                >
                  Masuk
                </Text>
                <Box>
                  <Text
                    fontSize={"md"}
                    fontWeight={"medium"}
                    color={"#1B4173"}
                    align={"center"}
                  >
                    Belum punya akun?{" "}
                    <Link href={"/signup"}>
                      <span
                        style={{
                          color: "#F7B70C",
                          textDecoration: "underline",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        Daftar
                      </span>
                    </Link>
                  </Text>
                </Box>
                <Center
                  display={["flex", "flex", "flex", "none"]}
                  w={"full"}
                  my={"2em"}
                >
                  <Image w={"full"} h={"10em"} src={""} bgColor={"grey"} />
                </Center>
              </Box>
              <form
                onSubmit={handleSubmit((data) => {
                  signIn("credentials", {
                    ...data,
                    callbackUrl: "/",
                    redirect: false,
                  })
                    .then((res) => {
                      if (res?.error) {
                        Swal.fire({
                          icon: "error",
                          color: "#062D5F",
                          title: "Error!",
                          text: res.error,
                          confirmButtonColor: "#F7B70C",
                        });
                        return;
                      }
                      Swal.fire({
                        icon: "success",
                        color: "#062D5F",
                        title: "Berhasil!",
                        text: "Selamat, kamu berhasil masuk!",
                        confirmButtonColor: "#F7B70C",
                      });
                    })
                    .catch((err) => {
                      Swal.fire({
                        icon: "error",
                        color: "#062D5F",
                        title: "Error!",
                        text: "Terjadi kesalahan saat masuk, silahkan coba lagi!",
                        confirmButtonColor: "#F7B70C",
                      });
                      console.error(err);
                    });
                })}
              >
                <Stack direction={"column"} spacing={"1.5em"}>
                  <Box>
                    <FormControl isInvalid={!!errors.nim}>
                      <FormLabel
                        fontSize={"sm"}
                        fontWeight={"semibold"}
                        color={"rgb(27,65,114,0.8)"}
                      >
                        NIM
                      </FormLabel>
                      <InputGroup>
                        <InputLeftAddon
                          py={"1.5em"}
                          rounded={"3xl"}
                          bg={"#F7B70C"}
                          textColor={"#FFFFFF"}
                          fontWeight={"semibold"}
                          fontSize={"sm"}
                        >
                          000000
                        </InputLeftAddon>
                        <Input
                          {...register("nim", {
                            required: "NIM harus diisi",
                            min: {
                              value: 10000,
                              message: "NIM harus 5 digit",
                            },
                            maxLength: {
                              value: 99999,
                              message: "NIM harus 5 digit",
                            },
                            valueAsNumber: true,
                          })}
                          py={"1.25em"}
                          type={"number"}
                          border={"2px"}
                          borderColor={"#E2E8F0"}
                          borderRadius={"full"}
                        />
                      </InputGroup>
                      <FormErrorMessage>{errors.nim?.message}</FormErrorMessage>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isInvalid={!!errors.password}>
                      <FormLabel
                        fontSize={"sm"}
                        fontWeight={"semibold"}
                        color={"rgb(27,65,114,0.8)"}
                      >
                        Password
                      </FormLabel>
                      <InputGroup>
                        <Input
                          {...register("password", {
                            required: "Password harus diisi",
                            minLength: {
                              value: 8,
                              message: "Password minimum 8 karakter",
                            },
                          })}
                          w={"full"}
                          type={showPassword ? "text" : "password"}
                          rounded={"full"}
                          borderColor={"#E2E8F0"}
                          borderWidth={"2px"}
                        />
                        <InputRightElement py={"1.25em"} width="4.5rem">
                          <Button variant={"none"} onClick={handleShowPassword}>
                            {showPassword ? (
                              <Icon as={BiShow} boxSize={5} />
                            ) : (
                              <Icon as={BiHide} boxSize={5} />
                            )}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.password?.message}
                      </FormErrorMessage>
                    </FormControl>
                    <Text
                      mt={"0.5em"}
                      fontSize={"sm"}
                      fontWeight={"semibold"}
                      color={"rgb(27,65,114,0.8)"}
                    >
                      Lupa kata sandimu?{" "}
                      <Link href={"/forgot-password"}>
                        <span
                          style={{
                            color: "#F7B70C",
                            textDecoration: "underline",
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                        >
                          Klik disini
                        </span>
                      </Link>
                    </Text>
                  </Box>
                </Stack>
                <Center mt={"2em"}>
                  <Button
                    type={"submit"}
                    w={["full", "full", "10em"]}
                    py={"1.5em"}
                    rounded={"full"}
                    bg={"#F7B70C"}
                    color={"#FFFFFF"}
                    fontWeight={"bold"}
                    _hover={{ bg: "#C89E30" }}
                  >
                    MASUK
                  </Button>
                </Center>
              </form>
            </Box>
          </Stack>
        </Center>
      </Layout>
    </>
  );
}
