let a  = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const afMap = a.map((value) => {
    return Math.pow(value, 3);
});

const afterFil= afMap.filter((value) => {
    return value % 2 === 0;
});

// console.log(afterFil);

const cart = [
    {name: 'Laptop', price: 5000}, 
    {name: 'Phone', price: 12000}, 
    {name: 'Tablet', price: 8000},];

const totalPrice = cart.reduce((acc, value) => {
    return acc + value.price;
}, 0);

console.log(totalPrice);