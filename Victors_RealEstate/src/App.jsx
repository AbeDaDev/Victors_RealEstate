import './index.css'
import Header from './components/Header'
import Contact from './pages/Contact'
import Footer from './components/Footer'


function App(){

    return(
        <>
          <div className="app-root">
            <main className="main-content">
                <Header />
                
            </main>
            <Contact />
            <Footer />
          </div>
        </>
    );
}

export default App
