import useInViewOnce from '../../hooks/useInViewOnce'
import CtaButton from '../ui/CtaButton'
import PriceRow from '../ui/PriceRow'
import service1 from '../../assets/service-10.webp'
import service2 from '../../assets/service-2.png'
import service3 from '../../assets/service-3.png'
import service4 from '../../assets/service-4.jpg'
import service5 from '../../assets/service-5.jpg'
import service6 from '../../assets/service-6.png'
import service7 from '../../assets/service-7.png'

const services = [
    { image: service1, title: 'Klasik', className: 'col-span-2' },
    { image: service4, title: 'Fade', className: 'col-span-2' },
    { image: service5, title: 'Nularica', className: 'col-span-2' },
    { image: service3, title: 'Brada', className: 'col-span-3' },
    { image: service6, title: 'Brada na #0', className: 'col-span-3' },
    { image: service2, title: 'Dizajn', className: 'col-span-3' },
    { image: service7, title: 'Obrve', className: 'col-span-3' },
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
    const { ref, isVisible } = useInViewOnce({ threshold: 0.3 })

    return (
        <section ref={ref} className="relative w-full min-h-screen bg-bgprime">
            <div className="absolute inset-8 border border-frame/40 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-10 md:px-20 py-16">
                <div className="flex flex-col justify-center lg:flex-row gap-10">
                    <div className="lg:w-5/12 flex flex-col justify-center">
                        <div className={`space-y-6 ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
                            <div className="w-16 h-px bg-accent"></div>
                            <p className="text-sm sm:text-lg uppercase tracking-widest text-second font-lato">
                                Usluge & cenovnik
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-prime-dark font-prata uppercase">
                                Najtrazenije usluge
                            </h2>
                            <p className="text-base sm:text-lg text-third-dark font-lato">
                                Precizan rez, profesionalan pristup i jasne cene. Sve na jednom mestu.
                            </p>
                            <CtaButton
                                href="#booking"
                                label="Zakazi termin"
                                className="bg-second-dark text-white px-8 py-3 rounded-sm uppercase text-sm"
                                overlayClassName="bg-prime-dark"
                            />

                            <div className="border border-frame/40 rounded-surface shadow-soft-panel bg-panel-light p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-lg font-bold uppercase tracking-widest text-third-dark">Cenovnik</span>
                                    <span className="w-10 h-px bg-accent"></span>
                                </div>
                                <div className="flex flex-col gap-6">
                                    {priceGroups.map((group) => (
                                        <div key={group.title} className="flex flex-col gap-3">
                                            <h3 className="text-base font-semibold border-b border-black/20 uppercase tracking-widest text-third-dark font-lato">
                                                {group.title}
                                            </h3>
                                            {group.items.map((item) => (
                                                <PriceRow key={item.label} label={item.label} price={item.price} />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-7/12 flex items-center justify-center">
                        <div className="grid grid-cols-6 gap-4 w-full max-w-3xl">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className={`group overflow-hidden rounded-surface border border-frame/40 bg-white ${service.className} ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                                        }`}
                                >
                                    <div className="relative h-28 sm:h-32 md:h-36">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <div className="px-4 py-4 flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-prime-dark font-prata">
                                            {service.title}
                                        </h3>
                                        <span className="text-xs uppercase tracking-widest text-second">Detalji</span>
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
