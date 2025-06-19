function add(...arguments){
    return arguments;
}
console.log(add(1,2,3,4,5))

function add2(...arguments){
    return arguments.reduce((sum,n)=>sum+n,0);
}
console.log(add2(1,2,3,4,5))