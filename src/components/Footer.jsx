export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-4 py-8">
      <div className="max-w-[1128px] mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
          {[
            'Acerca de', 'Accesibilidad', 'Centro de ayuda',
            'Privacidad', 'Condiciones', 'Publicidad',
            'Configuración', 'Ayuda',
          ].map((link) => (
            <span key={link} className="hover:text-[#0A66C2] cursor-pointer hover:underline transition-colors">
              {link}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <svg className="w-5 h-5" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" rx="4" fill="#0A66C2"/>
            <path d="M7 13h4v14H7V13zm2-6.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM15 13h3.8v1.9h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.7 5 6.3V27h-4v-7c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V27H15V13z" fill="white"/>
          </svg>
          <p className="text-xs text-gray-400">
            Red Profesional Industrial © 1911 · Perfil educativo de Frederick W. Taylor
          </p>
        </div>
      </div>
    </footer>
  )
}
