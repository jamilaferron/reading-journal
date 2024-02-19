import { Box } from "@radix-ui/themes";
import React, { useState } from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const Star = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <Box height="5" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isHovering ? (
        <RiStarSFill size="2rem" className="text-blush-pink" />
      ) : (
        <RiStarSLine size="2rem" />
      )}
    </Box>
  );
};

export default Star;
