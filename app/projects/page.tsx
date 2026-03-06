"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const projects = [
  { 
    name: "travel-agency", 
    title: "Agence Voyage", 
    tech: "Spring Boot • Angular • Docker", 
    desc: "Application complète gestion clients, Réservations, Paiements",
    points: "Architecture sécurisée • Déploiement Docker",
    image: "/projects/travel.png"
  },
  { 
    name: "facial-recog", 
    title: "Présences Faciales", 
    tech: "Flask • OpenCV • Python", 
    desc: "Identification automatique + Enregistrement temps réel",
    points: "Automatisation • Interface admin",
    image: "/projects/recog.png"
  },
  { 
    name: "client-server", 
    title: "Architecture Distribuée", 
    tech: "Java • Sockets • RMI", 
    desc: "Système client-serveur avec concurrence",
    points: "Communication réseau • Threads",
    image: "/projects/c_s.png"
  },
  { 
    name: "ecommerce", 
    title: "Plateforme E-commerce", 
    tech: "PHP • Ajax • MySQL", 
    desc: "Panier, Commandes, Admin Panel",
    points: "UX optimisée • Recommandations",
    image: "/projects/ecom.png"
  },
  { 
    name: "school-mgmt", 
    title: "Gestion Scolarité", 
    tech: "Django • PyQt5 • SQLite", 
    desc: "Multi-plateforme web + Desktop",
    points: "Ergonomie • Logique métier",
    image: "/projects/school.png"
  },
  { 
    name: "recipes-app", 
    title: "Recettes Mobile", 
    tech: "Android • Java", 
    desc: "Navigation fluide + Thèmes dynamiques",
    points: "UX intuitive • Design moderne",
    image: "/projects/rec.png"
  },
  { 
    name: "car-rental", 
    title: "Location Automobile", 
    tech: "JavaFX", 
    desc: "Gestion véhicules + Réservations",
    points: "Interface graphique moderne",
    image: "/projects/car.png"
  }
]

export default function Projects() {
  const [selected, setSelected] = useState<any>(null)

  // Bloquer le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selected])

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-4 p-4 md:p-6 bg-card/80 backdrop-blur-xl rounded-3xl border border-muted mb-6 shadow-2xl">
          <div className="w-6 h-6 bg-red-500 rounded-full" />
          <div className="w-6 h-6 bg-yellow-500 rounded-full" />
          <div className="w-6 h-6 bg-green-500 rounded-full" />
          <div className="ml-4 font-mono text-sm text-muted-foreground">~/projects</div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-mono tracking-widest bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          PROJETS/
        </h1>

        <div className="text-lg text-muted-foreground font-mono">
          {projects.length} dossiers, {projects.length} fichiers
        </div>
      </div>

      {/* Grid Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div 
            key={i}
            onClick={() => setSelected(project)}
            className="cursor-pointer group bg-card border-2 border-border rounded-3xl p-6 flex flex-col hover:shadow-xl transition"
          >

            <div className="text-3xl mb-6 text-center">📁</div>

            <h3 className="font-mono text-lg font-bold mb-2 truncate text-center">
              {project.name.replace("-", "/")}
            </h3>

            <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono text-center">
              {project.tech}
            </p>

          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center p-6 z-[9999]">

          <div className="bg-card max-w-3xl w-full rounded-3xl p-6 md:p-10 relative max-h-[90vh] overflow-y-auto custom-scrollbar">

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-6 text-2xl hover:text-primary"
            >
              ×
            </button>

            <h2 className="text-3xl font-mono font-bold mb-6 text-primary">
              {selected.title}
            </h2>

            {/* Image */}
            <Image
              src={selected.image}
              alt={selected.title}
              width={900}
              height={500}
              className="rounded-xl mb-6 border"
              priority
            />

            <p className="mb-6 text-muted-foreground font-mono leading-relaxed">
              {selected.desc}
            </p>

            <div className="p-4 bg-secondary rounded-xl text-sm font-mono">
              <strong>Points forts:</strong>
              <br/>
              {selected.points}
            </div>

          </div>

        </div>
      )}

      {/* Scrollbar Style */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #475569 transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 2px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>

    </div>
  )
}