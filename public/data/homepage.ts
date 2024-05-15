import { HomePageProps } from "@/app/pages/Homepage";

export const homePageData: HomePageProps = {
  heroSection: {
    bannerUrl: [
      "/assets/banner2.avif",
      "/assets/banner3.jpeg",
      "/assets/banner4.jpeg",
      "/assets/banner1.webp",
      "/assets/banner2.avif",
      "/assets/banner3.jpeg",
      "/assets/banner4.jpeg",
      "/assets/banner1.webp",
    ],
    heroTitle: "Let the kids lead the way",
    heroSubTitle:
      "Yoto Player puts kids safely in control of their listening, learning and play. No ads. No microphones.",
    primaryBtnText: "Buy Player",
    navigateUrl: "/yoto-player",
    secondaryBtnText: "Why Yoto?",
    reviewTitle: "Check out our",
    reviewCount: "12,357 reviews",
  },
  productCards: [
    {
      imageUrl: "/assets/product1.avif",
      productTitle: "Yoto Player",
    },
    {
      imageUrl: "/assets/product2.avif",
      productTitle: "Single Cards",
    },
    {
      imageUrl: "/assets/product3.avif",
      productTitle: "Card Packs",
    },
    {
      imageUrl: "/assets/product4.avif",
      productTitle: "Accessories",
    },
  ],
  videoSection: {
    sectionTitle: "Inspiring audio for life’s greatest adventure",
    sectionErrorMsg: "Your browser does not support the video tag.",
    playBtnText: "Play Me",
    videoUrl: "/assets/yoto-player.mp4",
  },
  productDetailedCards: [
    {
      imageUrl: "/assets/yoto1.avif",
      productTitle: "Yoto Player",
      productPrice: "$ 99.99",
      productActualPrice: "119.99",
      productRating: 5,
      productReviews: 480,
      productAvailability: "Limited time offer",
      productBtnText: "Buy Yoto Player",
    },
    {
      imageUrl: "/assets/yoto2.avif",
      productTitle: "Yoto Mini",
      productPrice: "$ 69.99",
      productRating: 5,
      productReviews: 779,
      productAvailability: "Out of Stock",
      productBtnText: "Join Waitlist",
    },
  ],
  compareBtnText: "Compare Player vs Mini",
  stats: {
    statsTitle: "Did you know...",
    statsbg: "#223868",
    stats: [
      {
        statImage: "/assets/stat1.avif",
        statDesc: "of parents agree that Yoto grows with their child",
      },
      {
        statImage: "/assets/stat2.avif",
        statDesc: "of Yoto Player owners agree it’s made bedtime easier",
      },
      {
        statImage: "/assets/stat3.avif",
        statDesc: "minutes listened in 2022",
      },
      {
        statImage: "/assets/stat4.avif",
        statDesc: "of Yoto Mini owners agree it’s made travel easier",
      },
    ],
  },
  logos: {
    logos: [
      "/assets/logo1.png",
      "/assets/logo2.png",
      "/assets/logo3.png",
      "/assets/logo4.png",
      "/assets/logo5.png",
      "/assets/logo6.png",
      "/assets/logo7.png",
      "/assets/logo8.png",
      "/assets/logo9.png",
      "/assets/logo10.png",
      "/assets/logo11.png",
      "/assets/logo12.png",
      "/assets/logo13.png",
      "/assets/logo14.png",
      "/assets/logo15.png",
      "/assets/logo16.png",
      "/assets/logo17.png",
      "/assets/logo18.png",
      "/assets/logo19.png",
      "/assets/logo20.png",
    ],
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
    useAsCards: false
  },
  galleryGrid: {
    images: [
      {
        imgUrl: "/assets/gallery1.webp",
        imgCaption: "@heirsthrone",
      },
      {
        imgUrl: "/assets/gallery2.webp",
        imgCaption: "@haleymartinoxo",
      },
      {
        imgUrl: "/assets/gallery3.webp",
        imgCaption: "@heirsthrone",
      },
      {
        imgUrl: "/assets/gallery4.webp",
        imgCaption: "@mrskatiecarlson",
      },
      {
        imgUrl: "/assets/gallery7.webp",
        imgCaption: "@themodernhousewifeny",
      },
      {
        imgUrl: "/assets/gallery6.webp",
        imgCaption: "@leahfayegaeddert",
      },
      {
        imgUrl: "/assets/gallery5.webp",
        imgCaption: "@emilywondree",
      },
      {
        imgUrl: "/assets/gallery8.webp",
        imgCaption: "@jmccormick526",
      },
      {
        imgUrl: "/assets/gallery9.webp",
        imgCaption: "@nikhilsilas_",
      },
    ],
    galleryTitle: "Yoto in the wild",
  },
};
