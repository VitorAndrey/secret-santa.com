import Image from "next/image";

import SecretSanta from "../../public/secret-santa.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-theme-bg h-[calc(100vh-64px)]">
      <div className="wrapper flex flex-col items-center justify-center h-[80vh]">
        <div className="max-w-lg flex items-center justify-center">
          <Image
            sizes="100vw"
            priority
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

        <Link href="/register">
          <Button className="w-max self-center px-10 py-6 rounded-full">
            Entre na plataforma!
          </Button>
        </Link>
      </div>
    </main>
  );
}
