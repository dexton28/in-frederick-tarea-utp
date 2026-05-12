const books = [
  {
    cover: '#1a3a5a',
    accent: '#2d6a9f',
    year: '1903',
    title: 'Administración de Talleres',
    original: 'Shop Management',
    publisher: 'American Society of Mechanical Engineers',
    desc: 'Mi primera gran obra sistemática. Expuse los principios del estudio de tiempos, las tarifas diferenciales y la organización del trabajo en el taller industrial. Fundamento metodológico de la Administración Científica.',
    tags: ['Estudio de tiempos', 'Organización industrial', 'Tarifas diferenciales'],
    pages: 207,
    reactions: 412,
  },
  {
    cover: '#1a2a4a',
    accent: '#0A66C2',
    year: '1911',
    title: 'Principios de Administración Científica',
    original: 'The Principles of Scientific Management',
    publisher: 'Harper & Brothers, Nueva York',
    desc: 'Mi obra cumbre. Los cuatro principios fundamentales: ciencia en lugar de empirismo, selección científica, cooperación armoniosa y división equitativa de responsabilidades. Traducida a decenas de idiomas.',
    tags: ['Cuatro principios', 'Gestión científica', 'Legado global'],
    pages: 144,
    reactions: 1847,
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Publicaciones</h2>
        <button className="text-sm font-semibold text-[#0A66C2] hover:underline">Ver todas</button>
      </div>

      <div className="space-y-4">
        {books.map((book, i) => (
          <div
            key={i}
            className={`flex gap-4 ${i < books.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}
          >
            {/* Book thumb */}
            <div
              className="flex-shrink-0 w-14 h-20 rounded-md flex items-center justify-center shadow-md overflow-hidden relative"
              style={{ backgroundColor: book.cover }}
            >
              {/* Spine */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: book.accent }} />
              <svg className="w-7 h-7 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.875V4.533zM12.75 20.625A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.092z"/>
              </svg>
              <div className="absolute bottom-1 right-1 text-white/50 text-[8px] font-bold">{book.year}</div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 leading-snug">{book.title}</h3>
              <p className="text-xs text-gray-500 italic mt-0.5">{book.original}</p>
              <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
                </svg>
                {book.publisher}
              </p>
              <p className="text-sm text-gray-600 mt-1.5 leading-relaxed line-clamp-2">{book.desc}</p>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {book.tags.map((t) => (
                  <span key={t} className="text-xs bg-blue-50 text-[#0A66C2] border border-blue-100 px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer meta */}
              <div className="flex items-center gap-4 mt-2.5 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                  </svg>
                  {book.pages} págs.
                </span>
                <span className="flex items-center gap-1">
                  👍 {book.reactions.toLocaleString()} recomendaciones
                </span>
                <button className="text-[#0A66C2] font-medium hover:underline">Leer extracto</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
