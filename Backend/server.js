import express from 'express'
import mongoose from 'mongoose'
import {connectDB} from './config/db.js'
// import User from './model/user.js'
import User from './model/form.js'
import cors from 'cors'

const app = express()

connectDB() 
//built in middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//custom
const methodFind = (req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next()
}
app.use(methodFind)

const blockDelete=(req,res,next)=>{
    if(req.method==="DELETE"){
        return res.send('Delete function blocked')
    }
    next()
}

app.get('/getform',async(req,res)=>{ 
  try  {   
    const user = await User.findById(req.params.id)
   if(!user) res.json({mg:'no user found with that id'})
   res.json(user)
    }
    catch(error){
        res.send(error)
    }
})

app.post('/postform',async(req,res)=>{
    try{
        const newUser=new User(req.body)
        await newUser.save()
        res.status(201).json(newUser)
    }
    catch(error){
        res.status(401).json(error)
    }
})

app.put('/put/:id',async(req,res)=>{
   try{
    const update= await User.findByIdAndUpdate(req.params.id,req.body)
    res.json({msg:'data updated'})   
}
catch(error){
    res.json(error)
}

})
app.patch('/patch',(req,res)=>{
    res.send('from patch')
})
app.delete('/delete/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send('ID deleted');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(9000,()=>{
    console.log("Server running on port 9000")
})