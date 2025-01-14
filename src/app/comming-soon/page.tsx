"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function () {
  return (
    <div className="flex h-screen w-full animate-pulse flex-col items-center justify-center">
      <DotLottieReact
        src="/lottie/comming-soon.lottie"
        autoplay
        loop
        className="w-4/5 max-w-2xl"
      />
      <h1 className="text-6xl font-semibold">Comming soon ...</h1>
    </div>
  );
}
