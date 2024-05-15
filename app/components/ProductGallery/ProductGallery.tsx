"use client";
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export interface ProductImage {
  original: string;
  thumbnail: string;
}
export interface ProductGalleryProps {
  images: ProductImage[];
}
const ProductGallery = ({ images }: ProductGalleryProps) => {
    console.log(images)
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
      flexDirection={"column"}
      width={{ base: "100%" }}
    >
      <ImageGallery items={images} fullscreen={true} showPlayButton={false} />
    </Box>
  );
};

export default ProductGallery;
