import axios from "axios";

const API_KEY = "YOUR API KEY GOES HERE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: API_KEY,
  },
});
