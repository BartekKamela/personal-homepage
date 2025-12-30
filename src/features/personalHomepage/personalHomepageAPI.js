import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";

export const getRepositories = async (username) => {
  try {
    const response = await axios.get(`${githubAPIBaseURL}/users/${username}/repos`)
    return response.data;
  }
  catch (error) {
    console.error("Error fetching repositories", error);
    return [];
  }
};