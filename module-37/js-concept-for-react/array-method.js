const products = [
    {name:'laptop', price:45000, brand:'walton'},
    {name:'phone', price:12000, brand:'infinix'},
    {name:'watch', price:445000, brand:'rolex'},
    {name:'camera', price:75000, brand:'sony'},
    {name:'mens sunglass', price:25000, brand:'gucci'}
]

const brands = products.map(products => products.brand);
console.log(brands);

const prices =products.map(products => products.price);
console.log(prices);


products.forEach(products => console.log(products.name))

//3.filter

const price = products.filter(product => product.price > 25000);
// console.log(price);

const findSpecificWord =products.filter(letter => letter.name.includes('e'));
console.log(findSpecificWord);

//4.find (it will give the first element of matching. not all)

const findSpecial = products.find( specific => specific.name.includes('e'));
console.log(findSpecial);