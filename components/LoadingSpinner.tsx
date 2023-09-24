import { Box, Spinner, Center, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="9999"
      bg="rgba(20,20,20,0.5)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Center
        as={motion.div}
        boxSize={["10em", "15em"]}
        bg={"white"}
        borderRadius={"20%"}
        animate={{
          scale: [1, 1.25, 1.25, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          transition: {
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          },
        }}
      >
        <Image
          src={
            "https://storage.googleapis.com/mxm23-app-client/webps/webps/public/assets/MaximaLogo_Loading.svg"
          }
          boxSize={["5em", "8em"]}
          alt={"MAXIMA Logo"}
        />
      </Center>
    </Box>
  );
}
