import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

export interface VideoSectionProps {
  sectionTitle?: string;
  sectionErrorMsg: string;
  playBtnText: string;
  videoUrl: string;
}
const VideoSection = ({
  sectionTitle,
  sectionErrorMsg,
  playBtnText,
  videoUrl,
}: VideoSectionProps) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      // @ts-ignore
      videoRef.current.play();
    } else if (!isPlaying && videoRef.current) {
      // @ts-ignore
      videoRef.current.currentTime = 24;
      // @ts-ignore
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  return (
    <Flex flexDirection={"column"} width="100%" position="relative">
      {sectionTitle && (
        <Text
          color={"#F45436"}
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight={700}
          textAlign="center"
          marginBottom={4}
        >
          {sectionTitle}
        </Text>
      )}
      <Box position="relative" width="100%">
        <video width="100%" controls ref={videoRef}>
          <source src={videoUrl} type="video/mp4" />
          {sectionErrorMsg}
        </video>
        {!isPlaying && (
          <Button
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="1"
            onClick={handlePlayButtonClick}
            color={"white"}
            opacity={0.6}
            bg={"black"}
            leftIcon={<FaRegCirclePlay />}
            size={"lg"}
            fontSize={"2xl"}
            borderRadius={20}
          >
            {playBtnText}
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default VideoSection;
