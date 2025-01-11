import Image from "next/image";
import { BorderBeam } from "../ui";
import Link from "next/link";
import { cn } from "~/lib/utils";

export interface ValueCard2Props {
  title: string;
  description: string;
  label?: string;
  image?: string | [string, string];
  link?: string;
}

export default function ({
  title,
  description,
  label,
  image,
  link,
}: ValueCard2Props) {
  return (
    <Link
      href={link ?? "#"}
      className={cn(
        "group relative flex min-h-[500px] cursor-pointer select-none flex-col gap-5 overflow-hidden rounded-2xl border bg-[#181619] bg-opacity-55 bg-gradient-to-t from-primary-800 to-primary-900 p-5 shadow-[0_0_50px_10px_theme(colors.primary.850/50)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]",
      )}
      passHref
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary-800 to-primary-850 opacity-0 transition-all group-hover:opacity-40" />
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src="/images/noise.gif"
          unoptimized
          width={350}
          height={240}
          alt="Card image 01"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <div className="py-5">
          <div className="mb-1 w-fit rounded-full bg-white px-3 py-1 text-sm font-semibold text-black transition-all duration-500 ease-in-out group-hover:bg-primary-400 group-hover:text-white">
            {label}
          </div>
          <span className="mb-1 inline-block pt-2 text-lg font-semibold text-slate-200 transition-all duration-500 ease-in-out group-hover:hidden">
            {title}
          </span>
          <span className="mb-1 hidden pt-2 text-lg font-semibold text-slate-200 transition-all duration-500 ease-in-out group-hover:inline-block">
            {title}
          </span>
          <p className="text-sm text-slate-500">{description}</p>
        </div>

        <div className="relative w-full transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
          <Image
            className="m-0 h-full object-cover p-0 transition-opacity duration-500 group-hover:opacity-0"
            src={image ? (Array.isArray(image) ? image[0] : image) : ""}
            width={350}
            height={240}
            alt="Card image 01"
          />
          <Image
            className="absolute left-0 top-0 m-0 h-full object-cover p-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            src={
              image
                ? Array.isArray(image)
                  ? (image[1] ?? image[0])
                  : image
                : ""
            }
            width={350}
            height={240}
            alt="Card image 01 displaying on hover"
            aria-hidden="true"
          />
        </div>
      </div>
      <BorderBeam borderWidth={3} size={200} />
    </Link>
  );
}
