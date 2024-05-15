import { ProductDetailPageProps } from "@/app/pages/ProductDetailPage";
import walk from "../assets/walk.json";

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
    images: [
      {
        original: "/assets/product2.webp",
        thumbnail: "/assets/product2.webp",
      },
      {
        original: "/assets/product1.webp",
        thumbnail: "/assets/product1.webp",
      },
      {
        original: "/assets/product3.webp",
        thumbnail: "/assets/product3.webp",
      },
      {
        original: "/assets/product4.webp",
        thumbnail: "/assets/product4.webp",
      },
      {
        original: "/assets/product5.webp",
        thumbnail: "/assets/product5.webp",
      },
      {
        original: "/assets/product6.webp",
        thumbnail: "/assets/product6.webp",
      },
    ],
  },
  promo: {
    imgUrl: "/assets/promo1.avif",
    promoHeader: "Independent, ad-free listening for kids",
    promoHeaderColor: "black",
    promoDesc:
      "No more handing over your smartphone or worrying about intrusive ads - Yoto Player puts kids safely in control of their listening, learning and play. So they can explore what inspires them, and you can watch their confidence grow.",
    promoDescColor: "black",
    bg: "white",
    invert: false,
  },
  howTo: {
    bg: "#FBF9FA",
    instructions: [
      {
        imageUrl: "/assets/instruction1.avif",
        instructionTitle: "1. Choose",
        instructionDesc: "Kids pop a card in the slot to play.",
      },
      {
        imageUrl: "/assets/instruction2.avif",
        instructionTitle: "2. Press",
        instructionDesc: "Kid-friendly buttons unlock exclusive free audio.",
      },
      {
        imageUrl: "/assets/instruction3.avif",
        instructionTitle: "3. Twist",
        instructionDesc: "Change chapters and adjust volume on their own.",
      },
    ],
    sectionHeader: "The three steps to happy listening",
    sectionSubHeader: "That's right, it's as easy as 1, 2, 3...",
    useAsCards: false,
  },
  videoSection: {
    sectionErrorMsg: "Your browser does not support the video tag.",
    playBtnText: "Play Me",
    videoUrl: "/assets/yoto-player.mp4",
  },
  howToUse: {
    bg: "white",
    instructions: [
      {
        imageUrl: "/assets/howto1.avif",
        instructionTitle: "Parents in control - 0-2 years",
        instructionDesc:
          "Everything parents need to fill their home with sound and make bedtimes a breeze.",
      },
      {
        imageUrl: "/assets/howto2.avif",
        instructionTitle: "Kids in control - 3-5 years",
        instructionDesc: "Kid-friendly buttons unlock exclusive free audio.",
      },
      {
        imageUrl: "/assets/howto3.avif",
        instructionTitle: "Kids in control - 6-12+ years",
        instructionDesc:
          "Kids form healthy routines and discover new audio that inspires them as they grow.",
      },
    ],
    useAsCards: true,
    instructionTitleFontSize: "2xl",
    instructionDescFontSize: "lg",
  },
  promoNight: {
    imgUrl: "/assets/promo2.avif",
    promoHeader: "Get “nighty-night”s right",
    promoHeaderColor: "#FD9E69",
    promoDesc:
      "Yoto Player’s night light has no less than seven night light colors to choose from. Just flip the display face-down after lights out and, hey presto – instant sleepy ambience fills the room.",
    promoDescColor: "white",
    bg: "#223868",
    invert: false,
  },
  promoWake: {
    imgUrl: "/assets/promo3.avif",
    promoHeader: "Ok-to-Wake? You decide",
    promoHeaderColor: "#FD9E69",
    promoDesc:
      "The Ok-to-wake clock lets kids know when it’s time to get up and go. You choose the time, and Yoto Player’s clock and night light will change to show that it’s wake-up time. It’s what an extra 37 minutes of dreams are made of.",
    promoDescColor: "white",
    bg: "#223868",
    invert: true,
  },
  statements: {
    statementTitle: "Sweeter dreams",
    statementDesc:
      "90% of parents agree that Yoto has made bedtimes easier for their family. That’s a lot of Zs! Discover how Yoto Player can help your child be a sleep superstar and good morning maestro.",
    statements: [
      {
        imageUrl: "/assets/statement1.avif",
        statementName: "Room Thermometer",
      },
      {
        imageUrl: "/assets/statement2.avif",
        statementName: "Sleep Sounds",
      },
      {
        imageUrl: "/assets/statement3.avif",
        statementName: "Night light",
      },
      {
        imageUrl: "/assets/statement4.avif",
        statementName: "Ok-to-wake",
      },
    ],
  },
  breakAwayText:
    "From white noise to dreamy music, kids can nod off to a huge library of sleep sounds.",
  breakAwayAnimation: walk,
  promoSound: {
    imgUrl: "/assets/promo4.avif",
    promoHeader: "Immersive stereo sound",
    promoHeaderColor: "black",
    promoDesc:
      "The new Yoto Player simply sounds better. We’ve acoustically engineered its stereo speakers to please even the most discerning of audiophiles (and their parents).",
    bg: "white",
    invert: true,
    promoDescColor: "black",
  },
  howToListen: {
    bg: "white",
    instructions: [
      {
        imageUrl: "/assets/howto4.svg",
        instructionTitle: "Get offline",
        instructionDesc:
          "Yoto Player can store 600+ hours of audio for offline listening. Just download your Yoto Cards with WiFi and then the world is their auditory oyster.",
      },
      {
        imageUrl: "/assets/howto5.avif",
        instructionTitle: "Bluetooth speaker",
        instructionDesc:
          "Yoto Player works as a regular Bluetooth speaker too. Sync up with your phone or computer to play whatever you like.",
      },
      {
        imageUrl: "/assets/howto6.avif",
        instructionTitle: "Headphones",
        instructionDesc:
          "For quiet time or travel time, kids can use wireless or wired headphones for a more personal listening experience.",
      },
    ],
    useAsCards: true,
    instructionTitleFontSize: "2xl",
    instructionDescFontSize: "lg",
  },
  getApp: {
    getAppTitle: "Get the Yoto App",
    getAppSubTitle:
      "The simple way to set boundaries, customize your family’s experience, and generally make the most of your new player.",
    getAppStoreImageUrl: "/assets/getIosApp.avif",
    getPlayStoreImageUrl: "/assets/getPlayStore.avif",
    getAppStoreRedirect:
      "https://apps.apple.com/gb/app/yoto-music-stories-sleep/id1412039719",
    getPlayStoreRedirect:
      "https://play.google.com/store/apps/details?id=com.yotoplay.yoto&hl=en",
  },
};
