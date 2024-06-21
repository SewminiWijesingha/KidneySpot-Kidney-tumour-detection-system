import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import loginImage from "../assets/login-bg.jpg";
import Navbar from "./Navbar";

function AddUser() {
  const [username, setuserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setconfirmPassword] = useState();
  const [userlevel, setuserlevel] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          console.log("Login Success");
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
      <section className="px-5 py-10 h-screen w-full flex flex-col justify-center items-center">
        <div className="border border-white p-5 w-[40%] rounded-lg">
          <h2 className="text-3xl ">Add User</h2>
          <form onSubmit={handleSubmit} className="py-2 flex flex-col gap-2">
            <div className="flex flex-col ">
              <label htmlFor="exampleInputEmail1">
                {/*methna thibbe email id eka klin*/}
                Username
              </label>
              <input
                className="px-2 py-1 rounded-md"
                type="username"
                placeholder="Enter Username"
                id="exampleInputUsername1"
                onChange={(event) => setuserName(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                className="px-2 py-1 rounded-md"
                type="email"
                placeholder="Enter Email"
                id="exampleInputEmail1"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                className="px-2 py-1 rounded-md"
                type="password"
                placeholder="Enter Password"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                className="px-2 py-1 rounded-md"
                type="password"
                placeholder="Enter Password"
                id="exampleInputPassword1"
                onChange={(event) => setconfirmPassword(event.target.value)}
                required
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="addUserLevel">User Level</label>
              <input
                className="px-2 py-1 rounded-md"
                type="userlevel"
                placeholder="Enter User Level"
                id="exampleInputuserlevel"
                onChange={(event) => setuserlevel(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <button
                className="w-full bg-green-600 py-1 rounded-md"
                type="submit"
              >
                Add User
              </button>

              <button
                className="w-full bg-yellow-300 py-1 rounded-md"
                type="submit"
              >
                Reset
              </button>

              <button
                className="w-full bg-gray-500 py-1 rounded-md"
                type="submit"
              >
                Back
              </button>
            </div>
          </form>

          {/*<Link to="/register" className="btn btn-secondary">
            Register
        </Link>*/}
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default AddUser;
