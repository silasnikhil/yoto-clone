import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    } else if (!isPlaying && videoRef.current) {
      videoRef.current.currentTime = 24;
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  return (
    <Flex flexDirection={"column"} width="100%" position="relative">
      <Text
        color={"#F45436"}
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight={700}
        textAlign="center"
        marginBottom={4}
      >
        Inspiring audio for life’s greatest adventure
      </Text>
      <Box position="relative" width="100%">
        <video width="100%" controls ref={videoRef}>
          <source src="/assets/yoto-player.mp4" type="video/mp4" />
          Your browser does not support the video tag.
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
            Play Me
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default VideoSection;
