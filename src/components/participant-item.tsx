import { User } from "@/models";

type ParticipantItemType = {
  participant: User;
};

export default function ParticipantItem({ participant }: ParticipantItemType) {
  return (
    <div className="my-2 border border-zinc-300 bg-zinc-100 shadow-sm h-12 items-center flex px-4 rounded-xl">
      {participant.name}
    </div>
  );
}
