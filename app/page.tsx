"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [activeSection, setActiveSection] = useState<'about' | 'stats' | null>(null)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center relative">
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 p-6 bg-card/80 backdrop-blur-xl rounded-3xl border border-muted mb-12 shadow-2xl">
            <div className="w-6 h-6 bg-red-500 rounded-full" />
            <div className="w-6 h-6 bg-yellow-500 rounded-full" />
            <div className="w-6 h-6 bg-green-500 rounded-full" />
            <div className="ml-4 font-mono text-sm text-muted-foreground">~/home</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-mono tracking-widest bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            MARIAM CHAIRI
          </h1>
          <div className="text-lg text-muted-foreground font-mono">Ingénieure en Informatique</div>
        </div>

        {/* Boutons navigation - CD non cliquable par défaut */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center mb-24">
          <Link href="/projects">
            <div className="btn-cd group font-mono text-xl px-16 py-10 shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-3xl glass cursor-pointer transition-all duration-500">
              cd projects/
              <span className="ml-4 inline-block w-6 h-6 border-2 border-current border-dashed rounded animate-spin-slow" />
            </div>
          </Link>
          
          <Link href="/skills">
            <div className="group font-mono text-xl px-16 py-10 border-2 border-primary shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-3 rounded-3xl glass cursor-pointer transition-all duration-500 bg-transparent text-primary hover:bg-primary text-primary-foreground">
              ls skills/
              <span className="ml-4 text-xs opacity-75">_</span>
            </div>
          </Link>
        </div>

        {/* Stats 3D */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          <div className="group bg-card/85 backdrop-blur-xl rounded-3xl p-12 border border-border/50 glass">
            <div className="text-6xl font-mono font-bold text-primary mb-6">12+</div>
            <div className="font-mono text-lg uppercase tracking-wider text-muted-foreground mb-2">projets</div>
            <div className="text-sm font-mono text-muted-foreground/70">Spring • Django • Docker</div>
          </div>

          <div className="group bg-card/85 backdrop-blur-xl rounded-3xl p-12 border border-border/50 glass">
            <div className="text-6xl font-mono font-bold text-accent mb-6">Master</div>
            <div className="font-mono text-lg uppercase tracking-wider text-muted-foreground mb-2">ingénierie info</div>
            <div className="text-sm font-mono text-muted-foreground/70">Tétouan • Maroc</div>
          </div>

          <div className="group bg-card/85 backdrop-blur-xl rounded-3xl p-12 border border-border/50 glass">
            <div className="text-6xl font-mono font-bold text-secondary mb-6">10+</div>
            <div className="font-mono text-lg uppercase tracking-wider text-muted-foreground mb-2">technos</div>
            <div className="text-sm font-mono text-muted-foreground/70">Java • Python • Angular</div>
          </div>
        </div>

        {/* Terminal accueil */}
        <div className="p-10 bg-card/80 backdrop-blur-xl rounded-3xl border border-muted shadow-3xl glass">
          <div className="font-mono text-xl leading-relaxed">
            <span className="text-green-400">marriam@portfolio</span><span className="text-muted-foreground">:</span><span className="text-blue-400">~</span>$ <span className="text-primary font-bold cursor-text">_</span>
            <br />
            <span className="ml-8 text-sm opacity-75">bienvenue dans mon système de fichiers</span>
          </div>
        </div>
      </div>
    </div>
  )
}
