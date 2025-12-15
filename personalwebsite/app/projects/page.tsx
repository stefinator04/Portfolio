import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <div className="space-x-6">
          <Link href="/" className="text-gray-500 hover:text-gray-800 transition-colors">Home</Link>
          <Link href="/about" className="text-gray-500 hover:text-gray-800 transition-colors">About</Link>
          <Link href="/projects" className="text-gray-500 hover:text-gray-800 transition-colors font-medium">Projects</Link>
        </div>
      </header>
      
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards will go here */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-600">Project description goes here.</p>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Project 2</h2>
            <p className="text-gray-600">Project description goes here.</p>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Project 3</h2>
            <p className="text-gray-600">Project description goes here.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
