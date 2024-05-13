import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import {
  ProductCard,
  ProductDetailedCard,
} from "../components/ProductCard/ProductCard";
import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import VideoSection from "../components/VideoSection/VideoSection";
import Stats from "../components/Stats/Stats";
import LogoCarousel from "../components/LogoCarousel/LogoCarousel";
import HowTo from "../components/HowTo/HowTo";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";

const Homepage = () => {
  const stats = [
    {
      statImage: "/assets/stat1.avif",
      statDesc: "of parents agree that Yoto grows with their child",
    },
    {
      statImage: "/assets/stat2.avif",
      statDesc: "of Yoto Player owners agree it’s made bedtime easier",
    },
    {
      statImage: "/assets/stat3.avif",
      statDesc: "minutes listened in 2022",
    },
    {
      statImage: "/assets/stat4.avif",
      statDesc: "of Yoto Mini owners agree it’s made travel easier",
    },
  ];

  const logos = [
    "/assets/logo1.png",
    "/assets/logo2.png",
    "/assets/logo3.png",
    "/assets/logo4.png",
    "/assets/logo5.png",
    "/assets/logo6.png",
    "/assets/logo7.png",
    "/assets/logo8.png",
    "/assets/logo9.png",
    "/assets/logo10.png",
    "/assets/logo11.png",
    "/assets/logo12.png",
    "/assets/logo13.png",
    "/assets/logo14.png",
    "/assets/logo15.png",
    "/assets/logo16.png",
    "/assets/logo17.png",
    "/assets/logo18.png",
    "/assets/logo19.png",
    "/assets/logo20.png",
  ];

  const instructions = [
    {
      imageUrl: "/assets/instruction1.avif",
      instructionTitle: "1. Choose",
      instructionDesc: "Kids pop a card in the slot to play.",
    },
    {
      imageUrl: "/assets/instruction2.avif",
      instructionTitle: "2. Press",
      instructionDesc: "Kid-friendly buttons unlock exclusive free audio.",
    },
    {
      imageUrl: "/assets/instruction3.avif",
      instructionTitle: "3. Twist",
      instructionDesc: "Change chapters and adjust volume on their own.",
    },
  ];

  const galleryGrid = [
    {
      imgUrl: "/assets/gallery1.webp",
      imgCaption: "@heirsthrone",
    },
    {
      imgUrl: "/assets/gallery2.webp",
      imgCaption: "@haleymartinoxo",
    },
    {
      imgUrl: "/assets/gallery3.webp",
      imgCaption: "@heirsthrone",
    },
    {
      imgUrl: "/assets/gallery4.webp",
      imgCaption: "@mrskatiecarlson",
    },
    {
      imgUrl: "/assets/gallery7.webp",
      imgCaption: "@themodernhousewifeny",
    },
    {
      imgUrl: "/assets/gallery6.webp",
      imgCaption: "@leahfayegaeddert",
    },
    {
      imgUrl: "/assets/gallery5.webp",
      imgCaption: "@emilywondree",
    },
    {
      imgUrl: "/assets/gallery8.webp",
      imgCaption: "@jmccormick526",
    },
    {
      imgUrl: "/assets/gallery9.webp",
      imgCaption: "@nikhilsilas_",
    },
  ];
  return (
    <Box>
      <HeroSection />
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={10} p={10}>
        <ProductCard
          imageUrl={"/assets/product1.avif"}
          productTitle={"Yoto Player"}
        />
        <ProductCard
          imageUrl={"/assets/product2.avif"}
          productTitle={"Single Cards"}
        />
        <ProductCard
          imageUrl={"/assets/product3.avif"}
          productTitle={"Card Packs"}
        />
        <ProductCard
          imageUrl={"/assets/product4.avif"}
          productTitle={"Accessories"}
        />
      </SimpleGrid>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        width="100%"
        p={{ base: 10, md: 40 }}
      >
        <VideoSection />
      </Flex>
      <Flex direction={"column"}>
        <Flex
          p={{ base: 10, md: 20 }}
          gap={8}
          direction={{ base: "column", md: "row" }}
        >
          <Box>
            <ProductDetailedCard
              imageUrl={"/assets/yoto1.avif"}
              productTitle={"Yoto Player"}
              productPrice={"$ 99.99"}
              productActualPrice={"119.99"}
              productRating={5}
              productReviews={480}
              productAvailability={"Limited time offer"}
              productBtnText={"Buy Yoto Player"}
            />
          </Box>
          <Box>
            <ProductDetailedCard
              imageUrl={"/assets/yoto2.avif"}
              productTitle={"Yoto Mini"}
              productPrice={"$ 69.99"}
              productRating={5}
              productReviews={778}
              productAvailability={"Out of Stock"}
              productBtnText={"Join Waitlist"}
            />
          </Box>
        </Flex>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={{ base: 10, md: 20 }}
          pt={{ base: 0, md: 0 }}
        >
          <Button
            color={"#1471D9"}
            variant="outline"
            borderColor={"#1471D9"}
            width={{ base: "100%", md: "40%" }}
            height={{ base: 16, md: 70 }}
            fontSize={"xl"}
            borderRadius={14}
            border={`2px`}
          >
            Compare Player vs Mini
          </Button>
        </Box>
      </Flex>
      <Stats statsTitle={"Did you know..."} statsbg={"#223868"} stats={stats} />
      <LogoCarousel logos={logos} />
      <HowTo
        bg={"#FBF9FA"}
        instructions={instructions}
        sectionHeader={"The three steps to happy listening"}
        sectionSubHeader={"That's right, it's as easy as 1, 2, 3..."}
      />
      <Box display={"flex"} flexDirection={"column"}>
        <GalleryGrid images={galleryGrid} galleryTitle="Yoto in the wild" />
      </Box>
    </Box>
  );
};

export default Homepage;
