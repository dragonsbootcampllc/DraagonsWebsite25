import { cn } from "~/lib/utils";

type Props = {
  image: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export default function ({ image, title, description, className }: Props) {
  return (
    <div
      className={cn(
        "flex w-56 flex-col items-center justify-center gap-2 text-center",
        className,
      )}
    >
      <div className="flex h-40 w-full items-center justify-center rounded-lg border-2 border-primary-950 bg-primary-900/80">
        {image}
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg text-primary-200/80">{description}</p>
    </div>
  );
}
