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
  Img,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormErrorMessage,
  InputRightElement,
  Icon,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { BiHide, BiShow } from "react-icons/bi";
import { HandleAxiosError, ResponseModel, useApi } from "@/services/api";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

type RegisterForm = {
  nim: number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  whatsapp: string;
  angkatan: number;
  prodi: string;
  idLine: string;
};

const dataProdi = [
  "Akuntansi",
  "Arsitektur",
  "DKV",
  "Film dan Animasi",
  "Informatika",
  "Jurnalistik",
  "Manajemen",
  "Perhotelan",
  "Sistem Informasi",
  "Strategic Communication",
  "Teknik Elektro",
  "Teknik Fisika",
  "Teknik Komputer",
];

const tahunAngkatan = [2019, 2020, 2021, 2022, 2023];

export default function Signup() {
  const [isSelanjutnya, setIsSelanjutnya] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const session = useSession();
  const api = useApi();
  const router = useRouter();

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    getValues,
    trigger,
  } = useForm<RegisterForm>();

  useEffect(() => {
    if (session.status === "authenticated") {
      Swal.fire({
        title: "Error!",
        color: "#062D5F",
        text: "Kamu sudah signin sebelumnya!",
        icon: "error",
        confirmButtonColor: "#F7B70C",
      });
      router.push("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  function handleSelanjutnya() {
    trigger(["name", "nim", "email", "password", "confirmPassword"]).then((v) =>
      setIsSelanjutnya(v)
    );
  }

  function handleKembali() {
    setIsSelanjutnya(false);
  }

  return (
    <>
      <Layout showNavbar={false} showLogoHeader showTitleFooter>
        <Flex
          w={"full"}
          h={"auto"}
          minH={"100vh"}
          p={"1em"}
          justifyContent={"center"}
          alignItems={"center"}
          bgImage={["", "", "", "/Assets/signup/MaximaBG_Signup_Desktop.svg"]}
          bgPosition={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          <Box
            w={["full", "full", "35em"]}
            h={"auto"}
            px={["1em", "1em", "2.5em"]}
            py={["0", "1.5em"]}
            bgColor={"white"}
            borderRadius={"lg"}
            boxShadow={["none", "none", "-1.2px 5px 4px rgb(0,0,0,0.25)"]}
          >
            <Text
              fontSize={"3xl"}
              fontWeight={"bold"}
              color={"#1B4173"}
              align={"center"}
            >
              Daftar Sekarang
            </Text>
            <Text
              fontSize={"md"}
              fontWeight={"medium"}
              color={"#1B4173"}
              align={"center"}
            >
              Sudah punya akun?{" "}
              <Text
                as={Link}
                href={"/signin"}
                color={"#F7B70C"}
                textDecoration={"underline"}
                fontWeight={"bold"}
                cursor={"pointer"}
              >
                Masuk
              </Text>
            </Text>
            <Flex
              mt={"1.5em"}
              as={"form"}
              w={"100%"}
              h={"auto"}
              minH={"20em"}
              direction={"column"}
              onSubmit={handleSubmit((data) => {
                api
                  .post<ResponseModel<undefined>>(`/mahasiswa/register`, {
                    nim: data.nim,
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    whatsapp: data.whatsapp,
                    angkatan: data.angkatan,
                    prodi: data.prodi,
                    idLine: data.idLine,
                  })
                  .then((res) => {
                    Swal.fire({
                      title: "Berhasil!",
                      color: "#062D5F",
                      text: "Berhasil mendaftarkan akun, silahkan signin untuk melanjutkan perjalananmu!",
                      icon: "success",
                      confirmButtonColor: "#F7B70C",
                    });
                    router.push("/signin");
                  })
                  .catch(HandleAxiosError);
              })}
            >
              <Center w={"full"}>
                {!isSelanjutnya ? (
                  <>
                    <Stack w={"full"} spacing={"1em"}>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Box w={"55%"} mr={"1em"}>
                          <FormControl isInvalid={!!errors.name}>
                            <FormLabel
                              fontSize={"sm"}
                              fontWeight={"semibold"}
                              color={"rgb(27,65,114,0.8)"}
                            >
                              Nama Lengkap
                            </FormLabel>
                            <Input
                              {...register("name", {
                                required: "Nama Lengkap harus diisi",
                                pattern: {
                                  value: /^[A-Za-z .]*$/,
                                  message: "Nama lengkap tidak valid",
                                },
                              })}
                              type={"text"}
                              border={"2px"}
                              borderColor={"#E2E8F0"}
                              borderRadius={"full"}
                            />
                            <FormErrorMessage>
                              {errors.name?.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                        <Box w={"45%"}>
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
                                type={"number"}
                                border={"2px"}
                                borderColor={"#E2E8F0"}
                                borderRadius={"full"}
                              />
                            </InputGroup>
                            <FormErrorMessage>
                              {errors.nim?.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                      </Flex>
                      <Box>
                        <FormControl isInvalid={!!errors.email}>
                          <FormLabel
                            fontSize={"sm"}
                            fontWeight={"semibold"}
                            color={"rgb(27,65,114,0.8)"}
                          >
                            Email Student
                          </FormLabel>
                          <InputGroup>
                            <Input
                              {...register("email", {
                                required: "Email harus diisi",
                                setValueAs: (value) =>
                                  `${value.toLowerCase()}@student.umn.ac.id`,
                                pattern: {
                                  value: /^(\w+(.\w+)*)(@student.umn.ac.id)$/gm,
                                  message:
                                    "Email student tidak valid, kamu tidak perlu menuliskan @student.umn.ac.id",
                                },
                              })}
                              type={"text"}
                              border={"2px"}
                              borderColor={"#E2E8F0"}
                              borderRadius={"full"}
                            />
                            <InputRightAddon
                              rounded={"3xl"}
                              bg={"#F7B70C"}
                              textColor={"#FFFFFF"}
                              fontWeight={"semibold"}
                              fontSize={"sm"}
                            >
                              @student.umn.ac.id
                            </InputRightAddon>
                          </InputGroup>
                          <FormErrorMessage>
                            {errors.email?.message}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Box w={"full"} mr={"1em"}>
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
                                <Button
                                  variant={"none"}
                                  onClick={handleShowPassword}
                                >
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
                        </Box>
                        <Box w={"full"}>
                          <FormControl isInvalid={!!errors.confirmPassword}>
                            <FormLabel
                              fontSize={"sm"}
                              fontWeight={"semibold"}
                              color={"rgb(27,65,114,0.8)"}
                            >
                              Konfirmasi Password
                            </FormLabel>
                            <InputGroup>
                              <Input
                                {...register("confirmPassword", {
                                  required: "Konfirmasi Password harus diisi",
                                  min: {
                                    value: 8,
                                    message:
                                      "Konfirmasi Password minimum 8 karakter",
                                  },
                                  validate: (value) =>
                                    value === getValues("password") ||
                                    "Konfirmasi Password tidak sama dengan Password",
                                })}
                                w={"full"}
                                type={showConfirmPassword ? "text" : "password"}
                                rounded={"full"}
                                borderColor={"#E2E8F0"}
                                borderWidth={"2px"}
                              />
                              <InputRightElement py={"1.25em"} width="4.5rem">
                                <Button
                                  variant={"none"}
                                  onClick={handleShowConfirmPassword}
                                >
                                  {showConfirmPassword ? (
                                    <Icon as={BiShow} boxSize={5} />
                                  ) : (
                                    <Icon as={BiHide} boxSize={5} />
                                  )}
                                </Button>
                              </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>
                              {errors.confirmPassword?.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                      </Flex>
                    </Stack>
                  </>
                ) : (
                  <>
                    <Stack w={"full"} spacing={"1em"}>
                      <Stack w={"full"} direction={"row"} spacing={"1em"}>
                        <Box w={"65%"}>
                          <FormControl isInvalid={!!errors.prodi}>
                            <FormLabel
                              fontSize={"sm"}
                              fontWeight={"semibold"}
                              color={"rgb(27,65,114,0.8)"}
                            >
                              Program Studi
                            </FormLabel>
                            <Controller
                              control={control}
                              name="prodi"
                              rules={{
                                required: "Prodi harus dipilih",
                              }}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  placeholder="Pilih Prodi"
                                  border={"2px"}
                                  borderColor={"#E2E8F0"}
                                  borderRadius={"full"}
                                >
                                  {dataProdi.map((prodi) => (
                                    <option value={prodi} key={prodi}>
                                      {prodi}
                                    </option>
                                  ))}
                                </Select>
                              )}
                            />
                            <FormErrorMessage>
                              {errors.prodi?.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                        <Box w={"45%"}>
                          <FormControl isInvalid={!!errors.angkatan}>
                            <FormLabel
                              fontSize={"sm"}
                              fontWeight={"semibold"}
                              color={"rgb(27,65,114,0.8)"}
                            >
                              Angkatan
                            </FormLabel>
                            <Controller
                              control={control}
                              name="angkatan"
                              rules={{
                                required: "Angkatan harus dipilih",
                                // no value as number?
                              }}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(parseInt(e.target.value))
                                  }
                                  placeholder="Pilih Angkatan"
                                  border={"2px"}
                                  borderColor={"#E2E8F0"}
                                  borderRadius={"full"}
                                >
                                  {tahunAngkatan.map((tahun) => (
                                    <option value={tahun} key={tahun}>
                                      {tahun}
                                    </option>
                                  ))}
                                </Select>
                              )}
                            />
                            <FormErrorMessage>
                              {errors.angkatan?.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                      </Stack>
                      <Stack w={"full"} direction={"row"} spacing={"1em"}>
                        <Box w={"65%"}>
                          <FormControl isInvalid={!!errors.whatsapp}>
                            <FormLabel
                              fontSize={"sm"}
                              fontWeight={"semibold"}
                              color={"rgb(27,65,114,0.8)"}
                            >
                              Whatsapp
                            </FormLabel>
                            <Input
                              {...register("whatsapp", {
                                required: "No. Whatsapp harus diisi",
                                pattern: {
                                  value: /^(\+62|62|0)8[1-9][0-9]{6,9}$/,
                                  message: "No. Whatsapp tidak valid",
                                },
                              })}
                              type={"text"}
                              border={"2px"}
                              borderColor={"#E2E8F0"}
                              borderRadius={"full"}
                            />
                            <FormErrorMessage>
                              {errors.whatsapp?.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                        <Box w={"45%"}>
                          <FormControl isInvalid={!!errors.idLine}>
                            <FormLabel
                              fontSize={"sm"}
                              fontWeight={"semibold"}
                              color={"rgb(27,65,114,0.8)"}
                            >
                              ID LINE
                            </FormLabel>
                            <Input
                              {...register("idLine", {
                                required: "ID Line harus diisi",
                              })}
                              type={"text"}
                              border={"2px"}
                              borderColor={"#E2E8F0"}
                              borderRadius={"full"}
                            />
                            <FormErrorMessage>
                              {errors.idLine?.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                      </Stack>
                    </Stack>
                  </>
                )}
              </Center>
              <Center w={"full"} h={"auto"} mt={"auto"}>
                {!isSelanjutnya ? (
                  <>
                    <Button
                      display={isSelanjutnya ? "none" : "flex"}
                      w={"10em"}
                      py={"1.5em"}
                      rounded={"full"}
                      bg={"#F7B70C"}
                      color={"#FFFFFF"}
                      fontWeight={"bold"}
                      _hover={{ bg: "#F7B70C" }}
                      onClick={handleSelanjutnya}
                    >
                      SELANJUTNYA
                    </Button>
                  </>
                ) : (
                  <>
                    <Stack spacing={"1em"}>
                      <Button
                        type="submit"
                        w={"10em"}
                        py={"1.5em"}
                        rounded={"full"}
                        bg={"#F7B70C"}
                        color={"#FFFFFF"}
                        fontWeight={"bold"}
                        _hover={{ bg: "#F7B70C" }}
                      >
                        DAFTAR
                      </Button>
                      <Button
                        display={isSelanjutnya ? "flex" : "none"}
                        w={"10em"}
                        py={"1.5em"}
                        rounded={"full"}
                        bg={"white"}
                        border={"2px"}
                        borderColor={"#F7B70C"}
                        color={"#F7B70C"}
                        fontWeight={"bold"}
                        _hover={{ bg: "#F7B70C", color: "white" }}
                        onClick={handleKembali}
                      >
                        KEMBALI
                      </Button>
                    </Stack>
                  </>
                )}
              </Center>
            </Flex>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
