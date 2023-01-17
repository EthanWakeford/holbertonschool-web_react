var student1 = { firstName: 'Bob', lastName: 'Barker', age: 2035, location: 'Oklahoma' };
var student2 = { firstName: 'George', lastName: 'Bush', age: 123, location: 'Texas' };
var studentsList = [student1, student2];
/*function CreateTable(table: HTMLTableElement, studentsList: Array<Student>) {
  for (const student of studentsList) {
    let row = table.insertRow();
    const firstName = row.insertCell();
    const location = row.insertCell();
    firstName.innerHTML = student.firstName;
    location.innerHTML = student.location;
  }
  document.body.appendChild(table);
}

let table = document.createElement('table');
CreateTable(table, studentsList);*/
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var i = studentsList_1[_i];
    console.log(i.firstName, i.location);
}
