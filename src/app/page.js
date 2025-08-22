import './globals.css'
import HeroSection from './components/HeroSection';
import Story from './components/Story'
import AstroLoan from './components/Astroloan';
import TokenomicsSection from './components/Tokenomic';
import Vesting from './components/Vesting';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
       <HeroSection />
       <Story />
       <AstroLoan />
       <TokenomicsSection />
       <Vesting />
       <Roadmap />
       <Footer />
    </main>
  )
}
