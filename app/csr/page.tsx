/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleString());
  }, []);

  return <p>{date}</p>;
}
