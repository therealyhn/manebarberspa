import mustach from '../../assets/heading-line.png'

function PriceSection() {
    return (
        <div className="flex justify-center w-full bg-white">
            <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-8 lg:px-20 py-10 md:py-16 
                flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center mb-8 md:mb-16 w-full">
                    <h2 className="text-sm md:text-md font-semibold text-third-dark text-center mb-3 md:mb-4 font-lato">
                        Iskusite vrhunsko sređivanje
                    </h2>
                    <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
                        <span className="text-2xl md:text-4xl font-semibold text-black text-center font-prata">
                            Cenovnik
                        </span>
                        <img src={mustach} alt="mustach" className="w-32 md:w-50" />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 w-full max-w-4xl mx-auto">
                    {/* Hair Services */}
                    <div className="flex flex-col">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center
                         bg-third-dark text-white p-2 rounded-lg font-prata">Šišanje</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center border-b border-light-gray pb-2">
                                <span className="text-sm md:text-base font-prata">Klasik</span>
                                <span className="text-prime font-semibold font-prata">
                                    700 <span className="text-sm">rsd</span></span>
                            </div>
                            <div className="flex justify-between items-center border-b border-light-gray pb-2">
                                <span className="text-sm md:text-base font-prata">Fade</span>
                                <span className="text-prime font-semibold font-prata">
                                    900 <span className="text-sm">rsd</span></span>
                            </div>
                            <div className="flex justify-between items-center border-b border-light-gray pb-2">
                                <span className="text-sm md:text-base font-prata">Nularica</span>
                                <span className="text-prime font-semibold font-prata">
                                    400 <span className="text-sm">rsd</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Beard Services */}
                    <div className="flex flex-col">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center 
                        bg-third-dark text-white p-2 rounded-lg font-prata">Brada</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center border-b border-light-gray pb-2">
                                <span className="text-sm md:text-base font-prata">Sređivanje brade</span>
                                <span className="text-prime font-semibold font-prata">
                                    300 <span className="text-sm">rsd</span></span>
                            </div>
                            <div className="flex justify-between items-center border-b border-light-gray pb-2">
                                <span className="text-sm md:text-base font-prata">Brada na #0</span>
                                <span className="text-prime font-semibold font-prata">
                                    200 <span className="text-sm">rsd</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Other Services */}
                    <div className="flex flex-col">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center
                        bg-third-dark text-white p-2 rounded-lg font-prata">Ostale usluge</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center border-b border-light-gray pb-2">
                                <span className="text-sm md:text-base font-prata">Obrve</span>
                                <span className="text-prime font-semibold font-prata">
                                    200 <span className="text-sm">rsd</span></span>
                            </div>
                            <div className="flex justify-between items-center border-b border-light-gray pb-2">
                                <span className="text-sm md:text-base font-prata">Dizajn</span>
                                <span className="text-prime font-semibold font-prata">
                                    200 <span className="text-sm">rsd</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceSection
