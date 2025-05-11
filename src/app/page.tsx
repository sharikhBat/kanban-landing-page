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
          <a href="#" className="text-gray-700 hover:text-black font-medium">Recent work</a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">About</a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">Contact</a>
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
    </div>
  );
}
