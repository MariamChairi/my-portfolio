"use client"
import { useState } from 'react'

const projects = [
  { 
    name: "travel-agency", 
    title: "Agence Voyage", 
    tech: "Spring Boot • Angular • Docker", 
    desc: "Application complète gestion clients, Réservations, Paiements",
    points: "Archi sécurisée • Déploiement Docker"
  },
  { 
    name: "facial-recog", 
    title: "Présences Faciales", 
    tech: "Flask • OpenCV • Python", 
    desc: "Identification automatique + Enregistrement temps réel",
    points: "Automatisation • Interface admin"
  },
  { 
    name: "client-server", 
    title: "Architecture Distribuée", 
    tech: "Java • Sockets • RMI", 
    desc: "Système client-serveur avec concurrence",
    points: "Communication réseau • Threads"
  },
  { 
    name: "ecommerce", 
    title: "Plateforme E-commerce", 
    tech: "PHP • Ajax • MySQL", 
    desc: "Panier, Commandes, Admin Panel",
    points: "UX optimisée • Recommandations"
  },
  { 
    name: "school-mgmt", 
    title: "Gestion Scolarité", 
    tech: "Django • PyQt5 • SQLite", 
    desc: "Multi-plateforme web + Desktop",
    points: "Ergonomie • Logique métier"
  },
  { 
    name: "recipes-app", 
    title: "Recettes Mobile", 
    tech: "Android • Java", 
    desc: "Navigation fluide + Thèmes dynamiques",
    points: "UX intuitive • Design moderne"
  },
  { 
    name: "car-rental", 
    title: "Location Automobile", 
    tech: "JavaFX", 
    desc: "Gestion véhicules + Réservations",
    points: "Interface graphique moderne"
  }
]

export default function Projects() {
  const [openFolder, setOpenFolder] = useState<number | null>(null)

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header terminal */}
      <div className="text-center mb-24">
        <div className="inline-flex items-center space-x-4 p-6 bg-card/80 backdrop-blur-xl rounded-3xl border border-muted mb-12 shadow-2xl">
          <div className="w-6 h-6 bg-red-500 rounded-full" />
          <div className="w-6 h-6 bg-yellow-500 rounded-full" />
          <div className="w-6 h-6 bg-green-500 rounded-full" />
          <div className="ml-4 font-mono text-sm text-muted-foreground">~/projects</div>
        </div>
        <h1 className="text-6xl md:text-8xl font-mono tracking-widest bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          PROJETS/
        </h1>
        <div className="text-lg text-muted-foreground font-mono">7 dossiers, 7 fichiers</div>
      </div>

      {/* Grille PROJETS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {projects.map((project, i) => (
          <div 
            key={i}
            className="group relative h-80 cursor-pointer"
            onClick={() => setOpenFolder(openFolder === i ? null : i)}
          >
            {/* Card projet simple */}
            <div className={`bg-card border-2 border-border rounded-3xl p-8 h-full flex flex-col justify-between shadow-lg hover:border-primary/50 hover:shadow-xl ${openFolder === i ? 'ring-2 ring-primary/50 z-10 shadow-2xl' : ''}`}>
              
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 rounded-xl flex items-center justify-center mb-6 text-3xl">
                <span className={`${openFolder === i ? 'text-primary' : 'text-primary/70'}`}>
                  📁
                </span>
              </div>

              {/* Nom projet */}
              <div className="mb-6">
                <h3 className="font-mono text-xl font-bold text-foreground mb-2 truncate">{project.name.replace('-', '/')}</h3>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono">{project.tech}</p>
              </div>

              {/* Barre progression statique */}
              <div className="w-full h-2 bg-muted/50 rounded-full mb-6">
                <div className="h-2 bg-primary rounded-full w-[80%]" />
              </div>

              {/* Métadonnées */}
              <div className="space-y-1 text-xs text-muted-foreground font-mono">
                <div>type: application</div>
                <div>stack: full-stack</div>
              </div>
            </div>

            {/* Contenu ouvert - SIMPLE */}
            {openFolder === i && (
              <div className="absolute inset-0 bg-card/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-primary shadow-2xl z-20">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-mono font-bold text-primary">{project.title}</h3>
                  <button 
                    onClick={() => setOpenFolder(null)}
                    className="text-xl text-muted-foreground hover:text-primary"
                  >
                    ×
                  </button>
                </div>
                <p className="text-muted-foreground mb-6 font-mono leading-relaxed">{project.desc}</p>
                <div className="text-xs text-primary/80 font-mono mb-8 p-4 bg-secondary/50 border border-secondary/50 rounded-xl">
                  <strong>Points forts:</strong><br />
                  {project.points}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}
