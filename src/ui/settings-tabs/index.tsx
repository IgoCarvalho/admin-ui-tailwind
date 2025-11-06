"use client";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { TabItem } from "./tab-item";

export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <ScrollArea.Root className="w-full" type="scroll">
      <ScrollArea.Viewport>
        <Tabs.Root defaultValue="tab1" onValueChange={setActiveTab}>
          <Tabs.List className="mt-6 flex items-center gap-4 w-full border-b border-zinc-200">
            <TabItem activeTab={activeTab} name="tab1" title="My details" />
            <TabItem activeTab={activeTab} name="tab2" title="Profile" />
            <TabItem activeTab={activeTab} name="tab3" title="Password" />
            <TabItem activeTab={activeTab} name="tab4" title="Team" />
            <TabItem activeTab={activeTab} name="tab5" title="Plan" />
            <TabItem activeTab={activeTab} name="tab6" title="Billing" />
            <TabItem activeTab={activeTab} name="tab7" title="Email" />
            <TabItem activeTab={activeTab} name="tab8" title="Notifications" />
            <TabItem activeTab={activeTab} name="tab9" title="Integrations" />
            <TabItem activeTab={activeTab} name="tab0" title="API" />
          </Tabs.List>
        </Tabs.Root>
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        orientation="horizontal"
        className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
