import { Link, useLocation } from 'react-router-dom'
import { Code2, User, Briefcase, BookOpen, Play, Terminal } from 'lucide-react'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: User },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/blog', label: 'Blog', icon: BookOpen },
    { path: '/now-playing', label: 'Now Playing', icon: Play },
    { path: '/playground', label: 'Playground', icon: Terminal },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <Code2 size={24} />
            <span className="font-mono font-bold">DN</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-mono transition-colors ${
                  location.pathname === path
                    ? 'text-emerald-400 bg-slate-800'
                    : 'text-gray-300 hover:text-emerald-400 hover:bg-slate-800'
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-emerald-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation