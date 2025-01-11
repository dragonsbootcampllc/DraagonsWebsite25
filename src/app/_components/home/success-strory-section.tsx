import { BlogCategory } from "~/types";
import { SuccessStoryCard } from "../cards";
import Title from "../typography/title";
import { Marquee } from "../ui";

export default function () {
  const stories = [
    {
      id: "1",
      title: "Neferdata: 50% faster AI product deployment.",
      imageSrc: "/images/500x600.svg",
      type: BlogCategory.CustomerCaseStudy,
    },
    {
      id: "2",
      title: "Actus Go: 40% cost reduction.",
      imageSrc: "/images/500x600.svg",
      type: BlogCategory.CustomerCaseStudy,
    },
    {
      id: "3",
      title: "LevelUp ESG: 15x team growth.",
      imageSrc: "/images/500x600.svg",
      type: BlogCategory.CustomerCaseStudy,
    },
  ];

  const title = "Success Stories from our customers";

  return (
    <div className="relative w-full">
      <div className="mx-auto w-full max-w-7xl items-center justify-center p-20 px-2">
        <Title>{title}</Title>
        <div className="relative">
          <div className="absolute left-1/2 top-3/4 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-t from-transparent from-10% to-primary-650/50 blur-3xl" />
          <Marquee pauseOnHover>
            {stories.map((story) => (
              <SuccessStoryCard key={story.id} {...story} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
