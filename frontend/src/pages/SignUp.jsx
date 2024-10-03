import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";

const SignUp = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState();
  const { setCurrentUser } = useContext(AppContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:8000/api/account/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      body: JSON.stringify(userData),
    });
    const { error, data } = await res.json();
    if (data) {
      // setCurrentUser({ ...data });
      navigate("/login");
    } else {
      setErrorMsg(error);
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center">
      <div
        className="flex flex-col gap-3 items-start 
        m-auto p-8 sm:min-w-96 border rounded-xl
        text-zinc-600 text-sm shadow-lg"
      >
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        <p>Please sign up to book an appointment</p>

        <form action="" onSubmit={(e) => onSubmitHandler(e)} className="w-full">
          <p>First Name</p>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            className="w-full border border-zinc-300 rounded p-2 mt-1 mb-3"
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
          />

          <p>Middle Name</p>
          <input
            type="text"
            name="middleName"
            id="middleName"
            className="w-full border border-zinc-300 rounded p-2 mt-1 mb-3"
            onChange={(e) =>
              setUserData({ ...userData, middleName: e.target.value })
            }
          />

          <p>Last Name</p>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            className="w-full border border-zinc-300 rounded p-2 mt-1 mb-3"
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
          />

          <p>Email</p>
          <input
            type="email"
            name="email"
            id="email"
            required
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
            required
            className="w-full border border-zinc-300 rounded p-2 mt-1 mb-4"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          {!!errorMsg && (
            <p className="mb-3 text-red-600 font-bold">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="w-full bg-primary rounded-md text-white py-2 mb-2 text-base"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm">
          Already have an account?{" "}
          <span
            className="text-primary underline cursor-pointer"
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
          >
            Login here
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
