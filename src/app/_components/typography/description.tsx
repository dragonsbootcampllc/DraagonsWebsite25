"use client";
import React from "react";
import { renderTextArray, type Props } from "./util";
import { cn } from "~/lib/utils";

export default function ({ children, className }: Props) {
  return (
    <p
      className={cn(
        `flex translate-y-[-1rem] flex-col items-center justify-center text-balance text-center text-lg tracking-tight text-gray-400 max-md:!leading-[1.5rem] md:text-xl`,
        className,
      )}
    >
      {renderTextArray(children ?? "")}
    </p>
  );
}
