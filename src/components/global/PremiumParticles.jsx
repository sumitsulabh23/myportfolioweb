import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const PremiumParticles = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="premium-particles"
            className="fixed inset-0 z-0 pointer-events-none"
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        onClick: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 180,
                            links: {
                                opacity: 0.35,
                            },
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#22d3ee", 
                    },
                    links: {
                        color: "#22d3ee",
                        distance: 200,
                        enable: true,
                        opacity: 0.15, 
                        width: 0.5,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: 0.6, 
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1200, 
                        },
                        value: 60, 
                    },
                    opacity: {
                        value: { min: 0.2, max: 0.4 }, 
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2.5 }, 
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default PremiumParticles;
