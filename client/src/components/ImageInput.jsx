import { Button } from "@mui/material";
import React, { useRef } from "react";
import ImageIcon from "@mui/icons-material/Image";

const ImageInput = ({ onImageSelected }) => {
  const inputRef = useRef();

  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnChange}
        className="hidden"
      ></input>

      <Button startIcon={<ImageIcon />} onClick={onChooseImg}></Button>
    </div>
  );
};

export default ImageInput;
