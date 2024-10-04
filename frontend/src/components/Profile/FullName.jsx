import React from "react";

const FullName = ({ userData, setUserData, isEditable }) => {
  return (
    <>
      {isEditable ? (
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            defaultValue={userData.firstName}
            disabled={!isEditable}
            className={`w-full bg-white text-xl md:text-2xl ${
              isEditable && "border border-gray-300 rounded-md px-2"
            }`}
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            defaultValue={userData.lastName}
            disabled={!isEditable}
            className={`w-full bg-white text-xl md:text-2xl ${
              isEditable && "border border-gray-300 rounded-md px-2"
            }`}
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
          />
        </div>
      ) : (
        <h1 className="w-full text-center text-xl md:text-2xl font-medium">
          {userData.firstName} {userData.lastName}
        </h1>
      )}
    </>
  );
};

export default FullName;
