import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Connect from './components/Connect';
import Mainpage from './components/Mainpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>


<BrowserRouter>

    <Routes>
      {/* <Route path="/" element={<Initialpage/>} /> */}
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Connetx" element={<Connect/>}/>
      {/* <Route path="/createReview" element={<Reviewpage/>}/> */}
      <Route path="/Mp"  element={<Mainpage/>}/>
    </Routes>
    </BrowserRouter>

{/*     
    <Register/>
    <Login/>
    <Connect/>
    <Mainpage/> */}
    </>
  );
}

export default App;
