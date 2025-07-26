const Blog = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <div className="space-y-6">
          <article className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">First Blog Post</h2>
            <p className="text-gray-400 mb-4">Coming soon...</p>
            <span className="text-sm text-gray-500">Published: TBD</span>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Blog