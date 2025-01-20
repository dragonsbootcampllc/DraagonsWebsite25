import React from "react";
import {
  BentoCard,
  type BentoCardProps,
  BentoGrid,
  Globe,
  Marquee,
} from "../ui";
import { Title } from "../typography";
import { FaUsers } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
import { TbDatabase } from "react-icons/tb";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function () {
  const title = "Our Solution";
  const cardsData: BentoCardProps[] = [
    {
      Icon: TbDatabase,
      className: "col-span-3 lg:col-span-2 select-none cursor-pointer",
      name: "Talent Intelligence™",
      description:
        "See how developers truly perform in real-world scenarios - from code quality to team dynamics. No more surface-level assessments.",
      href: "#",
      background: (
        <div className="absolute z-[-1] h-full w-full px-6">
          <div className="absolute inset-0 z-[1] translate-y-1/4 bg-gradient-to-t from-primary-900 to-transparent transition-all group-hover:h-full group-hover:translate-y-0 group-hover:from-primary-900 group-hover:to-primary-800/5" />
          <div className="absolute inset-y-0 left-0 z-[1] w-1/2 bg-gradient-to-r from-primary-900 from-10% to-transparent" />
          <div className="absolute inset-y-0 right-0 z-[1] w-1/2 bg-gradient-to-l from-primary-900 from-10% to-transparent" />
          <Marquee className="relative z-0 flex h-full w-full [--duration:15s]">
            <div className="flex h-full w-[200px] items-center justify-center">
              <div className="relative flex h-4/5 w-full items-center justify-center overflow-hidden rounded-xl bg-blue-50">
                <Image
                  src="/images/our-team/Faisal.jpg"
                  alt="Card image 01"
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
            </div>
            <div className="flex h-full w-[200px] items-center justify-center">
              <div className="relative flex h-4/5 w-full items-center justify-center overflow-hidden rounded-xl bg-blue-50">
                <Image
                  src="/images/our-team/MoALI.png"
                  alt="Card image 01"
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
            </div>
            <div className="flex h-full w-[200px] items-center justify-center">
              <div className="relative flex h-4/5 w-full items-center justify-center overflow-hidden rounded-xl bg-blue-50">
                <Image
                  src="/images/our-team/Ahmed_Nageh.jpg"
                  alt="Card image 01"
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
            </div>
            <div className="flex h-full w-[200px] items-center justify-center">
              <div className="relative flex h-4/5 w-full items-center justify-center overflow-hidden rounded-xl bg-blue-50">
                <Image
                  src="/images/our-team/AhmedSherif.jpeg"
                  alt="Card image 01"
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
            </div>
          </Marquee>
          <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-[radial-gradient(#5875d653_1px,#06080e_1px)] bg-[size:20px_20px]" />
        </div>
      ),
      cta: "learn more",
    },
    {
      Icon: FaDollarSign,
      className: "col-span-3 lg:col-span-1 select-none cursor-pointer",
      name: "Data-Rich Decisions",
      description:
        "Make choices based on comprehensive talent insights - technical skills, work style, and team fit. Every hire backed by evidence.",
      href: "#",
      background: (
        <div className="absolute z-[-1] h-full w-full">
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary-900 to-primary-800/5 group-hover:from-primary-900 group-hover:to-primary-800/5" />
          <DotLottieReact
            src="/lottie/saving.lottie"
            autoplay
            speed={0.8}
            className="h-full object-fill"
            loop
          />
          <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-[radial-gradient(#5875d653_1px,#06080e_1px)] bg-[size:20px_20px]" />
        </div>
      ),
      cta: "learn more",
    },
    {
      Icon: PiGlobe,
      className: "col-span-3 lg:col-span-1 select-none cursor-pointer",
      name: "Premium MENA Talent",
      description:
        "Access the top 1% of tech talent from an untapped market. Pre-vetted, ready to deliver, at a fraction of the cost.",
      href: "#",
      background: (
        <div className="absolute z-[-1] h-full w-full">
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary-900 to-primary-800/5 group-hover:from-primary-900 group-hover:to-primary-800/5" />
          <DotLottieReact
            src="/lottie/integration.lottie"
            autoplay
            speed={0.8}
            className="h-full object-fill"
            loop
          />
          <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-[radial-gradient(#5875d653_1px,#06080e_1px)] bg-[size:20px_20px]" />
        </div>
      ),
      cta: "learn more",
    },
    {
      Icon: FaUsers,
      className: "col-span-3 lg:col-span-2 select-none cursor-pointer",
      name: "Fast & Cost-Effective",
      description:
        "Cut hiring costs by 75% and reduce hiring time from months to minutes. Scale your team without breaking your budget.",
      href: "#",
      background: (
        <div className="absolute z-[-1] h-full w-full">
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary-900 to-primary-800/5 group-hover:from-primary-900 group-hover:to-primary-800/5" />
          <Globe />
          <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-[radial-gradient(#5875d653_1px,#06080e_1px)] bg-[size:20px_20px]" />
        </div>
      ),
      cta: "learn more",
    },
  ];
  return (
    <div className="relative w-full p-4">
      <div className="m-auto w-full max-w-7xl p-20 px-2">
        <Title>{title}</Title>
        <BentoGrid className="w-full">
          {cardsData.map((card, index) => (
            <BentoCard key={index} {...card} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
