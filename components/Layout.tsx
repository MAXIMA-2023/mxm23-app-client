import React from "react";
import { Center, Box, Text, HStack, Flex, Icon, Stack, Tag, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import Navbar from "./Navbar";
import BackButton from "./BackButton";
import { usePathname } from "next/navigation";

export default function Layout({
  title,
  showNavbar = true,
  showLogoHeader = false,
  showSponsorFooter = false,
  showTitleFooter = false,
  disablePadding = false,
  backButton = false,
  backbuttonBgColor = "#062D5F",
  children,
}: {
  title?: string;
  showNavbar?: boolean;
  showLogoHeader?: boolean;
  showSponsorFooter?: boolean;
  showTitleFooter?: boolean;
  disablePadding?: boolean;
  backButton?: boolean;
  backbuttonBgColor?: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <>
      <title>{title}</title>
      {showNavbar && <Navbar coloredName={path === "/profile"} />}
      {showLogoHeader && (
        <Center w={"full"} h={"auto"} position={["relative", "relative", "absolute"]} top={["3vh"]}>
          <Link href={"/"}>
            <Image display={["none", "flex"]} w={"10em"} src={"../assets/MaximaLogo_Desktop.svg"} alt={"MAXIMA Logo"} />
            <Image display={["flex", "none"]} w={"2.5em"} src={"../assets/MaximaLogo_Mobile.svg"} alt={"MAXIMA Logo"} />
          </Link>
        </Center>
      )}
      <Box w={"full"} h={"auto"} maxW={"full"} overflow={"hidden"}>
        {children}
        {backButton && <BackButton bgColor={`${backbuttonBgColor}`} />}
      </Box>
      {showTitleFooter && (
        <Center w={"full"} h={"auto"} position={["relative", "relative", "absolute"]} bottom={"3vh"} color={"#062D5F"} fontSize={["xs", "md"]} fontWeight={"medium"}>
          <Text>MAXIMA 2023</Text>
        </Center>
      )}
    </>
  );
}
