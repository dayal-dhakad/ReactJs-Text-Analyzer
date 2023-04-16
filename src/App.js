
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';



function App() {

  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type 
      })
      setTimeout(()=>{
          setAlert(null);
      }, 1500)
  }

  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtils- Dark Mode";
      
    }
   
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success");
      // document.title = "TextUtils- Light Mode";
    }
  }

  return (
   
    <BrowserRouter>
     <>
  {/* <Navbar title="Texttutils" aboutText="About us"/> */}
    {/* <Navbar />  */}
  
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      
       <Routes>
         <Route exact path="/" element = {<Textform showAlert={showAlert} heading = "Try TextTutils- Word Counter, Character Counter etc" mode={mode} />}  />
       

            <Route exactmpath="/home" element = {<Textform showAlert={showAlert} heading = "Try TextTutils- Word Counter, Character Counter etc" mode={mode} />}  />

          <Route exact path="/about" element = {<About mode={mode}/>}  />
           
          
          </Routes>
       
    {/* <About/> */}
    </div>
  
   
    </>
    </BrowserRouter>
  );
}

export default App;
