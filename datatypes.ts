import { DepartmentList } from "./classdemo";
import { demoVar } from './demo/demo';
import * as test from './classdemo';// don't use this syntax

import { IEmployee } from './Iemployee';

let fname: string = 'Pramod';

let lname: string;
lname = 'Test';

let age: number = 10.00;

let valid: boolean = true; // By default it will be undefined

let dob: Date = new Date('30-Dec-2017');

let anyDataType: any; // should not be used

anyDataType = 'Srinivas';
anyDataType = 34;
anyDataType = new Date('20-dec-2015');

let unionType: string | number | Date;

unionType = 'test';
//unionType = true;
unionType = 23;

let empList: string[] = [];
let price: number[] = [];

let departmentList: Array<DepartmentList> = new Array<DepartmentList>();

let dept1 = new DepartmentList('IT', 'Sudeep');
dept1.employeeCount = 200;


let dept2 = new DepartmentList('Marketing', 'Jyoti');
dept1.employeeCount = 300;

departmentList.push(dept1, dept2);

departmentList.forEach(function (department) {
    console.log(department);
});

for (let department of departmentList) {
    console.log(department);
}

//lambda or arrow function
departmentList.forEach((department) => {
    console.log(department)
});

let employee: IEmployee;
employee.id = 1;
employee.email = 'test@gmail.com';


enum Color {
    green,
    red,
    blue
}

let green = Color.green;
let red = Color.red;   