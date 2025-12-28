import Layout from './components/Layout'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Nexus from './pages/Nexus'

export default function App() {
    return (
        <ParallaxProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/products/nexus" element={<Nexus />} />
                </Routes>
            </Layout>
        </ParallaxProvider>
    )
}
