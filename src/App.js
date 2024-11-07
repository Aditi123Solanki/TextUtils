import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [modeText,setModeText] = useState("Enable Dark Mode");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      setModeText("Enable Light Mode");
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode('light');
      setModeText("Enable Dark Mode");
      showAlert("Light Mode has been Enabled","success");
    }
  }

  

  return (
    // <Router>
    <div className={`App ${mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
    <Navbar title="TextUtils" aboutText ="About TextUtils" mode={mode} modeText={modeText} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route exact path="/About" element={ <About/>}/> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyse" mode={mode}/>}/> */}
          <TextForm showAlert={showAlert} heading="Enter the Text to Analyse" mode={mode}/>
    {/* </Routes>  */}
    </div>
    </div>
    // {/* </Router> */}
  );

}

export default App;
