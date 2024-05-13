import { Box, Image, List, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import "./gallery-grid.css";
import { YotoLove } from "../Icons/Icons";

interface GalleryImageInterface {
  imgUrl: string;
  imgCaption: string;
}
interface GalleryGridInterface {
  images: GalleryImageInterface[];
  galleryTitle?: string;
}

const GalleryGrid = ({ images, galleryTitle }: GalleryGridInterface) => {
  return (
    <Box p={{ base: 4, md: 10, lg: 40 }}>
      <Box display={"flex"} flexDirection={"column"} gap={8}>
        {galleryTitle && (
          <>
            <YotoLove />
            <Text
              color={"#F45436"}
              fontSize={{ base: "3xl", md: "6xl" }}
              fontWeight={700}
            >
              {galleryTitle}
            </Text>
          </>
        )}
        <UnorderedList className="gallery-container">
          {images.map((image) => (
            <List
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              flexDirection={"column"}
              pb={8}
              gap={4}
              style={{
                breakInside: "avoid",
              }}
              cursor={"pointer"}
              _hover={{ transform: "scale(1.1)" }}
            >
              <Image src={image.imgUrl} height={"100%"} width={"100%"} />
              <Text textAlign={"left"} fontSize={{ base: "sm", md: "lg" }}>
                {image.imgCaption}
              </Text>
            </List>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default GalleryGrid;
