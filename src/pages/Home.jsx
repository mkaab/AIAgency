import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Team from '../components/Team'
import CaseStudies from '../components/CaseStudies'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import PageReveal from '../components/PageReveal'

export default function Home() {
    return (
        <>
            <PageReveal />
            <Hero />
            <About />
            <Services />
            <Stats />
            <Team />
            <CaseStudies />
            <FAQ />
            <Contact />
        </>
    )
}
