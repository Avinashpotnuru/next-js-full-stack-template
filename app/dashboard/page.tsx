import React from "react";
import { auth } from "@/auth";
import LoginButton from "../components/login";
import LogoutButton from "../components/logout";
import { redirect } from "next/navigation";


async function DashBoard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="text-3xl font-bold text-red-500">
      <h1>welcome to dashboard</h1>
      <h1>{session?.user?.name}</h1>
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default DashBoard;
