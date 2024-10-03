import React, { useContext } from "react";
import {
  MdOutlineEmail,
  MdOutlinePhoneIphone,
  MdOutlinePinDrop,
} from "react-icons/md";
import { AppContext } from "../context";
import { assets } from "../assets/assets.js";

const Profile = () => {
  const { currentUser } = useContext(AppContext);
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
        <h1 className="text-2xl font-medium">
          {currentUser.firstName} {currentUser.lastName}
        </h1>
        <div className="w-full border-[0.05px] border-gray-300"></div>

        <div className="w-full flex flex-col gap-3 mb-3">
          <p className="uppercase underline">contact information</p>
          <div className="flex justify-between items-center">
            <MdOutlineEmail size={15} />
            <p>{currentUser.email}</p>
          </div>
          <div className="flex justify-between items-center">
            <MdOutlinePhoneIphone size={15} />
            <p className={`${!currentUser.phone && "hidden"}`}>
              {currentUser.phone}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <MdOutlinePinDrop size={15} />
            <p className={`${!currentUser.address && "hidden"}`}>
              {currentUser.address}
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <p className="uppercase underline">basic information</p>
          <div className="flex justify-between">
            <p>Gender:</p>
            <p className={`${!currentUser.gender && "hidden"}`}>
              {currentUser.gender}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Birthday:</p>
            <p className={`${!currentUser.birthMonth && "hidden"}`}>
              {currentUser.birthDay} {currentUser.birthMonth},{" "}
              {currentUser.birthYear}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
