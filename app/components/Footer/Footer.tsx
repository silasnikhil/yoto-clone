"use client";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { LuInstagram } from "react-icons/lu";
import { IoLogoFacebook } from "react-icons/io5";
import React from "react";

interface NavLinks {
  navHeader: string;
  navSubLinks: string[];
}

interface FooterInterface {
  navLinks: NavLinks[];
  legalLinks: string[];
}
const Footer = ({ navLinks, legalLinks }: FooterInterface) => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  if (isMobile) {
    return (
      <Box bg={"#003C1F"} display={"flex"} flexDirection={"column"}>
        <Accordion allowMultiple p={10} border={"none"}>
          {navLinks.map((nav, index) => (
            <AccordionItem key={nav.navHeader} border={"none"}>
              {index > 0 && (
                <Box borderBottom="1px dotted white" mb={2} pb={2}></Box>
              )}

              <AccordionButton>
                <Box flex="1" textAlign="left" color={"white"} fontSize={"3xl"}>
                  {nav.navHeader}
                </Box>
              </AccordionButton>

              <AccordionPanel>
                {nav.navSubLinks.map((subLink, subIndex) => (
                  <Text
                    key={subIndex}
                    textAlign="left"
                    color={"white"}
                    fontSize={"xl"}
                  >
                    {subLink}
                  </Text>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
          <Box borderBottom="1px dotted white" mb={2} pb={2}></Box>
        </Accordion>
        <Box
          display={"flex"}
          gap={16}
          alignItems={"center"}
          justifyContent={"center"}
          p={10}
        >
          <LuInstagram color="white" size={32} />
          <IoLogoFacebook color="white" size={32} />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={10}
          pb={24}
          flexDirection={"column"}
          gap={8}
        >
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon color={"#1471D9"} />}
              color={"#1471D9"}
              boxShadow="0px 2px 12px rgba(255, 255, 255, 0.6)"
              w={"100%"}
            >
              Select Language
            </MenuButton>
            <MenuList>
              <MenuItem>English</MenuItem>
              <MenuItem>French</MenuItem>
            </MenuList>
          </Menu>
          <Box
            display={"flex"}
            gap={4}
            alignItems={"center"}
            justifyContent={"center"}
            borderTop={"1px dotted white"}
            pt={8}
          >
            {legalLinks.map((legal) => (
              <Text
                color={"white"}
                fontSize={"md"}
                cursor={"pointer"}
                _hover={{
                  color: "#F45436",
                }}
              >
                {legal}
              </Text>
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <Box display={"flex"} flexDirection={"column"} bg={"#003C1F"}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        pl={{ md: 40 }}
        gap={{ md: 40 }}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Image src={"/assets/yotot.avif"} alt="Logo" width={80} height={80} />
          <Text color={"white"} fontSize={"3xl"} fontWeight={600}>
            yoto
          </Text>
        </Box>
        <Flex
          direction={"row"}
          gap={20}
          p={{ md: 20 }}
          pb={{ md: 20 }}
          justifyContent={"center"}
          alignItems={"baseline"}
        >
          {navLinks.map((nav) => (
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              justifyContent={"center"}
              alignItems={"flex-start"}
            >
              <Text color={"white"} fontSize={"3xl"}>
                {nav.navHeader}
              </Text>
              {nav.navSubLinks.map((subLink) => (
                <Text
                  color={"white"}
                  fontSize={"md"}
                  cursor={"pointer"}
                  _hover={{
                    color: "#F45436",
                  }}
                >
                  {subLink}
                </Text>
              ))}
            </Box>
          ))}
        </Flex>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        p={{ md: 40 }}
        pt={{ md: 20 }}
        pb={{ md: 20 }}
        gap={10}
      >
        <Divider height={"3px"} color={"white"} variant={"dashed"} />
        <Box display={"flex"} justifyContent={"space-between"}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon color={"#1471D9"} />}
              color={"#1471D9"}
              boxShadow="0px 2px 12px rgba(255, 255, 255, 0.6)"
            >
              Select Language
            </MenuButton>
            <MenuList>
              <MenuItem>English</MenuItem>
              <MenuItem>French</MenuItem>
            </MenuList>
          </Menu>
          <Box
            display={"flex"}
            gap={16}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <LuInstagram color="white" size={40} />
            <IoLogoFacebook color="white" size={40} />
          </Box>
          <Box
            display={"flex"}
            gap={4}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {legalLinks.map((legal) => (
              <Text
                color={"white"}
                fontSize={"md"}
                cursor={"pointer"}
                _hover={{
                  color: "#F45436",
                }}
              >
                {legal}
              </Text>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
