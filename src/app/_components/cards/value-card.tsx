import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { BorderBeam } from "../ui";

export interface ValueCardProps {
  title: string;
  description: string;
  overlayStyle?: string;
  label?: string;
  image?: string | [string, string];
  link?: string;
}

export default function ({
  title,
  description,
  overlayStyle,
  label,
  image,
  link,
}: ValueCardProps) {
  return (
    <Link
      href={link ?? "#"}
      className={cn(
        "relative flex min-h-[500px] cursor-pointer select-none flex-col gap-5 overflow-hidden rounded-2xl bg-[#181619] p-5 text-center shadow-[0_0_50px_10px_theme(colors.primary.800/50)] transition-all duration-300 hover:scale-[1.02]",
        overlayStyle,
      )}
      passHref
    >
      <div className="flex items-center justify-between">
        <div className="grid w-full place-items-center">
          <div
            className={`mb-2 rounded-xl border border-white/60 px-2 text-[14px]`}
          >
            {label}
          </div>
          <h1 className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-3xl font-semibold text-transparent">
            {title}
          </h1>
        </div>
      </div>
      <p className="text-center text-[14px] font-semibold">{description}</p>
      <div
        className="absolute left-0 top-0 h-full w-full opacity-50"
        style={{ background: overlayStyle }}
      />
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src={image ? (Array.isArray(image) ? image[0] : image) : ""}
          fill={true}
          alt="Bootcamp6Month"
          style={{ objectFit: "contain" }}
          className="absolute bottom-0 left-0 h-full w-full"
          loading="lazy"
        />
      </div>
      <p className="opacity-45">click on the card to learn more</p>
      <BorderBeam borderWidth={3} size={200} />
    </Link>
  );
}
