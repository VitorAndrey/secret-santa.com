"use client";

import { useContext } from "react";

import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import { UserContext } from "@/contexts/UserContext";

export default function LoginButton() {
  const { handleUpdateUser } = useContext(UserContext);
  const navigation = useRouter();

  function handleSimulateLogin() {
    handleUpdateUser({
      id: "1",
      name: "jhon",
      email: "jhon@gmai.com",
    });

    navigation.push("welcome");
  }

  return <Button onClick={handleSimulateLogin}>Simular autenticação</Button>;
}
