
const product=[
    {
        name:'tv',
        price:8000
    },
    {
        name:'phone',
        price:5000
    },
    {
        name:'lap',
        price:7500
    }
] 

const totalprice=product.reduce((sum,n)=>sum+n.price,0)
console.log(totalprice);

const fil = product.filter((n) => n.price > 5000);
console.log(fil);

