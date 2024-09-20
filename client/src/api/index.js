import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

const register = ({ username, email, password, fullname, confirmPassword }) => {
  return apiClient.post("/users/register", {
    username,
    email,
    password,
    fullname,
    confirmPassword,
  });
};

const login = ({ email, password }) => {
  return apiClient.post("/api/v1/users/login", { email, password });
};

const logoutUser = async () => {
  return await apiClient.post("/api/v1/users/logout");
};

const getLogInUserDetails = async () => {
  return await apiClient.get("/api/v1/users/user-info");
};

const refreshToken = () => {
  return apiClient.post("/api/v1/users/refresh-token");
};

// In change password you should pass old password and new password in body.
const changePassword = ({ oldPassword, newpassword }) => {
  return apiClient.post("/api/v1/users/change-password", {
    oldPassword,
    newpassword,
  });
};

// In update account you only update  email, fullname username only for now.
const updateUserAccount = ({ email, username, fullname }) => {
  return apiClient.post("/api/v1/users/update-account", {
    email,
    username,
    fullname,
  });
};

// In delete account you should pass password to delete account.
const deleteUserAccount = (password) => {
  return apiClient.post("/api/v1/users/delete-account", { password });
};

//In update avatar only pass image.
const updateUserAvatar = (avatar) => {
  return apiClient.post("/api/v1/users/update-avatar", { avatar });
};

// In this pass cover image.
const updateCoverImage = (coverImage) => {
  return apiClient.post("/api/v1/users/update-coverimage", { coverImage });
};

const getUserChannelDetail = (username) => {
  return apiClient.get(`/api/v1/users/accounts/channel/${username}`);
};

const getUserProfileDetail = (userId) => {
  return apiClient.get(`/api/v1/users/accounts/profile/${userId}`);
};

const getUserAllPost = () => {
  return apiClient.get("/api/v1/posts");
};

const publishAPost = ({ title, description, PostImgPath }) => {
  return apiClient.post("/api/v1/posts", { title, description, PostImgPath });
};

const getPostById = (PostId) => {
  return apiClient.get(`/api/v1/posts/${PostId}`);
};
const deletePost = (PostId) => {
  return apiClient.delete(`/api/v1/posts/${PostId}`);
};

const updatePost = ({ title, description, postImg }) => {
  return apiClient.patch(`/api/v1/posts/${PostId}`, {
    title,
    description,
    postImg,
  });
};

const togglePublishStatus = (PostId) => {
  return apiClient.patch(`/api/v1/posts/toggle/publish/${PostId}`);
};

const getUserFollowingsDetail = (followingId) => {
  return apiClient.get(`/api/v1/users/accounts/follow/${followingId}`);
};
const userFollowById = (followingId) => {
  return apiClient.post(`/api/v1/users/accounts/follow/${followingId}`);
};

const togglePostLike = (postId) => {
  return apiClient.post(`/api/v1/posts/toggle/p/${postId}`);
};

const toggleCommentLike = (commentId) => {
  return apiClient.post(`/api/v1/posts/toggle/c/${commentId}`);
};

const getLikedPost = () => {
  return apiClient.get(`/api/v1/posts/user/liked-post`);
};

const getPostComments = (PostId) => {
  return apiClient.get(`/api/v1/posts/p/c/${PostId}`);
};
const createComment = ({ PostId, content }) => {
  return apiClient.post(`/api/v1/posts/p/c/${PostId}`, content);
};

const deleteComment = (commentId) => {
  return apiClient.delete(`/api/v1/posts/c/${commentId}`);
};

const updateComment = ({ commentId, newContent }) => {
  return apiClient.patch(`/api/v1/posts/c/${commentId}`, newContent);
};

export {
  login,
  register,
  logoutUser,
  getUserChannelDetail,
  getUserProfileDetail,
  updateCoverImage,
  updateUserAccount,
  updateUserAvatar,
  deleteUserAccount,
  changePassword,
  refreshToken,
  getLogInUserDetails,
  getUserAllPost,
  publishAPost,
  getPostById,
  deletePost,
  updatePost,
  togglePublishStatus,
  getUserFollowingsDetail,
  userFollowById,
  togglePostLike,
  toggleCommentLike,
  getLikedPost,
  getPostComments,
  createComment,
  deleteComment,
  updateComment,
};
