import { Header } from "~/app/_components/headers";
import { TalentAcquisitionFunnel } from "~/app/_components/services";

export default function () {
  const headerProps = {
    title: "Sourcing the Top 2.63% The Dragons Edge",
    description:
      "Dragons empowers businesses with MENA talent and US innovation, delivering leadership, top teams, and SaaS solutions to drive growth and success.",
    primaryButton: {
      children: "Book Meeting",
      href: "#",
    },
    secondaryButton: {
      children: "Explore Processess",
      href: "#",
    },
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-3xl font-semibold">Comming soon ...</h1>
      {/* <Header {...headerProps} />
        <TalentAcquisitionFunnel /> */}
    </div>
  );
}
