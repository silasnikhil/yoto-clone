"use client";
import React from "react";
import { TbGoGame } from "react-icons/tb";
import { PiCards } from "react-icons/pi";
import { LiaHeadphonesSolid } from "react-icons/lia";
import { RiHeartPulseLine } from "react-icons/ri";
import { GiCampingTent } from "react-icons/gi";
import { MdPhoneIphone } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import { HiMiniBellAlert } from "react-icons/hi2";
import { Box, Image, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { LayoutDataProps } from "@/app/layout";

export const layoutData: LayoutDataProps = {
  header: {
    bg: "#F45436",
    headerLinks: [
      {
        headerTitle: "Yoto Players",
        mobileIcon: <TbGoGame size={28} />,
        mobileBg: "#F45436",
        expandable: true,
        detailedContent: (
          <>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={12}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                gap={4}
              >
                <Image
                  src={"/assets/yoto-header1.avif"}
                  alt="Yoto Header"
                  height={"108px"}
                  width={"108px"}
                  borderRadius={4}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                >
                  <Text fontSize={"3xl"} color={"white"}>
                    Yoto Player <ChevronRightIcon />
                  </Text>
                  <Text fontSize={"xl"} color={"white"}>
                    $99.99
                  </Text>
                  <Text fontSize={"xl"} color={"white"}>
                    Limited Time Offer
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={12}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                gap={4}
              >
                <Image
                  src={"/assets/yoto-header2.avif"}
                  alt="Yoto Header"
                  height={"108px"}
                  width={"108px"}
                  borderRadius={4}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                >
                  <Text fontSize={"3xl"} color={"white"}>
                    Yoto Mini <ChevronRightIcon />
                  </Text>
                  <Text fontSize={"xl"} color={"white"}>
                    $69.99
                  </Text>
                  <Text fontSize={"xl"} color={"white"}>
                    Out of Stock
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={12}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                gap={4}
              >
                <Image
                  src={"/assets/yoto-header3.avif"}
                  alt="Yoto Header"
                  height={"108px"}
                  width={"108px"}
                  borderRadius={4}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                >
                  <Text fontSize={"3xl"} color={"white"}>
                    Gift Certificates <ChevronRightIcon />
                  </Text>
                  <Text fontSize={"xl"} color={"white"}>
                    Explore our Range
                  </Text>
                  <Text fontSize={"xl"} color={"white"}>
                    Yoto Gift Certificates
                  </Text>
                </Box>
              </Box>
            </Box>
          </>
        ),
      },
      {
        headerTitle: "Cards",
        mobileIcon: <PiCards size={28} />,
        expandable: true,
        mobileBg: "#FD9E69",
        detailedContent: (
          <>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={12}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                gap={4}
              >
                <Image
                  src={"/assets/yoto-header1.avif"}
                  alt="Yoto Header"
                  height={"108px"}
                  width={"108px"}
                  borderRadius={4}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                >
                  <Text fontSize={"3xl"} color={"white"}>
                    Yoto Player <ChevronRightIcon />
                  </Text>
                  <Text fontSize={"xl"} color={"white"}>
                    $99.99
                  </Text>
                  <Text fontSize={"xl"} color={"white"}>
                    Limited Time Offer
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={12}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                gap={4}
              >
                <Image
                  src={"/assets/yoto-header2.avif"}
                  alt="Yoto Header"
                  height={"108px"}
                  width={"108px"}
                  borderRadius={4}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                >
                  <Text fontSize={"3xl"} color={"white"}>
                    Yoto Mini <ChevronRightIcon />
                  </Text>
                  <Text fontSize={"xl"} color={"white"}>
                    $69.99
                  </Text>
                  <Text fontSize={"xl"} color={"white"}>
                    Out of Stock
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={12}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                gap={4}
              >
                <Image
                  src={"/assets/yoto-header3.avif"}
                  alt="Yoto Header"
                  height={"108px"}
                  width={"108px"}
                  borderRadius={4}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                >
                  <Text fontSize={"3xl"} color={"white"}>
                    Gift Certificates <ChevronRightIcon />
                  </Text>
                  <Text fontSize={"xl"} color={"white"}>
                    Explore our Range
                  </Text>
                  <Text fontSize={"xl"} color={"white"}>
                    Yoto Gift Certificates
                  </Text>
                </Box>
              </Box>
            </Box>
          </>
        ),
      },
      {
        headerTitle: "Accessories",
        mobileIcon: <LiaHeadphonesSolid size={28} />,
        mobileBg: "#89C0FD",
        expandable: false,
      },
      {
        headerTitle: "Make Your Own",
        mobileIcon: <RiHeartPulseLine size={28} />,
        mobileBg: "#0052AC",
        expandable: false,
      },
      {
        headerTitle: "Yoto Club",
        mobileIcon: <GiCampingTent size={28} />,
        mobileBg: "#099C67",
        expandable: false,
      },
      {
        headerTitle: "App",
        mobileIcon: <MdPhoneIphone size={28} />,
        mobileBg: "#DDA7CD",
        expandable: false,
      },
    ],
    supportLinks: [
      {
        supportTitle: "Sign In",
        supportIcon: <FaSignInAlt size={24} color="white" />,
      },
      {
        supportTitle: "Contact Us",
        supportIcon: <TbSpeakerphone size={24} color="white" />,
      },
      {
        supportTitle: "Sign In",
        supportIcon: <HiMiniBellAlert size={24} color="white" />,
      },
    ],
  },
  footer: {
    navLinks: [
      {
        navHeader: "Help",
        navSubLinks: [
          "Contact Us",
          "Press & Partnerships",
          "Delivery, Returns & Recycle",
          "Product Guarantee",
          "Product Safety",
          "FAQs",
          "Yoto Mini Recall",
          "Safety Standards",
        ],
      },
      {
        navHeader: "Services",
        navSubLinks: [
          "Why Yoto?",
          "Better Bedtimes",
          "Yoto Daily Podcast",
          "Yoto App",
          "Yoto Space",
          "Digital Yoto Cards",
          "Yoto Blog",
          "Yoto Radio",
          "Yoto Points",
        ],
      },
      {
        navHeader: "More From Us",
        navSubLinks: [
          "Our Story",
          "People & Planet",
          "Helping Families",
          "Careers",
          "Ways to Pay",
          "Educators",
          "Wholesale",
          "Affiliate Program",
          "Personal Info",
        ],
      },
    ],
    legalLinks: ["Privacy Policy", "Legal", "Supply Chain Transparency"],
  },
};
