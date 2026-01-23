import logo from '../../assets/logo-full-white.png'
import profileImg from '../../assets/profile.jpg'
import CtaButton from '../ui/CtaButton'
import StatItem from '../ui/StatItem'
import useInViewOnce from '../../hooks/useInViewOnce'
import 'animate.css'

function AboutHero() {
    const { ref, isVisible } = useInViewOnce({ threshold: 0.35 })

    return (
        <section
            ref={ref}
            className="relative w-full h-screen bg-prime-dark overflow-hidden"
        >
            <img
                src={profileImg}
                alt="Professional Barber"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10"></div>

            <div className="relative z-10 h-full flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 md:px-20">
                    <div className={`max-w-2xl text-white ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
                        <div className="w-16 h-px bg-third mb-4"></div>
                        <p className="text-sm sm:text-xl mb-3 text-third font-lato drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                            Predstavljam
                        </p>
                        <div className="mb-6">
                            <img src={logo} alt="logo" className="w-56 sm:w-72" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase font-prata mb-4">
                            Profesionalna izvrsnost u frizerstvu
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-third font-lato mb-4">
                            Dobrodosli u moj frizerski salon, gde se tradicija susrece s modernim stilom.
                            Posvecen sam pruzanju vrhunske usluge sisanja i stilizovanja, prilagodjene svakom klijentu.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-third font-lato mb-6">
                            Moj pristup kombinuje tradicionalne tehnike sa savremenim stilovima, uz paznju prema detaljima.
                        </p>

                        <div className={`flex gap-8 mb-6 ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
                            <StatItem value="4+" label="Godina iskustva" />
                            <StatItem value="300+" label="Zadovoljnih Klijenata" />
                        </div>

                        <div className={`flex flex-wrap items-center gap-4 ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
                            <CtaButton
                                href="#about"
                                label="O meni"
                                className="bg-second-dark text-white px-8 py-3 rounded-sm uppercase text-sm"
                                overlayClassName="bg-prime-dark"
                            />
                            <CtaButton
                                href="#booking"
                                label="Zakazi termin"
                                className="bg-second-dark text-white px-8 py-3 rounded-sm uppercase text-sm"
                                overlayClassName="bg-prime-dark"
                            />
                        </div>
                        <div className="w-16 h-px bg-third mt-6"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
