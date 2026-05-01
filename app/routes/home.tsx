import type { Route } from "./+types/home";

import SearchInput from "~/components/homeSearchInput";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Free Real State" },
    {
      name: "description",
      content:
        "Real estate company: The place where your future place is found.",
    },
  ];
}

export default function Home() {
  return (
    <main
      className="grid md:grid-cols-[60%_40%]
      max-w-7xl w-full mx-auto max-sm:p-4 max-md:p-6
      z-5 grow"
    >
      <div className="relative my-auto md:mr-[18.5%] md:pl-6">
        <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl">
          Find the place of your dreams at unmatched discounts
        </h1>
        <p className="pt-12 text-lg">
          Aquiring a place to live the joy of life should not be as expensive as
          life is in the end. We provide the best places at a price that might
          as well not be real.
        </p>
        <p className="py-6 text-xl">Get your deal today!</p>

        <SearchInput />

        <div className="flex justify-center gap-8 max-sm:flex-wrap py-6">
          <hgroup>
            <span className="block font-bold text-center text-2xl">38</span>
            <h2 className="text-xl text-center">Awarded Industry Prices</h2>
          </hgroup>
          <hgroup>
            <span className="block font-bold text-center text-2xl">25+</span>
            <h2 className="text-xl text-center">Years of Experience</h2>
          </hgroup>
          <hgroup>
            <span className="block font-bold text-center text-2xl">1000+</span>
            <h2 className="text-xl text-center">Properties Ready</h2>
          </hgroup>
        </div>
      </div>

      <div
        className="relative max-md:absolute max-md:top-0 max-md:right-0 max-md:bottom-0
        max-md:opacity-35 max-md:w-[50%]
        w-full h-full md:flex items-center md:bg-amber-100 -z-1"
      >
        <img
          src="/app/assets/images/hero.webp"
          alt="Hero image"
          draggable={false}
          className="absolute right-4 max-md:right-2 max-w-none w-[120%] h-[95%] object-contain"
        />
      </div>
    </main>
  );
}
