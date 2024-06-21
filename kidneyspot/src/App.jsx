import AddUser from "./components/AddUser";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Login" id="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adduser" element={<AddUser />} />
        {/* <Route path="/home" element ={<Home/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
