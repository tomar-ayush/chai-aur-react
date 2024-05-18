import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="flex justify-center bg-gray-600 text-wrap p-4 m-5 mx-80 text-white text-3xl">
      User: {userid}
    </div>
  );
}

export default User;
