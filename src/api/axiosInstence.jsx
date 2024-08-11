import axios from "axios";

export const getExampleData = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=f1577422c1b549cf8edbfbe19e714194"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching example data", error);
    throw error;
  }
};
