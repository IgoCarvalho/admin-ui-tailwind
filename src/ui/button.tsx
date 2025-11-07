"use client";

import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "rounded-lg px-4 py-2 text-sm font-semibold shadow-sm outline-none focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-violet-500 dark:focus-visible:ring-violet-300/50 active:opacity-80",

  variants: {
    variant: {
      primary:
        "bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600",
      outline:
        "border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:text-zinc-400 dark:border-zinc-700 dark:hover:bg-zinc-800",
      icon: "px-2 rounded-md hover:bg-zinc-50 text-zinc-500 dark:hover:bg-zinc-800 dark:text-zinc-400 shadow-none",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Button({
  variant,
  className,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof button>) {
  return <button {...props} className={button({ variant, className })} />;
}
