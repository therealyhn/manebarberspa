import { useEffect, useMemo, useState } from 'react'
import CtaButton from '../ui/CtaButton'
import StatItem from '../ui/StatItem'
import useInViewOnce from '../../hooks/useInViewOnce'
import { sanityClient, urlFor } from '../../lib/sanity'
import 'animate.css'
import fallbackLogo from '../../assets/logo-full-white.png'

const fallbackContent = {
    backgroundImage: fallbackBg,
    eyebrow: 'Predstavljam',
    logoImage: fallbackLogo,
    heading: 'Profesionalna izvrsnost u frizerstvu',
    paragraphOne:
        'Dobrodosli u moj frizerski salon, gde se tradicija susrece s modernim stilom. Posvecen sam pruzanju vrhunske usluge sisanja i stilizovanja, prilagodjene svakom klijentu.',
    paragraphTwo:
        'Moj pristup kombinuje tradicionalne tehnike sa savremenim stilovima, uz paznju prema detaljima.',
    statOneValue: '4+',
    statOneLabel: 'Godina iskustva',
    statTwoValue: '300+',
    statTwoLabel: 'Zadovoljnih Klijenata',
}

function AboutHero() {
    const { ref, isVisible } = useInViewOnce({ threshold: 0.35 })
    const [content, setContent] = useState(fallbackContent)

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const data = await sanityClient.fetch(
                    `*[_type == "aboutHero"][0]{
                        backgroundImage,
                        heading,
                        paragraphOne,
                        paragraphTwo,
                        statOneValue,
                        statOneLabel,
                        statTwoValue,
                        statTwoLabel
                    }`
                )
                if (data) {
                    setContent((prev) => ({
                        ...prev,
                        ...data,
                    }))
                }
            } catch (err) {
                console.error('Sanity about hero fetch failed', err)
            }
        }

        fetchAbout()
    }, [])

    const bgSrc = useMemo(() => {
        if (content.backgroundImage && typeof content.backgroundImage === 'object') {
            return urlFor(content.backgroundImage).width(2000).height(1200).fit('crop').quality(80).auto('format').url()
        }
        return content.backgroundImage
    }, [content.backgroundImage])

    const logoSrc = fallbackLogo

    return (
        <section
            ref={ref}
            className="relative w-full h-screen bg-prime-dark overflow-hidden"
        >
            <img
                src={bgSrc}
                alt="About background"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10"></div>

            <div className="relative z-10 h-full flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 md:px-20">
                    <div className={`max-w-2xl text-white ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
                        <div className="w-16 h-px bg-third mb-4"></div>
                        {fallbackContent.eyebrow && (
                            <p className="text-sm sm:text-xl mb-3 text-third font-lato drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                {fallbackContent.eyebrow}
                            </p>
                        )}
                        <div className="mb-6">
                            {logoSrc && (
                                <img src={logoSrc} alt="logo" className="w-56 sm:w-72" loading="lazy" decoding="async" />
                            )}
                        </div>
                        {content.heading && (
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase font-prata mb-4">
                                {content.heading}
                            </h2>
                        )}
                        {content.paragraphOne && (
                            <p className="text-base sm:text-lg md:text-xl text-third font-lato mb-4">
                                {content.paragraphOne}
                            </p>
                        )}
                        {content.paragraphTwo && (
                            <p className="text-base sm:text-lg md:text-xl text-third font-lato mb-6">
                                {content.paragraphTwo}
                            </p>
                        )}

                        <div className={`flex gap-8 mb-6 ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
                            <StatItem value={content.statOneValue} label={content.statOneLabel} />
                            <StatItem value={content.statTwoValue} label={content.statTwoLabel} />
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
