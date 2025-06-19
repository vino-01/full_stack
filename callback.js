function function1(){
    console.log(`from inside callback`)
}
function fun(name,callback){
    callback()
    return `${name} from outisde callback`
}
console.log(fun('function',()=>{  console.log(`from inside callback`)}));