import type { Route } from "./+types/our-agents";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Agents | Free Real State" },
    {
      name: "description",
      content:
        "Real estate company: The place where your future place is found.",
    },
  ];
}

export default function OurAgents() {
  return <div>OUR AGENTS</div>;
}
