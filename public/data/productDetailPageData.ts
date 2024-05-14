import { ProductDetailPageProps } from "@/app/pages/ProductDetailPage";

export const productDetailPageData: ProductDetailPageProps = {
  priceHeader: {
    productPrice: "$99.99",
    btnText: "Add to basket",
  },
  productListing: {
    productTitle: "Yoto Player",
    productGen: "3rd Generation",
    productPrice: "$99.99",
    productActualPrice: "$119.99",
    productRating: 5,
    productReviews: "480",
    productDescription:
      "Yoto Player (3rd Generation) opens up kids’ creative play to a whole new world of potential. Build independence, inspire imagination and let kids from 3-12 + lead the way through family life.",
    productSubDescription: "No microphone. No camera. No ads.",
    btnText: "Add to Basket",
    reasons: {
      reasonTitles: [
        "Free Delivery",
        "60 day fuss free returns",
        "4 monthly payments with Klama",
      ],
      bg: "#F5F0F0",
    },

    features: [
      {
        featureIcon: "/assets/feature1.png",
        featureText: "For ages 3-12+",
      },
      {
        featureIcon: "/assets/feature2.avif",
        featureText: "Enjoy up to 24 hours of play per charge",
      },
      {
        featureIcon: "/assets/feature3.avif",
        featureText: "Includes endless free audio",
      },
      {
        featureIcon: "/assets/feature4.png",
        featureText: "Free Make Your Own Card",
      },
      {
        featureIcon: "/assets/feature5.png",
        featureText: "Room thermometer",
      },
      {
        featureIcon: "/assets/feature6.avif",
        featureText: "Acoustically-engineered stereo sound",
      },
      {
        featureIcon: "/assets/feature7.avif",
        featureText: "Ok-to-wake night light and clock",
      },
      {
        featureIcon: "/assets/feature8.avif",
        featureText: "Bluetooth enabled",
      },
    ],
  },
};
