import { useState } from 'react'

export default function ProfileCard() {
  const [connected, setConnected] = useState(false)
  const [following, setFollowing] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      {/* Cover photo */}
      <div className="relative h-32 md:h-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2] via-[#1a7fd4] to-[#004182]" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 40px),
                              repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 40px)`
          }}
        />
        {/* Gear decoration */}
        <svg className="absolute right-8 top-4 w-24 h-24 text-white/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.3.07-.62.07-.95s-.03-.66-.07-.97l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.31-.07.64-.07.97s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.58 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/>
        </svg>
        <svg className="absolute left-10 bottom-2 w-16 h-16 text-white/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.3.07-.62.07-.95s-.03-.66-.07-.97l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.31-.07.64-.07.97s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.58 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/>
        </svg>
      </div>

      <div className="px-5 pb-5">
        {/* Avatar */}
        <div className="relative -mt-14 mb-3 flex items-end justify-between">
          <div className="relative">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <img
                src="/taylor.jpeg"
                alt="Frederick Winslow Taylor"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-1.5 right-1.5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
          </div>
          {/* Action buttons */}
          <div className="flex gap-2 items-center pb-1">
            <button
              onClick={() => setConnected(!connected)}
              className={`text-sm font-semibold px-4 py-1.5 rounded-full border-2 transition-all ${
                connected
                  ? 'bg-white text-[#0A66C2] border-[#0A66C2]'
                  : 'bg-[#0A66C2] text-white border-[#0A66C2] hover:bg-[#004182]'
              }`}
            >
              {connected ? '✓ Conectado' : '+ Conectar'}
            </button>
            <button
              onClick={() => setFollowing(!following)}
              className={`text-sm font-semibold px-4 py-1.5 rounded-full border-2 transition-all ${
                following
                  ? 'bg-gray-100 text-gray-700 border-gray-300'
                  : 'bg-white text-[#0A66C2] border-[#0A66C2] hover:bg-blue-50'
              }`}
            >
              {following ? 'Siguiendo' : 'Seguir'}
            </button>
          </div>
        </div>

        {/* Name & Title */}
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              Frederick Winslow Taylor
            </h1>
            {/* Verified badge */}
            <svg className="w-5 h-5 text-[#0A66C2] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.529 3.78 3.745 3.745 0 01-3.78.529A3.745 3.745 0 0112 21a3.745 3.745 0 01-3.098-1.623 3.745 3.745 0 01-3.78-.529 3.745 3.745 0 01-.529-3.78A3.745 3.745 0 013 12a3.745 3.745 0 011.623-3.098 3.746 3.746 0 01.529-3.78 3.745 3.745 0 013.78-.529A3.745 3.745 0 0112 3a3.745 3.745 0 013.098 1.623 3.745 3.745 0 013.78.529 3.746 3.746 0 01.529 3.78A3.745 3.745 0 0121 12z"/>
            </svg>
          </div>
          <p className="text-gray-700 text-base mt-1 font-medium">
            Padre de la Administración Científica · Ingeniero Industrial · Consultor Empresarial
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Midvale Steel Works · Bethlehem Steel · Stevens Institute of Technology
          </p>

          {/* Location & Contact */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
              </svg>
              Filadelfia, Pensilvania, EE.UU.
            </span>
            <span className="text-[#0A66C2] font-medium cursor-pointer hover:underline">
              Ver información de contacto
            </span>
          </div>

          {/* Connections */}
          <div className="flex items-center gap-1 mt-2">
            <div className="flex -space-x-1.5">
              {['#1a4a7a','#2d6a9f','#0A66C2'].map((c, i) => (
                <div key={i} className="w-5 h-5 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
              ))}
            </div>
            <span className="text-[#0A66C2] text-sm font-medium cursor-pointer hover:underline">
              1.847 seguidores · 500+ conexiones
            </span>
          </div>
        </div>

        {/* Tags / Schools */}
        <div className="mt-3 flex flex-wrap gap-2">
          {['Midvale Steel Works', 'Stevens Institute of Technology', 'ASME'].map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full cursor-pointer transition-colors"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
              </svg>
              {tag}
            </span>
          ))}
        </div>

        {/* Open to work badge */}
        <div className="mt-3 border border-green-400 bg-green-50 rounded-lg px-4 py-2.5 flex items-start gap-2">
          <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <div>
            <p className="text-green-800 text-xs font-semibold">Disponible para consultoría</p>
            <p className="text-green-700 text-xs mt-0.5">Optimización de procesos · Gestión industrial · Estudios de eficiencia</p>
          </div>
        </div>
      </div>
    </div>
  )
}
