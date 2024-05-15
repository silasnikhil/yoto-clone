import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PriceHeader, {
  PriceHeaderProps,
} from "../components/PriceHeader/PriceHeader";
import { productDetailPageData } from "@/public/data/productDetailPageData";
import ProductListing, {
  ProductListingProps,
} from "../components/ProductListing/ProductListing";
import Promo, { PromoProps } from "../components/Promo/Promo";
import HowTo, { HowToProps } from "../components/HowTo/HowTo";
import VideoSection, {
  VideoSectionProps,
} from "../components/VideoSection/VideoSection";
import Statement, { StatementProps } from "../components/Statement/Statement";
import Lottie from "lottie-react";
import GetApp, { GetAppProps } from "../components/GetApp/GetApp";

export interface ProductDetailPageProps {
  priceHeader: PriceHeaderProps;
  productListing: ProductListingProps;
  promo: PromoProps;
  howTo: HowToProps;
  howToUse: HowToProps;
  howToListen: HowToProps;
  videoSection: VideoSectionProps;
  promoNight: PromoProps;
  promoWake: PromoProps;
  statements: StatementProps;
  breakAwayText: string;
  breakAwayAnimation: any;
  promoSound: PromoProps;
  getApp: GetAppProps;
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
      <Promo
        imgUrl={productDetailPageData.promo.imgUrl}
        promoHeader={productDetailPageData.promo.promoHeader}
        promoHeaderColor={productDetailPageData.promo.promoHeaderColor}
        promoDesc={productDetailPageData.promo.promoDesc}
        promoDescColor={productDetailPageData.promo.promoDescColor}
        bg={productDetailPageData.promo.bg}
        invert={productDetailPageData.promo.invert}
      />
      <HowTo
        bg={productDetailPageData.howTo.bg}
        instructions={productDetailPageData.howTo.instructions}
        sectionHeader={productDetailPageData.howTo.sectionHeader}
        sectionSubHeader={productDetailPageData.howTo.sectionSubHeader}
        useAsCards={productDetailPageData.howTo.useAsCards}
      />
      <VideoSection
        sectionErrorMsg={productDetailPageData.videoSection.sectionErrorMsg}
        playBtnText={productDetailPageData.videoSection.playBtnText}
        videoUrl={productDetailPageData.videoSection.videoUrl}
      />
      <Box pl={{ base: 4, md: 20 }} pr={{ base: 4, md: 20 }}>
        <HowTo
          bg={productDetailPageData.howToUse.bg}
          instructions={productDetailPageData.howToUse.instructions}
          useAsCards={productDetailPageData.howToUse.useAsCards}
          instructionTitleFontSize={
            productDetailPageData.howToUse.instructionTitleFontSize
          }
          instructionDescFontSize={
            productDetailPageData.howToUse.instructionDescFontSize
          }
        />
      </Box>
      <Statement
        statementTitle={productDetailPageData.statements.statementTitle}
        statementDesc={productDetailPageData.statements.statementDesc}
        statements={productDetailPageData.statements.statements}
      />
      <Box pt={8} pb={8} bg={"#223868"}>
        <Promo
          imgUrl={productDetailPageData.promoNight.imgUrl}
          promoHeader={productDetailPageData.promoNight.promoHeader}
          promoHeaderColor={productDetailPageData.promoNight.promoHeaderColor}
          promoDesc={productDetailPageData.promoNight.promoDesc}
          promoDescColor={productDetailPageData.promoNight.promoDescColor}
          bg={productDetailPageData.promoNight.bg}
          invert={productDetailPageData.promoNight.invert}
        />
        <Promo
          imgUrl={productDetailPageData.promoWake.imgUrl}
          promoHeader={productDetailPageData.promoWake.promoHeader}
          promoHeaderColor={productDetailPageData.promoWake.promoHeaderColor}
          promoDesc={productDetailPageData.promoWake.promoDesc}
          promoDescColor={productDetailPageData.promoWake.promoDescColor}
          bg={productDetailPageData.promoWake.bg}
          invert={productDetailPageData.promoWake.invert}
        />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={{ base: 4, md: 40 }}
          pt={{ base: 4, md: 20 }}
          pb={{ base: 4, md: 20 }}
        >
          <Text
            fontSize={{ base: "xl", md: "3xl" }}
            color={"white"}
            fontWeight={600}
          >
            {productDetailPageData.breakAwayText}
          </Text>
          <Lottie
            animationData={productDetailPageData.breakAwayAnimation}
            loop
            autoplay
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
      <Box pt={{ base: 4, md: 10 }} pb={{ base: 4, md: 10 }}>
        <Promo
          imgUrl={productDetailPageData.promoSound.imgUrl}
          promoHeader={productDetailPageData.promoSound.promoHeader}
          promoHeaderColor={productDetailPageData.promoSound.promoHeaderColor}
          promoDesc={productDetailPageData.promoSound.promoDesc}
          promoDescColor={productDetailPageData.promoSound.promoDescColor}
          bg={productDetailPageData.promoSound.bg}
          invert={productDetailPageData.promoSound.invert}
        />
      </Box>
      <Box pl={{ base: 4, md: 40 }} pr={{ base: 4, md: 40 }}>
        <HowTo
          bg={productDetailPageData.howToListen.bg}
          instructions={productDetailPageData.howToListen.instructions}
          useAsCards={productDetailPageData.howToListen.useAsCards}
          instructionTitleFontSize={
            productDetailPageData.howToListen.instructionTitleFontSize
          }
          instructionDescFontSize={
            productDetailPageData.howToListen.instructionDescFontSize
          }
        />
      </Box>
      <GetApp
        getAppTitle={productDetailPageData.getApp.getAppTitle}
        getAppSubTitle={productDetailPageData.getApp.getAppSubTitle}
        getAppStoreImageUrl={productDetailPageData.getApp.getAppStoreImageUrl}
        getPlayStoreImageUrl={productDetailPageData.getApp.getPlayStoreImageUrl}
        getAppStoreRedirect={productDetailPageData.getApp.getAppStoreRedirect}
        getPlayStoreRedirect={productDetailPageData.getApp.getPlayStoreRedirect}
      />
    </Box>
  );
};

export default ProductDetailPage;
