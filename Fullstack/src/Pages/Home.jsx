
import Welcome from '../Welcome'
import Skills from '../Skills'

const Home = () => {
  return (
    <div>
     <h1> Home Page</h1>
    <Welcome name=" Vino" country=" India"/>
      <Skills skill={['React','Node','Express','MongoDb']}/>
        <h1>Welcome</h1>
        </div>
  )
}

export default Home