// view all employee

const { connect } = require("../db/connection")



// add department

async function addEmployee(name){

    const db = await connect();

    await db.query('INSERT INTO `employee_cms_demo`.`employee` (`name`) VALUES (?)', name);

}

async function getEmployee(){

    const db = await connect();

    const [employee] = await db.query('SELECT * FROM employee');

    return departments;
}

// todo: add update role

module.exports = {
    addEmployee,
    getEmployee,
    updateRole,
}

