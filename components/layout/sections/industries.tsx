"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import en from "@/lib/en";
import { icons } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface IndustriesProps {
  icon: string;
  title: string;
  description: string;
}

const industriesList: IndustriesProps[] = [
  {
    icon: "Blocks",
    title: "Healthcare and Pharma",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
  {
    icon: "LineChart",
    title: "Banking and Fintech",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.",
  },
  {
    icon: "Wallet",
    title: "Retail and E-commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam",
  },
  {
    icon: "Sparkle",
    title: "Energy and Utilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
];

export const IndustriesSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasEnteredView(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="industries" ref={sectionRef} className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">{en.industries.title}</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {en.industries.subtitle}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {en.industries.description}
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-4 w-full">
          {industriesList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div> */}

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {industriesList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className={`bg-muted/50 dark:bg-card hover:bg-background group/number transform-gpu transition-all duration-[1800ms] sm:duration-[1650ms] lg:duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                hasEnteredView
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-16 sm:translate-y-14 lg:translate-y-10 opacity-0 scale-[0.96]"
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
