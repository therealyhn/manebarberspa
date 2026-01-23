import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import AboutSection from './components/AboutSection'
import AboutProfile from './components/AboutProfile'
import AllServices from './components/AllServices'
import PriceSection from './components/PriceSection'
import WorkGallery from './components/WorkGallery'
import BookForm from './components/BookForm'
import Map from './components/Map'
import ContactForm from './components/ContactForm'

function App() {
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
    </div>
  )
}

export default App
