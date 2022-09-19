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

    return employee;
}

// todo: add update role
async function updateRole(){
    
    const db = await connect();

    
}

module.exports = {
    addEmployee,
    getEmployee,
    updateRole,
}

