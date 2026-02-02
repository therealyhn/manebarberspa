import { useEffect, useMemo, useState } from 'react'
import useInViewOnce from '../../hooks/useInViewOnce'
import CtaButton from '../ui/CtaButton'
import { sanityClient, urlFor } from '../../lib/sanity'

const fallbackServices = [
    { image: service1, title: 'Klasik', price: 700, category: 'Sisanje' },
    { image: service4, title: 'Fade', price: 900, category: 'Sisanje' },
    { image: service5, title: 'Nularica', price: 400, category: 'Sisanje' },
    { image: service3, title: 'Brada', price: 300, category: 'Brada' },
    { image: service6, title: 'Brada na #0', price: 200, category: 'Brada' },
    { image: service2, title: 'Dizajn', price: 200, category: 'Ostalo' },
]

const fallbackPriceGroups = [
    {
        title: 'Sisanje',
        items: [
            { label: 'Klasik', price: 700 },
            { label: 'Fade', price: 900 },
            { label: 'Nularica', price: 400 },
        ],
    },
    {
        title: 'Brada',
        items: [
            { label: 'Sredjivanje brade', price: 300 },
            { label: 'Brada na #0', price: 200 },
        ],
    },
    {
        title: 'Ostalo',
        items: [
            { label: 'Obrve', price: 200 },
            { label: 'Dizajn', price: 200 },
        ],
    },
]

function buildPriceGroups(services) {
    const groups = {
        Sisanje: [],
        Brada: [],
        Ostalo: [],
    }

    services.forEach((service) => {
        if (groups[service.category]) {
            groups[service.category].push({ label: service.title, price: service.price })
        }
    })

    return [
        { title: 'Sisanje', items: groups.Sisanje },
        { title: 'Brada', items: groups.Brada },
        { title: 'Ostalo', items: groups.Ostalo },
    ]
}

function ServicesWall() {
    const { ref, isVisible } = useInViewOnce({ threshold: 0.2 })
    const [services, setServices] = useState(fallbackServices)

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await sanityClient.fetch(
                    `*[_type == "servicesWall"][0]{
                        services[]{
                            name,
                            price,
                            category,
                            image
                        }
                    }`
                )
                if (data?.services?.length) {
                    setServices(
                        data.services.map((item) => ({
                            title: item.name,
                            price: item.price,
                            category: item.category,
                            image: item.image,
                        }))
                    )
                }
            } catch (err) {
                console.error('Sanity services fetch failed', err)
            }
        }

        fetchServices()
    }, [])

    const priceGroups = useMemo(() => {
        const hasCategory = services.some((service) => service.category)
        return hasCategory ? buildPriceGroups(services) : fallbackPriceGroups
    }, [services])

    const getImageSrc = (img, index) => {
        if (img && typeof img === 'object' && img._type === 'image') {
            return urlFor(img).width(900).height(1200).fit('crop').quality(80).auto('format').url()
        }
        return img || fallbackServices[index]?.image
    }

    return (
        <section ref={ref} className="relative w-full h-screen bg-bgprime flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 md:px-20 h-full flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center h-full max-h-[90vh]">
                    {/* Left Column: Content & Price List */}
                    <div className="lg:w-5/12 flex flex-col justify-center">
                        <div className={`space-y-4 ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
                            {/* Header Section */}
                            <div>
                                <div className="w-12 h-px bg-accent mb-3"></div>
                                <p className="text-xs uppercase tracking-[0.2em] text-prime-dark/70 font-lato mb-1">
                                    Usluge & cenovnik
                                </p>
                                <h2 className="text-3xl md:text-4xl font-bold text-prime-dark font-prata uppercase leading-tight">
                                    Najtrazenije <br /> usluge
                                </h2>
                            </div>

                            <p className="text-base text-third-dark/80 font-lato leading-relaxed max-w-sm">
                                Precizan rez, profesionalan pristup i jasne cene. Sve na jednom mestu.
                            </p>

                            <div className="pt-1 pb-4">
                                <CtaButton
                                    href="#booking"
                                    label="Zakazi termin"
                                    className="bg-prime-dark text-white px-8 py-3 rounded-sm uppercase text-[10px] tracking-widest hover:text-prime-dark hover:bg-accent transition-colors duration-300"
                                    overlayClassName="bg-white"
                                />
                            </div>

                            {/* Clean Price List */}
                            <div className="space-y-6 mt-4">
                                {priceGroups.map((group) => (
                                    <div key={group.title} className="space-y-2">
                                        <h3 className="text-lg font-prata text-prime-dark border-b border-black/10 pb-1">
                                            {group.title}
                                        </h3>
                                        <div className="space-y-1">
                                            {group.items.map((item) => (
                                                <div key={item.label} className="group flex justify-between items-center py-1 border-b border-light-gray/50 hover:pl-2 transition-all duration-300">
                                                    <span className="font-lato text-sm text-third-dark group-hover:text-prime-dark transition-colors">{item.label}</span>
                                                    <span className="font-prata text-sm font-semibold text-prime-dark">
                                                        {item.price} <span className="text-[10px] text-third-dark">RSD</span>
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image Grid */}
                    <div className={`lg:w-7/12 w-full ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-200ms' : 'opacity-0'}`}>
                        <div className="grid grid-cols-3 gap-3 md:gap-4">
                            {services.map((service, idx) => (
                                <div
                                    key={service.title}
                                    className={`relative group overflow-hidden rounded-sm bg-gray-100 ${idx % 2 !== 0 ? 'mt-4' : ''}`}
                                >
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <img
                                            src={getImageSrc(service.image, idx)}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <span className="text-white font-prata text-sm tracking-wide border-b border-accent pb-1 inline-block">
                                            {service.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesWall
