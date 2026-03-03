export default function About() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header disque dur */}
      <div className="text-center mb-24">
        <div className="inline-flex items-center space-x-4 p-6 bg-card/80 backdrop-blur-xl rounded-3xl border border-muted mb-12 shadow-2xl">
          <div className="w-6 h-6 bg-red-500 rounded-full" />
          <div className="w-6 h-6 bg-yellow-500 rounded-full" />
          <div className="w-6 h-6 bg-green-500 rounded-full" />
          <div className="ml-4 font-mono text-sm text-muted-foreground">~/about</div>
        </div>
        <h1 className="text-6xl md:text-8xl font-mono tracking-widest bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          ABOUT/
        </h1>
        <div className="text-lg text-muted-foreground font-mono">profil, formation</div>
      </div>

      {/* Grille profil + formation intégrée */}
      <div className="grid lg:grid-cols-2 gap-16 items-start p-8 mb-20">
        {/* Profil - Terminal style */}
        <div className="group h-[660px] hover:shadow-2xl relative">
          <div className="bg-card border-2 border-slate-800/50 rounded-3xl p-8 h-full flex flex-col shadow-xl hover:border-slate-700/70 hover:shadow-black/20 glass">
            
            {/* Terminal header */}
            <div className="flex items-center space-x-3 mb-8 p-4 bg-slate-900/30 rounded-2xl border border-slate-800/50">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <div className="ml-3 font-mono text-xs text-slate-400 tracking-wider">mariam.chairi</div>
            </div>

            {/* Avatar + nom */}
            <div className="text-center mb-12">
              <div className="w-18 h-18 bg-gradient-to-br from-slate-800/50 to-black/30 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-slate-700/70 shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-400 rounded-full shadow-xl" />
              </div>
              <h2 className="font-mono text-3xl font-bold text-slate-100 mb-2 tracking-tight">Mariam Chairi</h2>
              <p className="text-lg text-slate-400 font-mono uppercase tracking-wider">Software Engineer</p>
            </div>

           {/* Infos - Dark cards avec SVG icons */}
            <div className="space-y-6 flex-1">
              <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl">
                <h3 className="font-mono text-lg font-semibold text-slate-300 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Location</span>
                </h3>
                <p className="text-slate-400 font-mono text-sm">Tétouan, Maroc</p>
              </div>

              <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl flex-1">
                <h3 className="font-mono text-lg font-semibold text-slate-300 mb-4 flex items-center">
                  📚 <span className="ml-3">Languages</span>
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-800/50 px-4 py-3 rounded-xl text-xs text-slate-300 border border-slate-700/70 font-mono">🇲🇦 Arabe <strong>Native</strong></div>
                  <div className="bg-slate-800/50 px-4 py-3 rounded-xl text-xs text-slate-300 border border-slate-700/70 font-mono">🇫🇷 Français <strong>Avancé</strong></div>
                  <div className="bg-slate-800/50 px-4 py-3 rounded-xl text-xs text-slate-300 border border-slate-700/70 font-mono">🇺🇸 Anglais <strong>Intermédiaire</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formation - SIMPLE & ÉLÉGANT */}
        <div className="group h-[660px] hover:shadow-2xl relative">
          <div className="bg-card border-2 border-slate-800/50 rounded-3xl p-8 h-full flex flex-col shadow-xl hover:border-slate-700/70 hover:shadow-black/20 glass">
            
            {/* Titre Formation centré */}
                    <div className="text-center mb-16">
                      <h3 className="font-mono text-3xl font-bold text-slate-100 mb-2 tracking-tight">Formation</h3>
                      <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                    </div>

            {/* Liste diplômes - Cards simples */}
            <div className="flex-1 space-y-4">
              {/* Master */}
              <div className="group-hover:bg-slate-900/20 transition-all duration-300 p-6 border border-slate-800/40 rounded-2xl hover:border-slate-700/60">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-mono font-semibold text-lg text-slate-200 mb-1">Master Ingénierie Informatique</h4>
                    <p className="text-slate-400 font-mono text-sm">Université Abdelmalek Essaâdi</p>
                    <p className="text-xs text-slate-500 font-mono mt-1">Faculté des Sciences Tétouan, Maroc</p>
                  </div>
                </div>
              </div>

              {/* Licence */}
              <div className="group-hover:bg-slate-900/20 transition-all duration-300 p-6 border border-slate-800/40 rounded-2xl hover:border-slate-700/60">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-mono font-semibold text-lg text-slate-200 mb-1">Licence Mathématique et Informatique</h4>
                    <p className="text-slate-400 font-mono text-sm">Université Abdelmalek Essaâdi</p>
                    <p className="text-xs text-slate-500 font-mono mt-1">Faculté des Sciences Tétouan, Maroc</p>
                  </div>
                </div>
              </div>

              {/* Bac */}
              <div className="group-hover:bg-slate-900/20 transition-all duration-300 p-6 border border-slate-800/40 rounded-2xl hover:border-slate-700/60">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-mono font-semibold text-lg text-slate-200 mb-1">Baccalauréat Sciences Physiques</h4>
                    <p className="text-slate-400 font-mono text-sm">Lycée Kadiayad de Tétouan</p>
                    <p className="text-xs text-slate-500 font-mono mt-1">Tétouan, Maroc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
