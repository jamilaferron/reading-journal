import * as React from "react";
import { MdDelete } from "react-icons/md";

interface IFile {
  file: File;
  uploadProgress: number;
  uploadError: string;
}

interface FileProps {
  selectedFiles: IFile[];
}

export const File = (props: FileProps) => {
  const { selectedFiles } = props;

  return (
    <div>
      {selectedFiles?.map(({ file: { name, size }, uploadProgress }) => (
        <li key={name}>
          <span className="primary">{name}</span>
          <span style={{ paddingLeft: "5px" }}>({size})</span>
          {/* <Button onClick={onFileUpload}>Upload</Button> */}
          <MdDelete />
        </li>
      ))}
    </div>
  );
};
