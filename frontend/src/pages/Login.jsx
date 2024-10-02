import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";

const Login = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AppContext);

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [isUserValid, setIsUserValid] = useState(true);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:8000/api/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      body: JSON.stringify(userCredentials),
    });
    const { error, data } = await res.json();
    if (error) {
      setIsUserValid(false);
    } else {
      setIsUserValid(true);
      setCurrentUser({ ...data });
      navigate("/profile");
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center">
      <div
        className="flex flex-col gap-3 items-start 
        m-auto p-8 sm:min-w-96 border rounded-xl
        text-zinc-600 text-sm shadow-lg"
      >
        <h1 className="text-2xl font-semibold">Login</h1>
        <p>Please login to book an appointment</p>

        <form action="" onSubmit={(e) => onSubmitHandler(e)} className="w-full">
          <p>Email</p>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full border border-zinc-300 rounded p-2 mt-1 mb-3"
            onChange={(e) =>
              setUserCredentials({ ...userCredentials, email: e.target.value })
            }
          />

          <p>Password</p>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="w-full border border-zinc-300 rounded p-2 mt-1 mb-4"
            onChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                password: e.target.value,
              })
            }
          />

          {!isUserValid && (
            <p className="mb-3 text-red-600 font-bold">Invalid credentials</p>
          )}

          <button
            type="submit"
            className="w-full bg-primary rounded-md text-white py-2 mb-2 text-base"
          >
            Login
          </button>
        </form>

        <p className="text-sm">
          Don't have an account?{" "}
          <span
            className="text-primary underline cursor-pointer"
            onClick={() => {
              navigate("/signup");
              scrollTo(0, 0);
            }}
          >
            Sign up here
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
