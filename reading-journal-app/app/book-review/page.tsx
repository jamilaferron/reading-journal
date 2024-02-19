"use client";
import { Box, Button, Flex, Grid, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { RiSave3Fill, RiStarSLine } from "react-icons/ri";
import Image from "next/image";
import Star from "../components/Star";
import DynamicComponent from "../components/DynamicComponent";

const BookReviewPage = () => {
  return (
    <Grid rows="2" gap="7" justify="between">
      <Grid columns="2">
        <Flex direction="column" gap="3">
          <Flex justify="center">
            <Box width="max-content">
              <Image
                src="/BookCoverPH.png"
                height={308}
                width={200}
                alt="Book Cover Place Holder"
              />
            </Box>
          </Flex>
          <DynamicComponent numComponents={5} Component={Star} />
        </Flex>
        <Flex direction="column" gap="5" justify="between">
          <Box height="5">
            <TextField.Root>
              <TextField.Input placeholder="Title" size="3" />
            </TextField.Root>
          </Box>
          <Box height="5">
            <TextField.Root>
              <TextField.Input placeholder="Author" size="3" />
            </TextField.Root>
          </Box>
          <Box height="5">
            <TextField.Root>
              <TextField.Input placeholder="Genre" size="3" />
            </TextField.Root>
          </Box>
          <Flex direction="row" gap="3">
            <Box height="5" width="100%">
              <TextField.Root>
                <TextField.Input placeholder="Start Date" size="3" />
              </TextField.Root>
            </Box>
            <Box height="5" width="100%">
              <TextField.Root>
                <TextField.Input placeholder="End Date" size="3" />
              </TextField.Root>
            </Box>
          </Flex>
          <Box height="9">
            <TextArea placeholder="Summary" size="3" />
          </Box>
        </Flex>
      </Grid>
      <Grid columns="1">
        <Flex direction="column" gap="6">
          <Box height="9">
            <TextArea placeholder="My Thoughts" size="3" />
          </Box>
          <Flex direction="row" gap="3">
            <Box height="9" width="100%">
              <TextArea placeholder="Best Parts" size="3" />
            </Box>
            <Box height="9" width="100%">
              <TextArea placeholder="Favorite Quotes" size="3" />
            </Box>
          </Flex>
        </Flex>
        <Box>
          <Button className="float-right">
            <RiSave3Fill size="1.5em" /> Save Review
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BookReviewPage;
