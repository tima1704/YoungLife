import { API } from "./api";

export const Get = (recieve, id, title) => {
  return API.get(recieve, id, title);
};
export const Create = (data, cat, title) => {
  return API.post(JSON.stringify(data), cat, title);
};

export const Delete = (url, id, title) => {
  return API.delete(url, id, title);
};

export const Change = (body, url, id, title) => {
  return API.patch(body, url, id, title);
};
