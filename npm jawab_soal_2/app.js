import { prompt } from "./prompter.js"
const io = async () => {
	const inputFile = await prompt("File path: ")
      console.log("=== Raw Result ===")
	console.log(res)
	console.log("\n")
      process.exit()
}
io()