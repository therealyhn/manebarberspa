import Navbar from '../components/layout/Navbar'
import Carousel from '../components/sections/Carousel'
import AboutSection from '../components/sections/AboutSection'
import AboutProfile from '../components/sections/AboutProfile'
import AllServices from '../components/sections/AllServices'
import PriceSection from '../components/sections/PriceSection'
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
          <AboutSection />
        </section>

        <section id="about" className="scroll-mt-24">
          <AboutProfile />
        </section>

        <section id="services" className="scroll-mt-24">
          <AllServices />
          <PriceSection />
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
