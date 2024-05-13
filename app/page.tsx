"use client";
import { ChakraProvider } from "@chakra-ui/react";

import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Homepage from "./pages/Homepage";

const Home = () => {
  return (
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  );
};

export default Home;
