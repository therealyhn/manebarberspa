function CtaButton({ href, label, className = '', overlayClassName = 'bg-prime-dark', textClassName = 'font-prata' }) {
    return (
        <a
            href={href}
            className={`relative overflow-hidden group inline-block ${className}`}
        >
            <span className={`relative z-10 ${textClassName}`}>{label}</span>
            <span
                className={`absolute inset-0 ${overlayClassName} transform translate-x-[-100%] 
                group-hover:translate-x-0 transition-transform duration-500`}
            ></span>
        </a>
    )
}

export default CtaButton
