import type { Route } from "./+types/properties";

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

export default function LogIn() {
  return <div>PROPERTIES</div>;
}
