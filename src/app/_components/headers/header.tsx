import React from "react";
import { AnimatedShinyText } from "../ui";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { cn } from "~/lib/utils";
import { Button } from "../buttons";
import { type ButtonProps, ButtonVariant } from "~/types/props";
import { Description, Title } from "../typography";

type HeaderProps = {
  subtitle?: string;
  title: string | string[];
  description?: string | string[];
  primaryButton?: Omit<ButtonProps, "variant">;
  secondaryButton?: Omit<ButtonProps, "variant">;
  children?: React.ReactNode;
  wrapperclassName?: string;
};

export default function ({
  subtitle,
  title,
  description,
  primaryButton,
  secondaryButton,
  children,
  wrapperclassName,
}: HeaderProps) {
  return (
    <div className="box-border flex w-full flex-col items-center px-6 py-20 md:p-20">
      <div className="flex max-w-7xl flex-col items-center justify-start gap-6">
        {/* Sub Title */}
        {subtitle && (
          <div
            className={cn(
              "group rounded-full border border-white/5 bg-primary-850 text-base font-semibold text-white transition-all ease-in hover:cursor-pointer hover:bg-primary-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out group-hover:text-primary-150 group-hover:duration-300">
              <span>{subtitle}</span>
              <HiMiniArrowLongRight className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        )}

        {/* Title */}
        <Title>{title}</Title>

        {/* Description */}
        {description && <Description>{description}</Description>}

        {/* CTA */}
        {(primaryButton ?? secondaryButton) && (
          <div className="flex w-full justify-center gap-4 max-[400px]:flex-col">
            {primaryButton && (
              <Button
                {...primaryButton}
                className={cn(
                  "px-6 max-[400px]:w-full",
                  primaryButton.className,
                )}
              />
            )}
            {secondaryButton && (
              <Button
                {...secondaryButton}
                className={cn(
                  "px-2 max-[400px]:w-full",
                  secondaryButton.className,
                )}
                variant={ButtonVariant.Secondary}
              />
            )}
          </div>
        )}
      </div>

      {/* Children */}
      {children && (
        <div
          className={cn(
            "relative flex w-full max-w-7xl flex-col items-center justify-center pt-40",
            wrapperclassName,
          )}
        >
          <div className="z-10 h-full w-full">{children}</div>
          <div className="absolute left-1/2 top-1/2 z-0 h-full w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-t from-transparent from-10% to-primary-650/50 blur-3xl"></div>
        </div>
      )}
    </div>
  );
}
