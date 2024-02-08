import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter ,Route, Routes } from 'react-router-dom';
import Loginscreen from './Screen/Loginscreen';
import Signupscreen from './Screen/Signupscreen';


function App() {
  return (
    <div className="App">

      <Navbar/>
      
      <BrowserRouter>
      <Routes>
      
      <Route path='/login' exact Component={Loginscreen}/>  
      <Route path='/register' exact Component={Signupscreen} />
      

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
