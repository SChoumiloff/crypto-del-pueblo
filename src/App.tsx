import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TokenCounter } from './components/TokenCounter';
import { HowToBuy } from './components/HowToBuy';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import './styles/animations.css';
import { Toaster } from 'react-hot-toast';
import { YouTubePlayer } from './components/YouTubePlayer';

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <div className="font-poppins">
        <Header />
        <Hero />
        <About />
        <TokenCounter />
        <YouTubePlayer />
        <HowToBuy />
        <Community />
        <Footer />
      </div>
    </>
  );
}

export default App;