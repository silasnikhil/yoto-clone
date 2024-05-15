"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Image,
  InputGroup,
  InputLeftElement,
  Checkbox,
} from "@chakra-ui/react";
import { ChevronRightIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  authModalTitle: string;
  authModalFirstTab: string;
  authModalSecondTab: string;
  authModalFirstBtnText: string;
  authModalSecondBtnText: string;
  authModalForgotPwdText: string;
}

const AuthModal = ({
  isOpen,
  onClose,
  authModalTitle,
  authModalFirstTab,
  authModalSecondTab,
  authModalFirstBtnText,
  authModalSecondBtnText,
  authModalForgotPwdText,
}: AuthModalProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg={"#003C1F"}>
          <Box
            p={4}
            justifyContent={"space-around"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"row"}
            gap={4}
          >
            <Text color={"white"} fontSize={"2xl"}>
              {authModalTitle}
            </Text>
            <Image
              src="/assets/logo-red.png"
              alt="Yoto Logo Red"
              height={"45px"}
              width={"45px"}
            />
          </Box>
        </ModalHeader>
        <ModalCloseButton color={"white"} />
        <ModalBody>
          <Tabs>
            <TabList>
              <Tab width={"50%"}>{authModalFirstTab}</Tab>
              <Tab width={"50%"}>{authModalSecondTab}</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box as="form">
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <EmailIcon color="gray.300" />
                    </InputLeftElement>
                    <Input placeholder="yours@example.com" mb={3} />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <LockIcon color="gray.300" />
                    </InputLeftElement>
                    <Input placeholder="your password" type="password" mb={3} />
                  </InputGroup>

                  <Text
                    cursor={"pointer"}
                    color={"gray"}
                    _hover={{
                      textDecoration: "underline",
                    }}
                    textAlign={"center"}
                    mt={4}
                    mb={4}
                  >
                    {authModalForgotPwdText}
                  </Text>
                  <Button
                    width="full"
                    bg="#F45436"
                    color={"white"}
                    mt={4}
                    _hover={{
                      background: "#D7533B",
                    }}
                    rightIcon={<ChevronRightIcon />}
                  >
                    {authModalFirstBtnText}
                  </Button>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box as="form">
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <EmailIcon color="gray.300" />
                    </InputLeftElement>
                    <Input placeholder="yours@example.com" mb={3} />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <LockIcon color="gray.300" />
                    </InputLeftElement>
                    <Input placeholder="your password" type="password" mb={3} />
                  </InputGroup>
                  <Box bg="gray.100" p={3} mb={4} borderRadius="md" mt={4}>
                    <Checkbox
                      isChecked={isChecked}
                      onChange={handleCheckboxChange}
                    >
                      I agree to Yoto{" "}
                      <Text as="span" fontWeight="bold" cursor={"pointer"}>
                        Terms and Conditions
                      </Text>{" "}
                      and{" "}
                      <Text as="span" fontWeight="bold" cursor={"pointer"}>
                        Privacy Policy
                      </Text>
                    </Checkbox>
                  </Box>
                  <Button
                    width="full"
                    bg="#F45436"
                    color={"white"}
                    mt={4}
                    _hover={{
                      background: "#D7533B",
                    }}
                    rightIcon={<ChevronRightIcon />}
                    isDisabled={!isChecked}
                  >
                    {authModalSecondBtnText}
                  </Button>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
