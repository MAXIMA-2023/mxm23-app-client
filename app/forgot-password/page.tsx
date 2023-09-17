"use client";

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
import { HandleAxiosError, ResponseModel, useApi } from "@/services/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import Layout from "@/components/Layout";

type RequestPasswordChange = {
  nim: number;
  email: string;
};

type ExcPasswordChange = {
  password: string;
  confirmPassword: string;
};

const steps = [
  { title: "Step 1", description: "Permintaan ubah kata sandi" },
  { title: "Step 2", description: "Buat kata sandi baru" },
  { title: "Selesai", description: "Kata sandi berhasil diubah" },
];

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
        src={
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaLogo_Desktop.webp"
        }
        w={["9rem"]}
      />
      <Img
        display={["block", "none"]}
        src={
          "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaLogo_Mobile.webp"
        }
        w={["3rem"]}
      />
    </Center>
  );
};

const Footer = () => {
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

const ForgotPassword = () => {
  const [stepProgress, setStepProgress] = useState(0);
  const [token, setToken] = useState<string | undefined>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const searchParams = useSearchParams();
  const api = useApi();
  const router = useRouter();
  const session = useSession();

  const reqChangeForm = useForm<RequestPasswordChange>();
  const excForm = useForm<ExcPasswordChange>();

  useEffect(() => {
    // check for auth
    if (session.status === "authenticated") {
      router.push("/");
      return;
    }

    //URGENT RECOVERY PW DISABLE
    // router.push("/signin");

    const paramToken = searchParams.get("token");
    if (paramToken && paramToken.length === 48) {
      setToken(paramToken);
      setStepProgress(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <>
      <title>MAXIMA 2023 - Ubah Kata Sandi</title>
      {/* top */}
      <Layout showNavbar={false} showLogoHeader showTitleFooter>
        <Flex
          display={["block", "block", "flex"]}
          w={"full"}
          h={"auto"}
          minH={["none", "none", "none", "100vh"]}
          p={["2em", "2em", "5em"]}
          my={["3em", "3em", "0em"]}
          align={"center"}
          justify={"center"}
          bgImage={[
            "",
            "",
            "",
            "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/signup/MaximaBG_Signup_Desktop.webp",
          ]}
          bgPosition={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          <Box
            w={["full", "full", "full", "35em"]}
            // h={["full", "auto"]}
            p={["1em", "1em", "1em", "2.5em"]}
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
                Ubah Kata Sandi
              </Text>
            </Center>
            <Box my={"2rem"}>
              <Stepper
                size={"sm"}
                index={stepProgress > 1 ? 3 : stepProgress}
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
                    api
                      .post<ResponseModel<undefined>>(
                        "/mahasiswa/forgot-password",
                        data
                      )
                      .then((res) => {
                        Swal.fire({
                          title: "Berhasil",
                          color: "#062D5F",
                          text: "Silahkan cek email kamu untuk melanjutkan tahap perubahan kata sandi",
                          icon: "success",
                          confirmButtonColor: "#F7B70C",
                        });
                      })
                      .catch(HandleAxiosError)
                  )}
                >
                  <FormControl
                    isInvalid={!!reqChangeForm.formState.errors.nim}
                    my={"1em"}
                  >
                    <FormLabel
                      color={"#1B4173"}
                      fontSize={"sm"}
                      fontWeight={"semibold"}
                      opacity={"0.9"}
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
                        {reqChangeForm.watch("nim", 11111).toString().length < 6
                          ? "000000"
                          : "00000"}
                      </InputLeftAddon>
                      <Input
                        {...reqChangeForm.register("nim", {
                          required: "NIM harap diisi",
                          valueAsNumber: true,
                          min: {
                            value: 10000,
                            message: "NIM harus 5/6 digit",
                          },
                          max: {
                            value: 999999,
                            message: "NIM harus 5/6 digit",
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
                      color={"#1B4173"}
                      fontSize={"sm"}
                      fontWeight={"semibold"}
                      opacity={"0.9"}
                    >
                      Email Student
                    </FormLabel>
                    <InputGroup rounded={"2xl"}>
                      <Input
                        {...reqChangeForm.register("email", {
                          required: "Email student harap diisi",
                          setValueAs: (value) => `${value}@student.umn.ac.id`,
                          pattern: {
                            value: /^(\w+(\.\w+)*)@student\.umn\.ac\.id$/gm,
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
                    api
                      .post<ResponseModel<undefined>>(
                        "/mahasiswa/forgot-password/validate-token",
                        { password: data.password, token: token }
                      )
                      .then((res) => {
                        setStepProgress(2);
                      })
                      .catch(HandleAxiosError);
                  })}
                >
                  <FormControl
                    isInvalid={!!excForm.formState.errors.password}
                    my={"1em"}
                  >
                    <FormLabel
                      color={"#1B4173"}
                      fontSize={"sm"}
                      fontWeight={"semibold"}
                      opacity={"0.9"}
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
                      {excForm.formState.errors.password?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!excForm.formState.errors.confirmPassword}
                    my={"1em"}
                  >
                    <FormLabel
                      color={"#1B4173"}
                      fontSize={"sm"}
                      fontWeight={"semibold"}
                      opacity={"0.9"}
                    >
                      Konfirmasi kata sandi baru
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...excForm.register("confirmPassword", {
                          required: "Konfirmasi kata sandi baru harus diisi",
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
                            setShowConfirmPassword((value) => !value)
                          }
                        >
                          {showConfirmPassword ? (
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
      </Layout>
    </>
  );
};

export default ForgotPassword;
