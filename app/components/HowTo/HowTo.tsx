import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export interface Instructions {
  imageUrl: string;
  instructionTitle: string;
  instructionDesc: string;
}

export interface HowToProps {
  bg: string;
  sectionHeader?: string;
  sectionSubHeader?: string;
  useAsCards: boolean;
  instructions: Instructions[];
  instructionTitleFontSize?: string;
  instructionDescFontSize?: string;
}
const HowTo = ({
  bg,
  sectionHeader,
  sectionSubHeader,
  useAsCards,
  instructions,
  instructionTitleFontSize,
  instructionDescFontSize,
}: HowToProps) => {
  return (
    <Box>
      {!useAsCards && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={"#F45436"}
          flexDirection={"column"}
          p={{ base: 10, md: 12 }}
          gap={4}
          position="relative"
        >
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            color={"white"}
            textAlign={"center"}
          >
            {sectionHeader}
          </Text>
          <Text fontSize={{ base: "xl", md: "2xl" }} color={"white"}>
            {sectionSubHeader}
          </Text>
          <Box
            position="absolute"
            bottom={-8}
            left={0}
            right={0}
            height={16}
            background="#F45436"
            clipPath="polygon(0% 0%, 100% 0%, 100% calc(100% - 25px), 50% 100%, 0% calc(100% - 25px))"
            zIndex={1}
          />
        </Box>
      )}

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={bg}
        flexWrap={{ base: "wrap", md: "nowrap" }}
        gap={16}
        p={{ base: 10, md: 20 }}
      >
        {instructions.map((instruction, index) => (
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={8}
            justifyContent={"flex-start"}
            key={index}
          >
            <Image src={instruction.imageUrl} />
            <Text
              fontSize={
                instructionTitleFontSize ? instructionTitleFontSize : "3xl"
              }
              textAlign={useAsCards ? "left" : "center"}
            >
              {instruction.instructionTitle}
            </Text>
            <Text
              fontSize={
                instructionDescFontSize ? instructionDescFontSize : "xl"
              }
              textAlign={useAsCards ? "left" : "center"}
            >
              {instruction.instructionDesc}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HowTo;
