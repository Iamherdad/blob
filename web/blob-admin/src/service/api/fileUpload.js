import request from "../index.js";

export const uploadImg = async (file) => {
  if (!file) {
    throw Error("file不能为空");
  }
  const result = request.post("/fileupload", file);
  return result;
};
