import React from 'react'
import State from '../hooks/State'
import {Link} from 'react-router-dom'
import Form from '../hooks/Form'
import Effect from '../hooks/Effect'



const About = () => {
  return (
    <div>
      <Link to='/state'>Usestate example</Link><br/>
        <Link to='/form'>Controlled form</Link><br />
        <Link to='/effect'>Effect</Link>
     
    </div>
  )
}

export default About