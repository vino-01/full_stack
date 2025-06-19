const obj={
    name:'Vi',
    age:20,
    message:function(){
        let name=obj.name
        return `Hello I am ${name}`
    }
}
console.log(obj.name);
console.log(obj.message());
