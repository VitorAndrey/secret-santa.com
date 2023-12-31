"use client";

import { ChangeEvent, FormEvent, useContext, useState } from "react";

import { BadgePlusIcon, BookDashedIcon } from "lucide-react";
import Link from "next/link";

import { GroupItem } from "@/components/group-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserContext } from "@/contexts/UserContext";
import { Group } from "@/models";

export default function NewGroup() {
  const [myGroups, setMygroups] = useState<Group[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const { user } = useContext(UserContext);

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault();

    if (!user) return window.alert("Voçê precisa estar logado para começar.");

    const newGroup: Group = {
      id: myGroups.length.toString(),
      authorId: user.id,
      integrants: [],
      name: inputValue,
    };

    setMygroups((prev) => {
      return [newGroup, ...prev];
    });

    setInputValue("");
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleRemoveItem(id: string) {
    console.log(id);
  }

  return (
    <div className="h-minus-header p-8 flex flex-col">
      <h3 className="self-center text-center text-xl font-semibold">
        Meus Grupos
      </h3>

      <form onSubmit={handleOnSubmit} className="flex my-8 gap-2">
        <Input
          type="text"
          className="h-12"
          placeholder="Criar novo grupo"
          onChange={handleInputChange}
          value={inputValue}
        />

        <Button type="submit" className="h-12 border border-primary">
          <BadgePlusIcon />
        </Button>
      </form>

      {myGroups.length === 0 ? (
        <div className="flex-1 flex-col text-zinc-600 flex items-center justify-center">
          <BookDashedIcon className="mb-10 text-zinc-300" size={40} />
          <p>Nada aqui por enquanto!</p>
          <p>Crie grupos para começar!</p>
        </div>
      ) : (
        <ScrollArea className="flex-1">
          {myGroups.map((group: Group) => (
            <Link key={group.id} href={`/mygroups/${group.name}`}>
              <GroupItem group={group} onRemove={handleRemoveItem} />
            </Link>
          ))}
        </ScrollArea>
      )}
    </div>
  );
}
