import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../buttons";
import { ButtonVariant } from "~/types/props";
import { MagicCard } from "../ui";
import DotPattern from "../ui/dot-pattern";
import { cn } from "~/lib/utils";
// import { Badge } from "@/components/ui/Badge";

export default function () {
  return (
    <div className="w-full px-2 py-20">
      <MagicCard
        wrapperClassName="size-full py-20"
        className="relative m-auto size-full max-w-7xl overflow-hidden"
      >
        <div className="flex size-full flex-col items-center justify-center gap-8 py-8 text-center">
          <div className="flex flex-col gap-2">
            <h3 className="font-regular max-w-xl text-3xl tracking-tighter md:text-5xl">
              Try our platform today!
            </h3>
            <p className="max-w-xl text-lg leading-relaxed tracking-tight text-muted-foreground">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>

          <div className="flex flex-row gap-4">
            <Button>
              <div className="flex items-center justify-center gap-2">
                <span>Jump on a call</span> <PhoneCall className="size-4" />
              </div>
            </Button>
            <Button
              className="flex items-center justify-center gap-2"
              variant={ButtonVariant.Secondary}
            >
              <span>Sign up here</span> <MoveRight className="size-4" />
            </Button>
          </div>
        </div>

        <DotPattern
          className={cn(
            "inse [mask-image:radial-gradient(350px_circle_at_top_right,white,transparent)]",
          )}
        />
      </MagicCard>
    </div>
  );
}
