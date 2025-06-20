// async function fetchusers(){
//     try{
//         const response = await fetch(
//             'https://jsonplaceholder.typicode.com/users'
//         )
//         const data= await response.json()
//         console.log(data);

//     }
//     catch(error){
//         console.log(error);
//     }
// }
// fetchusers()

async function fetchusers(){
    try{
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const data= await response.json()
        // console.log(data);
        data.map((a)=>console.log(a.name))
    }
    catch(error){
        console.log(error);
    }
}
fetchusers()                