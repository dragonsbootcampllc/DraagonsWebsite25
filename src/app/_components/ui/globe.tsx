"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "~/lib/utils";
interface EarthProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
}

export default function ({
  className,
  theta = 0.3,
  dark = 1,
  scale = 1.1,
  diffuse = 0.4,
  mapSamples = 16000,
  mapBrightness = 1.2,
  baseColor = [125 / 255, 104 / 255, 245 / 255],
  markerColor = [154 / 255, 145 / 255, 251 / 255],
  glowColor = [74 / 255, 35 / 255, 177 / 255],
}: EarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    let phi = 0;

    onResize();
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: theta,
      dark: dark,
      scale: scale,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.2 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.31 },
        { location: [34.6937, 135.5022], size: 0.25 },
        { location: [41.0082, 28.9784], size: 0.06 },
      ],
      onRender: (state: Record<string, unknown>) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.\
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div
      className={cn(
        "z-[10] mx-auto flex w-full max-w-[350px] items-center justify-center",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1",
        }}
      />
    </div>
  );
}
