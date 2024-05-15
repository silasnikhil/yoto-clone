import { Box, Text } from "@chakra-ui/react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import React from "react";

export interface ReasonsInterface {
  reasonTitles: string[];
  bg: string;
}
const Reasons = ({ reasonTitles, bg }: ReasonsInterface) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={4}
      bg={bg}
      rounded={"md"}
      p={4}
    >
      {reasonTitles.map((reason, index) => (
        <Box
          display={"flex"}
          gap={2}
          justifyContent={"flex-start"}
          alignItems={"center"}
          cursor={"pointer"}
          _hover={{
            textDecoration: "underline",
          }}
          key={index}
        >
          <Text>{reason}</Text>
          <Box
            _hover={{
              fill: "black",
            }}
          >
            <IoMdInformationCircleOutline />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Reasons;
