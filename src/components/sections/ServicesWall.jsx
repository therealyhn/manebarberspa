import useInViewOnce from '../../hooks/useInViewOnce'
import CtaButton from '../ui/CtaButton'
import service1 from '../../assets/service-10.webp'
import service2 from '../../assets/service-2.png'
import service3 from '../../assets/service-3.png'
import service4 from '../../assets/service-4.jpg'
import service5 from '../../assets/service-5.jpg'
import service6 from '../../assets/service-6.png'

const services = [
    { image: service1, title: 'Klasik' },
    { image: service4, title: 'Fade' },
    { image: service5, title: 'Nularica' },
    { image: service3, title: 'Brada' },
    { image: service6, title: 'Brada na #0' },
    { image: service2, title: 'Dizajn' },
]

const priceGroups = [
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

function ServicesWall() {
    const { ref, isVisible } = useInViewOnce({ threshold: 0.2 })

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
                                {priceGroups.map((group, idx) => (
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
                    <div className={`hidden lg:block lg:w-7/12 w-full ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-200ms' : 'opacity-0'}`}>
                        <div className="grid grid-cols-3 gap-3 md:gap-4">
                            {services.map((service, idx) => (
                                <div
                                    key={service.title}
                                    className={`relative group overflow-hidden rounded-sm bg-gray-100 ${idx % 2 !== 0 ? 'mt-4' : ''}`}
                                >
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale"
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
