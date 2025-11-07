"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./button";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
      <Button
        variant="icon"
        className=" bg-white hover:bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700  text-violet-500 "
        onClick={() => setTheme("light")}
      >
        <SunIcon className="size-4" />
      </Button>
      <Button
        variant="icon"
        className="dark:bg-zinc-700 dark:hover:bg-zinc-700 hover:bg-zinc-50 dark:text-violet-300 "
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="size-4" />
      </Button>
    </div>
  );
}
