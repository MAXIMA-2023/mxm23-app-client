"use client";
import Link from "next/link";
import {
  Center,
  Box,
  Text,
  Flex,
  Input,
  Stack,
  Select,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";

import { InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { HandleAxiosError, ResponseModel, useApi } from "@/services/api";
import Swal from "sweetalert2";

type RegisterData = {
  name: string;
  nim: number;
  email: string;
  prodi: string;
  angkatan: number;
  whatsapp: string;
  IdLine: string;
  password: string;
  confirmPassword: string;
};

const prodi = [
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

const tahunAngkatan = [2021, 2022, 2023];

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const session = useSession();
  const router = useRouter();
  const api = useApi();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<RegisterData>();

  return (
    <Center w={"100%"} h={"100vh"} bgColor={"#D9D9D9"}>
      <Box w={"45em"} h={"auto"} boxShadow={"lg"}>
        <Box w={"full"} p={"3.5em"} py={"2em"} bg={"#FFFFFF"} rounded={"md"}>
          <Box w={"full"}>
            <Text
              align={"center"}
              color={"#1B4173"}
              fontSize={"3xl"}
              fontWeight={"bold"}
            >
              Daftar Sekarang
            </Text>
            <Flex justifyContent={"center"}>
              <Stack direction={"row"} spacing={"2"}>
                <Text
                  align={"center"}
                  color={"#1B4173"}
                  fontSize={"sm"}
                  fontWeight={"medium"}
                >
                  Sudah punya akun?
                </Text>
                <Text
                  as={Link}
                  href={"/signin"}
                  align={"center"}
                  color={"#F7B70C"}
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  textDecoration={"underline"}
                  _hover={{ cursor: "pointer", textColor: "#DFB031" }}
                >
                  Masuk
                </Text>
              </Stack>
            </Flex>
            <form
              onSubmit={handleSubmit((data) => {
                api
                  .post<ResponseModel<undefined>>("/mahasiswa/register", {
                    nim: data.nim,
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    whatsapp: data.whatsapp,
                    angkatan: data.angkatan,
                    prodi: data.prodi,
                    idLine: data.IdLine,
                  })
                  .then(({ data }) => {
                    Swal.fire("Berhasil", data.message, "success");
                    router.push("/");
                  })
                  .catch(HandleAxiosError);
              })}
            >
              <Stack my={"1.5em"} direction={"column"} spacing={"1.25em"}>
                <Box mx="1em">
                  <FormControl isInvalid={!!errors.name}>
                    <FormLabel
                      color={"#1B4173"}
                      fontSize={"sm"}
                      fontWeight={"semibold"}
                      opacity={"0.9"}
                    >
                      Nama Lengkap
                    </FormLabel>
                    <Input
                      {...register("name", {
                        required: "Nama lengkap harus diisi",
                        pattern: {
                          value: /^[A-Za-z .]*$/,
                          message: "Nama lengkap tidak valid",
                        },
                      })}
                      w={"full"}
                      justifyContent={"center"}
                      variant={"outline"}
                      placeholder={""}
                      size={"md"}
                      rounded={"3xl"}
                      borderColor={"#E2E8F0"}
                      borderWidth={"2px"}
                      focusBorderColor={"#F7B70C"}
                    />
                    <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Flex w={"full"}>
                  <Box w={"35%"} mx={"1em"}>
                    <FormControl isInvalid={!!errors.nim}>
                      <FormLabel
                        color={"#1B4173"}
                        fontSize={"sm"}
                        fontWeight={"semibold"}
                        opacity={"0.9"}
                      >
                        NIM
                      </FormLabel>
                      <InputGroup w={"full"}>
                        <InputLeftAddon
                          rounded={"3xl"}
                          bg={"#F7B70C"}
                          textColor={"#FFFFFF"}
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
                          placeholder={""}
                          type="number"
                          rounded={"3xl"}
                          borderColor={"#E2E8F0"}
                          borderWidth={"2px"}
                          focusBorderColor={"#F7B70C"}
                        />
                      </InputGroup>
                      <FormErrorMessage>{errors.nim?.message}</FormErrorMessage>
                    </FormControl>
                  </Box>
                  <Box w={"65%"} mx={"1em"}>
                    <FormControl isInvalid={!!errors.email}>
                      <FormLabel
                        color={"#1B4173"}
                        fontSize={"sm"}
                        fontWeight={"semibold"}
                        opacity={"0.9"}
                      >
                        Email Student
                      </FormLabel>
                      <InputGroup w={"full"}>
                        <Input
                          {...register("email", {
                            required: "Email student harap diisi",
                            setValueAs: (value) => `${value}@student.umn.ac.id`,
                            pattern: {
                              value: /^[a-zA-Z0-9._%+-]+@student\.umn\.ac\.id$/,
                              message: "Email student tidak valid",
                            },
                          })}
                          w={"full"}
                          placeholder={""}
                          rounded={"3xl"}
                          borderColor={"#E2E8F0"}
                          borderWidth={"2px"}
                          focusBorderColor={"#F7B70C"}
                        />
                        <InputRightAddon
                          rounded={"3xl"}
                          bg={"#F7B70C"}
                          textColor={"#FFFFFF"}
                        >
                          @student.umn.ac.id
                        </InputRightAddon>
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.email?.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                </Flex>
                <Flex w={"full"} justifyContent={"space-between"}>
                  <Box w={"full"} mx={"1em"}>
                    <FormControl isInvalid={!!errors.prodi}>
                      <FormLabel
                        color={"#1B4173"}
                        fontSize={"sm"}
                        fontWeight={"semibold"}
                        opacity={"0.9"}
                      >
                        Program Studi
                      </FormLabel>
                      <Controller
                        name="prodi"
                        control={control}
                        rules={{
                          required: "Program studi harus dipilih",
                        }}
                        render={({ field: { onChange, value } }) => (
                          <Select
                            w={"full"}
                            variant={"outline"}
                            placeholder={"Pilih Prodi"}
                            rounded={"3xl"}
                            borderColor={"#E2E8F0"}
                            borderWidth={"2px"}
                            focusBorderColor={"#F7B70C"}
                            onChange={onChange}
                            value={value}
                          >
                            {prodi.map((prodi, index) => (
                              <option key={index} value={prodi}>
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
                  <Box w={"full"} mx={"1em"}>
                    <FormControl isInvalid={!!errors.angkatan}>
                      <FormLabel
                        color={"#1B4173"}
                        fontSize={"sm"}
                        fontWeight={"semibold"}
                        opacity={"0.9"}
                      >
                        Angkatan
                      </FormLabel>
                      <Controller
                        name="angkatan"
                        control={control}
                        rules={{
                          required: "Angkatan harus dipilih",
                        }}
                        render={({ field: { onChange, value } }) => (
                          <Select
                            w={"full"}
                            variant={"outline"}
                            placeholder={"Pilih Angkatan"}
                            rounded={"3xl"}
                            borderColor={"#E2E8F0"}
                            borderWidth={"2px"}
                            focusBorderColor={"#F7B70C"}
                            onChange={(e) => onChange(Number(e.target.value))}
                            value={value}
                          >
                            {tahunAngkatan.map((angkatan, index) => (
                              <option key={index} value={angkatan}>
                                {angkatan}
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
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Box mx={"1em"}>
                    <FormControl isInvalid={!!errors.whatsapp}>
                      <FormLabel
                        color={"#1B4173"}
                        fontSize={"sm"}
                        fontWeight={"semibold"}
                        opacity={"0.9"}
                      >
                        WhatsApp
                      </FormLabel>
                      <InputGroup w={"full"}>
                        <Input
                          {...register("whatsapp", {
                            required: "No. WhatsApp harap diisi",
                            minLength: {
                              value: 9,
                              message: "No. WhatsApp minimal 9 digit",
                            },
                            maxLength: {
                              value: 15,
                              message: "No. WhatsApp maksimal 15 digit",
                            },
                            // valueAsNumber: true,
                          })}
                          w={"full"}
                          type={"tel"}
                          placeholder={"No. WhatsApp"}
                          rounded={"3xl"}
                          borderColor={"#E2E8F0"}
                          borderWidth={"2px"}
                          focusBorderColor={"#F7B70C"}
                        />
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.whatsapp?.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                  <Box mx={"1em"}>
                    <FormControl isInvalid={!!errors.IdLine}>
                      <FormLabel
                        color={"#1B4173"}
                        fontSize={"sm"}
                        fontWeight={"semibold"}
                        opacity={"0.9"}
                      >
                        ID Line
                      </FormLabel>
                      <InputGroup w={"full"}>
                        <Input
                          {...register("IdLine", {
                            required: "ID Line harap diisi",
                          })}
                          w={"full"}
                          placeholder={"ID Line"}
                          rounded={"3xl"}
                          borderColor={"#E2E8F0"}
                          borderWidth={"2px"}
                          focusBorderColor={"#F7B70C"}
                        />
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.IdLine?.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Box mx={"1em"}>
                    <FormControl isInvalid={!!errors.password}>
                      <FormLabel
                        color={"#1B4173"}
                        fontSize={"sm"}
                        fontWeight={"semibold"}
                        opacity={"0.9"}
                      >
                        Kata sandi
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

                  <Box mx={"1em"}>
                    <FormControl isInvalid={!!errors.confirmPassword}>
                      <FormLabel
                        color={"#1B4173"}
                        fontSize={"sm"}
                        fontWeight={"semibold"}
                        opacity={"0.9"}
                      >
                        Konfirmasi kata sandi
                      </FormLabel>
                      <InputGroup>
                        <Input
                          {...register("confirmPassword", {
                            required: "Konfirmasi kata sandi harus diisi",
                            validate: (value) =>
                              value === getValues("password") ||
                              "Kata sandi tidak sama",
                          })}
                          type={showPassword ? "text" : "password"}
                          w={"full"}
                          variant={"outline"}
                          placeholder={"Konfirmasi kata sandi"}
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
                        {errors.confirmPassword?.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                </Flex>
              </Stack>
              <Box mt={"2.5em"} textAlign={"center"}>
                <Button
                  type={"submit"}
                  w={"8.5em"}
                  rounded={"full"}
                  bgColor={"#F7B70C"}
                  size={"lg"}
                  textColor={"#FFFFFF"}
                  _hover={{ bgColor: "#DFB031" }}
                >
                  DAFTAR
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
