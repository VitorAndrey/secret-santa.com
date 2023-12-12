import React from "react";

import { BadgeXIcon, DeleteIcon, MinusIcon, PenLineIcon } from "lucide-react";

import { Button } from "./ui/button";
import { Group } from "@/models";

type GroupItemType = {
  group: Group;
  onRemove: (id: string) => void;
};

export function GroupItem({ group, onRemove }: GroupItemType) {
  function handleRemoveItem() {
    onRemove(group.id);
  }

  return (
    <div className="my-2 border border-zinc-300 bg-zinc-100 shadow-sm h-12 items-center flex px-4 rounded-xl">
      <p className="flex-1 truncate pr-4">{group.name}</p>

      <PenLineIcon size={18} className="text-zinc-600" />
    </div>
  );
}
