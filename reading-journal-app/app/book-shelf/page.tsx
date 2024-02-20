"use client";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import React from "react";
import Book from "../components/Book";

const BookShelfPage = () => {
  const componentsArray = new Array(15).fill(null);
  return (
    <Container height="100%">
      <Flex width="100%" justify="center">
        <Heading align="center">Book Shelf</Heading>
      </Flex>
      <Flex direction="row" wrap="wrap" justify="between" gap="5" pt="9" pb="6">
        {componentsArray.map((_, index) => (
          <Box key={index} width="max-content">
            <Container size="1" width="max-content">
              <Book />
            </Container>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default BookShelfPage;
