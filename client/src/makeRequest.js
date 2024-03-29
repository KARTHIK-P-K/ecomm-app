import axios from "axios";

export const makeRequest = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "http://localhost:1337/api",
  // headers: {
  //   Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  // },
  headers: {
    Authorization:
      "bearer bb6460c104a263714ac75505145e24171a99c610ce8312cee89d1250d6b65eaf055e40f8488ad078a692524b75d3aa494abe8dad2d6634fa123eebe6e20f6c0ce6b25f25e2078bcbc58167376e993bdffc3682743ef33b219e3892ad935a44b2aa32ba934fdd18700ae1a20b13ad52e10f36b24ee1fc08a8d72d1507c893e8bf",
  },
});

export const api = {
  post: async (url, data) => {
    try {
      const response = await makeRequest.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
