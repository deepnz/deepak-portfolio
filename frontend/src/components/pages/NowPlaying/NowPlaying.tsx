import { useState, useEffect } from 'react'
import { Star, Calendar, Clock, Play, ExternalLink, Gamepad2, Monitor } from 'lucide-react'

interface Movie {
  id: number
  title: string
  poster_path: string
  release_date: string
  vote_average: number
  overview: string
}

interface Game {
  id: number
  name: string
  background_image: string
  released: string
  rating: number
  playtime: number
  genres: { name: string }[]
}

const NowPlaying = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data for movies (based on what a senior engineer might enjoy)
  const mockMovies: Movie[] = [
    {
      id: 1,
      title: "The Matrix Resurrections",
      poster_path: "/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
      release_date: "2021-12-22",
      vote_average: 5.7,
      overview: "A continuation of the Matrix saga, exploring themes of reality and simulation."
    },
    {
      id: 2,
      title: "Dune",
      poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      release_date: "2021-10-22",
      vote_average: 8.0,
      overview: "Epic sci-fi adaptation of Frank Herbert's classic novel about politics, religion, and ecology on the desert planet Arrakis."
    },
    {
      id: 3,
      title: "Ex Machina",
      poster_path: "/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg",
      release_date: "2014-04-10",
      vote_average: 7.6,
      overview: "A thought-provoking exploration of artificial intelligence and consciousness."
    },
    {
      id: 4,
      title: "Blade Runner 2049",
      poster_path: "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
      release_date: "2017-10-04",
      vote_average: 8.0,
      overview: "A masterful sequel that expands on the original's themes of humanity and identity."
    }
  ]

  // Mock data for games
  const mockGames: Game[] = [
    {
      id: 1,
      name: "Cyberpunk 2077",
      background_image: "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
      released: "2020-12-10",
      rating: 7.32,
      playtime: 22,
      genres: [{ name: "RPG" }, { name: "Action" }]
    },
    {
      id: 2,
      name: "The Witcher 3: Wild Hunt",
      background_image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      released: "2015-05-18",
      rating: 9.13,
      playtime: 46,
      genres: [{ name: "RPG" }, { name: "Adventure" }]
    },
    {
      id: 3,
      name: "Portal 2",
      background_image: "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      released: "2011-04-18",
      rating: 9.6,
      playtime: 11,
      genres: [{ name: "Puzzle" }, { name: "Platformer" }]
    },
    {
      id: 4,
      name: "Half-Life: Alyx",
      background_image: "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      released: "2020-03-23",
      rating: 8.88,
      playtime: 12,
      genres: [{ name: "Action" }, { name: "VR" }]
    }
  ]

  useEffect(() => {
    // Simulate API calls
    setTimeout(() => {
      setMovies(mockMovies)
      setGames(mockGames)
      setLoading(false)
    }, 1000)
  }, [])

  const MediaCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 ${className}`}>
      {children}
    </div>
  )

  if (loading) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-700 rounded w-64 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[...Array(2)].map((_, section) => (
                <div key={section}>
                  <div className="h-6 bg-slate-700 rounded w-32 mb-4"></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-slate-800 rounded-lg overflow-hidden">
                        <div className="h-48 bg-slate-700"></div>
                        <div className="p-4">
                          <div className="h-4 bg-slate-700 rounded mb-2"></div>
                          <div className="h-3 bg-slate-700 rounded w-3/4"></div>
                        </div>
                      </div>
                    ))}
                  </div>
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
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Now Playing
          </h1>
          <p className="text-gray-400 text-lg">
            Movies, TV shows, and games I'm currently enjoying. A mix of sci-fi, technology themes, and great storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Movies & TV Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Monitor className="text-emerald-400" size={24} />
              <h2 className="text-2xl font-semibold">Movies & TV</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {movies.map((movie, index) => (
                <MediaCard key={movie.id} className="group">
                  <div className="relative">
                    <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <Monitor size={32} className="text-slate-600" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play size={24} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2 line-clamp-2">{movie.title}</h3>
                    
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="text-yellow-400" fill="currentColor" />
                        <span>{movie.vote_average.toFixed(1)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(movie.release_date).getFullYear()}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm line-clamp-3">{movie.overview}</p>
                  </div>
                </MediaCard>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-emerald-600 rounded-lg text-sm transition-colors">
                <ExternalLink size={16} className="mr-2" />
                View on TMDB
              </button>
            </div>
          </section>

          {/* Games Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Gamepad2 className="text-emerald-400" size={24} />
              <h2 className="text-2xl font-semibold">Games</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {games.map((game, index) => (
                <MediaCard key={game.id} className="group">
                  <div className="relative">
                    <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <Gamepad2 size={32} className="text-slate-600" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play size={24} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2 line-clamp-2">{game.name}</h3>
                    
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="text-yellow-400" fill="currentColor" />
                        <span>{game.rating.toFixed(1)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{game.playtime}h</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {game.genres.slice(0, 2).map((genre) => (
                        <span key={genre.name} className="px-2 py-1 bg-slate-700 text-xs rounded-full text-gray-300">
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </MediaCard>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-emerald-600 rounded-lg text-sm transition-colors">
                <ExternalLink size={16} className="mr-2" />
                View on RAWG
              </button>
            </div>
          </section>
        </div>

        {/* Status Section */}
        <div className="mt-12 p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-emerald-400">Current Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">📺 Currently Watching</h4>
              <p className="text-gray-300 text-sm">Rewatching The Matrix trilogy for inspiration on AI/ML projects</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">🎮 Currently Playing</h4>
              <p className="text-gray-300 text-sm">Working through Cyberpunk 2077's new content while learning about game AI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NowPlaying