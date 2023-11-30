import { get } from "./https";

const pathUrl = "/posts/";

export const getAllPost = async () => {
  let url = `${pathUrl}?`;
  const result = await get(url);
  return result.data.data;
};
