import { IconButton } from "@mui/material";
import React, { useRef } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { styled } from "@mui/material/styles";

const Camera = () => {
  const inputRef = useRef();

  const onChooseImg = () => {
    inputRef.current.click();
  };

  return (
    <React.Fragment>
      <IconButton
        sx={{
          color: "black",
          backgroundColor: "white",
          zIndex: "0",
          ":hover": { backgroundColor: "gray" },
        }}
        onClick={onChooseImg}
      >
        <CameraAltIcon />
      </IconButton>
      <input type="file" accept="image/*" ref={inputRef} className="hidden" />
    </React.Fragment>
  );
};

export default Camera;
