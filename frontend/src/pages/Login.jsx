import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("LOGIN USER DATA", userData);
  };

  return (
    <section className="flex flex-col items-center">
      <div
        className="flex flex-col gap-3 items-start m-auto p-8
        min-w-[340px] sm:min-w-96 border rounded-xl
        text-zinc-600 text-sm shadow-lg"
        // className="max-w-[360px] p-10 border border-gray-300 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-semibold">Login</h1>
        <p>Please login to book an appointment</p>

        <form action="" onSubmit={(e) => onSubmitHandler(e)} className="w-full">
          <p>Email</p>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-zinc-300 rounded p-2 mt-1 mb-3"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <p>Password</p>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border border-zinc-300 rounded p-2 mt-1 mb-3"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-primary rounded-md text-white py-2 text-base"
          >
            Login
          </button>
        </form>

        <p className="text-sm">
          Don't have an account?{" "}
          <span
            className="text-primary underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up here
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
