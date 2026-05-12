import { useState } from 'react'

const fullText = `Nací en Filadelfia, Pensilvania, el 20 de marzo de 1856. Aunque mi familia me trazó el camino del derecho en Harvard, elegí comenzar desde los cimientos de la industria: ingresé como aprendiz de mecánico en Enterprise Hydraulic Works a los 18 años, decidido a conocer la producción desde adentro.

En Midvale Steel Works ascendí metódicamente desde obrero hasta Ingeniero Jefe, observando a diario algo que me perturbaba profundamente: la enorme ineficiencia que reinaba disfrazada de rutina. Los trabajadores producían menos de lo que podían, la gerencia no tenía métodos para medirlo, y nadie aplicaba la ciencia al trabajo manual.

Mi misión se volvió clara: reemplazar la improvisación con método científico. Estudié, medí, cronometré y sistematicé cada tarea hasta convertir el trabajo en una ciencia verificable y reproducible. El fruto de ese esfuerzo son los Principios de la Administración Científica, que transformaron para siempre la manera en que el mundo organiza el trabajo humano.`

const shortText = fullText.slice(0, 220) + '...'

export default function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h2 className="text-lg font-bold text-gray-900 mb-3">Acerca de</h2>
      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
        {expanded ? fullText : shortText}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors"
      >
        {expanded ? 'Ver menos ▲' : 'Ver más ▼'}
      </button>

      {/* Key metrics row */}
      <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-3 text-center">
        {[
          { value: '40+', label: 'Años de investigación' },
          { value: '1.8K', label: 'Seguidores' },
          { value: '500+', label: 'Conexiones' },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-xl font-bold text-[#0A66C2]">{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
