import React from "react";
import { Center, Box, Text, HStack, Flex, Icon, Stack, Tag, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Layout({
  showNavbar = true,
  showLogoHeader = false,
  showSponsorFooter = false,
  showTitleFooter = false,
  disablePadding = false,
  children,
}: {
  showNavbar?: boolean;
  showLogoHeader?: boolean;
  showSponsorFooter?: boolean;
  showTitleFooter?: boolean;
  disablePadding?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      {showNavbar && <Navbar />}
      {showLogoHeader && (
        <Center w={"full"} h={"auto"} position={["relative", "relative", "absolute"]} top={["3vh"]}>
          <Link href={"/"}>
            <Image display={["none", "flex"]} w={"10em"} src={"./assets/MaximaLogo_Desktop.svg"} alt={"MAXIMA Logo"} />
            <Image display={["flex", "none"]} w={"2.5em"} src={"./assets/MaximaLogo_Mobile.svg"} alt={"MAXIMA Logo"} />
          </Link>
        </Center>
      )}
      <Box w={"full"} h={"auto"}>
        {children}
      </Box>
      {showTitleFooter && (
        <Center w={"full"} h={"auto"} position={["relative", "relative", "absolute"]} bottom={"3vh"} color={"#062D5F"} fontSize={["xs", "md"]} fontWeight={"medium"}>
          <Text>MAXIMA 2023</Text>
        </Center>
      )}
    </>
  );
}
