import { createInterface } from "readline"

const readline = createInterface({
	input: process.stdin,
	output: process.stdout
})

export const prompt = (p) => new Promise<string>((r) => readline.question(p, r))

export const promptOrDefault = async (p, def) => {
	const inp = await prompt(p)
	if (inp.length == 0) return def
	return inp
};