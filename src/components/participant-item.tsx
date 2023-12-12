import { User } from "@/models";

type ParticipantItemType = {
  participant: User;
};

export default function ParticipantItem({ participant }: ParticipantItemType) {
  return <div>{participant.name}</div>;
}
