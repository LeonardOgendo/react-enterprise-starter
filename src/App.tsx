const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-12">

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-orange-500">
            React Enterprise Starter
          </h1>

          <p className="mt-3 text-zinc-400">
            Production-ready React + TypeScript + Vite SPA starter with scalable architecture and modern development conventions.
          </p>

          {/* Status Badge */}
          <div className="mt-4 inline-flex items-center gap-2 rounded border bg-orange-500 px-3 py-1 text-sm text-white">
            Development environment ready
          </div>
        </header>

        {/* Content */}
        <section className="flex flex-col gap-6 md:flex-row">

          {/* What you get */}
          <div className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-3 text-xl font-semibold text-orange-400">
              What’s Included
            </h2>

            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>• React + TypeScript + Vite setup</li>
              <li>• Feature-based architecture</li>
              <li>• Path aliases configured</li>
              <li>• Tailwind CSS V4</li>
              <li>• Testing setup</li>
              <li>• Scalable folder structure</li>
              <li>• AI-assisted development conventions</li>
            </ul>
          </div>

          {/* Next steps */}
          <div className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-3 text-xl font-semibold text-orange-400">
              Next Steps
            </h2>

            <ol className="space-y-2 text-zinc-400 text-sm list-decimal list-inside">
              <li>Explore project structure</li>
              <li>Read the guides in comments & README.md added in every folder</li>
              <li>Explore the <code>src/features</code> folder</li>
              <li>Create your first feature module</li>
              <li>Define shared utilities in <code>shared/</code></li>
              <li>Start building your application</li>
            </ol>
          </div>

        </section>

        {/* Architecture hint */}
        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-2 text-xl font-semibold text-orange-400">
            Architecture
          </h2>

          <p className="text-zinc-400 text-sm">
            This starter follows a feature-based architecture where each domain feature is self-contained, promoting scalability, maintainability, and separation of concerns.
          </p>
        </div>

      </div>
    </div>
  )
}

export default App