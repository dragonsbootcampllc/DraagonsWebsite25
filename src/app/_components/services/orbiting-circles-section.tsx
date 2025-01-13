import Image from "next/image";
import { OrbitingCircles } from "../ui";
import { FaCheckCircle } from "react-icons/fa";

export default function () {
  return (
    <div className="flex w-full items-center justify-center max-md:flex-col">
      <div className="flex w-full flex-col justify-center p-10">
        <h1 className="mb-4 text-4xl max-sm:text-2xl">Orbiting Circles</h1>
        <ul className="flex w-full flex-col">
          <li className="max-sm:text-2xs mb-2 flex w-full items-center gap-4 text-xl">
            <FaCheckCircle />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </li>
        </ul>
      </div>
      <div className="relative flex aspect-square w-full max-w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg">
        <OrbitingCircles iconSize={48} radius={130}>
          <Image
            src="/images/500x600.svg"
            alt="Card image 01"
            width={500}
            height={600}
          />
        </OrbitingCircles>
        <OrbitingCircles iconSize={32} radius={65} speed={2} reverse>
          <Image
            src="/images/500x600.svg"
            alt="Card image 01"
            width={500}
            height={600}
          />
        </OrbitingCircles>
      </div>
    </div>
  );
}
