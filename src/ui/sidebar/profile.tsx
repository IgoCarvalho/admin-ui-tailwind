import { LogOut } from "lucide-react";

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

      <button className="ml-auto p-2 rounded-md hover:bg-zinc-50">
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  );
}
