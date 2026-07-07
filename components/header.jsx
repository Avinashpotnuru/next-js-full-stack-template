import React from "react";
import { SidebarTrigger } from "./ui/sidebar";

function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
     <SidebarTrigger/>
    </header>
  );
}

export default Header;
