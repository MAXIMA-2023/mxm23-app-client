"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

//importing chakra ui components
import {
  Box,
  Flex,
  Center,
  Text,
  Button,
  Stack,
  Img,
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

type LoginData = {
  nim: number;
  password: string;
};

const login = () => {
  const MaximaLogo = () => {
    return (
      <Center
        mt={["5vh", "5vh"]}
        position={["relative", "absolute"]}
        left={0}
        right={0}
        top={0}
      >
        <Img
          display={["none", "block"]}
          src={"/Assets/MaximaLogo_Desktop.svg"}
          w={["9rem"]}
        />
        <Img
          display={["block", "none"]}
          src={"/Assets/MaximaLogo_Mobile.svg"}
          w={["3rem"]}
        />
      </Center>
    );
  };

  const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const session = useSession();
    const router = useRouter();

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

    return (
      <Flex
        display={["block", "block", "flex", "flex", "flex"]}
        w={"full"}
        maxW={["65em", "65em", "65em", "55em", "70em"]}
        maxH={"auto"}
      >
        <Flex
          display={["block", "block", "flex", "flex", "flex"]}
          w={"full"}
          h={"auto"}
          justifyContent={"space-between"}
        >
          <Center
            w={"full"}
            display={["none", "none", "flex", "flex", "flex"]}
            mr={"5em"}
            bgColor={"#C4C4C4"}
          >
            {/* <Img bgColor={"#C4C4C4"} src={"https://storage.googleapis.com/mxm22-bucket-test/gambar-masuk.png"} w={["38em", "38em", "30em", "30em", "38em"]} /> */}
          </Center>
          <Box
            w={["full", "full", "22em", "22em", "40em"]}
            h={["full", "auto"]}
            padding={[
              "0 0em",
              "0 0em",
              "1.5em 2.5em 1em 2.5em",
              "1.5em 2.5em 1em 2.5em",
              "1.5em 2.5em 1em 2.5em",
            ]}
            borderRadius={["none", "none", "lg", "lg", "lg"]}
            boxShadow={["none", "none", "-1.2px 5px 4px 0px rgb(0,0,0,0.25)"]}
            bgColor={"#fff"}
            justifyContent={"center"}
            alignItems={"center"}
            blur={[0, 15]}
            border={["none", "none", "1px solid rgb(27, 65, 115, 0.25)"]}
            overflowY={"auto"}
            zIndex={1}
          >
            <Center mt={"4vh"}>
              <Text
                fontSize={["3xl", "3xl", "3xl", "2xl", "3xl"]}
                fontWeight={"bold"}
                color={"#1B4173"}
              >
                Masuk
              </Text>
            </Center>
            <Center mb={["0em", "0em", "1em"]}>
              <Text
                fontSize={["md", "md", "md", "sm", "md"]}
                color={"#1B4173"}
                fontWeight={"medium"}
              >
                Belum punya akun?{" "}
                <Text
                  as={Link}
                  href={"/signup"}
                  style={{
                    color: "#F7B70C",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Daftar
                </Text>
              </Text>
            </Center>
            <Center display={["flex", "flex", "none"]} my={"1.5em"}>
              {/* <Img display={["block", "block", "none"]} src={"https://storage.googleapis.com/mxm22-bucket-test/gambar-masuk-mobile.png"} w={"auto"} /> */}
            </Center>
            <Box>
              <form
                onSubmit={handleSubmit((data) =>
                  signIn("credentials", {
                    ...data,
                    callbackUrl: "/",
                    redirect: false,
                  })
                    .then((res) => {
                      if (res?.error) {
                        Swal.fire("Error!", res.error, "error");
                        return;
                      }
                      Swal.fire(
                        "Success!",
                        "Selamat, kamu berhasil signin!",
                        "success"
                      );
                    })
                    .catch((err) => {
                      Swal.fire(
                        "Error!",
                        "Terjadi kesalahan saat sign in",
                        "error"
                      );
                      console.error(err);
                    })
                )}
              >
                <Stack direction={["column"]} spacing={[5, 4]}>
                  <Box w={"full"}>
                    <FormControl isInvalid={!!errors.nim}>
                      <FormLabel
                        display={["none", "none", "block"]}
                        fontSize={"sm"}
                        textColor={"#1B4173"}
                        fontWeight={"semibold"}
                      >
                        NIM
                      </FormLabel>
                      <InputGroup>
                        <InputLeftAddon
                          fontSize={"sm"}
                          m={"auto"}
                          p={2}
                          bgColor={"#F7B70C"}
                          color={"white"}
                          borderTopLeftRadius={"44px"}
                          borderBottomLeftRadius={"44px"}
                        >
                          000000
                        </InputLeftAddon>
                        <Input
                          {...register("nim", {
                            required: "NIM harap diisi",
                            min: {
                              value: 10000,
                              message: "NIM minimal 5 digit",
                            },
                            max: {
                              value: 99999,
                              message:
                                "NIM maksimal 5 digit, kamu tidak perlu memasukkan 000000",
                            },
                            valueAsNumber: true,
                          })}
                          w={"full"}
                          variant={"outline"}
                          // placeholder={"NIM"}
                          rounded={"3xl"}
                          borderColor={"#E2E8F0"}
                          borderWidth={"2px"}
                          focusBorderColor={"#F7B70C"}
                        />
                      </InputGroup>
                      <FormErrorMessage>{errors.nim?.message}</FormErrorMessage>
                    </FormControl>
                  </Box>
                  <Box w={"full"}>
                    <FormControl isInvalid={!!errors.password}>
                      <FormLabel
                        display={["none", "none", "block"]}
                        fontSize={"sm"}
                        textColor={"#1B4173"}
                        fontWeight={"semibold"}
                      >
                        Password
                      </FormLabel>
                      <InputGroup>
                        <Input
                          {...register("password", {
                            required: "Kata sandi harus diisi",
                            maxLength: {
                              value: 50,
                              message: "Kata sandi mu terlalu panjang",
                            },
                            minLength: {
                              value: 8,
                              message: "Kata sandi minimal 8 karakter",
                            },
                          })}
                          type={showPassword ? "text" : "password"}
                          w={"full"}
                          variant={"outline"}
                          placeholder={"Kata sandi"}
                          rounded={"3xl"}
                          borderColor={"#E2E8F0"}
                          borderWidth={"2px"}
                          focusBorderColor={"#F7B70C"}
                        />
                        <InputRightElement py={"1.25em"} width="4.5rem">
                          <Button
                            variant={"none"}
                            color={"#1B4173"}
                            onClick={() => setShowPassword((value) => !value)}
                          >
                            {showPassword ? (
                              <Icon as={BiHide} boxSize={5} />
                            ) : (
                              <Icon as={BiShow} boxSize={5} />
                            )}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.password?.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>

                  <Box display={["block", "block", "block"]}>
                    <Text
                      fontSize={["sm"]}
                      my={"0.5em"}
                      color={"#1B4173"}
                      fontWeight={"medium"}
                    >
                      Lupa kata sandimu?{" "}
                      <Text
                        as={Link}
                        href={"/forgot-password"}
                        style={{
                          color: "#F7B70C",
                          fontWeight: "bold",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Klik di sini
                      </Text>
                    </Text>
                  </Box>
                </Stack>

                <Flex w={"100%"} justifyContent={"center"} mt={"2em"}>
                  <Button
                    w={["full", "full", "auto"]}
                    px={["2.1em"]}
                    borderRadius={"full"}
                    type={"submit"}
                    color={"#fff"}
                    colorScheme={"orange"}
                    bgColor={"#F7B70C"}
                    isLoading={session.status === "loading"}
                  >
                    MASUK
                  </Button>
                </Flex>
              </form>
            </Box>
          </Box>
        </Flex>
      </Flex>
    );
  };

  const Footer = () => {
    return (
      <Center mt={"-3em"}>
        <Text color={"#1B4173"} fontSize={"sm"} fontWeight={"bold"}>
          MAXIMA 2023
        </Text>
      </Center>
    );
  };

  return (
    <Flex minH={"100vh"} bgColor={"white"}>
      <Box w={"full"} zIndex={"0"}>
        <MaximaLogo />
        <Center w={"full"} h={"100vh"}>
          <LoginForm />
        </Center>
        <Footer />
      </Box>
    </Flex>
  );
};

export default login;
