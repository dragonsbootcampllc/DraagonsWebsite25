"use client";
import { useState, useEffect } from "react";
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
  const [isMacView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1380);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerProps = {
    subtitle: "✨ Join the Dragons",
    title: isMacView
      ? "Bridging Premium MENA Tech Talent with U.S. Innovation"
      : ["Bridging Premium MENA Tech", "Talent with U.S. Innovation"],
    description: isMacView
      ? "Dragons delivers comprehensive tech talent solutions, combining strategic leadership and skilled development teams to drive your business forward."
      : [
          "Dragons delivers comprehensive tech talent solutions, combining strategic leadership and",
          " skilled development teams to drive your business forward.",
        ],
    primaryButton: {
      children: "Book a Demo",
      href: "https://cal.com/team/dragons-bootcamp-llc/meeting",
    },
    secondaryButton: {
      children: "Explore Solutions",
      href: "comming-soon",
    },
  };

  return (
    <main className="flex flex-col items-center justify-center text-white">
      <Header {...headerProps}>
        <HeaderCharts />
      </Header>
      <ValuePropositionSection />
      <WhyDragonsSection />
      <SuccessStorySection />
      <IndustryFocusSection />
      <PartnersSection />
      <div className="size-full px-2 pt-52">
        <CTA />
      </div>
      <div className="flex h-[200px] w-full flex-col items-center justify-center"></div>
    </main>
  );
}
