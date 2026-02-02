import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/Carousel.css';
import CtaButton from '../ui/CtaButton';
import 'animate.css';
import { sanityClient, urlFor } from '../../lib/sanity';

const fallbackSlides = [
  {
    eyebrow: 'To nije samo sisanje, to je iskustvo',
    heading: "Dobrodosli na Mane's Barbershop Web Stranicu",
    subheading: 'Najbolje frizerske usluge u gradu',
    description: 'Profesionalni frizer za modernog dzentlmena',
  },
  {
    eyebrow: 'Klasicne i moderne frizerske usluge',
    heading: 'Najbolji frizer',
    subheading: 'Precizni rezovi i tradicionalne tehnike',
    description: 'Kreiranje savrsenog stila za svakog klijenta',
  },
  {
    eyebrow: 'Najbolje iskustvo',
    heading: 'Najbolja usluga',
    subheading: 'Prepustite se nasim jedinstvenim tretmanima',
    description: 'Podignite svoj stil uz nase vrhunske usluge',
  },
  {
    eyebrow: 'Premium nega i stil',
    heading: 'Stil koji traje',
    subheading: 'Personalizovan pristup i preciznost u svakom detalju',
    description: 'Rezervisi termin i dozivi potpuno iskustvo',
  },
];

function Carousel() {
  const [slides, setSlides] = useState(fallbackSlides);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "hero"][0]{
            slides[]{
              eyebrow,
              heading,
              subheading,
              description,
              image
            }
          }`
        );
        if (data?.slides?.length) {
          setSlides(
            data.slides.map((slide) => ({
              eyebrow: slide.eyebrow,
              heading: slide.heading,
              subheading: slide.subheading,
              description: slide.description,
              image: slide.image,
            }))
          );
        }
      } catch (err) {
        console.error('Sanity hero fetch failed', err);
      }
    };

    fetchHero();
  }, []);

  const isSanityImage = (img) => typeof img === 'object' && img?._type === 'image';

  const renderImage = (image, index, altText) => {
    if (isSanityImage(image)) {
      const imgUrl = urlFor(image).width(1600).height(900).fit('crop').quality(80).auto('format').url();
      const imgUrlSmall = urlFor(image).width(900).height(506).fit('crop').quality(75).auto('format').url();
      const imgUrlLarge = urlFor(image).width(2200).height(1238).fit('crop').quality(80).auto('format').url();
      return (
        <img
          src={imgUrl}
          srcSet={`${imgUrlSmall} 900w, ${imgUrl} 1600w, ${imgUrlLarge} 2200w`}
          sizes="(max-width: 768px) 100vw, 100vw"
          alt={altText}
          className="w-full h-full object-cover object-center"
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={index === 0 ? 'high' : 'auto'}
        />
      );
    }

    return (
      <img
        src={image}
        alt={altText}
        className="w-full h-full object-cover object-center"
        loading={index === 0 ? 'eager' : 'lazy'}
        decoding="async"
        fetchpriority={index === 0 ? 'high' : 'auto'}
      />
    );
  };

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
        {slides.map((slide, index) => (
          <SwiperSlide key={`hero-slide-${index}`}>
            <div className="relative w-full h-screen">
              {renderImage(slide.image, index, slide.heading)}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50 flex flex-col justify-center items-start px-4 sm:px-10 md:px-20 text-white text-left pt-16 sm:pt-0">
                <div className="animate__animated animate__fadeInUp max-w-2xl">
                  <div className="w-16 h-px bg-third mb-4"></div>
                  {slide.eyebrow && (
                    <p className="text-sm sm:text-xl mb-2 sm:mb-3 max-w-xl text-third drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] font-lato">
                      {slide.eyebrow}
                    </p>
                  )}
                  {slide.heading && (
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 text-third
                     drop-shadow-[0_0px_10px_rgba(1,1,1,0.5)] uppercase font-prata">
                      {slide.heading}
                    </h1>
                  )}
                  {slide.subheading && (
                    <p className="text-base sm:text-lg md:text-2xl mb-2 sm:mb-3 max-w-xl text-third font-lato">
                      {slide.subheading}
                    </p>
                  )}
                  {slide.description && (
                    <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-8 max-w-xl text-third font-lato">
                      {slide.description}
                    </p>
                  )}
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
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
