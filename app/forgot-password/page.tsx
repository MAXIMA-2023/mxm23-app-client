"use client";
import { useSearchParams } from "next/navigation";

//importing chakra ui components
import {
  Box,
  Flex,
  Center,
  Text,
  Button,
  Img,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepSeparator,
  StepIcon,
  StepNumber,
  InputRightAddon,
  FormErrorMessage,
  InputRightElement,
  Icon,
  Link,
} from "@chakra-ui/react";

import { BiShow, BiHide } from "react-icons/bi";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

type RequestPasswordChange = {
  nim: number;
  email: string;
};

type ExcPasswordChange = {
  password: string;
  confirmPassword: string;
};

const steps = [
  { title: "Step 1", description: "Masukkan NIM dan Email" },
  { title: "Step 2", description: "Buat kata sandi baru" },
  { title: "Selesai", description: "Kata sandi berhasil diubah" },
];

const MaximaLogo = () => {
  return (
    <Center
      mt={["-3vh", "5vh"]}
      position={["relative", "absolute"]}
      left={0}
      right={0}
      top={0}
    >
      <Img display={"block"} src={"/Assets/MaximaLogo.svg"} w={["9rem"]} />
    </Center>
  );
};

const Footer = () => {
  // const router = useRouter();
  return (
    <Center
      position={["absolute"]}
      left={0}
      right={0}
      bottom={[0]}
      mb={["5vh", "5vh"]}
      mt={["8vh", "0"]}
    >
      <Text color={"#1B4173"} fontSize={"sm"} fontWeight={"bold"}>
        MAXIMA 2023
      </Text>
    </Center>
  );
};

const Login = () => {
  const [stepProgress, setStepProgress] = useState(0);
  const [token, setToken] = useState<string | undefined>();
  const [showPassword, setShowPassword] = useState(false);

  const searchParams = useSearchParams();
  const reqChangeForm = useForm<RequestPasswordChange>();
  const excForm = useForm<ExcPasswordChange>();

  useEffect(() => {
    const paramToken = searchParams.get("token");
    if (paramToken && paramToken.length === 48) {
      setToken(token);
      setStepProgress(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <title>MAXIMA 2023 - Ubah Kata Sandi</title>
      <Flex minH={"100vh"} bgColor={"white"}>
        <Box w={"full"} zIndex={"0"}>
          <Box mt={"9vh"}>
            <MaximaLogo />
          </Box>
          <Center position={["absolute"]} left={0} right={0} top={0} bottom={0}>
            <Flex
              display={["block", "block", "flex", "flex", "flex"]}
              w={"full"}
              maxW={["65em", "65em", "65em", "55em", "65em"]}
              maxH={"auto"}
              mx={"3em"}
            >
              <Flex
                display={["block", "block", "flex", "flex", "flex"]}
                w={"full"}
                h={"auto"}
                justifyContent={"center"}
              >
                <Box
                  w={["full", "full", "full", "40em", "40em"]}
                  h={["full", "auto"]}
                  padding={[
                    "0 0em",
                    "0 0em",
                    "1.5em 2.5em 1em 2.5em",
                    "1.5em 2.5em 1em 2.5em",
                    "1.5em 2.5em 1em 2.5em",
                  ]}
                  borderRadius={["none", "none", "lg", "lg", "lg"]}
                  boxShadow={[
                    "none",
                    "none",
                    "-1.2px 5px 4px 0px rgb(0,0,0,0.25)",
                  ]}
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
                      Ubah Kata Sandi
                    </Text>
                  </Center>
                  <Box my={"2rem"}>
                    <Stepper
                      size={"sm"}
                      index={stepProgress > 1 ? stepProgress + 1 : stepProgress}
                      colorScheme="facebook"
                      color={"#1B4173"}
                    >
                      {steps.map((step, index) => (
                        <Step key={index}>
                          <StepIndicator>
                            <StepStatus
                              complete={<StepIcon />}
                              incomplete={<StepNumber />}
                              active={<StepNumber />}
                            />
                          </StepIndicator>

                          <StepSeparator />
                        </Step>
                      ))}
                    </Stepper>
                    <Box mt={"1em"}>
                      <Text fontSize={"lg"} color={"#1B4173"}>
                        <Text as="span" fontWeight={"bold"}>
                          {steps[stepProgress].title} :{" "}
                        </Text>
                        {steps[stepProgress].description}
                      </Text>
                    </Box>
                  </Box>

                  {stepProgress === 0 && (
                    <Box>
                      <form
                        onSubmit={reqChangeForm.handleSubmit((data) =>
                          // !TODO: Request API Password Change
                          console.log(data)
                        )}
                      >
                        <FormControl
                          isInvalid={!!reqChangeForm.formState.errors.nim}
                          my={"1em"}
                        >
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
                              {...reqChangeForm.register("nim", {
                                required: "NIM harap diisi",
                                valueAsNumber: true,
                                maxLength: {
                                  value: 5,
                                  message:
                                    "NIM harus 5 digit, kamu tidak perlu memasukkan 000000",
                                },
                                minLength: {
                                  value: 5,
                                  message: "NIM harus 5 digit",
                                },
                              })}
                              size={"md"}
                              borderLeft={"none"}
                              borderColor={"#E2E8F0"}
                              placeholder={""}
                              _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                              type={"text"}
                              name={"nim"}
                              textColor={"black"}
                              borderRadius={"full"}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {reqChangeForm.formState.errors.nim?.message}
                          </FormErrorMessage>
                        </FormControl>
                        <FormControl
                          isInvalid={!!reqChangeForm.formState.errors.email}
                          my={"1em"}
                        >
                          <FormLabel
                            display={["none", "none", "block"]}
                            fontSize={"sm"}
                            textColor={"#1B4173"}
                            fontWeight={"semibold"}
                          >
                            Email Student
                          </FormLabel>
                          <InputGroup rounded={"2xl"}>
                            <Input
                              {...reqChangeForm.register("email", {
                                required: "Email student harap diisi",
                                setValueAs: (value) =>
                                  `${value}@student.umn.ac.id`,
                                pattern: {
                                  value:
                                    /^[a-zA-Z0-9._%+-]+@student\.umn\.ac\.id$/,
                                  message: "Email student tidak valid",
                                },
                              })}
                              size={"md"}
                              borderLeft={"none"}
                              borderColor={"#E2E8F0"}
                              _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                              type={"text"}
                              name={"email"}
                              textColor={"black"}
                              borderRadius={"full"}
                              // _hover={{ border: "solid #CBD5E0" }}
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
                            {reqChangeForm.formState.errors.email?.message}
                          </FormErrorMessage>
                        </FormControl>
                        <Flex
                          w={"100%"}
                          justifyContent={"center"}
                          mt={"3em"}
                          mb={"1em"}
                        >
                          <Button
                            // isLoading
                            w={["full", "full", "auto"]}
                            px={["2.1em"]}
                            borderRadius={"full"}
                            type={"submit"}
                            color={"#fff"}
                            colorScheme={"orange"}
                            bgColor={"#F7B70C"}
                          >
                            Kirim Permintaan
                          </Button>
                        </Flex>
                      </form>
                    </Box>
                  )}

                  {stepProgress === 1 && (
                    <Box>
                      <form
                        onSubmit={excForm.handleSubmit((data) => {
                          // !TODO: Change password API Password Change
                          console.log(data);
                          setStepProgress(2);
                        })}
                      >
                        <FormControl
                          isInvalid={!!excForm.formState.errors.password}
                          my={"1em"}
                        >
                          <FormLabel
                            display={["none", "none", "block"]}
                            fontSize={"sm"}
                            textColor={"#1B4173"}
                            fontWeight={"semibold"}
                          >
                            Kata sandi baru
                          </FormLabel>
                          <InputGroup>
                            <Input
                              {...excForm.register("password", {
                                required: "Kata sandi baru harus diisi",
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
                              size={"md"}
                              borderColor={"#E2E8F0"}
                              placeholder={""}
                              _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                              textColor={"black"}
                              borderRadius={"full"}
                            />
                            <InputRightElement py={"1.25em"} width="4.5rem">
                              <Button
                                variant={"none"}
                                color={"#1B4173"}
                                onClick={() =>
                                  setShowPassword((value) => !value)
                                }
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
                            {excForm.formState.errors.password?.message}
                          </FormErrorMessage>
                        </FormControl>

                        <FormControl
                          isInvalid={!!excForm.formState.errors.confirmPassword}
                          my={"1em"}
                        >
                          <FormLabel
                            display={["none", "none", "block"]}
                            fontSize={"sm"}
                            textColor={"#1B4173"}
                            fontWeight={"semibold"}
                          >
                            Konfirmasi kata sandi baru
                          </FormLabel>
                          <InputGroup>
                            <Input
                              {...excForm.register("confirmPassword", {
                                required:
                                  "Konfirmasi kata sandi baru harus diisi",
                                validate: (value) =>
                                  value === excForm.getValues("password") ||
                                  "Kata sandi tidak sama",
                              })}
                              type={showPassword ? "text" : "password"}
                              size={"md"}
                              borderColor={"#E2E8F0"}
                              _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                              textColor={"black"}
                              borderRadius={"full"}
                              // _hover={{ border: "solid #CBD5E0" }}
                            />
                            <InputRightElement py={"1.25em"} width="4.5rem">
                              <Button
                                variant={"none"}
                                color={"#1B4173"}
                                onClick={() =>
                                  setShowPassword((value) => !value)
                                }
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
                            {excForm.formState.errors.confirmPassword?.message}
                          </FormErrorMessage>
                        </FormControl>
                        <Flex
                          w={"100%"}
                          justifyContent={"center"}
                          mt={"3em"}
                          mb={"1em"}
                        >
                          <Button
                            // isLoading
                            w={["full", "full", "auto"]}
                            px={["2.1em"]}
                            borderRadius={"full"}
                            type={"submit"}
                            color={"#fff"}
                            colorScheme={"orange"}
                            bgColor={"#F7B70C"}
                          >
                            Ubah
                          </Button>
                        </Flex>
                      </form>
                    </Box>
                  )}

                  {stepProgress > 1 && (
                    <Box>
                      <Text fontSize={"lg"} color={"#1B4173"}>
                        Maximers, kata sandimu telah berhasil diperbaharui{" "}
                        <Link
                          href={"/signin"}
                          color={"#F7B70C"}
                          fontWeight={"bold"}
                          textDecoration={"underline"}
                          cursor={"pointer"}
                        >
                          klik disini
                        </Link>{" "}
                        untuk masuk.
                      </Text>
                    </Box>
                  )}
                </Box>
              </Flex>
            </Flex>
          </Center>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default Login;
