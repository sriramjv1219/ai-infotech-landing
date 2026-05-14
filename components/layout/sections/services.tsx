import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Product Development",
    description:
      "Design and build modern digital products with scalable architecture and exceptional user experience.",
    pro: 0,
  },
  {
    title: "Consulting",
    description:
      "Delivering strategic technology consulting to accelerate innovation, efficiency, and digital transformation initiatives.",
    pro: 0,
  },
  {
    title: "Offshore Onsite development and delivery",
    description: "Providing flexible offshore and onsite development solutions to meet your business needs.",
    pro: 0,
  },
  {
    title: "Support and Maintenance",
    description: "Ensure reliable performance, continuous improvements, and proactive support for your business-critical applications.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Technology Services Built Around Business Outcomes
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
       From consulting and product engineering to dedicated delivery and long-term support, AI Infotech provides end-to-end technology services that help businesses innovate faster, operate efficiently, and build scalable digital solutions.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            {/* <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge> */}
          </Card>
        ))}
      </div>
    </section>
  );
};
