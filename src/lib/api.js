const axios = require("axios").default;

const baseUrl =
  "https://q99oehfbr9.execute-api.eu-west-1.amazonaws.com/dev/api";

export const get = async (endpoint) => {
  try {
    const response = await axios.get(baseUrl + endpoint);
    return response;
  } catch (error) {
    return error;
  }
};
