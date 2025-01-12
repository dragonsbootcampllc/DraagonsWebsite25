import React from "react";
import { Header } from "../_components/headers";
import { VisionMission } from "../_components/about";
import StorySection from "src/app/about/storysection.tsx";


export default function () {
  const headerProps = {
    subtitle: "about us",
    title: "Bridging Global Engineering Talent with Industry Leaders",
  };

  return (
    <div className="flex h-screen flex-col">
      <Header {...headerProps}>
        <VisionMission /> 
      </Header>
      <StorySection />
    </div>
  );
}
