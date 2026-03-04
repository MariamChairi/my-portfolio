import Link from 'next/link'

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header disque dur */}
      <div className="text-center mb-24">
        <div className="inline-flex items-center space-x-4 p-6 bg-card/80 backdrop-blur-xl rounded-3xl border border-muted mb-12 shadow-2xl">
          <div className="w-6 h-6 bg-red-500 rounded-full" />
          <div className="w-6 h-6 bg-yellow-500 rounded-full" />
          <div className="w-6 h-6 bg-green-500 rounded-full" />
          <div className="ml-4 font-mono text-sm text-muted-foreground">~/contact</div>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-mono tracking-widest bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          CONTACT/
        </h1>
        <div className="text-lg text-slate-400 font-mono max-w-xl mx-auto">
          Contacter moi directement via LinkedIn ou GitHub
        </div>
      </div>

      {/* UNE SECTION LARGE HORIZONTALE */}
      <div className="group h-auto md:h-[420px] relative mx-auto max-w-5xl p-4 md:p-8 mb-20">
        <div className="bg-card border-2 border-slate-800/50 rounded-3xl h-full flex flex-col items-center justify-center shadow-xl hover:border-slate-700/70 hover:shadow-black/20 glass p-6 md:p-12">
          

          {/* Réseaux - Responsive col/row */}
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-center">
            
            {/* LinkedIn */}
            <Link href="https://www.linkedin.com/in/mariam-chairi-8471a3389" className="group/link flex flex-col md:flex-row items-center gap-4 md:gap-6 p-6 md:p-8 bg-slate-900/30 rounded-3xl border border-slate-800/50 hover:bg-slate-800/50 flex-1 min-w-0">
              <div className="w-16 md:w-20 h-16 md:h-20 flex-shrink-0 bg-slate-950/50 rounded-3xl flex items-center justify-center border-2 border-slate-800/60 shadow-xl group-hover/link:border-blue-500/50">
                <svg className="w-8 md:w-10 h-8 md:h-10 text-slate-400 group-hover/link:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1 text-center md:text-left">
                <p className="font-mono text-xs md:text-sm text-slate-400 font-medium mb-1">LinkedIn</p>
                <p className="font-mono font-semibold text-slate-100 truncate">/in/mariam-chairi</p>
              </div>
            </Link>

            {/* GitHub */}
            <Link href="https://github.com/MariamChairi" className="group/link flex flex-col md:flex-row items-center gap-4 md:gap-6 p-6 md:p-8 bg-slate-900/30 rounded-3xl border border-slate-800/50 hover:bg-slate-800/50 flex-1 min-w-0">
              <div className="w-16 md:w-20 h-16 md:h-20 flex-shrink-0 bg-slate-950/50 rounded-3xl flex items-center justify-center border-2 border-slate-800/60 shadow-xl group-hover/link:border-blue-500/50">
                <svg className="w-8 md:w-10 h-8 md:h-10 text-slate-400 group-hover/link:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.176 2.873.171 3.176.768.84 1.239 1.91 1.239 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1 text-center md:text-left">
                <p className="font-mono text-xs md:text-sm text-slate-400 font-medium mb-1">GitHub</p>
                <p className="font-mono font-semibold text-slate-100 truncate">@MariamChairi</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
