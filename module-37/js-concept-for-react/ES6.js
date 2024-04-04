const numbers = [2, 23, 43, 58, 5, 66];
const student = {
    name:'abu sayed',
    age:21,
    occupation: 'student',
    address:'rajshiahi'
}

//1.tamplet string
const about = `My name is ${student.name}. and my age is ${numbers[1]}`;
console.log(about);

//2. arrow function

const getFiftyEIght = () => 55 ;
const addTwentyThree = num => num+23;

const isEven = x => x % 2 == 0;

const multiplyThreeNumbers = (x,y,z) =>x*y*z;

const doMath = (num1, num2) =>{

    const sum = num1+num2;
    return sum;
}

// spread operator

const newNumbers = [...numbers] ;

const currentNumberws = [44, ...numbers, 9, 56,46]

numbers.push(67);
numbers.unshift(12);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumberws);




