import inquirer from "inquirer";
// Declare a constant "answers" and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentense",
        type: "input",
        message: "Enter your sentence to count the words",
    },
]);
const words = answers.sentense.trim().split(" ");
// Print the array of words to the console
console.log(words);
// Print the word count of the sentence to the console
console.log(`Your sentence words count is ${words.length}`);
