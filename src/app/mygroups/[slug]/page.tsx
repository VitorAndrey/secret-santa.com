"use client";

import React, { ChangeEvent, FormEvent, useContext, useState } from "react";

import { BadgePlusIcon, BookDashedIcon, UserX2Icon } from "lucide-react";
import Link from "next/link";

import { GroupItem } from "@/components/group-item";
import ParticipantItem from "@/components/participant-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserContext } from "@/contexts/UserContext";
import { User } from "@/models";

type MyGroupsType = {
  params: {
    slug: string;
  };
};

export default function MyGroups({ params }: MyGroupsType) {
  const [participants, setParticipants] = useState<User[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const { user } = useContext(UserContext);

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault();

    if (!user) return window.alert("Voçê precisa estar logado para começar.");

    const newParticipant: User = {
      id: participants.length.toString(),
      email: "",
      name: inputValue,
    };

    setParticipants((prev) => {
      return [newParticipant, ...prev];
    });

    setInputValue("");
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <div className="h-minus-header p-8 flex flex-col">
      <h3 className="self-center text-center text-xl font-semibold">
        {params.slug}
      </h3>

      <form onSubmit={handleOnSubmit} className="flex my-8 gap-2">
        <Input
          type="text"
          className="h-12"
          placeholder="Adicionar participante"
          onChange={handleInputChange}
          value={inputValue}
        />

        <Button type="submit" className="h-12 border border-primary">
          <BadgePlusIcon />
        </Button>
      </form>

      {participants.length === 0 ? (
        <div className="flex-1 flex-col text-zinc-600 flex items-center justify-center">
          <UserX2Icon className="mb-10 text-zinc-300" size={40} />
          <p>Não há participantes no momento!</p>
          <p>Convide seus amigos para começar</p>
        </div>
      ) : (
        <>
          <ScrollArea className="flex-1">
            {participants.map((paticipant) => (
              <ParticipantItem key={paticipant.id} participant={paticipant} />
            ))}
          </ScrollArea>

          <Button
            disabled={participants.length < 2 || participants.length % 2 !== 0}
            className="h-12 disabled:bg-zinc-300 disabled:text-zinc-700"
          >
            Sortear
          </Button>
        </>
      )}
    </div>
  );
}
