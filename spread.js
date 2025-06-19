// const arr=[1,2,3]
// const copy=[...arr,4,5,6]
// console.log(copy);

const arr1=[1,2,3]
const arr2=[4,5,6]
const copy=[...arr1,...arr2]
console.log(copy);

const number=[1,2,3,4,5,6]
const [first,second,third,...spread]=number
console.log(spread);

