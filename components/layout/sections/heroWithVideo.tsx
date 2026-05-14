"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import en from "@/lib/en";

interface NetworkInformation extends EventTarget {
    effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
    saveData?: boolean;
    addEventListener(type: "change", listener: EventListenerOrEventListenerObject): void;
    removeEventListener(type: "change", listener: EventListenerOrEventListenerObject): void;
}

declare global {
    interface Navigator {
        connection?: NetworkInformation;
        mozConnection?: NetworkInformation;
        webkitConnection?: NetworkInformation;
    }
}

const HEADLINE_SEGMENTS = ["Experience", "the", "AI Infotech", "Advantage"] as const;
const HEADLINE_DESCRIPTION = en.hero.part1.description;

export default function Hero2() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const [isInView, setIsInView] = useState(false);
    const [showCta, setShowCta] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [shouldRenderVideo, setShouldRenderVideo] = useState(true);

    useEffect(() => {
        const checkConnection = () => {
            const connection =
                navigator.connection ?? navigator.mozConnection ?? navigator.webkitConnection;

            if (!connection) {
                setShouldRenderVideo(true);
                return;
            }

            const isSlow =
                connection.saveData === true ||
                connection.effectiveType === "slow-2g" ||
                connection.effectiveType === "2g" ||
                connection.effectiveType === "3g";

            setShouldRenderVideo(!isSlow);
        };

        checkConnection();

        const connection =
            navigator.connection ?? navigator.mozConnection ?? navigator.webkitConnection;

        if (!connection) {
            return;
        }

        connection.addEventListener("change", checkConnection);

        return () => {
            connection.removeEventListener("change", checkConnection);
        };
    }, []);

    useEffect(() => {
        const descriptionTimer = window.setTimeout(() => {
            setShowDescription(true);
        }, 3100);

        const timer = window.setTimeout(() => {
            setShowCta(true);
        }, 3000);

        return () => {
            window.clearTimeout(descriptionTimer);
            window.clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.25 }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) {
            return;
        }

        if (!shouldRenderVideo) {
            video.pause();
            return;
        }

        if (isInView) {
            void video.play().catch(() => {
                // Playback may be blocked by browser policies.
            });
            return;
        }

        video.pause();
    }, [isInView, shouldRenderVideo]);

    return (
        <section
            ref={sectionRef}
            className="relative isolate min-h-screen overflow-hidden bg-black"
            aria-labelledby="hero2-heading"
        >
            <div className="absolute inset-0 z-0 bg-black" aria-hidden="true" />

            {shouldRenderVideo ? (
                <video
                    ref={videoRef}
                    className={`absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-300 ${isInView ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                    src="/landing_page_video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    aria-hidden="true"
                    tabIndex={-1}
                />
            ) : null}

            <div
                className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 via-black/65 to-black/90"
                aria-hidden="true"
            />

            <div className="relative z-30 flex min-h-screen flex-col md:flex-row">
                <div className="flex w-full items-center justify-center px-6 py-16 text-center md:w-1/2 md:px-12">
                    <div className="max-w-2xl">
                        <h1
                            id="hero2-heading"
                            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
                        >
                            {HEADLINE_SEGMENTS.map((segment, index) => {
                                const isHighlight = segment === "AI Infotech";

                                return (
                                    <span
                                        key={segment}
                                        className="inline-block translate-y-5 animate-[heroWord_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0"
                                        style={{ animationDelay: `${1 + index * 0.5}s` }}
                                    >
                                        {isHighlight ? (
                                            <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                                                AI Infotech
                                            </span>
                                        ) : (
                                            segment
                                        )}
                                        {index < HEADLINE_SEGMENTS.length - 1 ? <span>&nbsp;</span> : null}
                                    </span>
                                );
                            })}
                        </h1>

                        <p
                            className={`mt-6 text-base leading-relaxed text-white/80 transition-all duration-700 ease-out sm:text-lg ${showDescription ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                                }`}
                        >
                            {HEADLINE_DESCRIPTION}
                        </p>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center px-6 pb-16 pt-0 md:w-1/2 md:px-12 md:py-16">
                    <div
                        className={`flex w-full max-w-sm flex-col items-center gap-4 transition-all duration-1000 ease-out ${showCta ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                            }`}
                    >
                        <Button
                            asChild
                            variant="default"
                            size="lg"
                            className="h-12 w-full text-base transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:opacity-95"
                        >
                            <a href="#contact">
                                <span>Schedule a Consultation</span>
                                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="secondary"
                            size="lg"
                            className="h-12 w-full text-base transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:opacity-95"
                        >
                            <a href="#services">Explore our services</a>
                        </Button>
                    </div>
                </div>
            </div>

            <style jsx>{`
				@keyframes heroWord {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
        </section>
    );
}
