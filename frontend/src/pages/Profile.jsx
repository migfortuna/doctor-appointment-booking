import React, { useContext, useState } from "react";
import {
  MdOutlineEmail,
  MdOutlinePhoneIphone,
  MdOutlinePinDrop,
  MdOutlineErrorOutline,
} from "react-icons/md";
import { AppContext } from "../context";
import { assets } from "../assets/assets.js";
import FullName from "../components/Profile/FullName.jsx";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState({
    email: currentUser?.email,
    newEmail: currentUser?.email,
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    phone: currentUser?.phone,
    address: currentUser?.address,
    gender: currentUser?.gender,
    birthMonth: currentUser?.birthMonth,
    birthDay: currentUser?.birthDay,
    birthYear: currentUser?.birthYear,
  });
  const [errorResponse, setErrorResponse] = useState();

  const updateProfile = async () => {
    const res = await fetch("http://localhost:8000/api/account", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      body: JSON.stringify(userData),
    });
    const { error, data } = await res.json();
    if (error) {
      setErrorResponse(error);
    } else {
      setErrorResponse(null);
      setIsEditable(false);
      setCurrentUser({ ...data });
      setUserData({
        email: data.email,
        newEmail: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        address: data.address,
        gender: data.gender,
        birthMonth: data.birthMonth,
        birthDay: data.birthDay,
        birthYear: data.birthYear,
      });
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center">
      <div
        className="flex flex-col items-start gap-4 
        m-auto p-8 sm:min-w-96 border rounded-xl
        text-zinc-600 text-sm shadow-lg"
      >
        <img
          src={assets.profile_pic}
          alt="profile-pic"
          className="rounded-md m-auto"
        />
        <div className="w-full flex flex-wrap justify-between items-center gap-3">
          <FullName
            isEditable={isEditable}
            userData={userData}
            setUserData={setUserData}
          />
        </div>

        <div className="w-full border-[0.05px] border-gray-300"></div>

        <div className="w-full flex flex-col gap-3 mb-3">
          <p className="uppercase underline">contact information</p>
          <div className="flex justify-between items-center">
            <MdOutlineEmail size={15} />
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={userData.email}
              disabled={!isEditable}
              className={`bg-white text-end ${
                isEditable && "border border-gray-300 rounded-md px-2"
              }`}
              onChange={(e) =>
                setUserData({ ...userData, newEmail: e.target.value })
              }
            />
          </div>
          <div className="flex justify-between items-center">
            <MdOutlinePhoneIphone size={15} />
            <input
              type="text"
              id="phone"
              name="phone"
              defaultValue={userData.phone}
              disabled={!isEditable}
              className={`bg-white text-end ${
                isEditable && "border border-gray-300 rounded-md px-2"
              }`}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <MdOutlinePinDrop size={15} />
            <input
              type="text"
              id="address"
              name="address"
              defaultValue={userData.address}
              disabled={!isEditable}
              className={`bg-white text-end ${
                isEditable && "border border-gray-300 rounded-md px-2"
              }`}
              onChange={(e) =>
                setUserData({ ...userData, address: e.target.value })
              }
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <p className="uppercase underline">basic information</p>
          <div className="flex justify-between items-center">
            <p>Gender:</p>
            {isEditable ? (
              <select
                defaultValue={userData.gender}
                className="border border-gray-300 rounded-md py-1 px-1"
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <p>Birthday:</p>
            <p className={`${!userData.birthMonth && "hidden"}`}>
              {userData.birthDay} {userData.birthMonth}, {userData.birthYear}
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-end">
          <MdOutlineErrorOutline
            size={30}
            color="red"
            className={`${!errorResponse && "hidden"}`}
          />
          {isEditable ? (
            <button
              className="bg-white border border-gray-300 px-7 py-2 rounded-md
              hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              onClick={() => updateProfile()}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-white border border-gray-300 px-7 py-2 rounded-md
              hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              onClick={() => setIsEditable(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
