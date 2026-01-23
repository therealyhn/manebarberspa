import { useState } from 'react'

function WorkGallery() {
    // Vite's dynamic import
    const images = Object.values(import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' }));
    const [showAll, setShowAll] = useState(false);
    const displayedImages = showAll ? images : images.slice(0, 8);
    return (
        <div className="w-full px-4 py-10 bg-bgprime">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                {displayedImages.map((image, index) => (
                    <div
                        key={index}
                        className="overflow-hidden group transition-all duration-300 
                        hover:scale-105 hover:shadow-md hover:shadow-gray-700 shadow-none rounded-md"
                    >
                        <img
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-[200px] md:h-[300px] object-cover transition-all duration-300"
                        />
                    </div>
                ))}
            </div>

            {images.length > 8 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="relative bg-prime text-white px-8 py-3 rounded-sm uppercase text-sm overflow-hidden group">
                        <span className="relative z-10 font-prata">
                            {showAll ? 'Prikaži manje' : 'Prikaži više  '}
                        </span>
                        <div className="absolute inset-0 bg-third-dark transform translate-x-[-100%] 
                        group-hover:translate-x-0 transition-transform duration-500"></div>
                    </button>
                </div>
            )}
        </div>
    )
}

export default WorkGallery
