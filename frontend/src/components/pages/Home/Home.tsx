import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowRight, Terminal } from 'lucide-react'
import TypingAnimation from '../../common/TypingAnimation'

const Home = () => {
  const [showConsole, setShowConsole] = useState(false)
  const [consoleText, setConsoleText] = useState('')

  const keywords = [
    'Java 17 Engineer',
    'Spring Boot Developer',
    'Microservices Architect',
    'AI/ML Enthusiast',
    'Database Expert',
    'Cloud Solutions Builder',
    'Open Source Contributor'
  ]

  const techStack = [
    { category: 'Backend', items: ['Java 17', 'Spring Boot', 'PostgreSQL', 'GraphQL'] },
    { category: 'Cloud', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform'] },
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
    { category: 'AI/ML', items: ['LangChain', 'OpenAI', 'TensorFlow', 'Bedrock'] }
  ]

  useEffect(() => {
    const easterEggTimeout = setTimeout(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === '`' || e.key === '~') {
          setShowConsole(!showConsole)
          if (!showConsole) {
            setConsoleText('> Welcome to Deepak\'s hidden console!\n> Type "help" for available commands\n> ')
          }
        }
      }

      window.addEventListener('keydown', handleKeyPress)
      return () => window.removeEventListener('keydown', handleKeyPress)
    }, 2000)

    return () => clearTimeout(easterEggTimeout)
  }, [showConsole])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Deepak Nalla
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-4 h-8">
                <TypingAnimation 
                  texts={keywords}
                  speed={100}
                  delay={2000}
                  className="text-emerald-400"
                />
              </div>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Senior Software Engineer with 7+ years building scalable applications, 
                exploring AI/ML, and crafting elegant solutions to complex problems.
              </p>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {techStack.map((category, index) => (
                <div 
                  key={category.category}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-emerald-400 font-semibold mb-2 text-sm">{category.category}</h3>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {category.items.map((item) => (
                      <li key={item} className="hover:text-emerald-400 transition-colors cursor-default">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://github.com/deepnz" 
                className="p-3 bg-slate-800 hover:bg-emerald-600 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/deepaknalla" 
                className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:dnalla44@gmail.com" 
                className="p-3 bg-slate-800 hover:bg-purple-600 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link 
                to="/playground"
                className="inline-flex items-center px-6 py-3 border border-emerald-600 hover:bg-emerald-600/10 rounded-lg font-medium transition-all duration-300"
              >
                <Terminal size={16} className="mr-2" />
                Try AI Demo
              </Link>
            </div>

            {/* Easter Egg Hint */}
            <div className="mt-12 text-xs text-gray-500 animate-pulse-slow">
              <p>Press <kbd className="bg-slate-700 px-2 py-1 rounded">~</kbd> for a surprise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Console */}
      {showConsole && (
        <div className="fixed bottom-4 left-4 right-4 max-w-2xl mx-auto bg-black/95 border border-emerald-500 rounded-lg p-4 font-mono text-sm z-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-emerald-400">deepak@portfolio:~$</span>
            <button 
              onClick={() => setShowConsole(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
          <div className="text-gray-300 whitespace-pre-wrap">
            {consoleText}
            <span className="animate-pulse">█</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home