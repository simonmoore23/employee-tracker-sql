const inquirer = require('inquirer');
const db = require('./db/queries');

function startApp() {
    inquirer.createPromptModule([
        {
            type: 'list',
            name: 'action',
            message: '', 
            choices: [
                'View all departments',
                'view all roles',
                'View all employees', 
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an empoyee role',
                'Exit'
            ]
        }

    ]).then(answer => { 
        
        switch (answer.action) {
                case 'View all departments':
            break;
                case 'View all employees':
            break;
                case 'Add a department':
            break;
                case 'Add a role':
            break;
                case 'Add an employee':
            break;
                case 'Update an employee role':
            break;
                case 'Exit':
                    console.log('Goodbye!');
                    process.exit();
        }
    });
}

startApp();