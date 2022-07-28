console.clear();
let hello = 'hey from Typescript world';
let myName = 'Ivan R.';
let greeting = (user) => {
    console.log(`${hello} ${user}`);
};
let student1 = ['John', '29', 'programmer', 'Playing games'];
let student2 = ['Lewis', '32', 'engineer', 'riding horses'];
let student3 = ['Meagan', '27', 'hair stylist', 'dancing'];
//spread operator
let person = [...student1, 'Juan', '30', "manager", "computing", ...student2];
//the Map object
let employee = new Map();
employee.set('manager', 'Lauren Mckinney');
employee.set('supervisor', 'Paul Don');
employee.set('employee1', 'Ivan Shepard');
employee.set('developer', 'Eric Pit');
employee.set('product owner', 'Maria DoSantos');
console.log(employee.get('supervisor'));
