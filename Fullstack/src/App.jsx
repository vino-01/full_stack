import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome'
// import './App.css'

function App() {
  return (
    <>
      {/* <Welcome name=" Vi" country=" India"> */}
      <Skills skill={['React','Node','Express','MongoDb']}/>
        <h1>Welcome</h1>
      {/* </Welcome> */}
    </>
  );
}

export default App;
