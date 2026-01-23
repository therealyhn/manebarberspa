import mustach from '../../assets/heading-line.png'
import SectionHeading from '../ui/SectionHeading'
import PriceGroup from '../ui/PriceGroup'

function PriceSection() {
    const groups = [
        {
            title: 'Šišanje',
            items: [
                { label: 'Klasik', price: 700 },
                { label: 'Fade', price: 900 },
                { label: 'Nularica', price: 400 },
            ]
        },
        {
            title: 'Brada',
            items: [
                { label: 'Sređivanje brade', price: 300 },
                { label: 'Brada na #0', price: 200 },
            ]
        },
        {
            title: 'Ostale usluge',
            items: [
                { label: 'Obrve', price: 200 },
                { label: 'Dizajn', price: 200 },
            ]
        }
    ]

    return (
        <div className="flex justify-center w-full bg-white">
            <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-8 lg:px-20 py-10 md:py-16 
                flex flex-col items-center justify-center">
                <SectionHeading
                    subtitle="Iskusite vrhunsko sređivanje"
                    title="Cenovnik"
                    imageSrc={mustach}
                    imageAlt="heading divider"
                    wrapperClassName="mb-8 md:mb-16 w-full"
                    subtitleClassName="text-sm md:text-md font-semibold text-third-dark text-center mb-3 md:mb-4 font-lato"
                    titleClassName="text-2xl md:text-4xl font-semibold text-black text-center font-prata"
                    imageClassName="w-32 md:w-50"
                />

                <div className="grid grid-cols-1 gap-8 w-full max-w-4xl mx-auto">
                    {groups.map((group) => (
                        <PriceGroup key={group.title} title={group.title} items={group.items} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PriceSection
