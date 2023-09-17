"use client";
import { useRouter } from "next/navigation";
import React from "react";

//importing chakra ui components
import { Flex, Center, Button, Img } from "@chakra-ui/react";

const BackButton = ({ bgColor = "#062D5F" }: { bgColor?: string }) => {
  const router = useRouter();
  return (
    <>
      <Flex
        w={"auto"}
        m={["-3.7rem 0rem", "-3.7rem 1rem"]}
        position={"sticky"}
        alignItems={"center"}
        left={0}
        bottom={0}
        right={0}
        zIndex={"99"}
      >
        <Button
          variant={"none"}
          onClick={() => {
            router.back();
          }}
        >
          <Center
            w={["2.5rem", "2.5rem", "4rem", "4rem", "4rem"]}
            h={["2.5rem", "2.5rem", "4rem", "4rem", "4rem"]}
            mb={["4.8rem"]}
            bgColor={`${bgColor}`}
            border={[
              "5px solid white",
              "5px solid white",
              "4px solid white",
              "4px solid white",
              "4px solid white",
            ]}
            borderRadius={"full"}
            shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
          >
            <Img
              src={"/assets/BackButton.svg"}
              w={["2rem", "2rem", "2rem", "2rem", "2rem"]}
              h={["1.2rem", "1.2rem", "2rem", "2rem", "2rem"]}
            />
          </Center>
        </Button>
      </Flex>
    </>
  );
};

export default BackButton;
