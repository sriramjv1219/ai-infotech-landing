import { Description } from "@radix-ui/react-dialog";
import { Subtitles } from "lucide-react";
import { title } from "process";

const en = {
    navbar:{
        name: 'AI Infotech',
        technologiesLabel: 'Technologies',

    },
    hero: {
        part1: {
            description: 'AI Infotech helps businesses modernize their technology landscape through Data Engineering, AI/ML Solutions, ETL Pipelines, Analytics, and Custom Product Development.',
            scheduleButton: 'Schedule a consultation',
            exploreButton: 'Explore our services',
        },
    },
    industries:{
        title: 'Industries',
        subtitle: 'Business-Focused Engineering',
        description: 'We cater to a wide range of industries, providing tailored solutions that drive growth and innovation. Our expertise spans across various sectors, enabling us to deliver impactful results for our clients.',
    },
    theme:{
        light: 'Light',
        dark: 'Dark',
    },
    contact:{
        description:'Have an inquiry or feedback for us? Fill out the form below to contact our team and we’ll get back to you asap.',
        email: 'example@aiinfotech.com',
        phoneNum: '+1 (619) 123-4567',
        address: 'Tampa, 10150 Highland Manor Dr, 33610',
    }
};

type DeepPartial<T> = T extends object
    ? {
        [P in keyof T]?: DeepPartial<T[P]>;
    }
    : T;
export type LocaleType = DeepPartial<typeof en>;
export type RequiredLocaleType = typeof en;


export default en;