import { CTA } from "./_components/ctas";
import { Header } from "./_components/headers";
import {
  HeaderCharts,
  IndustryFocusSection,
  SuccessStorySection,
  ValuePropositionSection,
  WhyDragonsSection,
  PartnersSection,
} from "./_components/home";

export default function Home() {
  const headerProps = {
    subtitle: "✨ Join the Dragons",
    title: ["Bridging Premium MENA Tech", "Talent with U.S. Innovation"],
    description: [
      "Dragons delivers comprehensive tech talent solutions, combining strategic leadership and",
      " skilled development teams to drive your business forward.",
    ],
    primaryButton: {
      children: "Book a Demo",
      href: "#",
    },
    secondaryButton: {
      children: "Explore Solutions",
      href: "#",
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <Header {...headerProps}>
        <HeaderCharts />
      </Header>
      <ValuePropositionSection />
      <WhyDragonsSection />
      <SuccessStorySection />
      <IndustryFocusSection />
      <PartnersSection />
      <div className="size-full pt-52">
        <CTA />
      </div>
      <div className="flex h-[200px] w-full flex-col items-center justify-center"></div>
    </main>
  );
}
