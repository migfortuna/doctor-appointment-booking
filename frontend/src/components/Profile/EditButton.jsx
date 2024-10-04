import React from "react";
import { MdOutlineEdit } from "react-icons/md";

const EditButton = ({ isEditable, setIsEditable }) => {
  return (
    <>
      <MdOutlineEdit
        size={20}
        className="block sm:hidden"
        onClick={() => setIsEditable(!isEditable)}
      />
      <button
        type="button"
        className="hidden sm:block border border-gray-300 px-7 py-1 rounded-full"
        onClick={() => setIsEditable(!isEditable)}
      >
        Edit
      </button>
    </>
  );
};

export default EditButton;
