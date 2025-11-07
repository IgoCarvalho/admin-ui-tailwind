import { ComponentProps } from "react";

export function TextArea(props: ComponentProps<"textarea">) {
  return (
    <textarea
      className="min-h-30 w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-zinc-300 focus:ring-4 focus:ring-violet-100 dark:placeholder-zinc-400 dark:text-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:focus:border-violet-500 dark:focus:ring-violet-500/20"
      {...props}
    />
  );
}
