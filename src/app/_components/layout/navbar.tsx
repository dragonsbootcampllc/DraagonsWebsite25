"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { Button } from "../buttons";
import { usePathname } from "next/navigation";
import { ButtonVariant } from "~/types/props";
import { AnimatedShinyText } from "../ui";

const Logo = () => {
  return (
    <h1 className="inline-flex h-full items-center justify-center text-balance bg-gradient-to-br from-primary-600/70 from-30% to-primary-500/40 bg-clip-text text-center text-3xl font-medium leading-none tracking-tighter text-transparent">
      Dragons
    </h1>
  );
};

type Link = {
  label: string;
  href: string;
};

type NestedLink = {
  label: string;
  isNested: boolean;
  href?: string;
  relativeLinks?: Link[];
  active?: boolean;
};

const renderLinks = (links: NestedLink[] | Link[]) => {
  return links.map((link, index) => {
    return (link as NestedLink).relativeLinks ? (
      <div className="flex flex-col" key={index}>
        {renderLinks((link as NestedLink).relativeLinks!)}
      </div>
    ) : (
      <div
        key={index}
        className="group relative flex h-full items-center justify-center"
      >
        <Link
          href={link.href!}
          className="inline-flex h-full items-center justify-center px-3 font-medium transition-all duration-300 active:scale-95"
        >
          {link.label}
        </Link>
        <span
          className={cn(
            "absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white transition-all",
            (link as NestedLink).active
              ? "w-full group-hover:w-4/5"
              : "w-0 group-hover:w-1",
          )}
        />
      </div>
    );
  });
};

export default function () {
  const currentPath = usePathname();
  const [counter, setCounter] = useState(0);
  const [links, setLinks] = useState<NestedLink[]>([
    {
      label: "Home",
      href: "/",
      isNested: false,
      active: true,
    },
    {
      label: "About",
      href: "/about",
      isNested: false,
    },
    {
      label: "Contact",
      href: "/contact",
      isNested: false,
    },
  ]);

  const setCurrentActiveLink = () => {
    setLinks(
      links.map((link) => {
        console.log(counter);
        setCounter(counter + 1);

        link.active =
          link.href?.includes(currentPath + "/") ?? currentPath === link.href;
        return link;
      }),
    );
  };

  useEffect(() => {
    setCurrentActiveLink();
  }, [currentPath]);

  return (
    <div className="fixed left-0 top-0 z-[99999] h-16 w-full border-b-2 border-primary-800/80 bg-primary-950/20 backdrop-blur-lg">
      <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-3 items-center justify-items-start">
        <div className="flex gap-4">
          <Logo />
          <div
            className={cn(
              "group rounded-full border border-white/5 bg-primary-800 text-base font-semibold text-white transition-all ease-in hover:cursor-pointer hover:bg-primary-750",
            )}
          >
            <AnimatedShinyText className="inline-flex h-full w-full items-center justify-center px-4 transition ease-out group-hover:text-primary-150 group-hover:duration-300">
              <span>Alpha</span>
            </AnimatedShinyText>
          </div>
        </div>
        <div className="flex h-full items-center gap-6 justify-self-center">
          {renderLinks(links)}
        </div>

        <div className="flex h-full items-center gap-3 justify-self-end">
          <Button className="px-4 py-2">book a demo</Button>
          <Button variant={ButtonVariant.Secondary} className="px-4 py-2">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
