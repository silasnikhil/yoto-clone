import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export interface GetAppProps {
  getAppTitle: string;
  getAppSubTitle: string;
  getAppStoreImageUrl: string;
  getAppStoreRedirect: string;
  getPlayStoreImageUrl: string;
  getPlayStoreRedirect: string;
}
const GetApp = ({
  getAppTitle,
  getAppSubTitle,
  getAppStoreImageUrl,
  getPlayStoreImageUrl,
  getAppStoreRedirect,
  getPlayStoreRedirect,
}: GetAppProps) => {
  return (
    <Box
      p={{ base: 8, md: 40 }}
      display={"flex"}
      gap={12}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      bg={"#F5F0F0"}
    >
      <Text
        color={"#F45436"}
        fontSize={{ base: "4xl", md: "6xl" }}
        fontWeight={700}
      >
        {getAppTitle}
      </Text>
      <Text
        color={"#003C1F"}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={500}
      >
        {getAppSubTitle}
      </Text>
      <Box
        display="flex"
        gap={4}
        justifyContent="center"
        alignItems="ceenter"
        width={{ base: "100%", md: "50%" }}
      >
        <Link
          href={getAppStoreRedirect}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image
            src={getAppStoreImageUrl}
            alt="App Store Link"
            width={"100%"}
            height="auto"
          />
        </Link>
        <Link
          href={getPlayStoreRedirect}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image
            src={getPlayStoreImageUrl}
            alt="Play Store Link"
            width={"100%"}
            height="auto"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default GetApp;
