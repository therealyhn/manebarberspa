import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/Carousel.css';
import CtaButton from '../ui/CtaButton';
import 'animate.css';
import slide1 from '../../assets/slide-1.jpg';
import slide2 from '../../assets/slide-2.jpg';
import slide3 from '../../assets/slide-3.jpg';
import slide4 from '../../assets/slide-1-b.jpg';

function Carousel() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-prime-dark">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50 flex flex-col justify-center items-start px-4 sm:px-10 md:px-20 text-white text-left pt-16 sm:pt-0">
              <div className="animate__animated animate__fadeInUp max-w-2xl">
                <div className="w-16 h-px bg-third mb-4"></div>
                <p className="text-sm sm:text-xl mb-2 sm:mb-3 max-w-xl text-third drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] font-lato">
                  To nije samo sisanje, to je iskustvo</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 text-third
                drop-shadow-[0_0px_10px_rgba(1,1,1,0.5)] uppercase font-prata">Dobrodosli na Mane
                  <span className="text-third">&apos;</span>s Barbershop<br /> Web Stranicu</h1>
                <p className="text-base sm:text-lg md:text-2xl mb-2 sm:mb-3 max-w-xl text-third font-lato">
                  Najbolje frizerske usluge u gradu</p>
                <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-8 max-w-xl text-third font-lato">
                  Profesionalni frizer za modernog dzentlmena</p>
                <div className="flex flex-wrap items-center gap-4">
                  <CtaButton
                    href="#about"
                    label="O meni"
                    className="bg-second-dark text-white px-8 py-3 rounded-sm uppercase text-sm"
                    overlayClassName="bg-prime-dark"
                  />
                  <CtaButton
                    href="#booking"
                    label="Zakazi termin"
                    className="bg-second-dark text-white px-8 py-3 rounded-sm uppercase text-sm"
                    overlayClassName="bg-prime-dark"
                  />
                </div>
                <div className="w-16 h-px bg-third mt-6"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50 flex flex-col justify-center items-start px-4 sm:px-10 md:px-20 text-white text-left pt-16 sm:pt-0">
              <div className="animate__animated animate__fadeInUp max-w-2xl">
                <div className="w-16 h-px bg-third mb-4"></div>
                <p className="text-sm sm:text-xl mb-2 sm:mb-3 max-w-xl text-third drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] font-lato">
                  Klasicne i moderne frizerske usluge</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 text-third
                 drop-shadow-[0_0px_10px_rgba(1,1,1,0.5)] uppercase font-prata">Najbolji frizer</h1>
                <p className="text-base sm:text-lg md:text-2xl mb-2 sm:mb-3 max-w-xl text-third font-lato">
                  Precizni rezovi i tradicionalne tehnike</p>
                <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-8 max-w-xl text-third font-lato">
                  Kreiranje savrsenog stila za svakog klijenta</p>
                <div className="flex flex-wrap items-center gap-4">
                  <CtaButton
                    href="#about"
                    label="O meni"
                    className="bg-second-dark text-white px-8 py-3 rounded-sm uppercase text-sm"
                    overlayClassName="bg-prime-dark"
                  />
                  <CtaButton
                    href="#booking"
                    label="Zakazi termin"
                    className="bg-second-dark text-white px-8 py-3 rounded-sm uppercase text-sm"
                    overlayClassName="bg-prime-dark"
                  />
                </div>
                <div className="w-16 h-px bg-third mt-6"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50 flex flex-col justify-center items-start px-4 sm:px-10 md:px-20 text-white text-left pt-16 sm:pt-0">
              <div className="animate__animated animate__fadeInUp max-w-2xl">
                <div className="w-16 h-px bg-third mb-4"></div>
                <p className="text-sm sm:text-xl mb-2 sm:mb-3 max-w-xl text-third drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] font-lato">Najbolje iskustvo</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 text-third
                 drop-shadow-[0_0px_10px_rgba(1,1,1,0.5)] uppercase font-prata">Najbolja usluga</h1>
                <p className="text-base sm:text-lg md:text-2xl mb-2 sm:mb-3 max-w-xl text-third font-lato">
                  Prepustite se nasim jedinstvenim tretmanima</p>
                <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-8 max-w-xl text-third font-lato">
                  Podignite svoj stil uz nase vrhunske usluge</p>
                <div className="flex flex-wrap items-center gap-4">
                  <CtaButton
                    href="#about"
                    label="O meni"
                    className="bg-second-dark text-white px-8 py-3 rounded-sm uppercase text-sm"
                    overlayClassName="bg-prime-dark"
                  />
                  <CtaButton
                    href="#booking"
                    label="Zakazi termin"
                    className="bg-second-dark text-white px-8 py-3 rounded-sm uppercase text-sm"
                    overlayClassName="bg-prime-dark"
                  />
                </div>
                <div className="w-16 h-px bg-third mt-6"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src={slide4}
              alt="Slide 4"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50 flex flex-col justify-center items-start px-4 sm:px-10 md:px-20 text-white text-left pt-16 sm:pt-0">
              <div className="animate__animated animate__fadeInUp max-w-2xl">
                <div className="w-16 h-px bg-third mb-4"></div>
                <p className="text-sm sm:text-xl mb-2 sm:mb-3 max-w-xl text-third drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] font-lato">Premium nega i stil</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 text-third
                 drop-shadow-[0_0px_10px_rgba(1,1,1,0.5)] uppercase font-prata">Stil koji traje</h1>
                <p className="text-base sm:text-lg md:text-2xl mb-2 sm:mb-3 max-w-xl text-third font-lato">
                  Personalizovan pristup i preciznost u svakom detalju</p>
                <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-8 max-w-xl text-third font-lato">
                  Rezervisi termin i dozivi potpuno iskustvo</p>
                <div className="flex flex-wrap items-center gap-4">
                  <CtaButton
                    href="#about"
                    label="O meni"
                    className="bg-second-dark text-white px-8 py-3 rounded-sm uppercase text-sm"
                    overlayClassName="bg-prime-dark"
                  />
                  <CtaButton
                    href="#booking"
                    label="Zakazi termin"
                    className="bg-second-dark text-white px-8 py-3 rounded-sm uppercase text-sm"
                    overlayClassName="bg-prime-dark"
                  />
                </div>
                <div className="w-16 h-px bg-third mt-6"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
