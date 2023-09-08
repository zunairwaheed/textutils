import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
      
  }

  const toggleMode = () =>{
    if(mode === 'light'){
        setMode ('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert ("Darkmode enabled", "success");
        document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert ("Lightmode enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>

    <Router>
      {/* <Navbar title="TextUtils" aboutText="About textUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">

      <Switch>
          <Route exact path="/about">
            <About />
            </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text for analyze" mode={mode} />
            </Route>
        </Switch>
        
        {/* <TextForm showAlert={showAlert} heading="Enter the text for analyze" mode={mode} /> */}
        
        {/* <About/> */}


      </div>
        
      </Router>  
    </>
  );
}

export default App;
