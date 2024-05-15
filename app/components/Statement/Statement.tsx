import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { MoonStar } from "../Icons/Icons";

export interface StatementIcons {
  imageUrl: string;
  statementName: string;
}
export interface StatementProps {
  statementTitle: string;
  statementDesc: string;
  statements: StatementIcons[];
}
const Statement = ({
  statementTitle,
  statementDesc,
  statements,
}: StatementProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={24}
      bg={"#223868"}
      p={{ base: 8, md: 40 }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        gap={4}
      >
        <MoonStar />
        <Text fontSize={"5xl"} color={"#FD9E69"} fontWeight={600}>
          {statementTitle}
        </Text>
        <Text fontSize={"3xl"} color={"white"} fontWeight={500}>
          {statementDesc}
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 2, md: 4 }}>
        {statements.map((statement, index) => (
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={4}
            justifyContent={"center"}
            alignItems={"center"}
            key={index}
          >
            <Image
              src={statement.imageUrl}
              height={"130px"}
              width={"130px"}
              alt="Statment Icon"
            />
            <Text color={"white"} fontSize={"xl"}>
              {statement.statementName}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Statement;
