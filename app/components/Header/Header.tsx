"use client";
import {
  chakra,
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  VStack,
  useDisclosure,
  Slide,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoChevronDown } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { hoverStyle } from "../../utils/hoverStyle";

export interface HeaderLinks {
  headerTitle: string;
  expandable: boolean;
  detailedContent?: React.ReactNode | React.ReactElement;
  mobileIcon?: React.ReactNode | React.ReactElement;
  mobileBg: string;
}

export interface SupportLinks {
  supportTitle: string;
  supportIcon: React.ReactNode | React.ReactElement;
}

export interface HeaderInterface {
  bg: string;
  headerLinks: HeaderLinks[];
  supportLinks?: SupportLinks[];
}
const Header = ({ bg, headerLinks, supportLinks }: HeaderInterface) => {
  const mobileNav = useDisclosure();
  const dropdown = useDisclosure();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef?.current?.contains(event.target)) {
        dropdown.onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
        position={"sticky"}
        top={0}
        zIndex={999}
        id="main-header"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex gap={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="white"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <chakra.a
                href="/"
                title="Yoto Clone"
                display="flex"
                alignItems="center"
                position={"relative"}
                zIndex={{ base: 0, md: 1000 }}
              >
                <Image
                  src={"/assets/yotot.avif"}
                  alt="Logo"
                  width={{ base: "40px", md: "50px" }}
                  height={{ base: "40px", md: "50px" }}
                />
              </chakra.a>
            </Box>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={8}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                {headerLinks.map((link, index) => (
                  <>
                    <Box
                      display="flex"
                      gap={"4px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      ref={menuRef}
                      key={index}
                    >
                      {link.expandable ? (
                        <Button
                          variant="link"
                          color={"#FFFFFF"}
                          _hover={hoverStyle}
                          onClick={dropdown.onToggle}
                        >
                          {link.headerTitle}
                        </Button>
                      ) : (
                        <Button
                          variant="link"
                          color={"#FFFFFF"}
                          _hover={hoverStyle}
                        >
                          {link.headerTitle}
                        </Button>
                      )}

                      {link.expandable && <IoChevronDown color="white" />}
                    </Box>
                    {link.expandable && (
                      <Slide
                        direction={dropdown.isOpen ? "top" : "bottom"}
                        in={!!dropdown.isOpen}
                      >
                        <VStack
                          pos="absolute"
                          top={"60px"}
                          left={0}
                          right={0}
                          display={dropdown.isOpen ? "flex" : "none"}
                          flexDirection="column"
                          mt={2}
                          mb={2}
                          ml={0}
                          mr={0}
                          spacing="0px"
                          rounded="sm"
                          shadow="sm"
                          alignItems="flex-start"
                          bg={"#F45436"}
                          height={"400px"}
                          zIndex={1000}
                          clipPath="polygon(0% 0%, 100% 0%, 100% calc(100% - 45px), 50% 100%, 0% calc(100% - 45px))"
                        >
                          {/* Content for the dropdown menu */}
                          <Box
                            position={"relative"}
                            p={20}
                            display={"flex"}
                            gap={16}
                          >
                            {link.detailedContent}
                          </Box>
                        </VStack>
                      </Slide>
                    )}
                  </>
                ))}
              </HStack>
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <HStack
                  spacing={4}
                  mr={2}
                  display={{
                    base: "none",
                    md: "inline-flex",
                  }}
                >
                  <IoIosSearch color="white" size={28} />
                  <LuUser2 color="white" size={28} />
                  <FaRegHeart color="white" size={28} />
                  <HiOutlineShoppingBag color="white" size={28} />
                </HStack>
                <Slide
                  direction={mobileNav.isOpen ? "right" : "left"}
                  in={!!mobileNav.isOpen}
                >
                  <VStack
                    pos="absolute"
                    top={0}
                    left={0}
                    right={0}
                    display={mobileNav.isOpen ? "flex" : "none"}
                    flexDirection="column"
                    mt={2}
                    mb={2}
                    ml={0}
                    mr={0}
                    spacing="0px"
                    rounded="sm"
                    shadow="sm"
                    alignItems="flex-start"
                    bg={"#F45436"}
                  >
                    <CloseButton
                      aria-label="Close menu"
                      onClick={mobileNav.onClose}
                      pl={1}
                      color={"white"}
                    />
                    {headerLinks.map((link, index) => (
                      <Button
                        w="full"
                        variant="ghost"
                        justifyContent="flex-start"
                        color={"white"}
                        borderRadius="0"
                        h={24}
                        bg={link.mobileBg}
                        gap={2}
                        key={`header ${index}`}
                      >
                        {link.mobileIcon}
                        {link.headerTitle}
                      </Button>
                    ))}
                    <Flex
                      justify={"center"}
                      alignItems={"flex-start"}
                      p={4}
                      pb={10}
                      bg={"#003C1F"}
                      direction={"column"}
                      gap={8}
                      w={"full"}
                    >
                      {supportLinks?.map((link, index) => (
                        <Box
                          display={"flex"}
                          gap={2}
                          justifyContent={"center"}
                          alignItems={"center"}
                          borderBottom={"1px dotted white"}
                          w={"full"}
                          p={4}
                          key={`support ${index}`}
                        >
                          {link.supportIcon}
                          <Button
                            w="full"
                            variant="ghost"
                            justifyContent="flex-start"
                            color={"white"}
                            fontSize={"lg"}
                          >
                            {link.supportTitle}
                          </Button>
                        </Box>
                      ))}
                    </Flex>
                  </VStack>
                </Slide>
              </Box>
            </HStack>
          </Flex>

          <HStack
            spacing={4}
            mr={2}
            display={{
              base: "flex",
              md: "inline-flex",
            }}
          >
            <IoIosSearch color="white" size={28} />
            <LuUser2 color="white" size={28} />
            <FaRegHeart color="white" size={28} />
            <HiOutlineShoppingBag color="white" size={28} />
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Header;
