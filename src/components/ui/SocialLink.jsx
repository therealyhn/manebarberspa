function SocialLink({ href, iconSrc, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer hover:text-prime transition-colors"
        >
            <img src={iconSrc} alt="" className="w-6 h-6" />
            <span className="text-sm font-prata">{label}</span>
        </a>
    )
}

export default SocialLink
