const numbers=[1,3,4,88,21,-35,-26]
const mappednum=numbers.map((num)=>num*3)
// console.log(mappednum);

const total=numbers.reduce((sum,n)=>sum+n,0)
console.log(total);

