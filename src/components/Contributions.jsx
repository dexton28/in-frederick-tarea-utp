const items = [
  {
    emoji: '⏱️',
    title: 'Estudio de Tiempos y Movimientos',
    subtitle: 'Metodología de Optimización Industrial · 1881 – 1890',
    desc: 'Desarrollé el método de descomponer cada tarea en operaciones elementales, cronometrar cada una y eliminar todo movimiento que no añadiera valor. El resultado fue un incremento de hasta 4x en productividad sin mayor esfuerzo físico del obrero.',
    tags: ['Cronometraje', 'Estandarización', 'Reducción de desperdicios'],
    metric: '↑ 300%',
    metricLabel: 'productividad promedio',
  },
  {
    emoji: '👤',
    title: 'Selección Científica de Trabajadores',
    subtitle: 'Gestión del Talento Industrial · 1890 – 1900',
    desc: 'Propuse evaluar científicamente las aptitudes físicas e intelectuales de cada persona y asignarle la tarea para la que estuviera naturalmente mejor dotada. La persona adecuada en el puesto adecuado no es ideal abstracto, sino condición mínima de eficiencia.',
    tags: ['Evaluación de aptitudes', 'Asignación de roles', 'Formación dirigida'],
    metric: '↓ 40%',
    metricLabel: 'rotación de personal',
  },
  {
    emoji: '💰',
    title: 'Sistema de Tarifas Diferenciales',
    subtitle: 'Incentivos y Compensación · 1895',
    desc: 'Diseñé un esquema de remuneración basado en el rendimiento: tarifa alta para quien alcance el estándar científico, tarifa reducida para quien no lo alcance. La prosperidad no debe ser un juego de suma cero: patrón y obrero ganan juntos cuando el trabajo es eficiente.',
    tags: ['Incentivos por producción', 'Tarifa diferencial', 'Alineación de intereses'],
    metric: '↑ 60%',
    metricLabel: 'salario obrero eficiente',
  },
]

export default function Contributions() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Logros y Aportes Destacados</h2>
        <span className="bg-[#0A66C2]/10 text-[#0A66C2] text-xs font-semibold px-2.5 py-1 rounded-full">
          3 contribuciones
        </span>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex gap-4 ${i < items.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-11 h-11 bg-[#0A66C2]/10 rounded-lg flex items-center justify-center text-xl border border-[#0A66C2]/20">
              {item.emoji}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
                </div>
                {/* Metric badge */}
                <div className="flex-shrink-0 text-right">
                  <div className="text-base font-bold text-green-600 leading-tight">{item.metric}</div>
                  <div className="text-[10px] text-gray-400 leading-tight max-w-[80px]">{item.metricLabel}</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{item.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
