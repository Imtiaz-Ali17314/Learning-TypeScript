import axios from "axios";
import type { AxiosResponse } from "axios";

// Basic usage of axios to make a GET request
axios.get("https://api.example.com/data").then((response) => {
  console.log("Data fetched successfully:", response.data);
});

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodo = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const todo: Todo = response.data;
    console.log("Fetched Todo:", todo);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    }
  }
};
