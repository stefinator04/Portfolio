import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <div className="space-x-6">
          <Link href="/" className="text-gray-500 hover:text-gray-800 transition-colors">Home</Link>
          <Link href="/about" className="text-gray-500 hover:text-gray-800 transition-colors font-medium">About</Link>
          <Link href="/projects" className="text-gray-500 hover:text-gray-800 transition-colors">Projects</Link>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-2xl p-6">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-gray-700">
            This is the about page. Here you can share information about yourself, 
            your background, skills, and anything else you'd like visitors to know.
          </p>
        </div>
      </main>
    </div>
  );
}
