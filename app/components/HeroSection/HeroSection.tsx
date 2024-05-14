import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel, CarouselProps } from "../Carousel/Carousel";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { IoStar } from "react-icons/io5";

export interface HeroSectionProps {
  bannerUrl: string[];
  heroTitle: string;
  heroSubTitle: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  reviewTitle: string;
  reviewCount: string;
}
const HeroSection = ({
  bannerUrl,
  heroTitle,
  heroSubTitle,
  primaryBtnText,
  secondaryBtnText,
  reviewTitle,
  reviewCount,
}: HeroSectionProps) => {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Box width={{ base: "100%", md: "60%" }} bg={"white"}>
        <Carousel bannerUrl={bannerUrl} />
      </Box>
      <Box
        width={{ base: "100%", md: "40%" }}
        bg={"white"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        flexDirection={"column"}
        p={{ base: 5, md: 20 }}
      >
        <Text fontSize={"5xl"} color={"#F45436"}>
          {heroTitle}
        </Text>
        <Box width={{ base: "100%", md: "80%" }}>
          <Text fontSize={"xl"}>{heroSubTitle}</Text>
        </Box>
        <Flex direction={"column"} gap={4} width={{ base: "100%" }}>
          <Box
            display={"flex"}
            gap={4}
            mt={8}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Button
              color={"white"}
              bg={"#F45436"}
              width={{ base: "100%", md: 200 }}
              boxShadow="0px 2px 12px rgba(0, 0, 0, 0.8)"
            >
              {primaryBtnText}
            </Button>
            <Button
              color={"#1471D9"}
              variant="outline"
              borderColor={"#1471D9"}
              width={{ base: "100%", md: 200 }}
            >
              {secondaryBtnText}
            </Button>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={2}
            pl={{ base: 0, md: 8 }}
            pr={{ base: 0, md: 8 }}
          >
            <Text fontSize={"lg"}>
              {reviewTitle} <b>{reviewCount}</b>
            </Text>
            <Box display={"flex"} flexDirection={"row"}>
              <TiStarFullOutline size={28} color="#00B67A" />
              <TiStarFullOutline size={28} color="#00B67A" />
              <TiStarFullOutline size={28} color="#00B67A" />
              <TiStarFullOutline size={28} color="#00B67A" />
              <TiStarHalfOutline size={28} color="#00B67A" />
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            <IoStar size={40} color="#00B67A" />
            <Text fontSize={"xl"}>
              <b>TrustPilot</b>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeroSection;
