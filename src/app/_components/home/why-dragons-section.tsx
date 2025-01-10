import React from "react";
import {
  BentoCard,
  BentoCardProps,
  BentoGrid,
  Globe,
  Marquee,
  Particles,
} from "../ui";
import { Title } from "../typography";
import { FaUsers } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
import { TbDatabase } from "react-icons/tb";
import Image from "next/image";

export default function () {
  const title = "Accelerate Growth with Dragons' Proven Excellence";
  const cardsData: BentoCardProps[] = [
    {
      Icon: TbDatabase,
      className: "col-span-3 lg:col-span-1 select-none cursor-pointer",
      name: "Data-Driven Talent Selection",
      description:
        "Our proprietary assessment system ensures you get the right technical talent for your specific needs.",
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
                  src="/images/500x600.svg"
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
      className: "col-span-3 lg:col-span-2 select-none cursor-pointer",
      name: "Strategic Cost Efficiency",
      description:
        "Achieve significant savings while maintaining high-quality technical delivery through our MENA talent pool.",
      href: "#",
      background: (
        <div className="absolute z-[-1] h-full w-full">
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary-900 to-primary-800/5 group-hover:from-primary-900 group-hover:to-primary-800/5" />
          <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-[radial-gradient(#5875d653_1px,#06080e_1px)] bg-[size:20px_20px]" />
        </div>
      ),
      cta: "learn more",
    },
    {
      Icon: PiGlobe,
      className: "col-span-3 lg:col-span-2 select-none cursor-pointer",
      name: "Cross-Cultural Integration",
      description:
        "Experience seamless collaboration through our proven cross-cultural integration methods.",
      href: "#",
      background: (
        <div className="absolute z-[-1] h-full w-full">
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary-900 to-primary-800/5 group-hover:from-primary-900 group-hover:to-primary-800/5" />

          <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-[radial-gradient(#5875d653_1px,#06080e_1px)] bg-[size:20px_20px]" />
        </div>
      ),
      cta: "learn more",
    },
    {
      Icon: FaUsers,
      className: "col-span-3 lg:col-span-1 select-none cursor-pointer",
      name: "Global Talent Pool",
      description:
        "Access a diverse global talent pool, including U.S. professionals, to meet your business needs.",
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
    <div className="relative w-full">
      <div className="m-auto w-full max-w-7xl p-20 px-2">
        <Title children={title} />
        <BentoGrid className="w-full">
          {cardsData.map((card, index) => (
            <BentoCard key={index} {...card} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
