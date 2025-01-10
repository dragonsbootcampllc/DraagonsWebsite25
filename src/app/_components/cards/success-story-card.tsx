import Image from "next/image";
import { cn } from "~/lib/utils";
import { SuccessStoryOverview } from "~/types";
import { DotPattern } from "../ui";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function ({ id, title, imageSrc, type }: SuccessStoryOverview) {
  return (
    <Link
      href={`/blogs/success-stories/${id}`}
      className="group/success-story-card relative flex h-full w-[400px] cursor-pointer select-none flex-col gap-4 overflow-hidden"
    >
      <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-primary-850 bg-primary-950">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
          )}
        />

        <Image
          src={imageSrc || ""}
          alt={title}
          fill
          className="relative z-0 min-h-full min-w-full object-cover transition-all duration-300 group-hover/success-story-card:scale-105"
        />
      </div>

      <div className="relative overflow-hidden">
        <div className="flex flex-col gap-1 px-2 transition-all duration-300 group-hover/success-story-card:-translate-y-full group-hover/success-story-card:opacity-0">
          <h3 className="text-xl text-primary-100/80">{type}</h3>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>

        <div className="absolute left-0 top-0 flex w-full translate-y-full items-center justify-between px-2 opacity-0 transition-all duration-300 group-hover/success-story-card:translate-y-0 group-hover/success-story-card:opacity-100">
          <h2 className="text-2xl font-semibold">Learn more</h2>
          <ArrowRightIcon className="ml-auto size-7" />
        </div>
      </div>
    </Link>
  );
}
