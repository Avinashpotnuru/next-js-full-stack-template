import React from "react";

function DashBoard() {
  return (
    <div className="text-3xl font-bold text-red-500">
      <h1>welcome to dashboard</h1>
      <h1>you are logged in</h1>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
}

export default DashBoard;
