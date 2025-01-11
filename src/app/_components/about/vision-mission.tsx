import React from "react";
import { Card } from "../cards";
import { IconJarLogoIcon } from "@radix-ui/react-icons";

export default function () {
  const vision = {
    name: "Our Vision",
    description:
      "To be the leading provider of engineering talent and leadership solutions globally, transforming how companies access technical excellence worldwide.",
    icon: <IconJarLogoIcon className="size-7" />,
  };
  const mission = {
    name: "Our Mission",
    description:
      "Empowering businesses with strategic technical guidance while offering top-tier talent access to global, cutting-edge projects.",
    icon: <IconJarLogoIcon className="size-7" />,
  };

  return (
    <div className="flex gap-6">
      <Card {...vision} />
      <Card {...mission} />
    </div>
  );
}
