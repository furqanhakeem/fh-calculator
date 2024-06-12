import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your First Number", type: "number", name: "firstnumber" },
    {
        message: "Enter your Second Number",
        type: "number",
        name: "secondnumber",
    },
    {
        message: "Select one of the option below",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please Select a Valid Operator");
}
