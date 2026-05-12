const jobs = [
  {
    logo: '🏭',
    company: 'Midvale Steel Works',
    roles: [
      { title: 'Ingeniero Jefe', period: '1884 – 1890 · 6 años', type: 'Tiempo completo' },
      { title: 'Capataz de Maquinaria', period: '1880 – 1884 · 4 años', type: 'Tiempo completo' },
      { title: 'Mecánico de Taller', period: '1878 – 1880 · 2 años', type: 'Tiempo completo' },
    ],
    location: 'Filadelfia, Pensilvania',
    desc: 'Ascendí desde operario hasta Ingeniero Jefe, introduciendo el estudio sistemático de tiempos y movimientos. Reduje el desperdicio en un 300% en operaciones de maquinado mediante la estandarización de herramientas y procedimientos.',
  },
  {
    logo: '⚙️',
    company: 'Bethlehem Steel Company',
    roles: [
      { title: 'Consultor de Eficiencia Industrial', period: '1898 – 1901 · 3 años', type: 'Consultoría' },
    ],
    location: 'Bethlehem, Pensilvania',
    desc: 'Implementé el célebre experimento de carga de lingotes de hierro con el trabajador "Schmidt", demostrando que la selección científica y la motivación económica podían multiplicar la producción diaria de 12,5 a 47 toneladas por trabajador.',
  },
  {
    logo: '🎓',
    company: 'Stevens Institute of Technology',
    roles: [
      { title: 'Ingeniero Mecánico (Título Honorario)', period: '1883', type: 'Formación académica' },
    ],
    location: 'Hoboken, Nueva Jersey',
    desc: 'Obtuve el título de Ingeniero Mecánico mientras ejercía como profesional activo, demostrando que la práctica industrial y el rigor académico no son caminos separados.',
  },
  {
    logo: '📢',
    company: 'Sociedad Americana de Ingenieros Mecánicos (ASME)',
    roles: [
      { title: 'Presidente', period: '1906 · 1 año', type: 'Liderazgo gremial' },
      { title: 'Miembro activo y ponente', period: '1886 – 1915 · 29 años', type: 'Participación profesional' },
    ],
    location: 'Nueva York, EE.UU.',
    desc: 'Presenté mis investigaciones clave ante la comunidad ingenieril, incluyendo "A Piece-Rate System" (1895) y "Shop Management" (1903), que sentaron las bases de la Administración Científica.',
  },
]

export default function Experience() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Experiencia</h2>
        <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
          </svg>
        </button>
      </div>

      <div className="space-y-5">
        {jobs.map((job, i) => (
          <div key={i} className={`flex gap-4 ${i < jobs.length - 1 ? 'pb-5 border-b border-gray-100' : ''}`}>
            {/* Logo */}
            <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl border border-gray-200">
              {job.logo}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-sm">{job.company}</h3>

              {/* Multiple roles */}
              <div className="mt-1 space-y-1.5">
                {job.roles.map((role, j) => (
                  <div key={j} className="flex items-start gap-2">
                    {job.roles.length > 1 && (
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0A66C2] flex-shrink-0" />
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-800">{role.title}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1.5 flex-wrap">
                        <span>{role.period}</span>
                        <span className="text-gray-300">·</span>
                        <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">{role.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>
                {job.location}
              </p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{job.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 text-sm font-semibold text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors">
        Mostrar todas las experiencias
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
        </svg>
      </button>
    </section>
  )
}
