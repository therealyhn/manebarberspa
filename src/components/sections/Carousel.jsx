import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/Carousel.css';
import BookButton from '../ui/BookButton';
import 'animate.css';
import slide1 from '../../assets/slide-1.jpg';
import slide2 from '../../assets/slide-2.jpg';
import slide3 from '../../assets/slide-3.jpg';

function Carousel() {
  return (
    <div className="w-full h-[60vh] sm:h-[80vh] bg-prime-dark">
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
          <div className="relative w-full h-full">
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-full object-cover sm:object-center"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-4 sm:px-10 md:px-20
             text-white pt-16 sm:pt-0">
              <div className="animate__animated animate__fadeInUp ml-4 sm:ml-10 md:ml-20">
                <p className="text-xs sm:text-lg mb-2 sm:mb-3 max-w-xl text-second drop-shadow-[0_0px_10px_rgba(1,1,1,1)] font-lato">
                  To nije samo šišanje, to je iskustvo</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-third
                drop-shadow-[0_0px_10px_rgba(1,1,1,0.5)] uppercase font-prata">Dobrodošli na Mane
                  <span className="text-third">&apos;</span>s Barbershop<br /> Web Stranicu</h1>
                <p className="text-sm sm:text-base md:text-xl mb-2 sm:mb-3 max-w-xl text-second font-lato">
                  Najbolje frizerske usluge u gradu</p>
                <p className="text-sm sm:text-sm md:text-lg mb-4 sm:mb-8 max-w-xl text-second font-lato">
                  Profesionalni frizer za modernog džentlmena</p>
                <BookButton />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-full object-cover sm:object-center"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-4 sm:px-10 md:px-20
             text-white pt-16 sm:pt-0">
              <div className="animate__animated animate__fadeInUp ml-4 sm:ml-10 md:ml-20">
                <p className="text-xs sm:text-lg mb-2 sm:mb-3 max-w-xl text-second font-lato">
                  Klasične i moderne frizerske usluge</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-third
                 drop-shadow-[0_0px_10px_rgba(1,1,1,0.5)] uppercase font-prata">Najbolji frizer</h1>
                <p className="text-sm sm:text-base md:text-xl mb-2 sm:mb-3 max-w-xl text-second font-lato">
                  Precizni rezovi i tradicionalne tehnike</p>
                <p className="text-sm sm:text-sm md:text-lg mb-4 sm:mb-8 max-w-xl text-second font-lato">
                  Kreiranje savršenog stila za svakog klijenta</p>
                <BookButton />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-full object-cover sm:object-center"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-4 sm:px-10 md:px-20
             text-white pt-16 sm:pt-0">
              <div className="animate__animated animate__fadeInUp ml-4 sm:ml-10 md:ml-20">
                <p className="text-xs sm:text-lg mb-2 sm:mb-3 max-w-xl text-second font-lato">Najbolje iskustvo</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-third
                 drop-shadow-[0_0px_10px_rgba(1,1,1,0.5)] uppercase font-prata">Najbolja usluga</h1>
                <p className="text-sm sm:text-base md:text-xl mb-2 sm:mb-3 max-w-xl text-second font-lato">
                  Prepustite se našim jedinstvenim tretmanima</p>
                <p className="text-sm sm:text-sm md:text-lg mb-4 sm:mb-8 max-w-xl text-second font-lato">
                  Podignite svoj stil uz naše vrhunske usluge</p>
                <BookButton />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
