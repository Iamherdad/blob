const removeSpace = (str) => {
  if (!str || typeof str !== "string") {
    return "";
  }
  return str.replace(/\s+/g, "");
};

module.exports = {
  removeSpace,
};
