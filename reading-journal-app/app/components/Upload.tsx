import * as React from "react";
import { useState, useRef } from "react";
import { File } from "./File";
import Button from "@mui/material/Button";
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";

interface UploaderProps {
  fileType?: string | AcceptedFileType[];
}

enum AcceptedFileType {
  Jpeg = ".jpg",
  Png = ".png",
  AllImages = "image/*",
}

interface IFile {
  file: File;
  uploadProgress: number;
  uploadError: string;
}

export const Upload = (props: UploaderProps) => {
  const { fileType } = props;
  const acceptedFormats: string | AcceptedFileType[] | undefined =
    typeof fileType === "string"
      ? fileType
      : Array.isArray(fileType)
      ? fileType?.join(",")
      : Object.values(AcceptedFileType);
  const [selectedFiles, setSelectedFiles] = useState<
    IFile[] | undefined | null
  >([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentSelected: File[] = Array.prototype.slice.call(
      event?.target?.files
    );
    const modified = currentSelected.map((file) => {
      return {
        file,
        uploadError: "test",
        uploadProgress: 20,
      };
    });

    setSelectedFiles(modified);
  };

  return (
    <>
      <Button component="label">
        <input
          hidden
          type="file"
          multiple
          accept={acceptedFormats}
          onChange={handleFileSelect}
        />

        {!selectedFiles?.length && (
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
        )}
        {!!selectedFiles?.length && <File {...{ selectedFiles }} />}
      </Button>
      {!!selectedFiles?.length && (
        <div>
          <Button>Clear All</Button>
        </div>
      )}
    </>
  );
};
