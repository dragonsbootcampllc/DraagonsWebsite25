import { Header } from "../_components/headers";
import { HeaderCards, OrbitingCirclesSection } from "../_components/services";

export default function () {
  const headerProps = {
    title: "Our Comprehensive Technical Solutions",
    description:
      "Dragons empowers businesses with MENA talent and US innovation, delivering leadership, top teams, and SaaS solutions to drive growth and success.",
  };
  return (
    <div>
      {/* <Header wrapperclassName="translate-y-1/4" {...headerProps}>
        <HeaderCards />
      </Header> */}

      <div className="flex h-screen w-full items-center justify-center">
        <OrbitingCirclesSection />
      </div>
    </div>
  );
}
