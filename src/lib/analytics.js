export function initAnalytics() {
  const mode = import.meta.env.VITE_ANALYTICS || 'none'
  if (mode === 'none') return
  // Placeholder: wire GA or Plausible based on env in V1.1
}
