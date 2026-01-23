import 'animate.css'
import PropTypes from 'prop-types'
import mustach from '../assets/heading-line-2.png'

function Header({ title, subtitle, image }) {
    return (
        <div className="relative w-full h-[50vh] md:h-[70vh] bg-prime-dark">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover md:object-cover md:object-center opacity-80"
                style={{ filter: 'brightness(0.6)' }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-second mb-3 font-lato animate__animated animate__fadeInDown drop-shadow-md max-w-xl">
                    {subtitle}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-prata animate__animated animate__fadeInUp leading-tight tracking-wide drop-shadow-lg max-w-3xl">
                    {title}
                </h1>
                <img src={mustach} alt="mustach" className="w-28 md:w-40 mt-4" />
            </div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Header
