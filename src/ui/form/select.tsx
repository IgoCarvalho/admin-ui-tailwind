"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "tailwind-variants/lite";

interface SelectProps {
  children: React.ReactNode;
  placeholder?: string;
}

export function Root({
  children,
  placeholder,
  ...props
}: SelectProps & SelectPrimitive.SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [animateFadeout, setAnimateFadeout] = useState(false);

  function handleOpenChange(open: boolean) {
    if (!open) {
      setAnimateFadeout(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 200);

      return;
    }

    setAnimateFadeout(false);
    setIsOpen(open);
  }

  return (
    <SelectPrimitive.Root
      {...props}
      open={isOpen}
      onOpenChange={handleOpenChange}
    >
      <SelectPrimitive.Trigger
        className={twMerge(
          "flex items-center justify-between h-11 w-full gap-2 rounded-lg border px-3 py-2 shadow-sm outline-none",
          "border-zinc-300 data-[placeholder]:text-zinc-600 focus:border-zinc-300 focus:ring-4 focus:ring-violet-100",
          "dark:data-[placeholder]:text-zinc-400 dark:text-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:focus:border-violet-500 dark:focus:ring-violet-500/20"
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />

        <SelectPrimitive.Icon>
          <ChevronDownIcon className="size-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={6}
          className={cn(
            "w-(--radix-select-trigger-width) z-10 rounded-lg border border-zinc-200 bg-white overflow-hidden shadow-sm animate-fade-in dark:bg-zinc-800 dark:border-zinc-700",
            {
              "animate-fade-out": animateFadeout,
            }
          )}
        >
          <SelectPrimitive.ScrollUpButton />

          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton />
          <SelectPrimitive.Arrow />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

export function Item({ children, ...props }: SelectPrimitive.SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none text-black data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700 dark:text-zinc-100"
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="size-4 text-violet-500 dark:text-violet-300" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}
