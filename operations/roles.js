// view all departments

const { connect } = require("../db/connection");
const { getDepartments } = require("./department");
const inquirer = require('inquirer');


// add roles

async function addRoles(name){
const dep = await getDepartments()
const departments = dep.map(el => ( { name:el.name, value:el.id }))
    await inquirer.prompt([
        {
            message: "What is your department?",
            type: 'list',
            name: 'department_id',
            choices: departments
        },
        {
            message: "What is your salary?",
            type: 'input',
            name: 'salary',
        },
        {
            message: "What is your title?",
            type: 'input',
            name: 'title',
        },

    ]).then (async (ans) => {
        const db = await connect(); 
        await db.query('INSERT INTO `employee_cms_demo`.`roles` (`title`, `salary`, `department_id`) VALUES (?, ?, ?)', [ans.title, ans.salary, ans.department_id]);
    })  

}

async function getRoles(){

    const db = await connect();

    const [roles] = await db.query('SELECT * FROM roles JOIN departments on roles.department_id = departments.id');

    return roles;
}

module.exports = {
    addRoles,
    getRoles,
}

