import { Box, Button, Text, grid } from "@chakra-ui/react";
import { IoIosHeartEmpty } from "react-icons/io";
import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Reasons, { ReasonsInterface } from "../Reasons/Reasons";
import Features, { FeatureInterface } from "../Features/Features";

export interface ProductListingProps {
  productTitle: string;
  productGen: string;
  productPrice: string;
  productActualPrice: string;
  productRating: number;
  productReviews: string | number;
  productDescription: string;
  productSubDescription: string;
  btnText: string;
  reasons: ReasonsInterface;
  features: FeatureInterface[];
}
const ProductListing = ({
  productTitle,
  productGen,
  productPrice,
  productActualPrice,
  productRating,
  productReviews,
  productDescription,
  productSubDescription,
  btnText,
  reasons,
  features,
}: ProductListingProps) => {
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
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      gap={8}
      p={{ base: 4, md: 20 }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={{ base: "100%", md: "50%" }}
      >
        Container for Image Gallery - Create a separe component
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={4}
        justifyContent={"center"}
        alignItems={"flex-start"}
        width={{ base: "100%", md: "50%" }}
        p={{ base: 2, md: 16 }}
        pr={{ base: 2, md: 32 }}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={4}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Text fontSize={"5xl"}>{productTitle}</Text>
          <IoIosHeartEmpty size={36} color="black" />
        </Box>
        <Text fontSize={"3xl"}>{productGen}</Text>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={4}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Text fontSize={"3xl"} color={"red"}>
            {productPrice}
          </Text>
          <Text fontSize={"xl"} color={"black"} as="s" fontWeight={230}>
            {productActualPrice}
          </Text>
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
          <ChevronDownIcon />
        </Box>
        <Text w={{ base: "full", md: "80%" }} fontSize={"xl"}>
          {productDescription}
        </Text>
        <Text fontSize={"xl"}>{productSubDescription}</Text>
        <Button
          width={"full"}
          color={"white"}
          bg={"#F45436"}
          size={"lg"}
          fontSize={"xl"}
          mt={8}
          boxShadow="0px 2px 12px rgba(0, 0, 0, 0.8)"
          _hover={{
            background: "#D7533B",
          }}
        >
          {btnText}
        </Button>
        <Box width={"full"} mt={8}>
          <Reasons reasonTitles={reasons.reasonTitles} bg={reasons.bg} />
        </Box>
        <Box width={"full"} mt={8}>
          <Features features={features} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductListing;
