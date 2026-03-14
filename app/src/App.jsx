import './index.css'
import Header from './components/Header'
import Sold from './components/Sold'
import Testimonials from './components/Testimonials'
import Questions from './components/Questions'
import Contact from './pages/Contact'
import Footer from './components/Footer'


function App(){

    return(
          <div className="app-root" id="top">
            <main className="main-content container">
                <Header />
                <Sold />
                <div className="hero-intro container">
                  <p className="eyebrow">Victor Serna Delgado · Realtor®</p>
                  <h1>Guiding Southern California buyers and sellers with clear strategy, strong negotiation, and concierge-level service.</h1>
                  <p className="subhead">
                    From first showings to closing day, you get proactive communication, vetted vendors, and market data you can trust—so every decision feels confident.
                  </p>
                </div>
                <h2 className="spanish-callout">Se Habla Español</h2>
                <Testimonials />
                <Questions />
            </main>
            <Contact />
            <Footer />
          </div>
    );
}

export default App
