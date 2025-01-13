"use client";
import React from "react";
import { renderTextArray, type Props } from "./util";
import { cn } from "~/lib/utils";

export default function ({ children, className }: Props) {
  return (
    <h1
      className={cn(
        `flex -translate-y-4 flex-col items-center justify-center text-balance
         bg-gradient-to-br from-white from-30% to-primary-100/40 bg-clip-text
         py-6 text-center text-4xl font-medium leading-none tracking-tighter text-transparent
         max-md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl
         `,
        className,
      )}
    >
      {renderTextArray(children ?? "")}
    </h1>
  );
}
