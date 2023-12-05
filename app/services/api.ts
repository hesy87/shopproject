import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const GET = async (url: string, params = {}, config = {}) => {
  try {
    const data = await API.get(url, { params, ...config });
    return data.data;
  } catch (err) {
    return err;
  }
};

export const POST = async (url: string, body = {}, config = {}) => {
  try {
    const data = await API.post(url, body, config);
    return data.data;
  } catch (err) {
    return err;
  }
};

export const DELETE = async (url: string, body = {}) => {
  try {
    const data = await API.delete(url, { data: body });
    return data.data;
  } catch (err) {
    return err;
  }
};

export const PUT = async (url: string, body = {}) => {
  try {
    const data = await API.put(url, body);
    return data.data;
  } catch (err) {
    return err;
  }
};
