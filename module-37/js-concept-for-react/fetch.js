//1.JSON

const student = {
    name: 'abu sayed',
    age: 32,
    movies: ['avengers', 'ironman']
}

const stringify = JSON.stringify(student)
console.log(stringify);

const parse = JSON.parse(stringify);
console.log(parse);

//2.fetch 

// fetch('url')
// .then(res => res.json())
// .then (data => console.log(data))



//3.keys, values

const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);
console.log(values);

//4.for

const numbers = [23, 54, 67, 98, 45];
numbers.forEach(num => console.log(num));

numbers.map(num => num * 2)

//add or remove from an array
const products = [
    {name:'laptop', price:45000, brand:'walton'},
    {name:'phone', price:12000, brand:'infinix'},
    {name:'watch', price:445000, brand:'rolex'},
    {name:'camera', price:75000, brand:'sony'},
    {name:'mens sunglass', price:25000, brand:'gucci'}
]

const newProduct = { name: 'webcam', price:'45000', brand:'logitech'};
//copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);
//creat a new array without one specific item
const newProductsArray = products.filter( p => p.name !== 'phone');
console.log(newProductsArray);



