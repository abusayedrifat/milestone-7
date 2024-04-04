//1. how to declear a variable using let and let

const name = 'abu sayed rifat';
let season = 'winter';
season = 'summer';

const student = {
    name:'abu sayed',
    age:21,
    occupation: 'student',
    address:'rajshiahi'
}

const myVriable = 'occupation'

console.log(student.occupation);//direct by property name
console.log(student['occupation']);//access via property name string
console.log(student[myVriable]);//access  through via property name in a variable
