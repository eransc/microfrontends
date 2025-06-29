'use client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// This is the normal CRA/Vite entrypoint for standalone mode
if (document.getElementById('root')) {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />)
}

// This is the microfrontend mount function for the host app
window.mountDashboardCRA = (containerId) => {
  const container = document.getElementById(containerId)
  if (container) {
    ReactDOM.createRoot(container).render(<App />)
  }
}

export default function DashboardCRAHost() {
  const containerId = 'dashboard-cra-container'
  const scriptId = 'dashboard-cra-script'

  return (
    <div className="flex min-h-screen">
      {/* Sidebar here if needed */}
      <main className="flex-1 p-8 ml-64">
        <div id={containerId} />
      </main>
    </div>
  )
}
