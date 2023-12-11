"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Bell,
  FolderOpenDot,
  Github,
  LogOutIcon,
  Menu,
  PartyPopperIcon,
  Users2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar } from "./ui/avatar";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

export function DrawerMenu() {
  const { isUserLogged } = useContext(UserContext);

  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-2">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {isUserLogged ? (
          <ScrollArea className="flex-1 pt-12">
            <div className="flex items-center mb-8">
              <div className="flex items-center flex-1 gap-2">
                <Avatar className="bg-red-200 w-8 h-8" />

                <h3 className="truncate">Vitor Andrey</h3>
              </div>

              <Button size="icon" variant="ghost">
                {" "}
                <LogOutIcon className="w-5 h-5" />
              </Button>
            </div>

            <nav className="space-y-8">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold px-4 mb-2">Apresentação</h3>

                <Link href="/">
                  <Button
                    className="w-full justify-start"
                    variant={pathname === "/" ? "secondary" : "ghost"}
                  >
                    <PartyPopperIcon className="w-4 mr-2" /> Boas vindas
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-semibold px-4 mb-2">Descubra</h3>

                <Link href="/newgroup">
                  <Button
                    className="w-full justify-start"
                    variant={pathname === "/newgroup" ? "secondary" : "ghost"}
                  >
                    <Users2 className="w-4 mr-2" /> Criar grupos
                  </Button>
                </Link>

                <Link href="/joingroup">
                  <Button
                    className="w-full justify-start"
                    variant={pathname === "/joingroup" ? "secondary" : "ghost"}
                  >
                    <FolderOpenDot className="w-4 mr-2" /> Entrar em grupos
                  </Button>
                </Link>

                <Link href="/notifications">
                  <Button
                    className="w-full justify-start"
                    variant={
                      pathname === "/notifications" ? "secondary" : "ghost"
                    }
                  >
                    <Bell className="w-4 mr-2" /> Notificações
                  </Button>
                </Link>
              </div>
            </nav>
          </ScrollArea>
        ) : (
          <div className="flex-1 flex-col gap-8 flex items-center justify-center">
            <p className="text-center">
              Se registre na plataforma para começar seus amigos secretos!
            </p>

            <Link href="/register">
              <Button variant="default">Registrar</Button>
            </Link>

            <p className="text-sm">
              Já possui uma conta?
              <Link href="/login">
                <Button variant="link" className="p-2">
                  Entrar!
                </Button>
              </Link>
            </p>
          </div>
        )}

        <SheetFooter>
          <Link
            href="https://github.com/VitorAndrey/network-news-site"
            target="_blank"
          >
            <Button
              variant="outline"
              className="flex items-center gap-1 mx-auto mb-6"
            >
              <Github className="w-4" />
              GitHub
            </Button>
          </Link>

          <h3 className="text-xs text-muted-foreground text-center mb-4">
            Feito com ❤️ por{" "}
            <Link
              href="mailto:vitor.andreylopes@gmail.com"
              className="underline"
            >
              Vitor Andrey
            </Link>
          </h3>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
