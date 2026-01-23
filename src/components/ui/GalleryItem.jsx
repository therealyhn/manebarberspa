function GalleryItem({ image, alt }) {
    return (
        <div
            className="overflow-hidden group transition-all duration-300 
            hover:scale-105 hover:shadow-md hover:shadow-gray-700 shadow-none rounded-md"
        >
            <img
                src={image}
                alt={alt}
                className="w-full h-[200px] md:h-[300px] object-cover transition-all duration-300"
            />
        </div>
    )
}

export default GalleryItem
