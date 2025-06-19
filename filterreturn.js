const numbers=[1,3,4,88,21,-35,-26]
const mappednum=numbers.map((num)=>num*3)
console.log(mappednum);

// const posnum=numbers.filter((n)=>n>0)
// console.log(posnum);

// const posnum=numbers.filter((n)=>n%2!=0)
// console.log(posnum);

const posnum=numbers.filter((n)=>n%2!=0&&n>0)
console.log(posnum);