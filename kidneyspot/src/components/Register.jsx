import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Register = () => {
  const [name, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          navigate("/login");
        } else {
          alert("Registered successfully! Please Login to proceed.");
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />

      <section className="bg-black text-white w-full h-screen flex flex-col justify-center items-center">
        <div className="border border-white/40 px-10 py-6 shadow-lg flex flex-col gap-4 rounded-lg">
          <h2 className="text-3xl font-semibold">SignUp</h2>
          <form onSubmit={handleSubmit} className="flex-col flex gap-2">
            {/*Usename */}
            <div className="flex flex-col">
              <label htmlFor="exampleInputUsername">Username</label>
              <input
                className="border px-2 py-1 rounded-md"
                type="username"
                placeholder="Enter Username"
                id="exampleInputUsername1"
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                className="border px-2 py-1 rounded-md"
                type="email"
                placeholder="Email"
                id="exampleInputUsername1"
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                className="border px-2 py-1 rounded-md"
                type="password"
                placeholder="Enter Password"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="exampleInputPassword1">
                <strong>Confirm Password</strong>
              </label>
              <input
                className="border px-2 py-1 rounded-md"
                type="password"
                placeholder="Enter Password"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 mt-5 py-1 rounded-md"
            >
              Login
            </button>
          </form>
          <div className="flex gap-2">
            <p>Already have an account ?</p>
            <Link to="/login" className="text-green-700">
              Login
            </Link>
          </div>
        </div>
        <div className="pink__gradient w-[30%] h-[30%] absolute -z-0 left-[40%]" />
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Register;
