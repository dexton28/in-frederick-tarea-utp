const skills = [
  { name: 'Estudio de Tiempos y Movimientos', endorsements: 287, top: true },
  { name: 'Gestión Industrial', endorsements: 241 },
  { name: 'Selección Científica de Personal', endorsements: 198 },
  { name: 'Diseño de Sistemas de Incentivos', endorsements: 176 },
  { name: 'Estandarización de Procesos', endorsements: 154 },
  { name: 'Consultoría en Productividad', endorsements: 132 },
  { name: 'Ingeniería Mecánica', endorsements: 119 },
  { name: 'Liderazgo Industrial', endorsements: 98 },
]

const endorsers = [
  { name: 'Henri Fayol', title: 'Padre de la Teoría Administrativa' },
  { name: 'Henry Ford', title: 'Fundador, Ford Motor Company' },
  { name: 'Frank Gilbreth', title: 'Ingeniero de Eficiencia, Gilbreth Inc.' },
]

export default function Skills() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Aptitudes</h2>
        <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z"/>
          </svg>
        </button>
      </div>

      <div className="space-y-3">
        {skills.map((skill, i) => (
          <div key={i} className={`${i < skills.length - 1 ? 'pb-3 border-b border-gray-100' : ''}`}>
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                  {skill.top && (
                    <span className="bg-[#0A66C2]/10 text-[#0A66C2] text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
                      Top
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <svg className="w-3.5 h-3.5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-xs text-gray-500">{skill.endorsements} recomendaciones</span>
                </div>
              </div>
              <button className="flex-shrink-0 flex items-center gap-1 text-[#0A66C2] border border-[#0A66C2] hover:bg-blue-50 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"/>
                </svg>
                Recomendar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Endorsers section */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">También recomendado por</p>
        <div className="space-y-2.5">
          {endorsers.map((e, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {e.name[0]}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800 hover:text-[#0A66C2] cursor-pointer">{e.name}</p>
                <p className="text-xs text-gray-500 leading-tight">{e.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
