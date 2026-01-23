function SectionHeading({
    subtitle,
    title,
    imageSrc,
    imageAlt = '',
    wrapperClassName = '',
    subtitleClassName = '',
    titleClassName = '',
    imageClassName = '',
}) {
    return (
        <div className={`flex flex-col items-center justify-center ${wrapperClassName}`}>
            {subtitle && (
                <p className={subtitleClassName}>{subtitle}</p>
            )}
            <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
                {title && (
                    <h2 className={titleClassName}>{title}</h2>
                )}
                {imageSrc && (
                    <img src={imageSrc} alt={imageAlt} className={imageClassName} />
                )}
            </div>
        </div>
    )
}

export default SectionHeading
