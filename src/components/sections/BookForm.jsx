import bookImg from '../../assets/book.jpg';

function BookForm() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <img src={bookImg} alt="Booking" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4 py-8 md:py-0">
                <div className="flex flex-col md:flex-row bg-transparent p-4 md:p-8 rounded-lg shadow-lg w-full max-w-7xl">
                    <div className="w-full md:w-2/5 md:pr-4 flex flex-col items-center justify-center text-center">
                        <h2 className="text-xl md:text-3xl font-bold text-white mb-6 font-prata">
                            Skeniraj QR kod i zakazi termin
                        </h2>
                        <div className="w-full h-64 md:h-72 flex items-center justify-center relative border border-white/20 bg-black/30 backdrop-blur-sm">
                            <div className="absolute inset-4 border border-white/10 pointer-events-none"></div>
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-lato">
                                    QR Booking
                                </span>
                                <span className="text-3xl md:text-5xl font-bold text-white font-prata">
                                    Coming Soon
                                </span>
                                <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-lato">
                                    Skener uskoro aktivan
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/5 flex flex-col items-center justify-center my-6 md:my-0">
                        <span className="text-2xl md:text-4xl font-bold text-white font-prata">ili</span>
                    </div>

                    <div className="w-full md:w-2/5 md:pl-4 flex flex-col items-center justify-center text-center">
                        <h2 className="text-xl md:text-3xl font-bold text-white mb-4 font-prata">Instagram Profil</h2>
                        <p className="text-white mb-4 text-sm md:text-base font-lato">
                            Zakazi termin putem Instagram profila
                        </p>
                        <a
                            href="https://www.instagram.com/manemuskifrizer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto bg-prime text-white py-2 px-4 mb-6 rounded hover:bg-prime-dark 
                            transition-colors duration-300 uppercase text-sm font-prata"
                        >
                            Poseti Instagram
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookForm;
