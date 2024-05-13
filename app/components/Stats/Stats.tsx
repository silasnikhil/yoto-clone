"use client";
import { Image } from "@chakra-ui/next-js";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import muscial from "../../../public/assets/musical.json";
import React from "react";
interface StatInterface {
  statImage: string;
  statDesc: string;
}

interface StatsInterface {
  statsTitle: string;
  statsbg: string;
  stats: StatInterface[];
}
const Stats = ({ statsTitle, statsbg, stats }: StatsInterface) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bg={statsbg}
      justifyContent={"center"}
      alignItems={"center"}
      p={{ base: 10, md: 70 }}
      gap={10}
    >
      <Lottie
        animationData={muscial} // Import your Lottie animation JSON file
        loop
        autoplay
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      />
      <Text
        color={"white"}
        fontSize={{ base: "4xl", md: "6xl" }}
        fontWeight={600}
      >
        {statsTitle}
      </Text>
      <SimpleGrid columns={{ base: 2, md: stats.length }} gap={4}>
        {stats.map((stat, index) => (
          <Box
            key={index}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={4}
          >
            <Image
              src={stat.statImage}
              alt="Stats"
              width={140}
              height={82}
              justifyContent={"center"}
            />
            <Text
              color={"white"}
              fontSize={{ base: "md", md: "xl" }}
              align={"center"}
              width={{ base: "100%", md: "50%" }}
            >
              {stat.statDesc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Stats;
