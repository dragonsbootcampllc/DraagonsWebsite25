import Image from "next/image";
import { Title } from "../typography";
import { DotPattern, MagicCard } from "../ui";
import { IconJarLogoIcon } from "@radix-ui/react-icons";
import { cn } from "~/lib/utils";

interface IndustryCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const IndustryCard = ({ icon, name, description }: IndustryCardProps) => {
  return (
    <MagicCard className="min-h-56 cursor-pointer transition-all hover:scale-[1.02] overflow-hidden group/industry-card">
      <div className="flex size-full flex-col items-start p-6 justify-center gap-6">
        <div className="flex items-center gap-2 text-4xl">
          {icon}
          <h3 className="">{name}</h3>
        </div>

        <p className="text-xl text-primary-100/80">{description}</p>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(250px_circle_at_top_right,white,transparent)] translate-x-12 -translate-y-12 group-hover/industry-card:translate-x-8 group-hover/industry-card:-translate-y-8 transition-all",
        )}
      />
    </MagicCard>
  );
};

export default function () {
  const title = "Industries Where We Shine";
  const industries = [
    {
      icon: <IconJarLogoIcon className="size-7" />,
      name: "eCommerce & Retail",
      description:
        "Driving digital transformation and e-commerce platform optimization, while enhancing customer experiences with gamification and loyalty systems. Our outsourcing expertise boosts growth and efficiency for eCommerce businesses.",
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
        <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </div>
  );
}
