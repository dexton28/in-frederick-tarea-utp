export default function Hero() {
  return (
    <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #d97706 0px, #d97706 1px,
            transparent 1px, transparent 40px
          ), repeating-linear-gradient(
            -45deg,
            #d97706 0px, #d97706 1px,
            transparent 1px, transparent 40px
          )`
        }}
      />

      {/* Top nav bar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-4 border-b border-amber-700/40">
        <span className="text-amber-400 text-sm font-sans tracking-[0.25em] uppercase">
          Administración Científica
        </span>
        <div className="hidden md:flex gap-6 text-sm font-sans text-stone-300 tracking-wide">
          <a href="#sobre-mi" className="hover:text-amber-400 transition-colors">Sobre mí</a>
          <a href="#aportes" className="hover:text-amber-400 transition-colors">Aportes</a>
          <a href="#proyectos" className="hover:text-amber-400 transition-colors">Obras</a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">

        {/* Portrait placeholder */}
        <div className="flex-shrink-0">
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-amber-500 shadow-2xl overflow-hidden bg-stone-700 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#44403c"/>
              {/* Simple silhouette */}
              <ellipse cx="50" cy="38" rx="18" ry="20" fill="#78716c"/>
              <ellipse cx="50" cy="38" rx="14" ry="16" fill="#a8a29e"/>
              {/* Coat collar */}
              <path d="M25 80 Q30 58 50 62 Q70 58 75 80 L100 100 L0 100Z" fill="#292524"/>
              <path d="M40 62 L50 75 L60 62" fill="#78716c"/>
              {/* Tie */}
              <path d="M47 63 L50 78 L53 63 L50 61Z" fill="#b45309"/>
            </svg>
          </div>
          <div className="mt-3 text-center">
            <span className="inline-block bg-amber-500 text-stone-900 text-xs font-sans font-bold px-3 py-1 rounded-full tracking-widest uppercase">
              1856 — 1915
            </span>
          </div>
        </div>

        {/* Text block */}
        <div className="text-center md:text-left">
          <p className="text-amber-400 text-sm font-sans tracking-[0.3em] uppercase mb-3">
            Perfil Profesional
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
            Frederick Winslow
            <span className="block text-amber-400">Taylor</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 italic mb-6 font-light">
            "Padre de la Administración Científica"
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-sans">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-stone-200">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd"/>
              </svg>
              20 de marzo de 1856
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-stone-200">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd"/>
              </svg>
              Filadelfia, Pensilvania
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-stone-200">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"/>
              </svg>
              Estadounidense
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start font-sans">
            <a href="#aportes"
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-6 py-3 rounded-lg transition-colors text-sm tracking-wide uppercase">
              Ver Aportes
            </a>
            <a href="#sobre-mi"
              className="border border-amber-500 text-amber-300 hover:bg-amber-500/10 px-6 py-3 rounded-lg transition-colors text-sm tracking-wide uppercase">
              Mi Biografía
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative z-10">
        <svg viewBox="0 0 1440 60" className="w-full fill-stone-50" preserveAspectRatio="none" style={{display:'block'}}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"/>
        </svg>
      </div>
    </header>
  )
}
