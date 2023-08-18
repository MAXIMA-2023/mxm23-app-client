"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

//importing local components
import MaximaLogo from "../public/assets/MaximaLogo_Navbar.svg";

//importing local files

//importing chakra ui components
import { Box, Flex, Text, Stack, Button, IconButton, Image, Center } from "@chakra-ui/react";

//importing chakra ui icons

// import { isExpired } from "react-jwt";
// import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
// import { useUserContext } from "../useContext/UserContext";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { MdDehaze } from "react-icons/md";

type NavbarData = {
  name: string;
  link: string;
};

const NavbarIcon = () => {
  return (
    <Flex display={["none", "block"]} alignItems="center">
      <Box display={["none", "none", "none", "none", "block"]} as={"a"} href="/">
        <Image src={MaximaLogo} alt="logo" width={"180"} />
      </Box>
      <Box display={["none", "none", "none", "block", "none"]} as={"a"} href="/">
        <Image src={MaximaLogo} alt="logo" width={"140"} />
      </Box>
      <Box display={["none", "none", "block", "none", "none"]} as={"a"} href="/">
        <Image src={MaximaLogo} alt="logo" width={"120"} />
      </Box>
      <Box display={["none", "block", "none", "none", "none"]} as={"a"} href="/">
        <Image src={MaximaLogo} alt="logo" width={"100"} />
      </Box>
    </Flex>
  );
};

const FullBorder = () => {
  // const router = useRouter();
  // const malpun = router.pathname === "/malpun";
  return <Flex w={"75%"} position={"fixed"} mx={"-5em"} p={["3em", "3.2em"]} bgColor={"#1B4173"} border={"2px solid white"} shadow={"0 4px 4px rgb(0,0,0,0.25)"} opacity={"30%"} />;
};

export default function Navbar() {
  // const jwt = useReadLocalStorage<string | undefined>("token");
  // const isMyTokenExpired = isExpired(jwt as string);
  // const [, deleteToken] = useLocalStorage("token", "");
  // const { deleteUserData } = useUserContext();
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  // const { name } = useUserContext();
  const [toggle, setToggle] = useState(0);

  useEffect(() => {
    // try {
    //   const fetchHoME = async () => {
    //     const response = await axios.get(`${process.env.API_URL}/api/toggle`);
    //     setToggle(response.data[10].toggle);
    //   };
    //   fetchHoME();
    // } catch (err: any) {
    //   console.log(err);
    // }
  }, []);

  const navbarController = () => {
    if (isOpen) {
      return setIsOpen(false);
    } else {
      return setIsOpen(true);
    }
  };

  const NavbarData: NavbarData[] = [
    {
      name: "HoME",
      link: "/home",
    },
    {
      name: "STATE",
      link: "/state",
    },
    {
      name: "MalPun",
      link: "/malpun",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "About Us",
      link: "/aboutus",
    },
  ];

  const NavbarDesktop = () => {
    const router = useRouter();
    return (
      <>
        <Flex w={"full"} h={"auto"} mt={"2em"} pr={["0em", "0em", "0em", "2em", "3.5em"]} position={"fixed"} alignItems={"center"} justifyContent={"space-between"}>
          <Flex
            w={"auto"}
            h={"auto"}
            py={"1em"}
            px={["2em", "2em", "2em", "2em", "3.5em"]}
            justifyContent={"space-between"}
            alignItems={"center"}
            bgColor={"rgb(31, 67, 115, 0.35)"}
            borderColor={"rgb(255, 255, 255, 0.3)"}
            borderEndRadius={"full"}
            borderTopWidth={"0.1em"}
            borderRightWidth={"0.1em"}
            borderBottomWidth={"0.1em"}
            boxShadow={"md"}
          >
            <Flex alignItems={"center"}>
              <Box>
                <Link href={"/"}>
                  <Image w={"10em"} h={"full"} src={"/assets/MaximaLogo_Navbar.svg"} alt={"Maxima Logo"} objectFit={"cover"} />
                </Link>
              </Box>
              <Box ml={["2em", "2em", "2em", "3em", "4.5em"]}>
                <Stack direction={"row"} spacing={["2em", "2em", "2em", "2em", "4em"]}>
                  {NavbarData.map((data, index) => {
                    return (
                      <Box key={index}>
                        <Link href={data.link}>
                          <Text fontSize={["md", "md", "md", "md", "lg"]} fontWeight={"bold"} color={"white"} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"} _hover={{ color: "#E4E4E4" }} transition={"0.2s ease-in-out"}>
                            {data.name}
                          </Text>
                        </Link>
                      </Box>
                    );
                  })}
                </Stack>
              </Box>
            </Flex>
          </Flex>
          <Stack ml={"2em"} direction={"row"} spacing={["2em", "2em", "2em", "1.5em", "2em"]} alignItems={"center"}>
            <Box>
              <Button
                w={"7em"}
                h={"auto"}
                py={"0.7em"}
                variant={"none"}
                color={"white"}
                borderWidth={"0.15em"}
                borderRadius={"full"}
                _hover={{ bgColor: "white", color: "black", borderColor: "white" }}
                transition={"0.2s ease-in-out"}
                onClick={() => {
                  router.push("/signin");
                }}
              >
                Log in
              </Button>
            </Box>
            <Box>
              <Button
                w={"7em"}
                h={"auto"}
                py={"0.7em"}
                variant={"none"}
                color={"white"}
                borderWidth={"0.15em"}
                borderRadius={"full"}
                _hover={{ color: "#E4E4E4" }}
                transition={"0.2s ease-in-out"}
                onClick={() => {
                  router.push("/signup");
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Stack>
        </Flex>
      </>
    );
  };

  const NavbarMobile = () => {
    const router = useRouter();
    return (
      <>
        <Flex position={"fixed"} w={"full"} px={"1em"} py={"1.5em"} justifyContent={"space-between"} alignItems={"center"} bgColor={"#D9D9D9"}>
          <Center
            onClick={() => {
              navbarController();
            }}
          >
            <IconButton variant={"unstyled"} aria-label={"Sidebar"} icon={<MdDehaze />} fontSize={"3xl"} color={"white"} />
          </Center>
          <Center w={"full"}>
            <Link href={"/"}>
              <Image w={"8em"} src={"./assets/MaximaLogo_Navbar.svg"} alt={"MAXIMA Logo"} />
            </Link>
          </Center>
          <Center>
            <Button
              w={"6em"}
              h={"auto"}
              py={"0.5em"}
              variant={"none"}
              color={"white"}
              borderWidth={"0.15em"}
              borderRadius={"full"}
              onClick={() => {
                router.push("/signin");
              }}
            >
              Log in
            </Button>
          </Center>
        </Flex>
        <Box as={motion.div} position={"fixed"} w={"auto"} h={"auto"} mt={"6em"} ml={isOpen ? "0em" : "-10em"} bgColor={"#1B4173"} p={"1.5em"} borderEndRadius={"3xl"} transition={"0.2 ease-in-out"} zIndex={"1000"}>
          <Stack direction={"column"} spacing={["1em", "1em", "2em", "2em", "4em"]}>
            {NavbarData.map((data, index) => {
              return (
                <Box key={index}>
                  <Link href={data.link}>
                    <Text fontSize={["md", "md", "md", "md", "lg"]} fontWeight={"bold"} color={"white"} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
                      {data.name}
                    </Text>
                  </Link>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </>
    );
  };

  return (
    <>
      <Flex w={"full"} h={"auto"} alignItems={"center"} justifyContent={"space-between"}>
        <Flex w={"full"} display={["none", "none", "none", "flex"]}>
          <NavbarDesktop />
        </Flex>
        <Box w={"full"} display={["flex", "flex", "flex", "none"]}>
          <NavbarMobile />
        </Box>
      </Flex>
    </>
  );
}
