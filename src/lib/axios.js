import axios from "axios";

export const axiosFakestore = axios.create({
  baseURL: import.meta.env.VITE_APP_FAKESTORE_API,
});
