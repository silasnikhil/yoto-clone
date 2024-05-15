"use client";
import React from "react";
import HeroSection, {
  HeroSectionProps,
} from "../components/HeroSection/HeroSection";
import {
  ProductCard,
  ProductCardProps,
  ProductDetailedCard,
  ProductDetailsProps,
} from "../components/ProductCard/ProductCard";
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import VideoSection, {
  VideoSectionProps,
} from "../components/VideoSection/VideoSection";
import Stats, { StatsInterface } from "../components/Stats/Stats";
import LogoCarousel, {
  LogoCarouselProps,
} from "../components/LogoCarousel/LogoCarousel";
import HowTo, { HowToProps } from "../components/HowTo/HowTo";
import GalleryGrid, {
  GalleryGridInterface,
} from "../components/GalleryGrid/GalleryGrid";
import { homePageData } from "@/public/data/homepage";

export interface HomePageProps {
  heroSection: HeroSectionProps;
  productCards: ProductCardProps[];
  videoSection: VideoSectionProps;
  productDetailedCards: ProductDetailsProps[];
  compareBtnText: string;
  stats: StatsInterface;
  logos: LogoCarouselProps;
  howTo: HowToProps;
  galleryGrid: GalleryGridInterface;
}
const Homepage = ({}) => {
  return (
    <Box>
      <HeroSection
        bannerUrl={homePageData.heroSection.bannerUrl}
        heroTitle={homePageData.heroSection.heroTitle}
        heroSubTitle={homePageData.heroSection.heroSubTitle}
        primaryBtnText={homePageData.heroSection.primaryBtnText}
        navigateUrl={homePageData.heroSection.navigateUrl}
        secondaryBtnText={homePageData.heroSection.secondaryBtnText}
        reviewTitle={homePageData.heroSection.reviewTitle}
        reviewCount={homePageData.heroSection.reviewCount}
      />
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={10} p={10}>
        {homePageData.productCards.map((card, index) => (
          <ProductCard
            imageUrl={card.imageUrl}
            productTitle={card.productTitle}
            key={index}
          />
        ))}
      </SimpleGrid>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        width="100%"
        p={{ base: 10, md: 40 }}
      >
        <VideoSection
          sectionTitle={homePageData.videoSection.sectionTitle}
          sectionErrorMsg={homePageData.videoSection.sectionErrorMsg}
          playBtnText={homePageData.videoSection.playBtnText}
          videoUrl={homePageData.videoSection.videoUrl}
        />
      </Flex>
      <Flex direction={"column"}>
        <Flex
          p={{ base: 10, md: 20 }}
          gap={8}
          direction={{ base: "column", md: "row" }}
        >
          {homePageData.productDetailedCards.map((productCard, index) => (
            <Box key={index}>
              <ProductDetailedCard
                imageUrl={productCard.imageUrl}
                productTitle={productCard.productTitle}
                productPrice={productCard.productPrice}
                productActualPrice={productCard.productActualPrice}
                productRating={productCard.productRating}
                productReviews={productCard.productReviews}
                productAvailability={productCard.productAvailability}
                productBtnText={productCard.productBtnText}
              />
            </Box>
          ))}
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
            {homePageData.compareBtnText}
          </Button>
        </Box>
      </Flex>
      <Stats
        statsTitle={homePageData.stats.statsTitle}
        statsbg={homePageData.stats.statsbg}
        stats={homePageData.stats.stats}
      />
      <LogoCarousel logos={homePageData.logos.logos} />
      <HowTo
        bg={homePageData.howTo.bg}
        instructions={homePageData.howTo.instructions}
        sectionHeader={homePageData.howTo.sectionHeader}
        sectionSubHeader={homePageData.howTo.sectionSubHeader}
        useAsCards={homePageData.howTo.useAsCards}
      />
      <Box display={"flex"} flexDirection={"column"}>
        <GalleryGrid
          images={homePageData.galleryGrid.images}
          galleryTitle={homePageData.galleryGrid.galleryTitle}
        />
      </Box>
    </Box>
  );
};

export default Homepage;
