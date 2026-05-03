import type { Route } from "./+types/properties";

import { lazy, Suspense } from "react";
import { propertyData } from "~/data/propertyData";
import FilterInput from "~/components/PropertiesFilterInput";
import PropertyCard from "~/components/PropertyCard";
import ClientOnly from "~/components/ClientOnly";

const Map = lazy(() => import("~/components/Map"));

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Properties | Free Real State" },
    {
      name: "description",
      content:
        "Real estate company: The place where your future place is found.",
    },
  ];
}

export default function Properties() {
  const mapFallback = (
    <div className="sticky top-[7.5vh] h-[85vh] w-[95%] mt-24 mx-auto rounded-lg bg-slate-400/36 animate-pulse">
      <p className="block w-fit mx-auto pt-12 text-xl text-gray-100">
        Loading Map...
      </p>
    </div>
  );

  const mapPopovers = propertyData.map(
    ({
      title,
      img,
      bedrooms,
      bathrooms,
      city,
      address,
      latitude,
      longitude,
    }) => ({
      title,
      img,
      bedrooms,
      bathrooms,
      city,
      address,
      latitude,
      longitude,
    }),
  );

  return (
    <main className="gen-main">
      <div>
        <FilterInput />

        {propertyData.map((property) => (
          <PropertyCard
            key={`property-card-${property.id}`}
            property={property}
          />
        ))}
      </div>
      <div className="bg-amber-100">
        <ClientOnly>
          {() => (
            <Suspense fallback={mapFallback}>
              <Map
                marginTop={24}
                viewportHeight={85}
                zoomLevel={4}
                scrollable={false}
                mapPopovers={mapPopovers}
              />
            </Suspense>
          )}
        </ClientOnly>
      </div>
    </main>
  );
}
