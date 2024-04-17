import axios from "axios";
import { base_url } from "./urls";

const newRequest = axios.create({
  baseURL: `${base_url}/api/`,
  withCredentials: true,
});

export default newRequest;
