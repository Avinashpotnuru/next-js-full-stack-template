/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import LoginButton from "../components/login";

export default  function Page() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleString());
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold">hello world</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">{date}</p>
      <LoginButton />
    </div>
  );
}


