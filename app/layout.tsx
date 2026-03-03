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
        
        {/* NAV TERMINAL - Z-INDEX 1000 */}
        <nav className="sticky top-0 z-[1000] backdrop-blur-2xl bg-card/95 border-b border-border/50 shadow-2xl isolate">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-mono bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight cursor-pointer">
                ~/portfolio/mariam
              </Link>
              <div className="flex space-x-1 text-sm font-mono bg-secondary/70 px-4 py-2 rounded-xl backdrop-blur-sm border border-border/50">
                <Link href="/" className="px-3 py-2 rounded-lg transition-all hover:bg-primary/30 hover:scale-105 cursor-pointer">/</Link>
                <Link href="/about" className="px-3 py-2 rounded-lg transition-all hover:bg-primary/30 hover:scale-105 cursor-pointer">about/</Link>
                <Link href="/skills" className="px-3 py-2 rounded-lg transition-all hover:bg-primary/30 hover:scale-105 cursor-pointer">skills/</Link>
                <Link href="/projects" className="px-3 py-2 rounded-lg transition-all hover:bg-primary/30 hover:scale-105 cursor-pointer">projects/</Link>
                <Link href="/contact" className="px-3 py-2 rounded-lg transition-all hover:bg-primary/30 hover:scale-105 cursor-pointer">contact/</Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* CONTENU PRINCIPAL - Z-INDEX 10 */}
        <main className="relative z-10 min-h-screen py-24 px-8 max-w-7xl mx-auto">
          {children}
        </main>
        
        {/* FOOTER TERMINAL */}
        <footer className="z-20 backdrop-blur-xl bg-card/95 border-t border-border/50 shadow-xl">
  <div className="max-w-6xl mx-auto px-6 py-3 text-[11px] font-mono">
    <div className="flex items-center justify-center space-x-8 text-muted-foreground/70">
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
