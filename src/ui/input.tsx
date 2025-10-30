import { Search } from "lucide-react";
import { ComponentProps } from "react";

function Root(props: ComponentProps<"div">) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm mx-1"
      {...props}
    />
  );
}

function Prefix(props: ComponentProps<"div">) {
  return <div {...props} />;
}

export function Control(props: ComponentProps<"input">) {
  return (
    <input
      className="flex-1 min-w-0 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 "
      {...props}
    />
  );
}

export const Input = {
  Root,
  Prefix,
  Control,
};
