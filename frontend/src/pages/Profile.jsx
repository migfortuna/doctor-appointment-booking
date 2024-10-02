import React, { useContext } from "react";
import { AppContext } from "../context";

const Profile = () => {
  const { currentUser } = useContext(AppContext);
  return <div>Hi {currentUser.firstName}!</div>;
};

export default Profile;
