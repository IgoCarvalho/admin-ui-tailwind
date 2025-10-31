import { Search } from "lucide-react";
import * as Input from "../input";
import { FooterNavigation } from "./footer-navigation";
import { Logo } from "./logo";
import { MainNavigation } from "./main-navigation";
import { Profile } from "./profile";

export function SideBar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="size-5 text-zinc-500" />
        </Input.Prefix>

        <Input.Control type="search" name="search" placeholder="Search" />
      </Input.Root>

      <MainNavigation />

      <FooterNavigation />

      <Profile />
    </aside>
  );
}
