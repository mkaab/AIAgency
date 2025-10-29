import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.jsx'
import { applyBasicMeta } from './lib/seo.js'
import { initAnalytics } from './lib/analytics.js'

applyBasicMeta({
  title: 'AltaServ — Human Intelligence. Augmented.',
  description: 'AltaServ helps teams design and deploy trustworthy AI augmentation and automation for real business outcomes.',
  siteUrl: import.meta.env.VITE_SITE_URL,
})
initAnalytics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main id="main">
      <App />
    </main>
  </StrictMode>,
)
