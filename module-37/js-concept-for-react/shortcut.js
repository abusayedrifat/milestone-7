
//Falsy --> '', 0, null, undefined, false



//Truthy --> 'rifat', 5, true, {}, []




let myVar = -5;
if (myVar) {
    myVar = myVar*100;
    console.log('truthy');
} 
else {
 myVar = 0;   
 console.log('falsy');
}

// ternary

const money = 80;
let food;

if (money > 100) {
    food = 'kala vuna khabo';
}
 else {
    food = 'cha-bicuit kahbo'
}

//in ternary form it will be,

let food1 = money > 100 ? 'biriyani and kala-vuna khabo': 'singara-somocha kahbo';
console.log(food1);


// declear ternary by function

const isActive = false;

const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive? showUser() : hideUser();

//string to number

const num = '234'
const makeitNum = +num;
console.log(makeitNum);








