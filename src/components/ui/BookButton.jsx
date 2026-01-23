function BookButton() {
    return (
        <a
            href="#booking"
            className="relative bg-second-dark text-white px-8 py-3 rounded-sm uppercase text-sm
            overflow-hidden group inline-block">
            <span className="relative z-10 font-prata">Zakaži termin</span>
            <div className="absolute inset-0 bg-prime-dark transform translate-x-[-100%] 
                group-hover:translate-x-0 transition-transform duration-500"></div>
        </a>
    )
}

export default BookButton
