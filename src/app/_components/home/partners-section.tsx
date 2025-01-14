import Image from "next/image";
import { Title } from "../typography";
import { Sparkles } from "../ui";

export default function () {
  const title = "Trusted By";
  const partners = [
    {
      id: 1,
      imageSrc: "/images/500x600.svg",
    },
    {
      id: 2,
      imageSrc: "/images/500x600.svg",
    },
    {
      id: 3,
      imageSrc: "/images/500x600.svg",
    },
    {
      id: 4,
      imageSrc: "/images/500x600.svg",
    },
  ];

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-7xl p-20 px-2">
        <Title>{title}</Title>

        <div className="relative flex min-h-20 w-full items-center justify-center gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="relative z-10 flex h-20 w-64 items-center justify-center overflow-hidden bg-blue-700 px-4"
            >
              <Image src={partner.imageSrc} alt="id" fill />
            </div>
          ))}
          <div className="absolute inset-x-0 top-[25%] z-0 h-80 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,theme(colors.primary.100),transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,theme(colors.primary.150/80%),transparent_90%)] before:opacity-100 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-2 after:border-b after:border-primary-800 after:bg-primary-900">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,theme(colors.primary.100/50%)_1px,transparent_1px)] bg-[size:70px_80px]"></div>
            <Sparkles
              density={1200}
              size={1.4}
              hover
              direction="top"
              className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
