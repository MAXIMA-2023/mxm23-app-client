"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

import { useSession, signOut } from "next-auth/react";

//importing local components
import MaximaLogo from "../public/assets/MaximaLogo_Navbar.svg";

//importing chakra ui components
import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  IconButton,
  Image,
  Center,
  useDisclosure,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Icon,
} from "@chakra-ui/react";

//importing chakra ui icons

import { motion } from "framer-motion";
import { MdDehaze, MdLogout, MdPerson } from "react-icons/md";
import Swal from "sweetalert2";

type NavbarData = {
  name: string;
  link: string;
};

const NavbarIcon = () => {
  return (
    <Flex display={["none", "block"]} alignItems="center">
      <Box
        display={["none", "none", "none", "none", "block"]}
        as={"a"}
        href="/"
      >
        <Image src={MaximaLogo} alt="logo" width={"180"} />
      </Box>
      <Box
        display={["none", "none", "none", "block", "none"]}
        as={"a"}
        href="/"
      >
        <Image src={MaximaLogo} alt="logo" width={"140"} />
      </Box>
      <Box
        display={["none", "none", "block", "none", "none"]}
        as={"a"}
        href="/"
      >
        <Image src={MaximaLogo} alt="logo" width={"120"} />
      </Box>
      <Box
        display={["none", "block", "none", "none", "none"]}
        as={"a"}
        href="/"
      >
        <Image src={MaximaLogo} alt="logo" width={"100"} />
      </Box>
    </Flex>
  );
};

const FullBorder = () => {
  // const router = useRouter();
  // const malpun = router.pathname === "/malpun";
  return (
    <Flex
      w={"75%"}
      position={"fixed"}
      mx={"-5em"}
      p={["3em", "3.2em"]}
      bgColor={"#1B4173"}
      border={"2px solid white"}
      shadow={"0 4px 4px rgb(0,0,0,0.25)"}
      opacity={"30%"}
    />
  );
};

export default function Navbar() {
  const session = useSession();

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
    return (
      <>
        <Flex
          w={"full"}
          h={"auto"}
          mt={"2em"}
          pr={["0em", "0em", "0em", "2em", "3.5em"]}
          position={"fixed"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
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
                  <Image
                    w={"10em"}
                    h={"full"}
                    src={"/assets/MaximaLogo_Navbar.svg"}
                    alt={"Maxima Logo"}
                    objectFit={"cover"}
                  />
                </Link>
              </Box>
              <Box ml={["2em", "2em", "2em", "3em", "4.5em"]}>
                <Stack
                  direction={"row"}
                  spacing={["2em", "2em", "2em", "2em", "4em"]}
                >
                  {NavbarData.map((data, index) => {
                    return (
                      <Box key={index}>
                        <Link href={data.link}>
                          <Text
                            fontSize={["md", "md", "md", "md", "lg"]}
                            fontWeight={"bold"}
                            color={"white"}
                            textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}
                            _hover={{ color: "#E4E4E4" }}
                            transition={"0.2s ease-in-out"}
                          >
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
          <Stack
            ml={"2em"}
            direction={"row"}
            spacing={["2em", "2em", "2em", "1.5em", "2em"]}
            alignItems={"center"}
          >
            {session.status === "authenticated" ? (
              <>
                <Menu placement="bottom-end">
                  <MenuButton>
                    <Stack
                      direction={"row"}
                      align={"center"}
                      gap={"1em"}
                      cursor={"pointer"}
                    >
                      <Text
                        fontSize={["md", "md", "md", "md", "lg"]}
                        fontWeight={"bold"}
                        color={"white"}
                        textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}
                      >
                        {session.data.user.name}
                      </Text>
                      <Avatar
                        boxSize={"2.5em"}
                        shadow={"0px 4px 4px rgb(0,0,0,0.25)"}
                      />
                    </Stack>
                  </MenuButton>
                  <MenuList border={"none"} bgColor={"#1B4173"}>
                    <MenuItem
                      as={Link}
                      href={"/profile"}
                      bgColor={"#1B4173"}
                      color={"white"}
                      fontWeight={"bold"}
                    >
                      <Icon as={MdPerson} />
                      <Text px={"1em"}>Profile</Text>
                    </MenuItem>
                    <MenuDivider color={"white"} />
                    <MenuItem
                      bgColor={"#1B4173"}
                      color={"red.500"}
                      fontWeight={"bold"}
                      onClick={() =>
                        Swal.fire({
                          title: "Sign out?",
                          text: "Apakah kamu yakin ingin keluar?",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#D33",
                          focusCancel: true,
                          cancelButtonColor: "#F7B70C",
                          confirmButtonText: "Sign Out",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            signOut({
                              callbackUrl: `/`,
                            });
                            Swal.fire(
                              "Logged Out!",
                              "Kamu berhasil keluar!",
                              "success"
                            );
                          }
                        })
                      }
                    >
                      <Icon as={MdLogout} />
                      <Text px={"1em"}>Log Out</Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <>
                <Box>
                  <Button
                    w={"7em"}
                    h={"auto"}
                    py={"0.7em"}
                    variant={"none"}
                    color={"white"}
                    borderWidth={"0.15em"}
                    borderRadius={"full"}
                    _hover={{
                      bgColor: "white",
                      color: "black",
                      borderColor: "white",
                    }}
                    transition={"0.2s ease-in-out"}
                    as={Link}
                    href={"/signin"}
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
                    as={Link}
                    href={"/signup"}
                  >
                    Sign Up
                  </Button>
                </Box>
              </>
            )}
          </Stack>
        </Flex>
      </>
    );
  };

  const NavbarMobile = () => {
    const menu = useDisclosure();

    return (
      <>
        <Flex
          position={"fixed"}
          w={"full"}
          px={"1em"}
          py={"1.5em"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bgColor={"#D9D9D9"}
        >
          <Center onClick={menu.onToggle}>
            <IconButton
              variant={"unstyled"}
              aria-label={"Sidebar"}
              icon={<MdDehaze />}
              fontSize={"3xl"}
              color={"white"}
            />
          </Center>
          <Center w={"full"}>
            <Link href={"/"}>
              <Image
                w={"8em"}
                src={"./assets/MaximaLogo_Navbar.svg"}
                alt={"MAXIMA Logo"}
              />
            </Link>
          </Center>
          <Center>
            {session.status === "authenticated" ? (
              <Menu placement="bottom-end">
                <MenuButton>
                  <Stack
                    direction={"row"}
                    align={"center"}
                    gap={"1em"}
                    cursor={"pointer"}
                  >
                    <Avatar
                      boxSize={"2em"}
                      // shadow={"0px 4px 4px rgb(0,0,0,0.25)"}
                    />
                  </Stack>
                </MenuButton>
                <MenuList border={"none"} bgColor={"#1B4173"}>
                  <MenuItem
                    as={Link}
                    href={"/profile"}
                    bgColor={"#1B4173"}
                    color={"white"}
                    fontWeight={"bold"}
                  >
                    <Icon as={MdPerson} />
                    <Text px={"1em"}>Profile</Text>
                  </MenuItem>
                  <MenuDivider color={"white"} />
                  <MenuItem
                    bgColor={"#1B4173"}
                    color={"red.500"}
                    fontWeight={"bold"}
                    onClick={() =>
                      Swal.fire({
                        title: "Sign out?",
                        text: "Apakah kamu yakin ingin keluar?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#D33",
                        focusCancel: true,
                        cancelButtonColor: "#F7B70C",
                        confirmButtonText: "Sign Out",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          signOut({
                            callbackUrl: `/`,
                          });
                          Swal.fire(
                            "Logged Out!",
                            "Kamu berhasil keluar!",
                            "success"
                          );
                        }
                      })
                    }
                  >
                    <Icon as={MdLogout} />
                    <Text px={"1em"}>Log Out</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button
                w={"6em"}
                h={"auto"}
                py={"0.5em"}
                variant={"none"}
                color={"white"}
                borderWidth={"0.15em"}
                borderRadius={"full"}
                as={Link}
                href={"/signin"}
              >
                Log in
              </Button>
            )}
          </Center>
        </Flex>
        <Box
          as={motion.div}
          position={"fixed"}
          w={"auto"}
          h={"auto"}
          mt={"6em"}
          ml={menu.isOpen ? "0em" : "-10em"}
          bgColor={"#1B4173"}
          p={"1.5em"}
          borderEndRadius={"3xl"}
          transition={"0.2 ease-in-out"}
          zIndex={"1000"}
        >
          <Stack
            direction={"column"}
            spacing={["1em", "1em", "2em", "2em", "4em"]}
          >
            {NavbarData.map((data, index) => {
              return (
                <Box key={index}>
                  <Link href={data.link}>
                    <Text
                      fontSize={["md", "md", "md", "md", "lg"]}
                      fontWeight={"bold"}
                      color={"white"}
                      textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}
                    >
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
      <Flex
        w={"full"}
        h={"auto"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex
          w={"full"}
          display={["none", "none", "none", "flex"]}
          zIndex={"999"}
        >
          <NavbarDesktop />
        </Flex>
        <Box
          w={"full"}
          display={["flex", "flex", "flex", "none"]}
          zIndex={"999"}
        >
          <NavbarMobile />
        </Box>
      </Flex>
    </>
  );
}
