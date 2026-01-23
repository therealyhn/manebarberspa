import { useState } from 'react'
import BookButton from './BookButton'
import logo from '../assets/logo-text.png';
import 'animate.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNavClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-prime-dark">
            <div className="flex justify-between items-center p-1 lg:justify-evenly">
                <div className="px-4">
                    <img src={logo} alt="logo" className="w-24" />
                </div>

                <button
                    className="lg:hidden text-white px-4"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex gap-8 uppercase">
                        <li><a href="#home" onClick={handleNavClick} className="text-light-gray hover:text-prime
                         transition-all duration-300 text-sm font-semibold font-prata uppercase">Početna</a></li>
                        <li><a href="#about" onClick={handleNavClick} className="text-light-gray hover:text-prime
                         transition-all duration-300 text-sm font-semibold font-prata uppercase">O meni</a></li>
                        <li><a href="#services" onClick={handleNavClick} className="text-light-gray hover:text-prime
                         transition-all duration-300 text-sm font-semibold font-prata uppercase">Usluge</a></li>
                        <li><a href="#work" onClick={handleNavClick} className="text-light-gray hover:text-prime
                         transition-all duration-300 text-sm font-semibold font-prata uppercase">Moji radovi</a></li>
                        <li><a href="#contact" onClick={handleNavClick} className="text-light-gray hover:text-prime
                         transition-all duration-300 text-sm font-semibold font-prata uppercase">Kontakt</a></li>
                    </ul>
                    <BookButton />
                </div>

                <div
                    className={`lg:hidden absolute top-full left-0 w-full bg-prime-dark shadow-md ${isMenuOpen
                            ? 'animate__animated animate__fadeInDown'
                            : 'animate__animated animate__fadeOutUp'
                        } ${!isMenuOpen && 'hidden'}`}
                >
                    <ul className="flex flex-col items-center py-4">
                        <li className="py-2"><a href="#home" onClick={handleNavClick}
                            className="text-light-gray hover:text-white transition-all duration-300 
                        text-sm font-bold font-prata uppercase">Početna</a></li>
                        <li className="py-2"><a href="#about" onClick={handleNavClick}
                            className="text-light-gray hover:text-white transition-all duration-300 
                        text-sm font-bold font-prata uppercase">O meni</a></li>
                        <li className="py-2"><a href="#services" onClick={handleNavClick}
                            className="text-light-gray hover:text-white transition-all duration-300 
                        text-sm font-bold font-prata uppercase">Usluge</a></li>
                        <li className="py-2"><a href="#work" onClick={handleNavClick}
                            className="text-light-gray hover:text-white transition-all duration-300 
                        text-sm font-bold font-prata uppercase">Moji radovi</a></li>
                        <li className="py-2"><a href="#contact" onClick={handleNavClick}
                            className="text-light-gray hover:text-white transition-all duration-300 
                        text-sm font-bold font-prata uppercase">Kontakt</a></li>
                        <li className="py-2"><BookButton /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
