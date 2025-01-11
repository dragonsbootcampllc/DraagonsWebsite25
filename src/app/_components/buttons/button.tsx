// Next.js provides a TypeScript-first development experience. [[1],[2]]
import React from "react";
import { type ButtonProps, ButtonVariant } from "~/types/props";
import { ShinyButton } from "../ui";
import Link from "next/link";
import { cn } from "~/lib/utils";

export default function ({
  children,
  variant = ButtonVariant.Primary,
  className,
  type,
  onClick,
  disabled,
  href,
}: ButtonProps) {
  let buttonElement: React.ReactNode;

  switch (variant) {
    case ButtonVariant.Primary:
      buttonElement = (
        <ShinyButton
          type={type}
          disabled={disabled}
          onClick={onClick}
          className={cn(className)}
        >
          {children}
        </ShinyButton>
      );
      break;

    case ButtonVariant.Secondary:
      buttonElement = (
        <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          className={cn(
            "rounded-full px-8 py-4 font-medium transition-all duration-300 hover:bg-white/10 active:scale-95 active:bg-white/20",
            className,
          )}
        >
          {children}
        </button>
      );
      break;
  }

  return <Link href={href ?? ""}>{buttonElement}</Link>;
}
