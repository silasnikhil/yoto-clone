"use client";
import { ChakraProvider } from "@chakra-ui/react";

import React from "react";
import ProductDetailPage from "../pages/ProductDetailPage";

const Home = () => {
  return (
    <ChakraProvider>
      <ProductDetailPage />
    </ChakraProvider>
  );
};  

export default Home;
