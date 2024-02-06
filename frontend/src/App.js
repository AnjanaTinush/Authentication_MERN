import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter ,Route, Routes } from 'react-router-dom';
import registerscreen from './Screen/registerscreen';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <BrowserRouter>
      <Routes>

      <Route path='/register' exact Component={registerscreen} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
