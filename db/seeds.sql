INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES 
("Sales Lead", 100000.00, 1), ("Salesperson", 80000.00, 2), ("Lead Engineer", 150000.00, 3), ("Software Engineer", 120000.00, 4), ("Account Manager", 160000.00, 5), ("Accountant", 125000.00, 6), ("Legal Team Lead", 250000.00, 7), ("Lawyer", 190000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("John", "Doe", 1, NULL), ("Mike", "Chan", 2, 1), ("Ashley", "Rodriguez", 3, NULL), ("Kevin", "Tupik", 4, 3), ("Kunal", "Singh", 5, NULL), ("Malia", "Brown", 6, 5), ("Sarah", "Lourd", 7, NULL), ("Tom", "Allen", 8, 7),