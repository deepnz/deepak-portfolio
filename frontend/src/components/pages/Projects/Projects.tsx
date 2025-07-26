import { useState, useEffect } from 'react'
import { Github, ExternalLink, Star, GitFork, Calendar, Code } from 'lucide-react'

interface Project {
  id: string
  name: string
  description: string
  language: string
  stars: number
  forks: number
  updated: string
  topics: string[]
  homepage?: string
  html_url: string
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  // Mock projects data based on Deepak's background
  const mockProjects: Project[] = [
    {
      id: '1',
      name: 'microservices-architecture',
      description: 'Enterprise-grade microservices architecture built with Spring Boot, featuring service discovery, circuit breakers, and distributed tracing.',
      language: 'Java',
      stars: 87,
      forks: 23,
      updated: '2024-01-15',
      topics: ['java', 'spring-boot', 'microservices', 'kubernetes', 'docker'],
      html_url: 'https://github.com/deepnz/microservices-architecture',
      homepage: 'https://microservices-demo.deepaknalla.dev'
    },
    {
      id: '2',
      name: 'ai-code-reviewer',
      description: 'LLM-powered code review assistant that provides intelligent feedback on Java and TypeScript codebases using OpenAI GPT models.',
      language: 'Python',
      stars: 156,
      forks: 34,
      updated: '2024-02-20',
      topics: ['ai', 'machine-learning', 'code-review', 'openai', 'python'],
      html_url: 'https://github.com/deepnz/ai-code-reviewer'
    },
    {
      id: '3',
      name: 'portfolio-website',
      description: 'Personal portfolio website built with React, TypeScript, and Spring Boot. Features interactive UI, dark theme, and AI-powered resume chat.',
      language: 'TypeScript',
      stars: 42,
      forks: 12,
      updated: '2024-01-26',
      topics: ['react', 'typescript', 'portfolio', 'spring-boot', 'tailwindcss'],
      html_url: 'https://github.com/deepnz/deepak-portfolio',
      homepage: 'https://deepaknalla.dev'
    },
    {
      id: '4',
      name: 'data-pipeline-framework',
      description: 'Scalable data processing framework for ETL operations with PostgreSQL, MongoDB, and real-time streaming capabilities.',
      language: 'Java',
      stars: 73,
      forks: 19,
      updated: '2023-12-10',
      topics: ['data-engineering', 'etl', 'postgresql', 'mongodb', 'kafka'],
      html_url: 'https://github.com/deepnz/data-pipeline-framework'
    },
    {
      id: '5',
      name: 'oauth-security-demo',
      description: 'Comprehensive OAuth 2.0 and JWT implementation demo with Spring Security, showcasing best practices for enterprise authentication.',
      language: 'Java',
      stars: 91,
      forks: 28,
      updated: '2023-11-18',
      topics: ['security', 'oauth2', 'jwt', 'spring-security', 'authentication'],
      html_url: 'https://github.com/deepnz/oauth-security-demo'
    },
    {
      id: '6',
      name: 'cloud-cost-optimizer',
      description: 'AWS cost optimization tool that analyzes resource usage patterns and provides recommendations for cost reduction.',
      language: 'Go',
      stars: 64,
      forks: 15,
      updated: '2023-10-25',
      topics: ['aws', 'cost-optimization', 'golang', 'cloud', 'devops'],
      html_url: 'https://github.com/deepnz/cloud-cost-optimizer'
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects(mockProjects)
      setLoading(false)
    }, 1000)
  }, [])

  const languages = ['all', ...new Set(projects.map(p => p.language.toLowerCase()))]
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.language.toLowerCase() === filter)

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      'java': 'bg-orange-500',
      'typescript': 'bg-blue-500',
      'python': 'bg-green-500',
      'go': 'bg-cyan-500',
      'javascript': 'bg-yellow-500'
    }
    return colors[language.toLowerCase()] || 'bg-gray-500'
  }

  if (loading) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-700 rounded w-48 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-slate-800 rounded-lg p-6">
                  <div className="h-6 bg-slate-700 rounded mb-4"></div>
                  <div className="h-4 bg-slate-700 rounded mb-2"></div>
                  <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            A collection of my open-source projects and experiments in software engineering, AI/ML, and cloud technologies.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === lang
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {lang === 'all' ? 'All' : lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Code size={20} className="text-emerald-400" />
                  <h3 className="text-xl font-semibold text-white truncate">
                    {project.name}
                  </h3>
                </div>
                <div className="flex space-x-2">
                  <a
                    href={project.html_url}
                    className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={16} />
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                  <span>{project.language}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star size={14} />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitFork size={14} />
                  <span>{project.forks}</span>
                </div>
              </div>

              <div className="flex items-center space-x-1 text-xs text-gray-500 mb-4">
                <Calendar size={12} />
                <span>Updated {new Date(project.updated).toLocaleDateString()}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 bg-slate-700 text-xs rounded-full text-gray-300"
                  >
                    {topic}
                  </span>
                ))}
                {project.topics.length > 3 && (
                  <span className="px-2 py-1 bg-slate-700 text-xs rounded-full text-gray-400">
                    +{project.topics.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects