const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");

const managerQuestions = [
    {
        type: "input",
        name: "manager-name",
        message: "What is the manager's name?",
    },
    {
        type: "input",
        name: "manager-id",
        message: "What is the manager's employee id?",
    },
    {
        type: "input",
        name: "manager-email",
        message: "What is the manager's email address?",
    },
    {
        type: "input",
        name: "manager-office",
        message: "What is the manager's office number?",
    },
]

const menu = [{
    type:"list",
    name:"menu",
    choices:["Add an engineer", "Add an intern", "Finish team"],
}]

const engingeerQuestions = [
    {
        type: "input",
        name: "engineer-name",
        message:"What is the engineer's name?"  
    },
    {
        type: "input",
        name: "engineer-id",
        message: "What is the engineer's employee id?",
    },
    {
        type: "input",
        name: "engineer-email",
        message: "What is the engineer's email address?",
    },
    {
        type: "input",
        name: "engineer-github",
        message: "What is the engineer's GitHub username?",
    },
]

const internQuestions = [
    {
        type: "input",
        name: "intern-name",
        message:"What is the intern's name?"  
    },
    {
        type: "input",
        name: "intern-id",
        message:"What is the intern's employee id?"  
    }, 
    {
        type: "input",
        name: "intern-email",
        message:"What is the intern's email?"  
    }, 
    {
        type: "input",
        name: "intern-school",
        message:"What is the intern's school?"  
    },    
]