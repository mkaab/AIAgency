import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProcessComparison() {
  const [activeTab, setActiveTab] = useState('automated') // 'manual' | 'automated'

  return (
    <section id="about" className="relative py-24 bg-[#0b121e] text-[#f0ede6] overflow-hidden border-y border-white/5">
      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(240, 237, 230, 0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-brand-blue-400 text-[11px] font-sans font-medium uppercase tracking-[0.16em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Workflow Architecture
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-[-0.015em] text-white">
              The Real Cost of <em className="italic font-normal text-[#93c5fd]">Fragmented Work</em>
            </h2>
            <p className="mt-3 text-[#f0ede6]/65 max-w-[54ch] text-[15px] md:text-base leading-[1.75] font-light">
              Enterprise processes don't fail from lack of effort. They fail from friction between siloed tools, manual handoffs, and endless status chasing.
            </p>
          </div>

          {/* Interactive Switcher */}
          <div className="flex items-center p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md self-start md:self-auto shadow-xl">
            <button
              onClick={() => setActiveTab('manual')}
              className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'manual'
                  ? 'text-white shadow-lg shadow-amber-950/40'
                  : 'text-[#f0ede6]/60 hover:text-white'
              }`}
            >
              {activeTab === 'manual' && (
                <motion.div
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-amber-500/20 border border-amber-500/40"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Manual Workflow (Today)
              </span>
            </button>

            <button
              onClick={() => setActiveTab('automated')}
              className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'automated'
                  ? 'text-white shadow-lg shadow-blue-950/40'
                  : 'text-[#f0ede6]/60 hover:text-white'
              }`}
            >
              {activeTab === 'automated' && (
                <motion.div
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-brand-blue-500/25 border border-brand-blue-400/50"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-400" />
                AltaServ Autonomous Agent Flow
              </span>
            </button>
          </div>
        </div>

        {/* Diagram Canvas Container */}
        <div className="relative rounded-2xl border border-white/10 bg-[#070d17]/85 backdrop-blur-xl p-6 md:p-10 shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {activeTab === 'manual' ? (
              <motion.div
                key="manual-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full flex-1 flex flex-col justify-between"
              >
                {/* Meta summary bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
                      Status: High Friction & Latency
                    </span>
                    <span className="text-xs text-[#f0ede6]/50">Invoice-to-Payment Cycle: ~14–21 Days</span>
                  </div>
                  <div className="flex items-center gap-6 text-xs text-[#f0ede6]/70">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Manual Data Entry Loops
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      Exception Parking Traps
                    </span>
                  </div>
                </div>

                {/* SVG Visual: Looping Serpentine Manual Path */}
                <div className="relative w-full overflow-x-auto py-8">
                  <div className="min-w-[920px] h-[280px] relative">
                    <svg className="w-full h-full" viewBox="0 0 960 260" fill="none">
                      {/* Tangled Looping Curve */}
                      <path
                        d="M 20 130 
                           C 70 130, 90 90, 140 85 
                           C 190 80, 220 180, 190 190 
                           C 160 200, 150 140, 230 110 
                           C 300 80, 320 120, 380 110 
                           C 440 100, 470 190, 520 190 
                           C 570 190, 590 80, 640 90 
                           C 690 100, 700 200, 740 195 
                           C 780 190, 770 110, 810 110 
                           C 840 110, 860 170, 840 180 
                           C 820 190, 810 140, 870 130 
                           L 940 130"
                        stroke="rgba(240, 237, 230, 0.25)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />

                      {/* Animated traveling dot showing stalled progress */}
                      <circle r="4" fill="#f59e0b" className="opacity-90">
                        <animateMotion
                          path="M 20 130 C 70 130, 90 90, 140 85 C 190 80, 220 180, 190 190 C 160 200, 150 140, 230 110 C 300 80, 320 120, 380 110 C 440 100, 470 190, 520 190 C 570 190, 590 80, 640 90 C 690 100, 700 200, 740 195 C 780 190, 770 110, 810 110 C 840 110, 860 170, 840 180 C 820 190, 810 140, 870 130 L 940 130"
                          dur="9s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>

                    {/* Step 1: Shared Inbox */}
                    <div className="absolute left-[105px] top-[45px] flex flex-col items-center">
                      <span className="text-[11px] font-sans text-[#f0ede6]/70 mb-2 whitespace-nowrap">
                        Arrives in shared inbox
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#111e30] border border-white/15 flex items-center justify-center shadow-lg group hover:border-amber-400/50 transition-colors">
                        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 2: Loop to ERP */}
                    <div className="absolute left-[165px] top-[195px] flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-[#111e30] border border-white/15 flex items-center justify-center shadow-lg">
                        <span className="text-xs font-bold text-sky-400 tracking-wider">ERP</span>
                      </div>
                      <span className="text-[11px] font-sans text-[#f0ede6]/70 mt-2 whitespace-nowrap">
                        Keyed into the ERP
                      </span>
                    </div>

                    {/* Step 3: Spreadsheet Copy */}
                    <div className="absolute left-[345px] top-[70px] flex flex-col items-center">
                      <span className="text-[11px] font-sans text-[#f0ede6]/70 mb-2 whitespace-nowrap">
                        Copied into spreadsheet
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#111e30] border border-white/15 flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 4: Emailed for approval */}
                    <div className="absolute left-[490px] top-[195px] flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-[#111e30] border border-white/15 flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </div>
                      <span className="text-[11px] font-sans text-[#f0ede6]/70 mt-2 whitespace-nowrap">
                        Emailed for approval
                      </span>
                    </div>

                    {/* Step 5: Chased by phone */}
                    <div className="absolute left-[620px] top-[50px] flex flex-col items-center">
                      <span className="text-[11px] font-sans text-[#f0ede6]/70 mb-2 whitespace-nowrap">
                        Chased by phone
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#111e30] border border-white/15 flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-[#f0ede6]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 6: Exception warning trap */}
                    <div className="absolute left-[705px] top-[195px] flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center shadow-lg text-amber-400">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <span className="text-[11px] font-sans text-amber-300 mt-2 whitespace-nowrap">
                        Parked as an exception
                      </span>
                    </div>

                    {/* Step 7: Looped & Re-keyed */}
                    <div className="absolute left-[810px] top-[75px] flex flex-col items-center">
                      <span className="text-[11px] font-sans text-amber-300 mb-2 whitespace-nowrap">
                        Re-keyed after corrections
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center shadow-lg text-amber-400">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer takeaway */}
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#f0ede6]/60">
                  <p>⚠️ Result: Average of 6.2 manual touchpoints per document, invisible bottlenecks, and delayed vendor payments.</p>
                  <span className="text-amber-400 font-mono font-medium">Fragile & Unscalable</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="automated-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full flex-1 flex flex-col justify-between"
              >
                {/* Meta summary bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-mono">
                      Status: 99.2% Straight-Through Flow
                    </span>
                    <span className="text-xs text-[#f0ede6]/50">Cycle Time: &lt; 90 Seconds</span>
                  </div>
                  <div className="flex items-center gap-6 text-xs text-[#f0ede6]/70">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-blue-400" />
                      Autonomous Execution
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full border border-dashed border-brand-blue-400" />
                      Human-in-the-Loop on Exceptions
                    </span>
                  </div>
                </div>

                {/* SVG Visual: Straight Horizontal Pipeline with Branches */}
                <div className="relative w-full overflow-x-auto py-8">
                  <div className="min-w-[920px] h-[280px] relative">
                    <svg className="w-full h-full" viewBox="0 0 960 260" fill="none">
                      {/* Main Straight Line */}
                      <line
                        x1="40"
                        y1="130"
                        x2="920"
                        y2="130"
                        stroke="rgba(0, 150, 255, 0.75)"
                        strokeWidth="2"
                      />

                      {/* Secondary Documents Input Branch (PO & Receiving Doc) */}
                      <path
                        d="M 390 50 L 450 50 C 470 50, 480 80, 480 130"
                        stroke="rgba(240, 237, 230, 0.3)"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 390 85 L 450 85 C 465 85, 480 100, 480 130"
                        stroke="rgba(240, 237, 230, 0.3)"
                        strokeWidth="1.5"
                      />

                      {/* Exception Review Branch (Dotted line bypass) */}
                      <path
                        d="M 500 130 C 500 190, 520 200, 580 200 C 640 200, 660 190, 660 130"
                        stroke="rgba(51, 173, 255, 0.6)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />

                      {/* Pulse beam traveling through pipeline */}
                      <circle r="4" fill="#0096FF">
                        <animate
                          attributeName="cx"
                          values="40; 920"
                          dur="3.2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values="130; 130"
                          dur="3.2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>

                    {/* Node 1: Invoice Received */}
                    <div className="absolute left-[90px] top-[95px] flex flex-col items-center">
                      <span className="text-[11px] font-sans text-[#f0ede6]/70 mb-2 whitespace-nowrap">
                        Invoice received
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#0e1d32] border border-blue-500/40 flex items-center justify-center shadow-lg shadow-blue-950/50">
                        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Node 2: Capture & Extract (AI) */}
                    <div className="absolute left-[260px] top-[95px] flex flex-col items-center">
                      <span className="text-[11px] font-sans text-[#f0ede6]/70 mb-2 whitespace-nowrap">
                        Capture & extract
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#0e1d32] border border-blue-500/40 flex items-center justify-center shadow-lg shadow-blue-950/50 text-blue-300">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 012-2h2m10 0h2a2 2 0 012 2v2m0 10v2a2 2 0 01-2 2h-2m-10 0H5a2 2 0 01-2-2v-2M9 12h6m-3-3v6" />
                        </svg>
                      </div>
                    </div>

                    {/* Incoming Documents (PO + Receiving doc) */}
                    <div className="absolute left-[310px] top-[32px] flex items-center gap-2 text-xs text-[#f0ede6]/80 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                      <span>Purchase order</span>
                      <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>

                    <div className="absolute left-[300px] top-[70px] flex items-center gap-2 text-xs text-[#f0ede6]/80 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                      <span>Receiving document</span>
                      <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>

                    {/* Node 3: 3-way match */}
                    <div className="absolute left-[460px] top-[95px] flex flex-col items-center">
                      <div className="w-11 h-11 rounded-xl bg-[#0e1d32] border border-blue-500/40 flex items-center justify-center shadow-lg shadow-blue-950/50 text-blue-300">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <span className="text-[11px] font-sans text-[#f0ede6]/70 mt-2 whitespace-nowrap">
                        3-way match
                      </span>
                    </div>

                    {/* Matched tag */}
                    <div className="absolute left-[545px] top-[108px] text-[10px] font-mono uppercase tracking-wider text-blue-300 bg-blue-500/15 px-2 py-0.5 rounded border border-blue-500/25">
                      Matched
                    </div>

                    {/* Exception review (Human in the loop) */}
                    <div className="absolute left-[550px] top-[175px] flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-[#081220] border border-dashed border-blue-400/50 flex items-center justify-center shadow-lg text-blue-300">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-sans text-blue-300 mt-1.5 whitespace-nowrap">
                        Exception review (1-click)
                      </span>
                    </div>

                    {/* Node 4: Approved */}
                    <div className="absolute left-[640px] top-[95px] flex flex-col items-center">
                      <span className="text-[11px] font-sans text-[#f0ede6]/70 mb-2 whitespace-nowrap">
                        Approved
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-blue-600/30 border border-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/20 text-blue-200">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Node 5: Payment Scheduled in ERP */}
                    <div className="absolute left-[810px] top-[95px] flex flex-col items-center">
                      <span className="text-[11px] font-sans text-[#f0ede6]/70 mb-2 whitespace-nowrap">
                        Payment scheduled
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#0e1d32] border border-blue-500/40 flex items-center justify-center shadow-lg shadow-blue-950/50">
                        <span className="text-xs font-bold text-sky-400 tracking-wider">ERP</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer takeaway */}
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#f0ede6]/60">
                  <p>⚡ Result: Fully autonomous document ingestion, instant verification, and automatic ERP reconciliation with zero human re-keying.</p>
                  <span className="text-brand-blue-400 font-mono font-medium">99.2% Straight-Through Flow</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
