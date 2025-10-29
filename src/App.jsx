import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import Team from './components/Team'
import CaseStudies from './components/CaseStudies'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import { ParallaxProvider } from 'react-scroll-parallax'
import PageReveal from './components/PageReveal'

export default function App() {
  return (
    <ParallaxProvider>
      <Layout>
        <PageReveal />
        <Hero />
        <About />
        <Services />
        <Stats />
        <Team />
        <CaseStudies />
        <FAQ />
        <Contact />
      </Layout>
    </ParallaxProvider>
  )
}
