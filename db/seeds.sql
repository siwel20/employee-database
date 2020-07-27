use employee;

INSERT INTO departments (name)
VALUES
    ("HR"), 
    ("Payroll"),
    ("Accounting"),
    ("Legal"),
    ("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("HR Manager", 100000, 1),
    ("HR Specialist", 50000, 1),
    ("Payroll Manager", 100000, 2),
    ("Payroll Specialist", 45000, 2),
    ("CFO", 150000, 3),
    ("CPA", 70000, 3),
    ("Chief Legal Officer", 175000, 4),
    ("Paralegal", 55000, 4),
    ("Sales Manager", 120000, 5),
    ("Sales Representative", 75000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Bob", "Bombshell", 5, 5),
    ("Candid", "Cali", 4, 4),
    ("Mick", "Dundee", 3, 3),
    ("Peter", "Parker", 2, 2),
    ("Tony", "Stark", 1, 1),
    ("Billy", "Bones", 4, 5),
    ("Hulk", "Hogan", 3, 4),
    ("Steve", "Thomas", 2, 3),
    ("Daffy", "Duck", 1, 2),
    ("Bugs", "Bunny", 5, 1);