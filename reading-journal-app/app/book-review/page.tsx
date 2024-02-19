"use client";
import { Box, Button, Flex, Grid, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { RiSave3Fill, RiStarSLine } from "react-icons/ri";
import Image from "next/image";

const BookReviewPage = () => {
  return (
    <Grid rows="3" gapY="3">
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
          <Flex direction="row" justify="center" width="100%">
            <Box height="5">
              <RiStarSLine size="2rem" />
            </Box>
            <Box height="5">
              <RiStarSLine size="2rem" />
            </Box>
            <Box height="5">
              <RiStarSLine size="2rem" />
            </Box>
            <Box height="5">
              <RiStarSLine size="2rem" />
            </Box>
            <Box height="5">
              <RiStarSLine size="2rem" />
            </Box>
          </Flex>
        </Flex>
        <Flex direction="column" gap="4">
          <Box height="5">
            <TextField.Root>
              <TextField.Input placeholder="Title" />
            </TextField.Root>
          </Box>
          <Box height="5">
            <TextField.Root>
              <TextField.Input placeholder="Author" />
            </TextField.Root>
          </Box>
          <Box height="5">
            <TextField.Root>
              <TextField.Input placeholder="Genre" />
            </TextField.Root>
          </Box>
          <Flex direction="row" gap="3">
            <Box height="5" width="100%">
              <TextField.Root>
                <TextField.Input placeholder="Start Date" />
              </TextField.Root>
            </Box>
            <Box height="5" width="100%">
              <TextField.Root>
                <TextField.Input placeholder="End Date" />
              </TextField.Root>
            </Box>
          </Flex>
          <Box height="9">
            <TextArea placeholder="Summary" size="3" />
          </Box>
        </Flex>
      </Grid>
      <Grid rows="2">
        <Box height="2" width="100%">
          <TextArea placeholder="My Thoughts" size="3" />
        </Box>
        <Flex direction="row" gap="4">
          <Box height="2" width="100%">
            <TextArea placeholder="Best Parts" size="3" />
          </Box>
          <Box height="2" width="100%">
            <TextArea placeholder="Favorite Quotes" size="3" />
          </Box>
        </Flex>
      </Grid>
      <Box>
        <Button className="float-right">
          <RiSave3Fill size="1.5em" /> Save Review
        </Button>
      </Box>
    </Grid>
  );
};

export default BookReviewPage;
