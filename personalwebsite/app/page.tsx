import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[#f5f5f0] -z-10"></div>
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: 'url("/assets/images/scribble-light.png")',
          backgroundSize: '400px 400px',
          opacity: 0.1,
          backgroundRepeat: 'repeat',
          pointerEvents: 'none'
        }}
      />
      
      <header className="p-4 flex justify-between items-center relative z-10">
        <div className="space-x-6">
          <Link href="/" className="text-gray-500 hover:text-gray-800 transition-colors">Home</Link>
          <Link href="/about" className="text-gray-500 hover:text-gray-800 transition-colors">About</Link>
          <Link href="/projects" className="text-gray-500 hover:text-gray-800 transition-colors">Projects</Link>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col items-center relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen w-full flex items-center justify-center relative">
          <h1 className="text-6xl font-bold text-gray-800">Hello World</h1>
        </section>
        
        {/* Timeline Container */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-black -translate-x-1/2 z-0" 
            style={{ height: '300%', top: '100vh' }}></div>
        
        {/* Second Section */}
        <section className="min-h-screen w-full flex items-center justify-center relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
        </section>
        
        {/* Third Section */}
        <section className="min-h-screen w-full flex items-center justify-center relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
        </section>

        {/* Fourth Section */}
        <section className="min-h-screen w-full flex items-center justify-center relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
        </section>
      </main>
    </div>
  );
}