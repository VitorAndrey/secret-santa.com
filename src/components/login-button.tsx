"use client";

import { UserContext } from "@/contexts/UserContext";
import React, { useContext } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const { handleUpdateUser } = useContext(UserContext);
  const navigation = useRouter();

  function handleSimulateLogin() {
    handleUpdateUser({
      name: "jhon",
      email: "jhon@gmai.com",
    });

    navigation.push("welcome");
  }

  return <Button onClick={handleSimulateLogin}>Simular autenticação</Button>;
}
