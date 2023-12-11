import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Welcome() {
  return (
    <div className="wrapper">
      <section className="text-center h-[calc(100vh-64px)] flex items-center justify-center bg-green-200">
        <p>
          Bem vindo ao amigo secreto!!! Escolha uma de nossas funcionalidades.
        </p>
      </section>

      <section className="h-screen flex items-center justify-center bg-red-200">
        <Link href="/newgroup">
          <Button variant="secondary" className="w-full justify-start">
            Criar grupo
          </Button>
        </Link>
      </section>

      <section className="h-screen flex items-center justify-center bg-orange-200">
        <Link href="/joingroup">
          <Button variant="secondary" className="w-full justify-start">
            Entrar grupo
          </Button>
        </Link>
      </section>

      <section className="h-screen flex items-center justify-center bg-blue-200">
        <Link href="/notifications">
          <Button variant="secondary" className="w-full justify-start">
            Notificações
          </Button>
        </Link>
      </section>
    </div>
  );
}
