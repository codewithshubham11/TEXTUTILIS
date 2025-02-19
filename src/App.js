import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
 const[mode,setMode] =useState('light'); // whether darkmode enabled or not
const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null);
}, 1500);
}
 const toggleMode=()=>{
  if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled" , "success");
    }
 }
      return (
    <>
   <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
             <Routes>
          <Route exact path="/about"
          element= {<About mode={mode}/>}></Route>
          <Route exact path="/home"
         element={<TextForm showAlert={showAlert} heading="Try Textutils- Word Counter Character Counter Remove Extra Spaces" mode={mode} />}>
          </Route>
          </Routes>
      </div>
     </BrowserRouter>
    </>
  );
}

export default App;

