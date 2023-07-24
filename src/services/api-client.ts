import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1f839baf4478461ba8005ab31f336d90",
  },
});
