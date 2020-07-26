const inquirer = require("inquirer");
const mysql = require("mysql");
const { allowedNodeEnvironmentFlags } = require("process");
const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee"
});

connection.connect(function(error) {
    if (error) throw error;
    console.log("connection id", connection.threadId);
    mainMenu()
})
// creates the main menu
const mainMenu = () => {
    inquirer.prompt ({
        type: "list",
        message: "Please choose a selection:",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
        name: "action"
    }).then(userInput => {
        switch(userInput.action){
            case "view all departments":
                viewDepartments()
                break
            case "view all roles":
                viewRoles()
                break
            case "view all employees":
                viewEmployees()
                break
            case "add a department":
                addDepartment()
                break
            case "add a role":
                addRole()
                break
            case "add an employee":
                addEmployee()
                break
            case "updated an employee role":
                updateRole()
                break    
        }
    })
}
// functions to view options
const viewDepartments = () => {
    // connection.query is used since nothing is being added or updated
    connection.query("select * from department", function(error, data){
        console.table(data)
        mainMenu()
    })
}
const viewRoles = () => {
    connection.query("select * from role", function(error, data){
        console.table(data)
        mainMenu()
    })
}

const viewEmployees = () => {
    connection.query("select * from employee", function(error, data) {
        console.table(data)
        mainMenu()
    })
}

const addDepartment = () => {
    inquirer.prompt({
        type: "input",
        message: "What department would you like to add?",
        name: "departmentName"
    }).then(userInput => {
        connection.query("INSERT INTO DEPARTMENT SET ?", {
            name:userInput.departmentName
        }, function(error, data){
            if(error)throw error
            console.log("Your department has been added")
            mainMenu()
        })
    })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What role would you like to add?",
            name: "roleTitle"
        },
        {
            type: "input",
            message: "How much is the salary for this role?",
            name: "roleSalary"
        },
        {
            type: "number",
            message: "What is the department number for this role?",
            name: "roleDept"
    }]).then(userInput => {
        connection.query("INSERT INTO ROLE SET ?", {
            title:userInput.roleTitle,
            salary:userInput.roleSalary,
            department_id:userInput.roleDept
        }, function(error, data){
            if(error)throw error
            console.log("The new role has been added")
            mainMenu()
        })
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employees first name?",
            name: "firstName"
        },
        {
            type: "input",
            message: "What is the employees last name?",
            name: "lastName"
        },
        {
            type: "number",
            message: "What is the role id number for this employee?",
            name: "idNumber"
        },
        {
            type: "number",
            message: "Enter the assigned managers id number",
            name: "managerId"
    }]).then(userInput => {
        connection.query("INSERT INTO EMPLOYEE SET ?", {
            first_name:userInput.firstName,
            last_name:userInput.lastName,
            role_id:userInput.idNumber,
            manager_id:userInput.managerId
        }, function(error, data){
            if(error)throw error
            console.log("Your employee has been added")
            mainMenu()
        })
    })
}