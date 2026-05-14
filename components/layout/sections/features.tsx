import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "BadgeCheck",
    title: "Modern Technology Expertise",
    description:
      "Our team works with modern cloud, AI, analytics, and product engineering ecosystems.",
  },
  {
    icon: "PictureInPicture",
    title: "Scalable Architecture",
    description:
      "Solutions designed to grow with your business and evolving customer needs.",
  },
  {
    icon: "Goal",
    title: "Agile & Transparent Delivery",
    description:
      "Fast iterations, continuous collaboration, and complete visibility throughout the project lifecycle.",
  },
  {
    icon: "TabletSmartphone",
    title: "Business-Focused Engineering",
    description:
      "We align technology solutions with measurable business outcomes.",
  },
  {
    icon: "MousePointerClick",
    title: "End-to-End Partnership",
    description:
      "From strategy and architecture to deployment and support, we stay with you through the journey.",
  },
  {
    icon: "Newspaper",
    title: "Customer-Centric Collaboration",
    description:
      "We work as an extension of your team, ensuring transparent communication, flexibility, and solutions aligned with your business goals.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      {/* <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2> */}

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Why Choose AI Infotech
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Built for Speed, Scale, and Innovation
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
