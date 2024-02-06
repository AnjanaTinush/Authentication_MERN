import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter ,Route, Routes } from 'react-router-dom';
import loginscreen from './Screen/loginscreen';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <BrowserRouter>
      <Routes>

      <Route path='/login' exact Component={loginscreen} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
