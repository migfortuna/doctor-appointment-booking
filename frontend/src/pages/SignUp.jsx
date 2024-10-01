import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("SIGN UP USER DATA", userData);
  };

  return (
    <section className="flex flex-col items-center">
      <div className="max-w-[360px] p-10 border border-gray-300 rounded-lg shadow-lg">
        <h1>Sign Up</h1>
        <p>Please sign up to book an appointment</p>

        <form action="" onSubmit={(e) => onSubmitHandler(e)}>
          <p>First Name</p>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="w-full border border-gray-200 rounded-md py-1"
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
          />

          <p>Middle Name</p>
          <input
            type="text"
            name="middleName"
            id="middleName"
            className="w-full border border-gray-200 rounded-md py-1"
            onChange={(e) =>
              setUserData({ ...userData, middleName: e.target.value })
            }
          />

          <p>Last Name</p>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-full border border-gray-200 rounded-md py-1"
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
          />

          <p>Email</p>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-gray-200 rounded-md py-1"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <p>Password</p>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border border-gray-200 rounded-md py-1"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-primary rounded-md text-white py-1"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm">
          Already have an account?{" "}
          <span
            className="text-primary underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login here
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
