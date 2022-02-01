import './App.css'
import Nav from './components/Nav';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import Notice from './components/Notice';
import Contents from './components/Contents';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {  
    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);
    function handleScroll() {
        if(scrollY > 340) {
        setScrollY(window.pageYOffset);
        setScrollActive(true);
        } else {
        setScrollY(window.pageYOffset);
        setScrollActive(false);
        }
    }
    useEffect(() => {
        function scrollListener() {
        window.addEventListener("scroll", handleScroll);
        }
        scrollListener();
        return () => {window.removeEventListener("scroll", handleScroll)};
    })

  return (
    <>
    <Nav scrollActive={scrollActive}/>
    <div className="App">
      <Notice />
      <Header />
      <MainVisual />
      {/* Main ---------------- */}
      <Contents />
      {/* Footer -------------- */}
      <Footer />
    </div>
    </>
  );
}

export default App;
