import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export interface PriceHeaderProps {
  productPrice: string;
  btnText: string;
}
const PriceHeader = ({ productPrice, btnText }: PriceHeaderProps) => {
  return (
    <Box
      position={"sticky"}
      p={{ base: 2, md: 5 }}
      pl={{ base: 4, md: 48 }}
      pr={{ base: 4, md: 48 }}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      boxShadow="0px 2px 12px rgba(0,0, 0, 0.4)"
    >
      <Text color={"#F45436"} fontSize={"3xl"} fontWeight={600}>
        {productPrice}
      </Text>
      <Button
        color={"white"}
        bg={"#F45436"}
        boxShadow="0px 2px 12px rgba(0, 0, 0, 0.8)"
        size={"lg"}
        _hover={{
          background: "#D7533B",
        }}
      >
        {btnText}
      </Button>
    </Box>
  );
};

export default PriceHeader;
