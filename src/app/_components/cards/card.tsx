import { cn } from "~/lib/utils";
import { DotPattern, MagicCard } from "../ui";
import { type ButtonProps } from "~/types/props";
import { Button } from "../buttons";

interface Props {
  icon: React.ReactNode;
  name: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  iconDirection?: "col" | "row";
  size?: "md" | "lg";
  list?: string[];
  cta?: ButtonProps;
}

export default function ({
  icon,
  name,
  description,
  className,
  wrapperClassName,
  iconDirection = "col",
  size = "md",
  list,
  cta,
}: Props) {
  return (
    <MagicCard
      className={cn(
        "group/industry-card relative min-h-56 overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "flex size-full flex-col items-start justify-start gap-3 p-5",
          wrapperClassName,
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center gap-3",
            iconDirection === "col" && "flex-col items-start",
          )}
        >
          <div className="flex size-11 items-center justify-center rounded-md border border-primary-850 bg-gradient-to-t from-primary-950 to-primary-850 p-2 text-primary-200">
            {icon}
          </div>
          <h3
            className={cn("text-2xl font-semibold", size === "md" && "text-xl")}
          >
            {name}
          </h3>
        </div>

        <p className="text-primary-100/80">{description}</p>

        {list && (
          <ul className="list-inside list-disc space-y-1 text-sm">
            {list?.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        )}

        {cta && <Button className="mt-2 w-full py-3" {...cta} />}
      </div>

      <DotPattern className="-translate-y-12 translate-x-12 transition-all [mask-image:radial-gradient(250px_circle_at_top_right,white,transparent)] group-hover/industry-card:-translate-y-8 group-hover/industry-card:translate-x-8" />
    </MagicCard>
  );
}
