"use client";
import React, { forwardRef, useRef } from "react";
import { cn } from "~/lib/utils";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { AnimatedBeam } from "../ui";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative my-20 flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <Circle ref={div1Ref}>
              <Icons.googleDrive />
            </Circle>
            <p>lol</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Circle ref={div5Ref}>
              <Icons.googleDocs />
            </Circle>
            <p>lol1</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <Circle ref={div2Ref}>
              <Icons.nodejs />
            </Circle>
            <p>lll</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Circle ref={div4Ref} className="size-16">
              <Icons.openai />
            </Circle>
            <p>llllll</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Circle ref={div6Ref}>
              <Icons.zapier />
            </Circle>
            <p>llllll</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <Circle ref={div3Ref}>
              <Icons.whatsapp />
            </Circle>
            <p>nageh</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Circle ref={div7Ref}>
              <Icons.messenger />
            </Circle>
            <p>nageh</p>
          </div>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  nodejs: () => <FaReact size={24} color="#61dafb" />,
  openai: () => <FaNodeJs size={24} color="#3c873a" />,
  googleDrive: () => <FaPython size={24} color="#306998" />,
  whatsapp: () => <FaJava size={24} color="#007396" />,
  googleDocs: () => <FaHtml5 size={24} color="#e34f26" />,
  zapier: () => <FaCss3Alt size={24} color="#1572b6" />,
  messenger: () => <FaReact size={24} color="#0084ff" />,
};
