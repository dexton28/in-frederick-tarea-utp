export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1128px] mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* LinkedIn-style logo */}
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" rx="4" fill="#0A66C2"/>
            <path d="M7 13h4v14H7V13zm2-6.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM15 13h3.8v1.9h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.7 5 6.3V27h-4v-7c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V27H15V13z" fill="w[...]
          </svg>
          <span className="hidden sm:block text-gray-600 text-sm font-medium">Red Profesional Industrial</span>
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-[280px] hidden md:block">
          <div className="flex items-center bg-blue-50 border border-blue-100 rounded-md px-3 py-1.5 gap-2">
            <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
            </svg>
            <input
              id="searchInput"
              name="searchInput"
              type="text"
              placeholder="Buscar personas, empresas..."
              className="bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none w-full"
              readOnly
            />
          </div>
        </div>

        {/* Nav icons */}
        <div className="flex items-center gap-1">
          {[
            { label: 'Inicio', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-[...]
            { label: 'Red', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 [...]
            { label: 'Mensajes', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.[...]
          ].map((item) => (
            <button key={item.label} className="flex flex-col items-center justify-center w-12 h-12 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors gap-0.5 group">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {item.icon}
              </svg>
              <span className="text-[10px] leading-none hidden lg:block">{item.label}</span>
            </button>
          ))}
          <button className="ml-1 flex items-center gap-1.5 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors">
            + Conectar
          </button>
        </div>
      </div>
    </nav>
  )
}
