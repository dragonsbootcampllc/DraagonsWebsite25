import React from "react";
import { Description, Title } from "../typography";
import { Sparkles } from "../ui";
import { ValueCard2 } from "../cards";

export default function () {
  const valuePropositionsData = [
    {
      label: "Explore Leadership",
      title: "On-Demand Technical Leadership",
      description:
        "Be a real software engineer and master problem-solving, data structures, algorithms, and more to become a proficient software engineer.",
      overlayStyle:
        "backdrop-blur-md bg-opacity-10 bg-[radial-gradient(136.22%_75.8%_at_50%_27.57%,__theme(colors.primary.900)_0%,_theme(colors.primary.850)_61.62%,_theme(colors.primary.600)_79.17%,_theme(colors.primary.700)_100%)]",
      image: "/images/500x600.svg",
      link: "#",
    },
    {
      label: "View  Options",
      title: "Scalable Development Teams",
      description:
        " Our six-month, full-time program is designed to help you master the skills needed to launch a career in software engineering.",
      overlayStyle:
        "backdrop-blur-md bg-opacity-10 bg-[radial-gradient(329.95%_173.05%_at_50.04%_100%,_theme(colors.primary.800)_0%,_theme(colors.primary.700)_0.52%,_theme(colors.primary.600)_18.71%,_theme(colors.primary.850)_28.65%,_theme(colors.primary.900)_100%)]",
      image: "/images/500x600.svg",
      link: "#",
    },
    {
      label: "Discover Outsourcing",
      title: " Software Outsourcing",
      description:
        "Short-term, intensive programs designed to help you master a specific skill or technology.",
      overlayStyle:
        "backdrop-blur-md bg-opacity-10 bg-[radial-gradient(136.22%_75.8%_at_50%_27.57%,__theme(colors.primary.900)_0%,_theme(colors.primary.850)_61.62%,_theme(colors.primary.600)_79.17%,_theme(colors.primary.700)_100%)]",
      image: "/images/500x600.svg",
      link: "#",
    },
  ];

  const title = "Strategic Technical Partner";
  const subtitle =
    "Three powerful solutions for transforming operations and driving success";
  const description = [
    "Dragons delivers comprehensive technical solutions through our unique combination of premium MENA engineering",
    "talent and strategic U.S. market expertise. We provide fractional CTO services, dedicated development",
    "teams, and innovative training tailored to drive your business forward.",
  ];

  return (
    <div className="w-full">
      <div className="z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 p-20 px-2">
        <h3 className="text-balance text-center text-sm font-medium leading-none text-primary-100 sm:text-base md:text-lg lg:text-xl">
          {subtitle}
        </h3>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <div className="mx-auto grid gap-6 md:grid-cols-3">
          {valuePropositionsData.map((valueProposition, index) => (
            <ValueCard2 key={index} {...valueProposition} />
          ))}
        </div>
      </div>

      <div className="relative -mt-32 h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474] after:bg-[#08132b]">
        <Sparkles
          density={800}
          speed={1.2}
          size={1.2}
          direction="top"
          opacitySpeed={2}
          color="#32A7FF"
          className="absolute inset-x-0 bottom-0 h-full w-full"
        />
      </div>
    </div>
  );
}
