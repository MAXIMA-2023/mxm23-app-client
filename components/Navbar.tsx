"use client";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

//importing local components
import MaximaIcon from "../public/maximaIcon.svg";

//importing local files

//importing chakra ui components
import { Box, Flex, Text, Stack, Button, IconButton } from "@chakra-ui/react";

//importing chakra ui icons
import { HamburgerIcon } from "@chakra-ui/icons";
// import { isExpired } from "react-jwt";
// import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
// import { useUserContext } from "../useContext/UserContext";
import dynamic from "next/dynamic";

const NavbarIcon = () => {
  return (
    <Flex display={["none", "block"]} alignItems="center">
      <Box display={["none", "none", "none", "none", "block"]} as={"a"} href="/">
        <Image src={MaximaIcon} alt="logo" width={"180"} />
      </Box>
      <Box display={["none", "none", "none", "block", "none"]} as={"a"} href="/">
        <Image src={MaximaIcon} alt="logo" width={"140"} />
      </Box>
      <Box display={["none", "none", "block", "none", "none"]} as={"a"} href="/">
        <Image src={MaximaIcon} alt="logo" width={"120"} />
      </Box>
      <Box display={["none", "block", "none", "none", "none"]} as={"a"} href="/">
        <Image src={MaximaIcon} alt="logo" width={"100"} />
      </Box>
    </Flex>
  );
};


const Navbar = () => {
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

  return (
    <>
      <Flex 
        as="nav"
        justifyContent="space-between" 
        alignItems="center" p={["1.5em 1em", "1em 0.5em", "1em 1.5em", "1em 1.5em", "1em 3em"]} 
        color="white" 
        position="fixed" 
        top={0} left={0} right={0} zIndex={"999"}
      >
        <NavbarIcon />
        <Flex justifyContent={["center", "center", "center", "start", "start"]} flex={{ base: 0, sm: 1 }}>
          <Box>
            <Flex mx={["0", "0", "1.5em", "4em", "4em"]}>
              <Box>
                <IconButton display={["block", "none"]} icon={<HamburgerIcon w={8} h={8} />} variant={"none"} onClick={navbarController} aria-label={""} />
                <Box ms={[isOpen ? "0em" : "-10em", "0em"]} transition={"0.2s ease-in-out"}>
                  <Stack
                    position={["absolute", "relative"]}
                    direction={["column", "row"]}
                    mt={["1em", "0em"]}
                    ms={["-1.8em", "0em"]}
                    p={["2em 1em 1.5em 1em", "0em"]}
                    spacing={[3, 0, 4, 9, 9]}
                    bgColor={["#1B4173", "transparent"]}
                    borderRadius={"0 1.5em 1.5em 0"}
                  >
                    <Link href={'/'}>
                      <Button
                        color={"white"}
                        variant={"none"}
                        _hover={{
                          color: "gray.300",
                        }}
                      >
                        <Box display={["block", "none", "none", "none", "none"]} as={"a"} href="/">
                          <Image src={MaximaIcon} alt="logo" width={"100"} />
                        </Box>
                      </Button>
                    </Link>
                    <Link href={'/home'}>
                      <Button
                        color={"white"}
                        variant={"none"}
                        _hover={{
                          color: "gray.300",
                        }}
                      >
                        <Text fontSize={["md", "xs", "md", "md", "lg"]} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
                          HoME
                        </Text>
                      </Button>
                    </Link>
                    {/* {jwt === '' && isMyTokenExpired ? (''):( */}
                      <Link href={'/state'}>
                        <Button
                          color={"white"}
                          variant={"none"}
                          _hover={{
                            color: "gray.300",
                          }}
                        >
                          <Text fontSize={["md", "xs", "md", "md", "lg"]} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
                            STATE
                          </Text>
                        </Button>
                      </Link>
                    {/* )} */}
                    <Link href={'/malpun'}>
                        <Button
                          color={"white"}
                          variant={"none"}
                          _hover={{
                            color: "gray.300",
                          }}
                        >
                          <Text fontSize={["md", "xs", "md", "md", "lg"]} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
                            MalPun
                          </Text>
                        </Button>
                      </Link>
                    <Link href={'/faq'}>
                      <Button
                        color={"white"}
                        variant={"none"}
                        _hover={{
                          color: "gray.300",
                        }}
                      >
                        <Text fontSize={["md", "xs", "md", "md", "lg"]} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
                          FAQ
                        </Text>
                      </Button>
                    </Link>
                    <Link href={'/aboutus'}>
                      <Button
                        color={"white"}
                        variant={"none"}
                        _hover={{
                          color: "gray.300",
                        }}
                      >
                        <Text fontSize={["md", "xs", "md", "md", "lg"]} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
                          About Us
                        </Text>
                      </Button>
                    </Link>
                  </Stack>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { 
  ssr: false 
})