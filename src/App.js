import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Wheather the darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }



  const toggleMode  = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#10213d'
      showAlert("Dark Mode Has Been Enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Been Enabled", "success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="ShahUtils" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} anything="Try ShahUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;