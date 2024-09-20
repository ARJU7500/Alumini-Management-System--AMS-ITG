import React, { useState } from "react";
import Sheet from "@mui/joy/Sheet";
import Cropper from "react-easy-crop";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FormLabel } from "@mui/joy";

const ImageCropper = ({ image, cropDone, cropCancel, setPost }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (e) => {
    setAspectRatio(e.target.value);
  };

  return (
    <div className="relative w-[80vw] h-[90vh] flex items-end justify-center rounded-xl overflow-hidden shadow-md bg-white">
      <div className="bg-white">
        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              width: "100%",
              height: "80%",
              backgroundColor: "#fff",
            },
          }}
        />
      </div>
      <div className="bg-white ml-[20rem] mb-10">
        <FormControl>
          <FormLabel>Aspect Ratios</FormLabel>
          <RadioGroup row onChange={onAspectRatioChange}>
            <FormControlLabel value={1 / 1} control={<Radio />} label="1/1" />
            <FormControlLabel value={5 / 4} control={<Radio />} label="5/4" />
            <FormControlLabel value={4 / 3} control={<Radio />} label="4/3" />
            <FormControlLabel value={3 / 2} control={<Radio />} label="3/2" />
            <FormControlLabel value={5 / 3} control={<Radio />} label="5/3" />
            <FormControlLabel value={16 / 9} control={<Radio />} label="16/9" />
            <FormControlLabel value={3 / 1} control={<Radio />} label="3/1" />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="flex item-center justify-center gap-3 ml-20 pb-6 bg-white">
        <Button variant="outlined" onClick={cropCancel}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            cropDone(croppedArea);
            setPost(true);
          }}
        >
          Crop & Apply
        </Button>
      </div>
    </div>
  );
};

export default ImageCropper;
