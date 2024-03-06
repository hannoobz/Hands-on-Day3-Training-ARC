import { clear } from "console";
import { prompt } from "./prompt"
import axios from 'axios';
import { exit } from "process";

const getTodoItems = async () => {
	try {
	  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=3`);
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


const main = async () =>{
	clear();
	var todo = await getTodoItems();
	while(true){
		console.log("1. Lihat task");
		console.log("2. Ubah status task");
		console.log("3. Keluar");
		console.log("");
		const inputMenu = await prompt("Masukkan Pilihan :");
		switch(inputMenu) { 
			case '1': { 
				clear();
				for (let i = 0; i <todo.length; i++) {
					console.log("Task "+i+" : "+todo[i].title);
					console.log("completed : "+todo[i].completed);
					console.log('');
				  }
			   break; 
			} 
			case '2': { 
				clear();
				for (let i = 0; i <todo.length; i++) {
					console.log("Task "+i+" : "+todo[i].title);
					console.log("completed : "+todo[i].completed);
					console.log('');
				  }
				const inputCheck = await prompt("Ubah status :");
				try{
					todo[inputCheck].completed = !todo[inputCheck].completed
				}
				catch{

				}
			   break; 
			}
			case '3': { 
				exit();
			   break; 
			}
			default: { 
			   break; 
			} 
		 } 
	}
}

main();

