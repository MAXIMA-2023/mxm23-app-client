"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

import { useSession, signOut } from "next-auth/react";

//importing chakra ui components
import { Box, Flex, Text, Stack, Button, IconButton, Image, Center, useDisclosure, Avatar, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, Icon, Tooltip } from "@chakra-ui/react";

//importing chakra ui icons

import { MdDehaze, MdLogout, MdPerson } from "react-icons/md";
import Swal from "sweetalert2";
import { HandleAxiosError, useApi } from "@/services/api";

//importing framer motion
import { motion } from "framer-motion";

type NavbarData = {
  name: string;
  link: string;
  toggle: boolean;
};

type Toggle = {
  id: number;
  name: string;
  toggle: boolean;
};

export default function Navbar({ coloredName }: { coloredName?: boolean }) {
  const [toggle, setToggle] = useState<Toggle[]>([]);

  const session = useSession();
  const api = useApi();

  useEffect(() => {
    api
      .get<Toggle[]>("/toggle")
      .then(({ data }) => setToggle(data))
      .catch(HandleAxiosError);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const NavbarData: NavbarData[] = [
    {
      name: "HoME",
      link: "/home",
      toggle: toggle[6]?.toggle,
    },
    {
      name: "STATE",
      link: "/state",
      toggle: toggle[7]?.toggle,
    },
    {
      name: "MalPun",
      link: "/malpun",
      toggle: toggle[8]?.toggle,
    },
    {
      name: "FAQ",
      link: "/faq",
      toggle: true,
    },
    {
      name: "About Us",
      link: "/aboutus",
      toggle: true,
    },
  ];

  const registerToggle = toggle[0]?.toggle;

  const NavbarDesktop = () => {
    return (
      <>
        <Flex
          as={motion.div}
          w={"full"}
          h={"auto"}
          mt={"-10em"}
          pr={["0em", "0em", "0em", "2em", "3.5em"]}
          position={"fixed"}
          alignItems={"center"}
          justifyContent={"space-between"}
          animate={{
            marginTop: "2em",
            transition: {
              duration: 0.8,
              type: "spring",
              bounce: 0.15,
            },
          }}
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
              <Link href={"/"}>
                <Image w={"10em"} h={"full"} src={"../assets/MaximaLogo_Navbar.svg"} alt={"Maxima Logo"} objectFit={"cover"} />
              </Link>
              <Box ml={["2em", "2em", "2em", "3em", "4.5em"]}>
                <Stack direction={"row"} spacing={["2em", "2em", "2em", "2em", "4em"]}>
                  {NavbarData.map((data, index) => {
                    return (
                      <Button
                        as={data.toggle ? Link : undefined}
                        variant={"none"}
                        fontSize={["md", "md", "md", "md", "lg"]}
                        fontWeight={"bold"}
                        color={"white"}
                        textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}
                        _hover={{ color: "#E4E4E4" }}
                        transition={"0.2s ease-in-out"}
                        href={data.toggle ? data.link : undefined}
                        m={"0em"}
                        p={"0em"}
                        isDisabled={!data.toggle}
                        key={index}
                      >
                        <Tooltip label={`${data.name} akan datang!`} isDisabled={data.toggle} rounded={"full"} bgColor={"#1B4173"}>
                          {data.name}
                        </Tooltip>
                      </Button>
                    );
                  })}
                </Stack>
              </Box>
            </Flex>
          </Flex>
          <Stack ml={"2em"} direction={"row"} spacing={["2em", "2em", "2em", "1.5em", "2em"]} alignItems={"center"}>
            {session.status === "authenticated" ? (
              <>
                <Menu placement="bottom-end">
                  <MenuButton>
                    <Stack direction={"row"} align={"center"} gap={"1em"} cursor={"pointer"}>
                      <Text fontSize={["md", "md", "md", "md", "lg"]} fontWeight={"bold"} color={coloredName ? "#1B4173" : "white"} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
                        {session.data.user.name}
                      </Text>
                      <Avatar boxSize={"2.5em"} shadow={"0px 4px 4px rgb(0,0,0,0.25)"} />
                    </Stack>
                  </MenuButton>
                  <MenuList border={"none"} bgColor={"#1B4173"}>
                    <MenuItem as={Link} href={"/profile"} bgColor={"#1B4173"} color={"white"} fontWeight={"bold"}>
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
                          color: "#062D5F",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            signOut({
                              callbackUrl: `/`,
                            });
                            Swal.fire({
                              title: "Signed Out!",
                              text: "Kamu telah signed out!",
                              icon: "success",
                              color: "#062D5F",
                              confirmButtonColor: "#F7B70C",
                            });
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
                    bgColor={"rgb(27, 65, 115, 0.3)"}
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
                    bgColor={"rgb(27, 65, 115, 0.3)"}
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
                    as={registerToggle ? Link : undefined}
                    href={registerToggle ? "/signup" : undefined}
                    isDisabled={!registerToggle}
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
    const { isOpen, onToggle } = useDisclosure();
    const pathname = usePathname();
    return (
      <>
        <Flex position={"fixed"} w={"full"} px={"1em"} py={"1.5em"} justifyContent={"space-between"} alignItems={"center"} bgColor={pathname == "/profile" ? "#F7B70C" : "none"}>
          <Center onClick={onToggle}>
            <IconButton variant={"unstyled"} aria-label={"Sidebar"} icon={<MdDehaze />} fontSize={"3xl"} color={"white"} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"} />
          </Center>
          {session.status == "authenticated" ? (
            <>
              <Center w={"full"}>
                <Link href={"/"}>
                  <Image w={"8em"} src={"../assets/MaximaLogo_Navbar.svg"} alt={"MAXIMA Logo"} />
                </Link>
              </Center>
            </>
          ) : (
            <></>
          )}
          <Center>
            {session.status === "authenticated" ? (
              <Menu placement="bottom-end">
                <MenuButton>
                  <Stack direction={"row"} align={"center"} gap={"1em"} cursor={"pointer"}>
                    <Avatar boxSize={"2em"} shadow={"0px 2px 2px rgb(0,0,0,0.25)"} />
                  </Stack>
                </MenuButton>
                <MenuList border={"none"} bgColor={"#1B4173"} boxShadow={"md"}>
                  <Text textColor={"white"} fontWeight={"bold"} ml={"1em"} maxW={"12em"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"}>
                    {session.data.user.name}
                  </Text>
                  <MenuDivider color={"white"} />

                  <MenuItem as={Link} href={"/profile"} bgColor={"#1B4173"} color={"white"} fontWeight={"bold"}>
                    <Icon as={MdPerson} />
                    <Text px={"1em"}>Profile</Text>
                  </MenuItem>
                  <MenuItem
                    bgColor={"#1B4173"}
                    color={"red.500"}
                    fontWeight={"bold"}
                    onClick={() =>
                      Swal.fire({
                        title: "Sign out?",
                        color: "#062D5F",
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
                          Swal.fire({
                            title: "Logged Out!",
                            color: "#062D5F",
                            text: "Kamu berhasil keluar!",
                            icon: "success",
                            confirmButtonColor: "#F7B70C",
                          });
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
                bgColor={"rgb(27, 65, 115, 0.3)"}
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
                boxShadow={"md"}
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
          top={["6em", "5em", "6em"]}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "-100%" },
          }}
          initial={"closed"}
          bgColor={"#1B4173"}
          p={"1.5em"}
          borderEndRadius={"3xl"}
          zIndex={"1000"}
        >
          <Stack direction={"column"} spacing={["1em", "0em", "2em", "2em", "4em"]}>
            {NavbarData.map((data, index) => {
              return (
                <Button
                  key={index}
                  as={data.toggle ? Link : undefined}
                  href={data.toggle ? data.link : undefined}
                  variant={"none"}
                  fontSize={["md", "md", "md", "md", "lg"]}
                  fontWeight={"bold"}
                  color={"white"}
                  textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}
                  m={"0em"}
                  p={"0em"}
                  isDisabled={!data.toggle}
                >
                  <Tooltip label={`${data.name} akan datang!`} isDisabled={data.toggle} rounded={"full"} bgColor={"#1B4173"}>
                    {data.name}
                  </Tooltip>
                </Button>
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
        <Flex w={"full"} display={["none", "none", "none", "flex"]} zIndex={"999"}>
          <NavbarDesktop />
        </Flex>
        <Box w={"full"} display={["flex", "flex", "flex", "none"]} zIndex={"999"}>
          <NavbarMobile />
        </Box>
      </Flex>
    </>
  );
}
