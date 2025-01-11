import { Title } from "../typography";
import { IconJarLogoIcon } from "@radix-ui/react-icons";
import { Card } from "../cards";

export default function () {
  const title = "Industries Where We Shine";
  const industries = [
    {
      icon: <IconJarLogoIcon className="size-full" />,
      name: "eCommerce & Retail",
      description:
        "Optimizing eCommerce platforms and customer experiences through digital transformation, gamification, loyalty programs, and outsourcing to drive growth and efficiency.",
    },
    {
      icon: <IconJarLogoIcon className="size-7" />,
      name: "EdTech Platforms",
      description:
        "Ensuring technical scalability and integrating learning analytics for impactful learning experiences. We revolutionize content delivery systems through gamified and personalized approaches.",
    },
    {
      icon: <IconJarLogoIcon className="size-7" />,
      name: "AI Solutions",
      description:
        "Specializing in platform development, generative AI, and AI-driven decision-making solutions to create innovative, intelligent systems that drive efficiency and progress.",
    },
    {
      icon: <IconJarLogoIcon className="size-7" />,
      name: "HR Tech",
      description:
        "Enabling automation and improving talent management systems, while integrating performance analytics to foster optimized workforce development and retention.",
    },
  ];

  return (
    <div className="w-full px-2 py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center">
        <Title>{title}</Title>
        <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-4">
          {industries.map((industry, index) => (
            <Card key={index} {...industry} />
          ))}
        </div>
      </div>
    </div>
  );
}
