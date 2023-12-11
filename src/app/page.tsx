import Image from "next/image";

import SecretSanta from "../../public/secret-santa.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-theme-bg min-h-screen">
      <div className="wrapper flex flex-col h-[80vh]">
        <div className="flex-1 flex items-center justify-center">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-auto"
            alt="Secret Santa"
            src={SecretSanta}
          />
        </div>

        <h3 className="text-muted-foreground text-center max-w-sm my-8 text-zinc-600">
          Celebre a magia da troca de presentes!
          <br />
          Organize um Amigo Secreto de forma eficiênte!
        </h3>

        <Button className="w-max self-center px-10 py-6 rounded-full">
          Entre na plataforma!
        </Button>
      </div>
    </main>
  );
}
