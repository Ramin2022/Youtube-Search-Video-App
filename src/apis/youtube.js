import axios from "axios";

const API_KEY = "AIzaSyDZuti6xF3Uum1FIuaYOuXpIjK-qxfl_iI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: API_KEY,
  },
});
