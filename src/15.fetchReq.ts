interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodo = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const todo: Todo = await response.json();
    console.log("Fetched Todo:", todo);
  } catch (error: any) {
    console.error("Error fetching Todo:", error);
  }
};
