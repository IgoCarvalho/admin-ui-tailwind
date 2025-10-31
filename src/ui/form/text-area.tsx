import { ComponentProps } from "react";

export function TextArea(props: ComponentProps<"textarea">) {
  return (
    <textarea
      className="min-h-30 w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-zinc-300 focus:ring-4 focus:ring-violet-100"
      {...props}
    />
  );
}
