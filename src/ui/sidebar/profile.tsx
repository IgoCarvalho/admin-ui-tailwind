import { LogOut } from "lucide-react";
import { Button } from "../button";

export function Profile() {
  return (
    <div className="flex items-center gap-3 ">
      <img
        src="https://github.com/igocarvalho.png"
        alt="Igo Carvalho"
        className="size-10 rounded-full"
      />

      <div className="flex flex-col overflow-hidden">
        <span className="text-sm font-semibold text-zinc-700">
          Igo Carvalho
        </span>
        <span className="text-sm text-zinc-500 truncate">@igocarvalho</span>
      </div>

      <Button variant="icon" className="ml-auto">
        <LogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  );
}
