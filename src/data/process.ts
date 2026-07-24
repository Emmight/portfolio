import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
  LifeBuoy,
} from "lucide-react";

export const process = {
  title: "How I Work",

  subtitle:
    "Every successful project follows a clear process. From understanding your goals to delivering a polished product, I focus on quality, collaboration and long-term value.",

  steps: [
    {
      number: "01",
      title: "Discovery",
      icon: Search,
      description:
        "I take time to understand your goals, target audience and project requirements before writing a single line of code.",
    },

    {
      number: "02",
      title: "Planning & Design",
      icon: PencilRuler,
      description:
        "I plan the project structure and user experience to ensure every feature serves a clear purpose.",
    },

    {
      number: "03",
      title: "Development",
      icon: Code2,
      description:
        "Using modern technologies and clean coding practices, I build responsive, scalable and maintainable applications.",
    },

    {
      number: "04",
      title: "Testing & Launch",
      icon: Rocket,
      description:
        "Every project is thoroughly tested before deployment to ensure performance, reliability and a smooth user experience.",
    },

    {
      number: "05",
      title: "Support",
      icon: LifeBuoy,
      description:
        "After launch, I'm available for updates, maintenance and continuous improvements whenever they're needed.",
    },
  ],
};