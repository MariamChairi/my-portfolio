import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {/* FOND DISQUE DUR */}
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1e] to-[#0a0a0a] overflow-hidden">
          <div className="grid grid-cols-[repeat(50,minmax(20px,1fr))] grid-rows-[repeat(50,minmax(20px,1fr))] gap-px p-4 h-screen opacity-20 pointer-events-none">
            {Array.from({length: 2500}).map((_, i) => (
              <div 
                key={i} 
                className="w-1 h-1 bg-[#212529] transition-all duration-200 grid-item"
                style={{ '--i': i } as React.CSSProperties}
              />
            ))}
          </div>
          <div className="absolute top-8 right-8 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg after:absolute after:inset-0 after:bg-green-400 after:animate-ping after:rounded-full after:shadow-lg after:scale-150" />
        </div>
        
        {/* NAV TERMINAL - RESPONSIVE MOBILE-FIRST */}
        <nav className="sticky top-0 z-[1000] backdrop-blur-2xl bg-card/95 border-b border-border/50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-lg md:text-2xl font-mono">
              ~/portfolio/mariam
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex space-x-4 font-mono text-sm">
              <Link href="/">/</Link>
              <Link href="/about">about/</Link>
              <Link href="/skills">skills/</Link>
              <Link href="/projects">projects/</Link>
              <Link href="/contact">contact/</Link>
            </div>

            {/* Mobile Button - simplifiée sans composant externe */}
            <div className="md:hidden">
              <details className="cursor-pointer">
                <summary className="list-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
                    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="absolute top-full left-0 right-0 flex flex-col space-y-4 p-6 bg-card border-b border-border font-mono">
                  <Link href="/">/</Link>
                  <Link href="/about">about/</Link>
                  <Link href="/skills">skills/</Link>
                  <Link href="/projects">projects/</Link>
                  <Link href="/contact">contact/</Link>
                </div>
              </details>
            </div>
          </div>
        </nav>
        
        {/* CONTENU PRINCIPAL - Z-INDEX 10 */}
        <main className="relative z-10 min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
          {children}
        </main>
        
        {/* FOOTER TERMINAL */}
        <footer className="z-20 backdrop-blur-xl bg-card/95 border-t border-border/50 shadow-xl">
  <div className="max-w-6xl mx-auto px-6 py-3 text-[11px] font-mono">
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-center text-muted-foreground/70">
      <span>📁 12+ Projets</span>
      <span>•</span>
      <span>⚙️ 10+ Technos</span>
      <span>•</span>
      <span>📍 Tétouan, MA</span>
      <span>•</span>
      <span className="text-green-400">● Online</span>
    </div>
  </div>
</footer>
      </body>
    </html>
  )
}
