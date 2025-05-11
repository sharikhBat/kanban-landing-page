import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#fafbfc]">
      {/* Navigation */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#111" />
            <path d="M14 12L26 12L20 28L14 12Z" fill="white" />
          </svg>
        </div>
        <nav className="hidden md:flex space-x-10">
          <a href="#our-story" className="text-gray-700 hover:text-black font-medium">Our story</a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">What you get</a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">Quick install</a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">Free version</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              A Simple, React-Based Kanban Board with Drag & Drop That Just Works
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mt-4">
              Couldn't find a lightweight drag-and-drop Kanban board for our own project—so we built one. Now it's yours for $30, forever.
            </p>
            <div className="mt-8">
              <a
                href="https://www.privjs.com/packages/react-dnd-kanban-board"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">Buy Now on PrivJS</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0L8.23 1.77L15.17 8.7H0V11.3H15.17L8.23 18.23L10 20L20 10L10 0Z" fill="currentColor" />
                </svg>
              </a>
            </div>
            
            {/* SEO Keywords */}
            <div className="hidden">
              <p>react kanban board, drag and drop, npm kanban package, react drag drop kanban</p>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg animate-float">
              <svg className="w-full" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Board background */}
                <rect x="80" y="40" width="440" height="420" rx="10" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="2" />
                
                {/* Column dividers */}
                <line x1="227" y1="40" x2="227" y2="460" stroke="#e0e0e0" strokeWidth="2" />
                <line x1="373" y1="40" x2="373" y2="460" stroke="#e0e0e0" strokeWidth="2" />
                
                {/* Column headers */}
                <text x="153" y="80" fontFamily="Arial" fontSize="20" fill="#4361ee" fontWeight="700" textAnchor="middle">TO DO</text>
                <text x="300" y="80" fontFamily="Arial" fontSize="20" fill="#4361ee" fontWeight="700" textAnchor="middle">WORK</text>
                <text x="447" y="80" fontFamily="Arial" fontSize="20" fill="#4361ee" fontWeight="700" textAnchor="middle">DONE</text>
                
                {/* To Do Column Cards */}
                <rect x="107" y="110" width="100" height="85" rx="6" fill="white" stroke="#e0e0e0" strokeWidth="2" />
                <rect x="117" y="125" width="60" height="8" rx="2" fill="#e9ecef" />
                <rect x="117" y="143" width="80" height="8" rx="2" fill="#e9ecef" />
                <rect x="117" y="161" width="70" height="8" rx="2" fill="#e9ecef" />
                <circle cx="177" cy="177" r="10" fill="#4361ee" opacity="0.2" />
                
                <rect x="107" y="210" width="100" height="85" rx="6" fill="white" stroke="#e0e0e0" strokeWidth="2" />
                <rect x="117" y="225" width="60" height="8" rx="2" fill="#e9ecef" />
                <rect x="117" y="243" width="80" height="8" rx="2" fill="#e9ecef" />
                <rect x="117" y="261" width="70" height="8" rx="2" fill="#e9ecef" />
                <circle cx="177" cy="277" r="10" fill="#4361ee" opacity="0.2" />
                
                {/* Work Column Cards */}
                <rect x="253" y="110" width="100" height="85" rx="6" fill="white" stroke="#e0e0e0" strokeWidth="2" />
                <rect x="263" y="125" width="60" height="8" rx="2" fill="#e9ecef" />
                <rect x="263" y="143" width="80" height="8" rx="2" fill="#e9ecef" />
                <rect x="263" y="161" width="70" height="8" rx="2" fill="#e9ecef" />
                <rect x="263" y="179" width="20" height="8" rx="2" fill="#4361ee" opacity="0.6" />
                
                <rect x="253" y="210" width="100" height="85" rx="6" fill="white" stroke="#e0e0e0" strokeWidth="2" />
                <rect x="263" y="225" width="60" height="8" rx="2" fill="#e9ecef" />
                <rect x="263" y="243" width="80" height="8" rx="2" fill="#e9ecef" />
                <rect x="263" y="261" width="70" height="8" rx="2" fill="#e9ecef" />
                <rect x="263" y="279" width="20" height="8" rx="2" fill="#4361ee" opacity="0.6" />
                
                <rect x="253" y="310" width="100" height="85" rx="6" fill="white" stroke="#e0e0e0" strokeWidth="2" />
                <rect x="263" y="325" width="60" height="8" rx="2" fill="#e9ecef" />
                <rect x="263" y="343" width="80" height="8" rx="2" fill="#e9ecef" />
                <rect x="263" y="361" width="70" height="8" rx="2" fill="#e9ecef" />
                <rect x="263" y="379" width="20" height="8" rx="2" fill="#4361ee" opacity="0.6" />
                
                {/* Done Column Cards */}
                <rect x="399" y="110" width="100" height="85" rx="6" fill="white" stroke="#e0e0e0" strokeWidth="2" />
                <rect x="409" y="125" width="60" height="8" rx="2" fill="#e9ecef" />
                <rect x="409" y="143" width="80" height="8" rx="2" fill="#e9ecef" />
                <rect x="409" y="161" width="70" height="8" rx="2" fill="#e9ecef" />
                <rect x="409" y="179" width="40" height="8" rx="2" fill="#4ade80" opacity="0.6" />
                <circle cx="479" cy="153" r="12" fill="#4ade80" opacity="0.2" />
                
                <rect x="399" y="210" width="100" height="85" rx="6" fill="white" stroke="#e0e0e0" strokeWidth="2" />
                <rect x="409" y="225" width="60" height="8" rx="2" fill="#e9ecef" />
                <rect x="409" y="243" width="80" height="8" rx="2" fill="#e9ecef" />
                <rect x="409" y="261" width="70" height="8" rx="2" fill="#e9ecef" />
                <rect x="409" y="279" width="40" height="8" rx="2" fill="#4ade80" opacity="0.6" />
                <circle cx="479" cy="253" r="12" fill="#4ade80" opacity="0.2" />
                
                {/* Person figures */}
                <circle cx="140" cy="390" r="12" fill="#4361ee" opacity="0.3" />
                <rect x="120" y="410" width="40" height="30" rx="4" fill="#4361ee" opacity="0.3" />
                
                <circle cx="450" cy="340" r="12" fill="#4361ee" opacity="0.3" />
                <rect x="430" y="360" width="40" height="30" rx="4" fill="#4361ee" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-24 md:py-32 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                We Tried to Find a Simple React Kanban Board. We Couldn't.
              </h2>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  While working on a client project, we just needed a <strong>Kanban board with drag-and-drop support</strong>—something simple, clean, customizable.
                </p>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  But after hours of searching through NPM, GitHub, and blog posts… nothing fit. Everything was either bloated, unmaintained, or lacked the basic DnD feature.
                </p>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  So we built it ourselves.
                </p>
                
                <p className="text-xl text-gray-900 font-medium">
                  Now, we're sharing it with you.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mt-4">
                <p className="mb-6 text-gray-700">
                  If you're curious how we built it from scratch, <a href="#" className="text-blue-600 hover:underline font-medium">watch this YouTube tutorial</a> (coming soon).
                </p>
                
                <div className="flex items-center mb-6 text-amber-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="font-medium">But heads up: It takes hours, and managing updates is a pain.</p>
                </div>
                
                <p className="text-xl font-medium text-gray-900 mb-2">
                  Want to save time?
                </p>
                
                <p className="flex items-center text-gray-700 font-medium mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-blue-600">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Just install our package and move on with your project.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <Image 
                  src="/images/kanban-our-story.png"
                  alt="Developer searching for React Kanban solution"
                  width={500}
                  height={500}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
