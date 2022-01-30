import './App.css'
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import Notice from './components/Notice';
import Contents from './components/Contents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
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
