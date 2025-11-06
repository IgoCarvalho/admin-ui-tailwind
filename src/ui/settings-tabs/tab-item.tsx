import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "motion/react";

interface TabItemProps {
  name: string;
  title: string;
  activeTab?: string;
}

export function TabItem({ title, name, activeTab }: TabItemProps) {
  const isSelected = activeTab === name;

  return (
    <Tabs.Trigger
      value={name}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 outline-none"
    >
      <span className="rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className=" h-0.5 absolute left-0 right-0 -bottom-px bg-violet-700"
        ></motion.div>
      )}
    </Tabs.Trigger>
  );
}
