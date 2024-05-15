import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export interface FeatureInterface {
  featureIcon: string;
  featureText: string;
}
export interface FeaturesProps {
  features: FeatureInterface[];
}
const Features = ({ features }: FeaturesProps) => {
  return (
    <SimpleGrid columns={2} row={4} spacing={8}>
      {features.map((feature) => (
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={4}
        >
          <Image src={feature.featureIcon} height={"32px"} width={"32px"} />
          <Text>{feature.featureText}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Features;
