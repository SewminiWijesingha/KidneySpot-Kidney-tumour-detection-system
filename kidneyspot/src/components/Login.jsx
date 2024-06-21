import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import AdminDashboard from "./AdminDashboard";
import AddUser from "./AddUser";
import loginImage from "../assets/login-bg.jpg"; //import image -1
import Navbar from "./Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/login", { email: username, password })
      .then((result) => {
        if (result.data === "Success") {
          alert("Login successful!");
          navigate("/home");
        } else {
          alert("Incorrect password! Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />

      <section className="w-full h-screen mx-auto  flex justify-center items-center bg-black text-white relative">
        <div className="w-[40%] px-6 py-6 flex flex-col gap-5 shadow-lg rounded-lg backdrop-blur-2xl border border-white/30">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-3xl capitalize font-semibold">Login</h2>
            <div className="flex flex-col">
              <label htmlFor="exampleInputUsername">Username</label>
              <input
                className="border border-black px-2 py-1 rounded-md"
                type="username"
                placeholder="Enter Username"
                id="exampleInputUsername1"
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                className="border border-black px-2 py-1 rounded-md"
                type="password"
                placeholder="Enter Password"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2  bg-green-600 rounded-md cursor-pointer"
            >
              Login
            </button>
          </form>
          <div className="flex flex-col items-center">
            <p>Don&apos;t have an account? </p>
            <Link to="/register" className="text-green-700 cursor-pointer">
              Register
            </Link>
          </div>
        </div>
        <div className="pink__gradient w-[30%] h-[30%] absolute -z-0 left-[40%]" />
      </section>

      {/* <AdminDashboard /> */}

      <Footer />
    </>
  );
};

export default Login;
