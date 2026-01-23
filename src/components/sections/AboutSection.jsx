import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo-full-text.png'
import about1 from '../../assets/about-1.jpg'
import about2 from '../../assets/about-2.jpg'
import about3 from '../../assets/about-3.jpg'
import AboutButton from '../ui/AboutButton'
import 'animate.css'

function AboutSection() {
    // State - if section visible in viewport
    const [isVisible, setIsVisible] = useState(false);
    // Reference to the section element for intersection observer
    const sectionRef = useRef(null);

    useEffect(() => {
        // Create intersection observer instance
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When section enters viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stop observing once animation is triggered
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

        // Cleanup observer on component unmount
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        // Add ref to the main container for intersection observer
        <div ref={sectionRef} className="flex flex-col md:flex-row items-center justify-between gap-20 
         px-6 md:px-20 py-12 bg-white">
            {/* Left Side */}
            <div className="flex flex-col items-center text-center md:w-1/2">

                <h2 className={`text-xl font-bold font-prata uppercase text-prime 
                    ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
                    Predstavljam
                </h2>

                <div className={`my-8 ${isVisible ? 'animate__animated animate__fadeIn animate__delay-1s' : 'opacity-0'}`}>
                    <img src={logo} alt="logo" className="w-[300px]" />
                </div>

                <p className={`text-third-dark text-xl leading-relaxed max-w-xl text-center font-lato
                     ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
                    Dobrodošli u moj frizerski salon, gde se tradicija susreće s modernim stilom.
                    Posvećen sam pružanju vrhunske usluge šišanja i stilizovanja, prilagođene svakom klijentu.
                    Uz moju stručnost i pažnju prema detaljima, vaš izgled je u sigurnim rukama.
                </p>
                <div className={`mt-10 ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
                    <AboutButton />
                </div>
            </div>

            {/* Right Side - Images Stack */}
            <div className="hidden md:block relative md:w-1/2 h-[500px]">
                <img
                    src={about1}
                    alt="Barber 1"
                    className={`absolute top-0 right-[50%] w-72 h-60 object-cover rounded-lg shadow-xl
                    ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                />
                <img
                    src={about3}
                    alt="Barber 2"
                    className={`absolute top-10 right-[13%] w-80 h-80 object-cover rounded-lg shadow-xl
                    ${isVisible ? 'animate__animated animate__fadeInRight animate__delay-1s' : 'opacity-0'}`}
                />
                <img
                    src={about2}
                    alt="Barber 3"
                    className={`absolute top-40 right-[40%] w-80 h-72 object-cover rounded-lg shadow-xl
                    ${isVisible ? 'animate__animated animate__fadeInLeft animate__delay-1s' : 'opacity-0'}`}
                />
            </div>
        </div>
    )
}

export default AboutSection
