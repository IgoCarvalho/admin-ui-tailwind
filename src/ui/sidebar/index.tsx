import * as Collapsible from "@radix-ui/react-collapsible";
import { MenuIcon, Search } from "lucide-react";
import { Button } from "../button";
import * as Input from "../input";
import { FooterNavigation } from "./footer-navigation";
import { Logo } from "./logo";
import { MainNavigation } from "./main-navigation";
import { Profile } from "./profile";

export function SideBar() {
  return (
    <Collapsible.Root
      className={`
      flex flex-col gap-6 border-b border-zinc-200 p-4 
      fixed inset-0 z-20 bg-white data-[state=closed]:bottom-auto 
      lg:px-5 lg:py-8 lg:border-r lg:right-auto lg:sticky lg:h-screen
    `}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild>
          <Button variant="icon" className="lg:hidden">
            <MenuIcon className="size-6 text-zinc-500" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="grow min-h-0 flex flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="size-5 text-zinc-500" />
          </Input.Prefix>

          <Input.Control type="search" name="search" placeholder="Search" />
        </Input.Root>

        <MainNavigation />

        <FooterNavigation />

        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
