function ServiceCard({ image, title, wrapperClassName = '', imageClassName = '', titleClassName = '' }) {
    return (
        <div className={`flex flex-col items-center px-2 sm:px-4 ${wrapperClassName}`}>
            <img
                src={image}
                alt={title}
                className={imageClassName}
            />
            <h3 className={`mt-2 md:mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center font-prata ${titleClassName}`}>
                {title}
            </h3>
        </div>
    )
}

export default ServiceCard
