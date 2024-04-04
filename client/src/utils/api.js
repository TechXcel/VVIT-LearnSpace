import axios from "axios";
export default axios.create({
  baseURL: "https://learnspace-api.vercel.app",
  // baseURL: "http://localhost:5000",
});
