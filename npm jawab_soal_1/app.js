import axios from 'axios';


const getTodoItems = async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/`);
    const todoItems = response.data;
    // console.log(todoItems);
    return todoItems;
  } catch (errors) {
    console.error("Error");
  }
};

const result = async()=>{
    const res = await getTodoItems();
    console.log(res);
}

result();