import { IconJarLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import { Card } from "../cards";

export default function () {
  const cardsData = [
    {
      name: "Cost Efficiency",
      description: "Free integration with outsourcing packages.",
      icon: <IconJarLogoIcon className="size-12" />,
    },
    {
      name: "Flexibility",
      description: "Available as independent solutions.",
      icon: <IconJarLogoIcon className="size-12" />,
    },
    {
      name: "Scalable Design",
      description: "Built to adapt to your growth.",
      icon: <IconJarLogoIcon className="size-12" />,
    },
  ];
  const solutions = [
    {
      name: "Gamification System",
      description:
        "Boost employee engagement and productivity with our fully customizable gamification tool",
      icon: <IconJarLogoIcon className="size-12" />,
      list: [
        "Reward and recognition programs.",
        "Performance tracking with actionable insights",
      ],
      cta: {
        href: "#",
        children: "Explore Gamification",
      },
    },
    {
      name: "Referral System",
      description:
        "Supercharge customer acquisition with our automated referral solution.",
      icon: <IconJarLogoIcon className="size-12" />,
      list: [
        "Customizable rewards for advocates.",
        "Real-time tracking and reporting.",
      ],
      cta: {
        href: "#",
        children: "Discover Referral System",
      },
    },
  ];
  return (
    <div className="flex w-full flex-col items-start justify-center gap-4">
      <div className="flex w-full gap-4">
        {cardsData.map((card, index) => (
          <Card iconDirection="row" className="min-h-0" key={index} {...card} />
        ))}
      </div>
      <div className="flex h-full w-full justify-center gap-4">
        {solutions.map((card, index) => (
          <Card className="size-full flex-grow" key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
