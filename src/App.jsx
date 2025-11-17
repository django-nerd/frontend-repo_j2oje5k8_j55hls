import React from 'react'
import Header from './components/Header'
import Responder from './components/Responder'
import Outreach from './components/Outreach'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E4E6FA' }}>
      <div className="mx-auto max-w-5xl px-4 pb-16">
        <Header />

        <div className="mt-6 grid gap-6">
          <Responder />
          <Outreach />
        </div>

        <footer className="mt-10 text-center text-xs text-slate-600">
          Built for early-stage brands to start and grow faster.
        </footer>
      </div>
    </div>
  )
}

export default App
