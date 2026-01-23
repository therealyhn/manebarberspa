import { useEffect, useRef, useState } from 'react'
import service1 from '../assets/service-10.webp'
import service3 from '../assets/service-3.png'
import service4 from '../assets/service-4.jpg'
import service5 from '../assets/service-5.jpg'
import service6 from '../assets/service-6.png'
import service7 from '../assets/service-7.png'
import service8 from '../assets/service-2.png'
import logo from '../assets/logo.png'
import mustach from '../assets/heading-line.png'
import 'animate.css'
import BookButton from './BookButton'

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
                threshold: 0.4
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

    const services = [
        { image: service1, title: "Klasik", animation: "fadeInLeft" },
        { image: service4, title: "Fade", animation: "fadeInUp" },
        { image: service5, title: "Nularica", animation: "fadeInRight" },
        { image: service3, title: "Brada", animation: "fadeInLeft" },
        { image: service6, title: "Brada na #0", animation: "fadeInUp" },
        { image: service7, title: "Obrve", animation: "fadeInRight" },
        { image: service8, title: "Dizajn", animation: "fadeInLeft" },
        { image: logo, title: "Prekovremeni rad", animation: "fadeInUp" }
    ];

    return (
        <div ref={sectionRef} className="w-full px-2 sm:px-4 md:px-8 lg:px-20 py-6 md:py-16 
            flex flex-col items-center justify-center bg-bgprime border-y-2 border-light-gray">

            {/* Header Section */}
            <div className="flex flex-col items-center justify-center mb-6 md:mb-16 w-full">
                <h2 className={`font-lato text-xs sm:text-sm md:text-md font-semibold
                 text-prime text-center mb-2 md:mb-4 ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                    }`}>Iskusite vrhunsko sređivanje</h2>
                <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
                    <span className={`font-prata text-xl sm:text-2xl md:text-4xl font-semibold text-black text-center 
                    ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'
                        }`}>Moje usluge</span>
                    <img src={mustach} alt="mustach" className={`w-24 sm:w-32 md:w-50 
                    ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'
                        }`} />
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 
            md:gap-6 lg:gap-8 w-full max-w-7xl">
                {services.map((service, index) => (
                    <div key={index} className={`flex flex-col items-center px-2 sm:px-4 
                        ${isVisible ? `animate__animated animate__${service.animation} animate__delay-2s` : 'opacity-0'
                        }`}>
                        <img
                            src={service.image}
                            alt={`service-${index + 1}`}
                            className="w-28 sm:w-36 md:w-40 lg:w-48 h-28 sm:h-36 md:h-40 lg:h-48 object-cover rounded-full 
                                transition-all duration-300 hover:shadow-lg hover:grayscale
                                hover:drop-shadow-[0_0_5px_rgb(0,0,0)]"
                        />
                        <h3 className="mt-2 md:mt-4 text-sm sm:text-base md:text-lg lg:text-xl
                         font-semibold text-center font-prata">{service.title}</h3>
                    </div>
                ))}
            </div>

            <div className={`mt-6 sm:mt-8 md:mt-16 flex gap-4 
            ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-2s' : 'opacity-0'
                }`}>
                <BookButton />
            </div>
        </div>
    );
};

export default ServicesSection;