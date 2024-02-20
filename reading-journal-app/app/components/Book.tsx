import { Flex, Box } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import DynamicComponent from "./DynamicComponent";
import Star from "./Star";

const Book = () => {
  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      width="max-content"
    >
      <Box width="max-content">
        <Image
          src="/BookCoverPH.png"
          height={308}
          width={200}
          alt="Book Cover Place Holder"
        />
      </Box>
      <DynamicComponent numComponents={5} Component={Star} />
    </Flex>
  );
};

export default Book;
