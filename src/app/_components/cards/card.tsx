import { DotPattern, MagicCard } from "../ui";

interface Props {
  icon: React.ReactNode;
  name: string;
  description: string;
}

export default function ({ icon, name, description }: Props) {
  return (
    <MagicCard className="group/industry-card min-h-56 overflow-hidden">
      <div className="flex size-full flex-col items-start justify-start gap-2 p-5">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex size-11 items-center justify-center rounded-md border border-primary-850 bg-gradient-to-t from-primary-950 to-primary-850 p-2 text-primary-200">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold">{name}</h3>
        </div>

        <p className="text-primary-100/80">{description}</p>
      </div>
      <DotPattern className="-translate-y-12 translate-x-12 transition-all [mask-image:radial-gradient(250px_circle_at_top_right,white,transparent)] group-hover/industry-card:-translate-y-8 group-hover/industry-card:translate-x-8" />
    </MagicCard>
  );
}
