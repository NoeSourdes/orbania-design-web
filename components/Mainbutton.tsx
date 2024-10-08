"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface Mainbutton {
  children: React.ReactNode;
}

export const Mainbutton = (props: Mainbutton) => {
  return (
    <Button size="lg_main">
      <div className="flex items-center gap-3">
        {props.children}
        <div className="h-8 w-8 bg-white flex items-center justify-center">
          <ArrowUpRight size={20} className="text-foreground" />
        </div>
      </div>
    </Button>
  );
};
