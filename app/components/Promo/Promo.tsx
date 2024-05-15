import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";

export interface PromoProps {
  imgUrl: string;
  promoHeader: string;
  promoHeaderColor: string;
  promoDesc: string;
  promoDescColor: string;
  bg: string;
  invert: boolean;
}

const Promo = ({
  imgUrl,
  promoHeader,
  promoHeaderColor,
  promoDesc,
  promoDescColor,
  bg,
  invert,
}: PromoProps) => {
  return (
    <Box display={"flex"} flexDirection={{ base: "column", md: "row" }} bg={bg}>
      {invert ? (
        <>
          <Box
            width={{ base: "100%", md: "50%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            flexDirection={"column"}
            p={{ base: 4, md: 24 }}
            gap={8}
            pl={{ base: 4, md: 40 }}
          >
            <Text
              color={promoHeaderColor}
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight={700}
            >
              {promoHeader}
            </Text>
            <Text
              color={promoDescColor}
              fontSize={{ base: "xl", md: "3xl" }}
              textAlign={{ base: "left", md: "right" }}
            >
              {promoDesc}
            </Text>
          </Box>
          <Box width={{ base: "100%", md: "50%" }}>
            <Image
              src={imgUrl}
              width={"full"}
              height={"full"}
              objectFit={"cover"}
            />
          </Box>
          <Divider
            height={2}
            display={{ base: "block", md: "none" }}
            color={"white"}
            variant={"dashed"}
          />
        </>
      ) : (
        <>
          <Box width={{ base: "100%", md: "50%" }}>
            <Image
              src={imgUrl}
              width={"full"}
              height={"full"}
              objectFit={"cover"}
            />
          </Box>
          <Box
            width={{ base: "100%", md: "50%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            flexDirection={"column"}
            p={{ base: 4, md: 24 }}
            gap={8}
            pr={{ base: 4, md: 40 }}
          >
            <Text
              color={promoHeaderColor}
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight={700}
            >
              {promoHeader}
            </Text>
            <Text
              color={promoDescColor}
              fontSize={{ base: "xl", md: "3xl" }}
              pr={{ base: 0, md: 40 }}
            >
              {promoDesc}
            </Text>
          </Box>
          <Divider
            height={2}
            display={{ base: "block", md: "none" }}
            color={"white"}
            variant={"dashed"}
          />
        </>
      )}
    </Box>
  );
};

export default Promo;
