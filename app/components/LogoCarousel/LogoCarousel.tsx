import React, { useRef } from "react";
import { Box, Image } from "@chakra-ui/react";
import "./logo-carousel.css";

interface LogoCarouselProps {
  logos: string[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <Box
      id="logo-carousel"
      overflow="hidden"
      position="relative"
      h={{base: 225, md: 300}}
      bg="gray.100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      p={{ base: 10, md: 20 }}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
    >
      {/* Render logos */}
      <Box
        id="logo-clone-container"
        whiteSpace="nowrap"
        position="absolute"
        top={0}
        left={0}
        display="inline-flex"
        animation="moveLogos 20s linear infinite"
        p={{ base: 10, md: 20 }}
        ref={carouselRef}
      >
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            mr={20}
            height={120}
            width={120}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LogoCarousel;
