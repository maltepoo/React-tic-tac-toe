import './App.css'
import Nav from './components/Nav';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import Notice from './components/Notice';
import Contents from './components/Contents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Notice />
      <Header />
      <MainVisual />
      {/* Main ---------------- */}
      <Contents />
      {/* Footer -------------- */}
      <Footer />
    </div>
  );
}

export default App;
