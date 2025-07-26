import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/common/Navigation'
import Home from './components/pages/Home/Home'
import Projects from './components/pages/Projects/Projects'
import Blog from './components/pages/Blog/Blog'
import NowPlaying from './components/pages/NowPlaying/NowPlaying'
import Playground from './components/pages/Playground/Playground'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/now-playing" element={<NowPlaying />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App