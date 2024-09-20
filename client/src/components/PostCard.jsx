import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const formatter = buildFormatter(frenchStrings);

const PostCard = () => {
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});
  const [isSaved, setIsSaved] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navlink = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("data", data);
  console.log("liked post", likedPosts);
  const onLike = (index, id) => {
    console.log("Clicked post index:", index, id);
    setLikedPosts((prevLikedPosts) => ({
      ...prevLikedPosts,
      [index]: !prevLikedPosts[index],
    }));
  };

  const onSave = () => {
    setIsSaved(!isSaved);
    setOpenSnackbar(true);
  };

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    try {
      axios
        .get("api/v1/posts/all-posts")
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          navlink("/");
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      {data.map((post, index) => (
        <div key={post.id} className="w-full h-auto mb-6">
          <div className="w-full h-auto flex items-center justify-between mb-2">
            <div className="flex items-center gap-x-2">
              <Link
                to={`/profile/${post.username}`}
                className="flex items-center justify-center flex-col flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#2ed68a] to-white">
                  <img
                    src={post.avatar}
                    alt="user-image"
                    className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-x-2">
                <p className="text-black text-sm font-bold">{post.username}</p>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <p className="text-black text-sm font-medium">
                  <TimeAgo date={`${post.createdAt}Z`} formatter={formatter} />
                </p>
              </div>
            </div>
            <div className="post">
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                open={open}
                onClose={handleClose}
                anchorEl={anchorEl}
              >
                <MenuItem onClick={handleClose}>
                  <lord-icon
                    src="https://cdn.lordicon.com/vihyezfv.json"
                    trigger="hover"
                  ></lord-icon>
                  Report
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="w-full h-auto pb-4 flex items-center gap-x-1">
            <h2 className="text-black text-sm font-medium">
              {post.description}
            </h2>
          </div>
          <div className="w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh] md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-black rounded overflow-hidden mb-3">
            <img
              src={post.postImg}
              alt="post-img"
              className="w-full object-contain bg-black rounded h-full"
            />
          </div>
          <div className="w-full h-auto flex item-center justify-between">
            <div className="flex flex-row item-center gap-x-4 justify-between">
              <div>
                {likedPosts[index] ? (
                  <FavoriteIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => onLike(index, post._id)}
                  />
                ) : (
                  <FavoriteBorderIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => onLike(index, post._id)}
                  />
                )}
              </div>
              <div>
                <NavLink to="/comments">
                  <CommentIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() =>
                      console.log("Show comments for post index:", index)
                    }
                  />
                </NavLink>
              </div>
              <div>
                <SendIcon sx={{ cursor: "pointer" }} />
              </div>
            </div>
            <div>
              {isSaved ? (
                <BookmarkAddedIcon
                  sx={{ cursor: "pointer" }}
                  onClick={onSave}
                />
              ) : (
                <BookmarkBorderIcon
                  sx={{ cursor: "pointer" }}
                  onClick={onSave}
                />
              )}
              <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={closeSnackbar}
                message="Post Saved!"
                action={action}
              />
            </div>
          </div>
          <div className="w-auto m">
            {post.likeCount}
            {likedPosts[index] ? 1 : 0} likes
          </div>
          <NavLink to="/" className="text-grey-400 font-normal my-2">
            View all {post.commentCount} comments
          </NavLink>
          <div className="w-full h-auto flex items-center justify-between border-b border-b-grey-500">
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-[90%] h-auto bg-transparent border-none outline-none focus:outline-none text-sm text-grey-400 py-3"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
