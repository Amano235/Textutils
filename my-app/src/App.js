
import './App.css';

import Navbar from './components/Navbar';
import Form from './components/Form';
//import About from './components/About';

import  React, { useState } from 'react';




function App() {
  const [mode,setMode]=useState('light');
  
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
   }
   
  return (
    <> 
   
<Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />

<div className="container my-3">
  <Form heading="Enter the text to analyze below" mode={mode}/>
  {/*<About/>*/}
        </div>
     
 
    </>
  );
}

export default App;

