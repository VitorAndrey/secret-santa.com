import { DrawerMenu } from "./drawer-menu";

export function Header() {
  return (
    <header className="h-16 border-b shadow-md items-center flex justify-between px-4">
      PresenteMisterioso
      <DrawerMenu />
    </header>
  );
}
