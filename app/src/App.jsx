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
