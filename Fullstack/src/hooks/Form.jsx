import React, { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
const Form = () => {
  const [users,setUsers]=useState([])
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        department:''
    })
    const fetchUsers = async()=>{
      const res=await axios.get('')
      setUsers(res.data)
      console.log(res);
    }

    useEffect(()=>{
      fetchUsers()
    },[])
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }))
  }
    const handleSubmit=async(e)=>{
         e.preventDefault()
         await axios.post('http://localhost:9000/postform',formData)
         console.log(formData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor=''>Name:</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} /><br /><br />
            <label htmlFor="">Email:</label>
            <input type="email" name='email' value={formData.email} onChange={handleChange} /><br /><br />
            <label htmlFor="">Password:</label>
            <input type="password" name='password' value={formData.password} onChange={handleChange} /><br /><br />
            <label htmlFor="">Department:</label>
            <input type="text" name='department' value={formData.department} onChange={handleChange} /><br></br><br></br>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
