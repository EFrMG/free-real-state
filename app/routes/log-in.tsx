import type { Route } from "./+types/log-in";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Log In | Free Real State" },
    {
      name: "description",
      content:
        "Real estate company: The place where your future place is found.",
    },
  ];
}

export default function LogIn() {
  return <div>LOG IN</div>;
}
