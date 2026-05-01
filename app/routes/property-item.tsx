import type { Route } from "./+types/property-item";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Property | Free Real State" },
    {
      name: "description",
      content:
        "Real estate company: The place where your future place is found.",
    },
  ];
}

export default function LogIn() {
  return <div>PROPERTY ITEM</div>;
}
