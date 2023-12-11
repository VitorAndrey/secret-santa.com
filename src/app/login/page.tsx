import LoginButton from "@/components/login-button";
import React from "react";

export default function Login() {
  return (
    <div className="h-screen w-full flex items-center justify-center gap-8 flex-col">
      <p>Login</p>
      <LoginButton />
    </div>
  );
}
