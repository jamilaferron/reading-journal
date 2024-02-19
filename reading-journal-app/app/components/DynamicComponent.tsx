import { Flex } from "@radix-ui/themes";
import React, { ComponentType, FC } from "react";

interface DynamicComponentProps {
  numComponents: number;
  Component: ComponentType<any>;
}
const DynamicComponent: FC<DynamicComponentProps> = ({
  numComponents,
  Component,
}) => {
  const componentsArray = new Array(numComponents).fill(null);
  return (
    <Flex direction="row" justify="center" width="100%">
      {componentsArray.map((_, index) => (
        <Component key={index} />
      ))}
    </Flex>
  );
};

export default DynamicComponent;
