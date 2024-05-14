import { Box } from "@chakra-ui/react";
import React from "react";
import PriceHeader, {
  PriceHeaderProps,
} from "../components/PriceHeader/PriceHeader";
import { productDetailPageData } from "@/public/data/productDetailPageData";
import ProductListing, {
  ProductListingProps,
} from "../components/ProductListing/ProductListing";
import Features from "../components/Features/Features";

export interface ProductDetailPageProps {
  priceHeader: PriceHeaderProps;
  productListing: ProductListingProps;
}
const ProductDetailPage = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <PriceHeader
        productPrice={productDetailPageData.priceHeader.productPrice}
        btnText={productDetailPageData.priceHeader.btnText}
      />
      <ProductListing
        productTitle={productDetailPageData.productListing.productTitle}
        productGen={productDetailPageData.productListing.productGen}
        productPrice={productDetailPageData.productListing.productPrice}
        productActualPrice={
          productDetailPageData.productListing.productActualPrice
        }
        productRating={productDetailPageData.productListing.productRating}
        productReviews={productDetailPageData.productListing.productReviews}
        productDescription={
          productDetailPageData.productListing.productDescription
        }
        productSubDescription={
          productDetailPageData.productListing.productSubDescription
        }
        btnText={productDetailPageData.productListing.btnText}
        reasons={productDetailPageData.productListing.reasons}
        features={productDetailPageData.productListing.features}
      />
    </Box>
  );
};

export default ProductDetailPage;
