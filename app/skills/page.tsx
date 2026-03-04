"use client"

import { useState } from 'react'

const skills = {
  languages: ['Java', 'Python', 'C', 'PHP', 'JavaScript'],
  frameworks: ['.NET', 'Spring Boot', 'Jakarta EE', 'JavaFX', 'React', 'Angular', 'Django', 'Flask', 'PyQt', 'Android'],
  databases: ['MySQL', 'Oracle', 'SQLite'],
  devops: ['Docker', 'Git', 'CI/CD'],
  others: ['Hadoop', 'Power BI', 'Odoo']
}

const categories = [
  { name: 'languages', label: 'Langages', icon: '💻', color: 'from-blue-500 to-indigo-500' },
  { name: 'frameworks', label: 'Frameworks', icon: '⚙️', color: 'from-emerald-500 to-teal-500' },
  { name: 'databases', label: 'Base de données', icon: '🗄️', color: 'from-purple-500 to-violet-500' },
  { name: 'devops', label: 'DevOps', icon: '🐳', color: 'from-cyan-500 to-blue-500' },
  { name: 'others', label: 'Autres', icon: '🔧', color: 'from-orange-500 to-red-500' }
]

export default function Skills() {
  const [openFolder, setOpenFolder] = useState<number | null>(null)

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header disque dur */}
      <div className="text-center mb-24">
        <div className="inline-flex items-center space-x-4 p-6 bg-card/80 backdrop-blur-xl rounded-3xl border border-muted mb-12 shadow-2xl">
          <div className="w-6 h-6 bg-red-500 rounded-full" />
          <div className="w-6 h-6 bg-yellow-500 rounded-full" />
          <div className="w-6 h-6 bg-green-500 rounded-full" />
          <div className="ml-4 font-mono text-sm text-muted-foreground">~/skills</div>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-mono tracking-widest bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          SKILLS/
        </h1>
        <div className="text-lg text-muted-foreground font-mono">5 catégories, 10+ technos</div>
      </div>

      {/* Grille catégories - NOUVEAU STYLE */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 mb-20">
        {categories.map((category, i) => {
          const items = skills[category.name as keyof typeof skills]
          return (
            <div key={i} className="group h-auto md:h-[420px] hover:shadow-2xl">
              <div className="bg-card border-2 border-border/50 rounded-3xl p-8 h-full flex flex-col shadow-lg hover:border-primary/50 hover:shadow-xl glass">
                
                {/* Header catégorie avec couleur unique */}
                <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-border/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary/30">
                    <span className={`text-2xl ${openFolder === i ? 'text-primary' : 'text-primary/70'}`}>
                      {category.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-mono text-2xl font-bold text-foreground">{category.label}</h3>
                  </div>
                </div>

                {/* Liste technos - SCROLLBAR DARK CUSTOM */}
                <div className="flex-1 space-y-3 pr-3 custom-scrollbar">
                  {items.map((skill, skillIdx) => (
                    <div key={skillIdx} className="group flex items-center space-x-4 p-4 rounded-2xl bg-black/20 border border-slate-800/50 hover:bg-slate-800/30 hover:border-slate-700/60 transition-all duration-200">
                      <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-200 rounded-full" />
                      <span className="font-mono text-base font-medium text-slate-200 truncate group-hover:text-slate-100">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                <style jsx>{`
                  .custom-scrollbar {
                    overflow-y: auto;
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
            </div>
          );
        })}
      </div>

    </div>
  )
}