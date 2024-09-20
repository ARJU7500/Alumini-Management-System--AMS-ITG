import React, { useState } from "react";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Button, Divider, TextField } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const PostWithImage = (imageAfterCrop) => {
  return (
    <div>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          msOverflowX: "none",
          msOverflowY: "scroll",
          maxHeight: "100vh",
          maxWidth: "100vh",
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

        <TextField
          multiline
          variant="standard"
          rows={10}
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <img src={imageAfterCrop} alt="cropped image"></img>
        <Button
          startIcon={<InsertEmoticonIcon />}
          onClick={() => setOpenPicker(!openPicker)}
        ></Button>
        {openPicker && (
          <div className="">
            <Picker data={data} onEmojiSelect={addEmoji} maxFrequentRows={0} />
          </div>
        )}
      </Sheet>
    </div>
  );
};

export default PostWithImage;
