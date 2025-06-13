import axios from "axios";

export const getDogBreeds = async (url: string) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: `${url}breeds`,
  });
  return json;
};