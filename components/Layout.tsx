import React from "react";
import { Center, Box, Text, HStack, Flex, Icon, Stack, Tag, Button, Image, Link, Wrap, WrapItem } from "@chakra-ui/react";
import Navbar from "./Navbar";
import BackButton from "./BackButton";
import { usePathname } from "next/navigation";

import { sponsorBigData, sponsorNormalData, sponsorSmallData, mediaPartnerBigData, mediaPartnerNormalData, mediaPartnerSmallData } from "@/data/sponsor-medpar.json";

export default function Layout({
  title,
  showNavbar = true,
  showLogoHeader = false,
  showSponsorFooter = false,
  showTitleFooter = false,
  disablePadding = false,
  backButton = false,
  sponsorFooterMarginTop = "0em",
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
  sponsorFooterMarginTop?: string;
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
            <Image display={["none", "flex"]} w={"10em"} src={"https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaLogo_Desktop.svg"} alt={"MAXIMA Logo"} />
            <Image display={["flex", "none"]} w={"2.5em"} src={"https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaLogo_Mobile.svg"} alt={"MAXIMA Logo"} />
          </Link>
        </Center>
      )}
      <Box w={"full"} h={"auto"}>
        {children}
        {backButton && <BackButton bgColor={`${backbuttonBgColor}`} />}
      </Box>
      {showTitleFooter && (
        <Center w={"full"} h={"auto"} position={["relative", "relative", "absolute"]} bottom={"3vh"} color={"#062D5F"} fontSize={["xs", "md"]} fontWeight={"medium"}>
          <Text>MAXIMA 2023</Text>
        </Center>
      )}
      {showSponsorFooter && (
        <>
          <Box w={"full"} marginTop={`${sponsorFooterMarginTop}`} h={"auto"} position={["absolute"]} p={["2em 2em", "2em 2em", "2em 4em", "2em 6em"]} bgColor={"#062D5F"} fontSize={["xs", "md"]} fontWeight={"medium"} zIndex={"4"}>
            <Center>
              <Text my={"1em"} textAlign={"center"} color={"white"} fontSize={"2xl"} fontWeight={"bold"}>
                Sponsors
              </Text>
            </Center>
            <Wrap mb={"2em"} spacing={"1em"} justify={"center"}>
              {sponsorBigData.map((data, id) => (
                <WrapItem
                  key={id}
                  bgColor={"white"}
                  p={"1em"}
                  borderRadius={"lg"}
                  // cursor={"pointer"}
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  transition={"0.1s ease-in-out"}
                >
                  {/* <Link href={data.sponsorURL} isExternal> */}
                  <Image boxSize={"22.5em"} src={data.sponsorLogo} alt={data.sponsorName} objectFit={"contain"} />
                  {/* </Link> */}
                </WrapItem>
              ))}
            </Wrap>
            <Wrap mb={"2em"} spacing={"1em"} justify={"center"}>
              {sponsorNormalData.map((data, id) => (
                <WrapItem
                  key={id}
                  bgColor={"white"}
                  p={"1em"}
                  borderRadius={"lg"}
                  // cursor={"pointer"}
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  transition={"0.1s ease-in-out"}
                >
                  {/* <Link href={data.sponsorURL} isExternal> */}
                  <Image boxSize={"16.5em"} src={data.sponsorLogo} alt={data.sponsorName} objectFit={"contain"} />
                  {/* </Link> */}
                </WrapItem>
              ))}
            </Wrap>
            <Center>
              <Text my={"1em"} textAlign={"center"} color={"white"} fontSize={"2xl"} fontWeight={"bold"}>
                Media Partner
              </Text>
            </Center>
            <Wrap mb={"2em"} spacing={"1em"} justify={"center"}>
              {mediaPartnerBigData.map((data, id) => (
                <WrapItem
                  key={id}
                  bgColor={"white"}
                  p={"1em"}
                  borderRadius={"lg"}
                  // cursor={"pointer"}
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  transition={"0.1s ease-in-out"}
                >
                  {/* <Link href={data.mediaPartnerURL} isExternal> */}
                  <Image boxSize={"13.5em"} src={data.mediaPartnerLogo} alt={data.mediaPartnerName} objectFit={"contain"} />
                  {/* </Link> */}
                </WrapItem>
              ))}
            </Wrap>
            <Wrap mb={"2em"} spacing={"1em"} justify={"center"}>
              {mediaPartnerNormalData.map((data, id) => (
                <WrapItem
                  key={id}
                  bgColor={"white"}
                  p={"1em"}
                  borderRadius={"lg"}
                  // cursor={"pointer"}
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  transition={"0.1s ease-in-out"}
                >
                  {/* <Link href={data.mediaPartnerURL} isExternal> */}
                  <Image boxSize={"10em"} src={data.mediaPartnerLogo} alt={data.mediaPartnerName} objectFit={"contain"} />
                  {/* </Link> */}
                </WrapItem>
              ))}
            </Wrap>
            <Wrap spacing={"1em"} justify={"center"}>
              {mediaPartnerSmallData.map((data, id) => (
                <WrapItem
                  key={id}
                  bgColor={"white"}
                  p={"1em"}
                  borderRadius={"lg"}
                  // cursor={"pointer"}
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  transition={"0.1s ease-in-out"}
                >
                  {/* <Link href={data.mediaPartnerURL} isExternal> */}
                  <Image boxSize={["5em", "7em"]} src={data.mediaPartnerLogo} alt={data.mediaPartnerName} objectFit={"contain"} />
                  {/* </Link> */}
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </>
      )}
    </>
  );
}
