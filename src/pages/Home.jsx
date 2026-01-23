import Navbar from '../components/layout/Navbar'
import Carousel from '../components/sections/Carousel'
import AboutHero from '../components/sections/AboutHero'
import ServicesWall from '../components/sections/ServicesWall'
import WorkGallery from '../components/sections/WorkGallery'
import BookForm from '../components/sections/BookForm'
import Map from '../components/sections/Map'
import ContactForm from '../components/sections/ContactForm'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main>
        <section id="home">
          <Carousel />
        </section>

        <section aria-hidden="true" className="w-full bg-prime-dark">
          <div className="w-full h-px bg-third/40"></div>
        </section>

        <section id="about" className="scroll-mt-10">
          <AboutHero />
        </section>

        <section id="services" className="scroll-mt-10">
          <ServicesWall />
        </section>

        <section id="work" className="scroll-mt-24">
          <WorkGallery />
        </section>

        <section id="booking" className="scroll-mt-24">
          <BookForm />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Map />
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
