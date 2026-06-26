"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => {
        console.log("Clicked");
        signIn("google");
      }}
    >
      Sign In with Google
    </button>
  );
}
