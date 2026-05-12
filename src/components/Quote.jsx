export default function Quote() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
        </svg>
        <h2 className="text-base font-bold text-gray-900">Mi Filosofía</h2>
      </div>

      {/* Quote card */}
      <div className="bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-xl p-5 text-white relative overflow-hidden">
        <div className="absolute top-2 left-3 text-white/15 text-7xl font-serif leading-none select-none">"</div>
        <p className="relative z-10 text-sm leading-relaxed italic font-light mt-3">
          El objetivo principal de la administración debe ser asegurar la máxima prosperidad
          para el patrón, junto con la máxima prosperidad para cada uno de los empleados.
        </p>
        <div className="mt-3 pt-3 border-t border-white/20 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">F</div>
          <div>
            <p className="text-xs font-semibold">F. W. Taylor</p>
            <p className="text-white/60 text-[10px]">Principios de Administración Científica, 1911</p>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="mt-4 space-y-2">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Mis 4 Principios</p>
        {[
          { n: '1', text: 'Ciencia en lugar de empirismo y reglas prácticas' },
          { n: '2', text: 'Selección y entrenamiento científico del trabajador' },
          { n: '3', text: 'Cooperación cordial entre dirección y obreros' },
          { n: '4', text: 'División equitativa del trabajo y la responsabilidad' },
        ].map((p) => (
          <div key={p.n} className="flex items-start gap-2.5">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0A66C2] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
              {p.n}
            </span>
            <p className="text-sm text-gray-700 leading-snug">{p.text}</p>
          </div>
        ))}
      </div>

      {/* Reaction bar */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <span>👍❤️💡</span>
          <span>2.341 reacciones</span>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-1 hover:text-[#0A66C2] font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"/>
            </svg>
            Me gusta
          </button>
          <button className="flex items-center gap-1 hover:text-[#0A66C2] font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186M10.5 4.5v15m0-15a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0 15a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM21 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
            </svg>
            Compartir
          </button>
        </div>
      </div>
    </section>
  )
}
