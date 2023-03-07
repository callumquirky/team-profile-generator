const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = []

let teamIsComplete = false

const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee id?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?",
    },
    {
        type: "input",
        name: "managerOffice",
        message: "What is the manager's office number?",
    },
]

const menu = {
    type:"list",
    name:"menu",
    choices:[{name: "Add an engineer",  value:"Add an engineer"}, {name: "Add an intern", value:"Add an intern"}, {name:"Finish team", value:"Finish team"}],
}

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message:"What is the engineer's name?"  
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee id?",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?",
    },
]

const internQuestions = [
    {
        type: "input",
        name: "internName",
        message:"What is the intern's name?"  
    },
    {
        type: "input",
        name: "internId",
        message:"What is the intern's employee id?"  
    }, 
    {
        type: "input",
        name: "internEmail",
        message:"What is the intern's email?"  
    }, 
    {
        type: "input",
        name: "internSchool",
        message:"What is the intern's school?"  
    },    
]

function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(fileName), data)
}

function userMenu(){
    inquirer.prompt(menu).then((response) => {
        if (response.menu == 'Add an engineer'){
            inquirer.prompt(engineerQuestions).then((engineer) => {
                const engin = new Engineer(engineer.engineerName, engineer.engineerId, engineer.engineerEmail, engineer.engineerGithub)
                team.push(engin)
                userMenu()
            })
        }
        else if (response.menu == 'Add an intern'){
            inquirer.prompt(internQuestions).then((intern) => {
                const int = new Intern(intern.internName, intern.internId, intern.internEmail, intern.internSchool)
                team.push(int)
                userMenu()
            })
        }
        else if(response.menu === 'Finish team'){
            teamIsComplete = true;
            writeToFile(outputPath, render(team))
        }
    }) 
}


function init(){
    inquirer.prompt(managerQuestions).then((manager) => {
        const manag = new Manager(manager.managerName, manager.managerId, manager.managerEmail, manager.managerOffice)
        team.push(manag)
        if (team.includes(manag)){
            userMenu()
        }
    })
}

init()