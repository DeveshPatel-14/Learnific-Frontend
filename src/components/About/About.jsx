import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  Button,
  HStack
} from '@chakra-ui/react';

import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import termsAndCondition from "../../assets/docs/termsAndCondition";




const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={"md"}
      children="Terms & Condition"
      textAlign={["center", "left"]}
      my="4"
    />

    <Box h="sm" p="4" overflowY={"scroll"}>
      <Text
        fontFamily={"heading"}
        letterSpacing={"widest"}
        textAlign={["center", "left"]}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my="4"
        size={"xs"}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);
const About = () => {
  return (
    <Container maxW={"container.lg"} padding="16" boxShadow={"lg"}>
      <Heading children="About Us" textAlign={["center", "left"]} />
      <Stack m="8" direction={["column", "row"]} alignItems="center">
        <Container maxW={"5xl"} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Text
                textTransform={"uppercase"}
                color={"blue.400"}
                fontWeight={600}
                fontSize={"sm"}
                bg={useColorModeValue("blue.50", "blue.900")}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"}
              >
                Our Story
              </Text>
              <Heading>A small effort towards making understand concepts more clearly</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                A highly motivated team which aims to deliver crisp and consice content through hands-on experience
              </Text>
              
            </Stack>
            <Flex>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={
                  "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                }
                objectFit={"contain"}
              />
            </Flex>
          </SimpleGrid>
        </Container>

        
      </Stack>


      <TandC termsAndCondition={termsAndCondition} />

      <HStack my="4" p={"4"}>
        <RiSecurePaymentFill />
        <Heading
          size={"xs"}
          fontFamily="sans-serif"
          textTransform={"uppercase"}
          children={"Payment is secured by Razorpay"}
        />
      </HStack>
    </Container>
  );
};

export default About;
