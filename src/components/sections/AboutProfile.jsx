import { useEffect, useRef, useState } from 'react'
import 'animate.css'
import profileImg from '../../assets/profile.jpg'

function AboutProfile() {
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
                threshold: 0.45
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
        <div ref={sectionRef} className="w-full bg-bgprime px-[12%] py-16 border-t-2 border-third">
            <div className="flex w-full flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
                <div className={`lg:flex-1 relative ${isVisible ? 'animate__animated animate__fadeInLeft' : 'opacity-0'}`}>
                    <div className="relative z-10 overflow-hidden">
                        <img
                            src={profileImg}
                            alt="Professional Barber"
                            className="w-72 sm:w-96 rounded-lg"
                        />
                    </div>
                    <div className="absolute top-5 -left-5 w-full h-full bg-prime/30 rounded-lg -z-0"></div>
                </div>

                <div className={`lg:flex-1 space-y-6 ${isVisible ? 'animate__animated animate__fadeInRight' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-bold uppercase font-prata">Profesionalna izvrsnost u frizerstvu</h2>

                    <div className="w-20 h-1 bg-prime"></div>

                    <p className="text-lg leading-relaxed text-second font-lato">
                        Sa više od 4 godine posvećenog iskustva u muškom friziranju i stilizovanju, 
                        ovladao sam veštinom preciznih frizura i stručnog oblikovanja brade.
                        Moj pristup kombinuje tradicionalne frizerske tehnike sa savremenim stilovima,
                        stvarajući izgled koji je i bezvremenski i moderan.
                    </p>

                    <p className="text-lg leading-relaxed text-second font-lato">
                        Svaki klijent prima personalizovanu pažnju i usluge prilagođene njegovim potrebama
                        u našem prijatnom i profesionalnom ambijentu.
                        Moja posvećenost je da osiguram da ne samo da izgledate izuzetno, već da se osećate 
                        samouvereno u svom izgledu.
                    </p>

                    <div className={`flex gap-8 pt-4 
                        ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
                        <div>
                            <h3 className="text-3xl font-bold text-prime font-prata">4+</h3>
                            <p className="text-second font-lato">Godina iskustva</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-prime font-prata">300+</h3>
                            <p className="text-second font-lato">Zadovoljnih Klijenata</p>
                        </div>
                    </div>
                    <div className={`flex items-center gap-4 pt-6 
                        ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-prime" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 
                                1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 
                                4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <a
                                href='https://www.instagram.com/manemuskifrizer/'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-prime hover:text-prime/80 transition-colors font-prata"
                            >
                                Pratite me na Instagramu
                            </a>
                        </div>
                        <a
                            href="/mywork"
                            className="px-6 py-2 bg-prime text-white rounded hover:bg-prime/90 
                            transition-colors font-prata
                            text-center"
                        >
                            Pogledajte Moje Radove
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutProfile
