import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import tiktok from '../../assets/tiktok.png'

function Footer() {
    return (
        <div className="w-full bg-prime-dark text-white py-12 px-4 sm:px-6 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <img src={logo} alt="logo" className="w-72 mx-auto" />
                </div>

                {/* Contact Information */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <h3 className="text-xl font-semibold mb-2 text-prime text-center md:text-left font-prata">Kontakt</h3>
                    <div className="flex flex-col gap-2 space-y-4 text-center md:text-left">
                        <p className="text-sm font-prata">Prvog Maja 37, Kovačićevo</p>
                        <p className="text-sm font-prata">manesbarbershop@gmail.com</p>
                        <p className="text-sm font-prata">+381 64 125 04 70</p>
                    </div>
                </div>

                {/* Opening Hours */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <h3 className="text-xl font-semibold mb-2 text-prime text-center md:text-left font-prata">Radno Vreme</h3>
                    <div className="flex flex-col gap-2 space-y-4 text-center md:text-left">
                        <p className="text-sm font-prata">Ponedeljak - Subota: 9:00 - 21:00</p>
                        <p className="text-sm font-prata">Nedelja: Zatvoreno</p>
                        <p className="text-sm font-prata">Praznici: Zatvoreno</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
                {/* Instagram Link */}
                <div
                    className="flex items-center gap-2 cursor-pointer hover:text-prime transition-colors"
                    onClick={() => window.open('https://www.instagram.com/manemuskifrizer/', '_blank')}
                >
                    <img src={instagram} alt="Instagram" className="w-6 h-6" />
                    <span className="text-sm font-prata">/manemuskifrizer</span>
                </div>

                {/* TikTok Link */}
                <div className="flex items-center gap-2 cursor-pointer hover:text-prime transition-colors"
                    onClick={() => window.open('https://www.tiktok.com/@manemuskifrizer', '_blank')} >  
                    <img src={tiktok} alt="TikTok" className="w-6 h-6" />
                    <span className="text-sm font-prata">@manemuskifrizer</span>
                </div>
            </div>


            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 grid grid-cols-1 md:grid-cols-2 
            gap-4 text-center md:text-left">
                <p className="text-sm text-light-gray font-prata">
                    © 2023 Mane Barbershop. All rights reserved.
                </p>
                <p className="text-sm text-light-gray text-center md:text-right font-prata">
                    Designed by <a href="https://jovanljusic.com" target="_blank" rel="noopener noreferrer"
                        className="hover:text-third text-prime underline transition-colors font-prata">Jovan Ljusic</a>
                </p>
            </div>
        </div>
    )
}

export default Footer
