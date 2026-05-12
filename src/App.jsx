import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'
import About from './components/About'
import Experience from './components/Experience'
import Contributions from './components/Contributions'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Quote from './components/Quote'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f3f2ef' }}>
      <Navbar />
      <main className="max-w-[1128px] mx-auto px-4 pt-4 pb-8 grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-3">
        {/* Left column */}
        <div className="flex flex-col gap-3">
          <ProfileCard />
          <About />
          <Experience />
          <Contributions />
          <Projects />
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-3">
          <Quote />
          <Skills />
        </div>
      </main>
      <Footer />
    </div>
  )
}
