"use client";
import tabs from "@/utils/tabCards";
import { Tabs } from "../ui/tabs";
const Tab = () => {
  return (
    <div className="relative mx-auto flex h-[42rem] w-full flex-col items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Tab;
