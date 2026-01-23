import { useEffect, useRef, useState } from "react";
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.png";
import service3 from "../assets/service-3.png";
import mustach from "../assets/heading-line.png";
import "animate.css";
import ServicesButton from "./ServicesButton";

const ServicesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.4,
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-10 md:py-16 
            flex flex-col items-center justify-center bg-bgprime border-t-2 border-third"
        >
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center mb-8 md:mb-16 w-full">
                <h2
                    className={`text-sm md:text-md font-semibold font-lato text-prime text-center mb-3 md:mb-4 
                ${isVisible
                            ? "animate__animated animate__fadeInUp"
                            : "opacity-0"
                        }`}
                >
                    Iskusite vrhunsko sređivanje
                </h2>
                <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
                    <span
                        className={`text-2xl md:text-4xl font-semibold font-prata text-black text-center 
                    ${isVisible
                                ? "animate__animated animate__fadeInUp animate__delay-1s"
                                : "opacity-0"
                            }`}
                    >
                        Moje usluge
                    </span>
                    <img
                        src={mustach}
                        alt="mustach"
                        className={`w-32 md:w-50 
                    ${isVisible
                                ? "animate__animated animate__fadeInUp animate__delay-1s"
                                : "opacity-0"
                            }`}
                    />
                </div>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full max-w-6xl">
                {/* Service 1 */}
                <div
                    className={`flex flex-col items-center px-4 
                            ${isVisible
                            ? "animate__animated animate__fadeInLeft animate__delay-2s"
                            : "opacity-0"
                        }`}
                >
                    <img
                        src={service1}
                        alt="service1"
                        className="w-48 md:w-2/3 h-48 md:h-auto object-cover rounded-full 
                                    transition-all duration-300 hover:shadow-lg hover:grayscale filter 
                                    hover:drop-shadow-[0_0_5px_rgb(0,0,0)]"
                    />
                    <h3 className="mt-4 text-lg md:text-xl font-semibold font-prata">
                        Šišanje
                    </h3>
                    <p className="text-prime text-center text-sm md:text-base mt-2 font-lato">
                        Savršeno šišanje prilagođeno vašem stilu. Posvećenost detaljima kako
                        biste izgledali najbolje svaki put.
                    </p>
                </div>

                {/* Service 2 */}
                <div
                    className={`flex flex-col items-center px-4 
                            ${isVisible
                            ? "animate__animated animate__fadeInUp animate__delay-2s"
                            : "opacity-0"
                        }`}
                >
                    <img
                        src={service3}
                        alt="service2"
                        className="w-48 md:w-2/3 h-48 md:h-auto object-cover rounded-full 
                                    transition-all duration-300 hover:shadow-lg hover:grayscale  
                                     hover:drop-shadow-[0_0_5px_rgb(0,0,0)]"
                    />
                    <h3 className="mt-4 text-lg md:text-xl font-semibold font-prata">
                        Brada
                    </h3>
                    <p className="text-prime text-center text-sm md:text-base mt-2 font-lato">
                        Oblikovanje i stilizovanje brade za moderan i negovan izgled. Vaša
                        brada u sigurnim rukama.
                    </p>
                </div>

                {/* Service 3 */}
                <div
                    className={`flex flex-col items-center px-4 
                            ${isVisible
                            ? "animate__animated animate__fadeInRight animate__delay-2s"
                            : "opacity-0"
                        }`}
                >
                    <img
                        src={service2}
                        alt="service3"
                        className="w-48 md:w-2/3 h-48 md:h-auto object-cover rounded-full 
                                    transition-all duration-300 hover:shadow-lg hover:grayscale
                                     hover:drop-shadow-[0_0_5px_rgb(0,0,0)]"
                    />
                    <h3 className="mt-4 text-lg md:text-xl font-semibold font-prata">
                        Dizajn
                    </h3>
                    <p className="text-prime text-center text-sm md:text-base mt-2 font-lato">
                        Jedinstveni dizajni frizura koji izražavaju vašu kreativnost i stil.
                        Pokažite svoju originalnost.
                    </p>
                </div>
            </div>

            {/* Button Section */}
            <div
                className={`mt-8 md:mt-16 
            ${isVisible
                        ? "animate__animated animate__fadeInUp animate__delay-3s"
                        : "opacity-0"
                    }`}
            >
                <ServicesButton />
            </div>
        </div>
    );
};

export default ServicesSection;
