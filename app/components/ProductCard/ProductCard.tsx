import React from "react";
import {
  Card,
  CardBody,
  Text,
  Button,
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";
import { MdOutlineStar } from "react-icons/md";

export interface ProductCardProps {
  imageUrl: string;
  productTitle: string;
}
export const ProductCard = ({ imageUrl, productTitle }: ProductCardProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      justifyContent={"center"}
      alignItems={"center"}
      _hover={{
        cursor: "pointer",
        textDecoration: "underline",
      }}
    >
      <Card maxW="sm" bg={"#F5F0F0"}>
        <CardBody>
          <Image
            src={imageUrl}
            alt="Green double couch with wooden legs"
            height={{ base: 200, md: 250 }}
            width={{ base: 200, md: 250 }}
          />
        </CardBody>
      </Card>
      <Text fontSize={"2xl"} fontWeight={600}>
        {productTitle}
      </Text>
    </Box>
  );
};

export interface ProductDetailsProps {
  imageUrl: string;
  productTitle: string;
  productAvailability: string;
  productPrice: string;
  productActualPrice?: string;
  productRating: number;
  productReviews: string | number;
  productBtnText: string;
}
export const ProductDetailedCard = ({
  imageUrl,
  productTitle,
  productAvailability,
  productPrice,
  productActualPrice,
  productRating,
  productReviews,
  productBtnText,
}: ProductDetailsProps) => {
  const renderRatingStars = () => {
    const maxRating = 5;
    const rating = Math.min(productRating, maxRating);
    const stars: JSX.Element[] = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<MdOutlineStar key={i} color="#04B67A" size={24} />);
    }
    return stars;
  };
  return (
    <Flex direction={"column"} gap={2}>
      <Image src={imageUrl} />
      <Text color={"#F45436"} fontSize={"6xl"} fontWeight={700}>
        {productTitle}
      </Text>
      <Text fontSize={"3xl"} fontWeight={400}>
        {productAvailability}
      </Text>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Text fontSize={"4xl"} fontWeight={700}>
          {productPrice}
        </Text>
        {productActualPrice && (
          <Text color={"gray.800"} fontSize={"md"} fontWeight={400} as="s">
            {productActualPrice}
          </Text>
        )}
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        {renderRatingStars()}
        <Text fontSize={"lg"}>{productReviews}</Text>
      </Box>
      <Button
        color={"white"}
        bg={"#F45436"}
        width={{ base: "100%", md: 300 }}
        height={{ base: 16, md: 70 }}
        boxShadow="0px 2px 12px rgba(0, 0, 0, 0.8)"
        mt={4}
        fontSize={"xl"}
        _hover={{
          background: "#D7533B",
        }}
      >
        {productBtnText}
      </Button>
    </Flex>
  );
};
