const inquirer = require('inquirer');
const { getDepartments, addDepartment } = require('./operations/department');
const { getRoles, addRoles } = require('./operations/roles');
const { getEmployee, addEmployee } = require('./operations/employee');

function main(){
    return inquirer.prompt([
        {
            message: "What would you like to do?",
            type: 'list',
            name: 'operation',
            choices: [
                'view all departments',
                'add deparment',
                'view all roles',
                'add roles',
                'exit',
            ]
        },
        {
            message: "What is the department name?",
            type: 'input',
            name: 'department_name',
            when: (ans) => ans.operation === 'add department',
        }
    ]).then (async (ans) => {
    console.log({ans})

    switch (ans.operation) {

        case "view all departments":
            const departments = await getDepartments();
            console.table(departments);
            break;

        case "add department":
            await addDepartment(ans.department_name);
            console.log("Department added");
            break;


        case "view all roles":
            const roles = await getRoles();
            console.table(roles);
            break;

            case "add roles":
                await addRoles(ans.roles_name);
                console.log("Role added");
                break;

        case "view all employee":
            const employee = await getEmployee();
            console.table(employee);
            break;

            case "add employee":
                await addEmployee(ans.employee_first_name, ans.employee_last_name, ans.role_id, ans.manager_id)


        case "exit":
            process.exit(0);
    }
    await main();    
});
}

main();

// create a CLI to manage employees 

// view all departments, 

// view all roles,  

// view all employees, 



// add a department, 

// add a role, 

// add an employee, 

// and update an employee role

