import { useMemo, useState } from 'react'
import Lightbox from '../ui/Lightbox'
import '../../styles/Gallery.css'

function formatTitle(path) {
    const file = path.split('/').pop() || ''
    const name = file.replace(/\.[^/.]+$/, '')
    const cleaned = name.replace(/[-_]+/g, ' ').trim()
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
}

function buildRows(items) {
    const rows = [[], [], []]
    items.forEach((item, index) => {
        rows[index % 3].push(item)
    })
    return rows
}

function buildLoopItems(row, minItems = 12) {
    if (row.length === 0) return []
    let filled = [...row]
    while (filled.length < minItems) {
        filled = filled.concat(row)
    }
    return filled.concat(filled)
}

function WorkGallery() {
    const [activeIndex, setActiveIndex] = useState(null)

    const items = useMemo(() => {
        const images = import.meta.glob('../../assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' })
        return Object.entries(images).map(([path, src], index) => ({
            image: src,
            title: formatTitle(path),
            index,
        }))
    }, [])

    const rows = useMemo(() => buildRows(items), [items])

    const handleOpen = (index) => setActiveIndex(index)
    const handleClose = () => setActiveIndex(null)
    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
    }
    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % items.length)
    }

    return (
        <section className="relative w-full h-screen bg-bgprime text-white overflow-hidden">
            <div className="absolute inset-8 pointer-events-none"></div>
            <div className="relative z-10 h-full flex flex-col justify-center gap-6 px-4 sm:px-10 md:px-20">
                <div className="max-w-2xl">
                    <div className="w-16 h-px bg-accent mb-4"></div>
                    <p className="text-xs sm:text-sm uppercase tracking-widest text-prime-dark font-lato">Galerija radova</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-prata uppercase text-prime-dark">
                        Trenuci preciznosti
                    </h2>
                    <p className="text-sm sm:text-base text-third-dark/80 font-lato mt-2">
                        Izaberi rad i otvori ga u punom prikazu.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {rows.map((row, rowIndex) => {
                        const loopItems = buildLoopItems(row)
                        return (
                            <div key={rowIndex} className="gallery-row">
                                <div className={`gallery-marquee-track ${rowIndex % 2 === 1 ? 'reverse' : ''}`}>
                                    {loopItems.map((item, idx) => (
                                        <button
                                            key={`${item.index}-${idx}`}
                                            type="button"
                                            className="group relative w-48 sm:w-56 md:w-64 h-32 sm:h-36 md:h-40 overflow-hidden rounded-sm border border-frame/40 bg-black/30 text-left"
                                            onClick={() => handleOpen(item.index)}
                                            aria-label={`Open ${item.title}`}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="absolute bottom-2 left-2 bg-black/60 text-xs uppercase tracking-widest px-2 py-1 rounded">
                                                {item.title}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Lightbox
                items={items}
                activeIndex={activeIndex}
                onClose={handleClose}
                onPrev={handlePrev}
                onNext={handleNext}
            />
        </section>
    )
}

export default WorkGallery
