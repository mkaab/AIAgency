export function applyBasicMeta({ title, description, siteUrl }) {
  if (title) document.title = title
  const d = document.querySelector('meta[name="description"]') || document.createElement('meta')
  d.name = 'description'; d.content = description || ''
  if (!d.parentNode) document.head.appendChild(d)
  if (siteUrl) {
    const c = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    c.rel = 'canonical'; c.href = siteUrl
    if (!c.parentNode) document.head.appendChild(c)
  }
}
