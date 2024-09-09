import { axiosFakestore } from "../lib/axios";

export const getMenu = async (callback) => {
  try {
    const response = await axiosFakestore.get("/");
    callback(true, response.data);
  } catch (error) {
    callback(false, error.message);
  }
};
