import React, { forwardRef, useRef, useState, useEffect } from "react";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Button, Divider, TextField } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import EventIcon from "@mui/icons-material/Event";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ImageIcon from "@mui/icons-material/Image";
import { styled } from "@mui/material/styles";
import ImageInput from "./ImageInput";
import { Modal } from "@mui/joy";
import ImageCropper from "./ImageCropper";
import PostWithImage from "./PostWithImage";
import axios from "axios";

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

const InputRef = forwardRef(() => {});

const CreatePostModal = ({ setPost }) => {
  const [openPicker, setOpenPicker] = useState(false);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [imgAfterCrop, setImageAfterCrop] = useState("");
  const [text, setText] = useState("");
  const inputRef = React.createRef();
  // const [close, setClose] = useState("");
  const [emoji, setEmoji] = useState([]);

  // const modalOpen = () => {
  //   if (cropDone == dataUrl) {
  //     setPost(true);
  //   }
  // };

  // const closeModal = () => {
  //   setClose(setPost(false));
  // };

  const upload = (e) => {
    // var reader = new FileReader();
    const images = e.target.files?.[0];
    setImage(images);
    // reader.readAsDataURL(e.target.files[0]);
    // reader.onload = () => {
    //   console.log(reader.result);
    //   setImage(reader.result);
    // };
    // reader.onerror = (error) => {
    //   console.log(error);
    // };
    // setImage(images);
    // setFile(URL.createObjectURL(image));
  };

  const formData = new FormData();
  formData.append("description", description);
  formData.append("postImg", image);

  const handleUpload = () => {
    // closeModal();

    try {
      axios
        .post(
          "/api/v1/posts/",
          {
            postImg: formData.get("postImg"),
            description: formData.get("description"),
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
          { withCredentials: true }
        ) // by using withCredentials cookies are added.
        .then((res) => {
          // console.log(res.data.data);
          return res.data.data;
        })
        .catch((error) => {
          console.log(error);
          // navlink(`/`);
        })
        .then((data) => {
          alert("Post is Uploaded Successfully.");
        });
    } catch (err) {
      return console.log(err);
    }
  };
  // const cropDone = (imgCropped) => {
  //   const canvasEle = document.createElement("canvas");
  //   canvasEle.width = imgCropped.width;
  //   canvasEle.height = imgCropped.height;

  //   const context = canvasEle.getContext("2d");

  //   let imageObj1 = new Image();
  //   imageObj1.src = image;
  //   imageObj1.onload = function () {
  //     context.drawImage(
  //       imageObj1,
  //       imgCropped.x,
  //       imgCropped.y,
  //       imgCropped.width,
  //       imgCropped.height,
  //       0,
  //       0,
  //       imgCropped.width,
  //       imgCropped.height
  //     );
  //     const dataURL = canvasEle.toDataURL("image/jpeg");
  //     console.log("data", dataURL);

  //     setImageAfterCrop(dataURL);
  //     setCurrentPage("img-cropped");
  //   };
  // };

  // const cropCancel = () => {
  //   setCurrentPage("choose-img");
  //   setImage("");
  // };

  // const onImageSelected = (selectedImg) => {
  //   setImage(selectedImg);
  //   setOpenModal(true);
  //   setCurrentPage("crop-img");
  // };

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    // console.log(sym);
    const codeArray = [];
    sym.forEach((element) => codeArray.push("0x" + element));
    let emoji = String.fromCodePoint(...codeArray);
    // console.log(emoji);
    setEmoji(emoji);
  };

  const uploadImage = () => {
    inputRef.current.click();
  };

  return (
    <React.Fragment>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          msOverflowX: "none",
          msOverflowY: "scroll",
          maxHeight: "100vh",
          maxWidth: "100vw",
          width: "50rem",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />

        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
          marginRight={20}
        >
          What's on your mind.
        </Typography>
        <form>
          <div className="max-h-[30rem] max-w-[50rem] overflow-x:hidden overflow-y-scroll">
            <TextField
              multiline
              variant="standard"
              rows={10}
              fullWidth
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            {image ? (
              <div className="mt-4 rounded-md border-[1px] border-gray-200">
                <img src={URL.createObjectURL(image)} alt="upload-image"></img>
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
          <div className="mt-3 flex flex-row max-h-[3rem]">
            {/* <div>
            {currentPage === "choose-img" ? (
              <ImageInput onImageSelected={onImageSelected} />
            ) : currentPage === "crop-img" ? (
              <Modal
                open={openModal}
                image={image}
                onClose={() => setOpenModal(false)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "white",
                }}
              >
                <ImageCropper
                  image={image}
                  cropDone={cropDone}
                  cropCancel={cropCancel}
                />
              </Modal>
            ) : (
              <div>
                <img src={imgAfterCrop} alt="cropped-img"></img>
              </div>
            )}
          </div> */}
            <Button
              startIcon={<InsertEmoticonIcon />}
              onClick={() => setOpenPicker(!openPicker)}
            ></Button>
            {openPicker && (
              <div className="">
                <Picker
                  data={data}
                  onEmojiSelect={addEmoji}
                  maxFrequentRows={0}
                />
              </div>
            )}
            <Button startIcon={<ImageIcon />} onClick={uploadImage}></Button>
            <input
              onChange={upload}
              type="file"
              accept="image/*"
              ref={inputRef}
              className="hidden"
            ></input>
            <Button startIcon={<EventIcon />}></Button>
            {/* <Button startIcon={<InsertDriveFileIcon />}></Button> */}
          </div>
          <Divider />
          <div className="flex items-center">
            <Button
              onClick={handleUpload}
              ModalClose
              variant="contained"
              // type="submit"
              // onSubmit={closeModal}
              sx={{
                marginTop: "1rem",
                width: "10rem",
                marginLeft: "40rem",
              }}
            >
              Post
            </Button>
          </div>
        </form>
      </Sheet>
    </React.Fragment>
  );
};

export default CreatePostModal;
