import Image from "next/image";
import SchemaMarkup from "./components/SchemaMarkup";
import ScrollToSection from "./components/ScrollToSection";
import SectionAnimator from "./components/IntersectionObserver";
import ScrollToIndicator from "./components/ScrollToIndicator";
import SmoothReveal from "./components/SmoothReveal";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#fafbfc]">
      <SchemaMarkup />
      <ScrollToSection />
      <SectionAnimator />
      <ScrollToIndicator />
      <SmoothReveal />
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
          <a href="#what-you-get" className="text-gray-700 hover:text-black font-medium">What you get</a>
          <a href="#quick-install" className="text-gray-700 hover:text-black font-medium">Quick install</a>
          <a href="#free-version" className="text-gray-700 hover:text-black font-medium">Free version</a>
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

      {/* What You Get Section */}
      <section id="what-you-get" className="py-24 md:py-32 bg-gradient-to-b from-[#fafbfc] to-[#f0f4f8]" aria-labelledby="what-you-get-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="what-you-get-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Here's What's Inside
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a seamless Kanban experience, wrapped in a lightweight, elegant package.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8 reveal-container">
                <div className="flex gap-4 items-start reveal-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Drag & drop support
                    </h3>
                    <p className="text-gray-600">
                      Built using React DnD, our Kanban board offers a smooth, intuitive drag and drop experience that feels natural to users.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start reveal-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Fully customizable cards
                    </h3>
                    <p className="text-gray-600">
                      Render anything you want within each card – text, images, buttons, custom components – you have complete control.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start reveal-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Responsive design
                    </h3>
                    <p className="text-gray-600">
                      Works beautifully on mobile & desktop. The layout automatically adapts to screen size for the perfect user experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start reveal-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Minimal dependencies
                    </h3>
                    <p className="text-gray-600">
                      Keep your bundle size small. Our package only includes what's necessary, making it easy to maintain over time.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start reveal-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Lifetime access for just $30
                    </h3>
                    <p className="text-gray-600">
                      No subscriptions or hidden fees. Pay once and use it on as many projects as you want – commercial or personal.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start reveal-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Actively maintained
                    </h3>
                    <p className="text-gray-600">
                      We use this package in our own projects, so it's regularly updated. Bug reports and feature requests are always welcome.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-2 md:p-4">
                  <div className="w-full overflow-hidden rounded-md">
                    {/* This is where you'd add the GIF - using a placeholder for now */}
                    <div className="bg-gray-100 w-full aspect-[4/3] relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <p className="text-sm">Drag and drop demo GIF goes here</p>
                      </div>
                      
                      {/* Animated elements to simulate a GIF */}
                      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white shadow-md rounded-md animate-pulse"></div>
                      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white shadow-md rounded-md" 
                        style={{animation: "float 3s infinite ease-in-out"}}></div>
                      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white shadow-md rounded-md animate-bounce"></div>
                      
                      {/* Column layout sketch */}
                      <div className="absolute inset-0 flex justify-between p-4 opacity-30">
                        <div className="w-1/3 bg-blue-100 rounded-md"></div>
                        <div className="w-1/3 mx-2 bg-orange-100 rounded-md"></div>
                        <div className="w-1/3 bg-green-100 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t border-gray-200">
                  <div className="text-sm text-gray-500">Seamless drag & drop</div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a
              href="https://www.privjs.com/packages/react-dnd-kanban-board"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">Get Your Copy for $30</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L8.23 1.77L15.17 8.7H0V11.3H15.17L8.23 18.23L10 20L20 10L10 0Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Install Section */}
      <section id="quick-install" className="py-24 md:py-32 bg-white" aria-labelledby="quick-install-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="quick-install-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Started in 5 Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setting it up is dead simple. Here's what you need to do:
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 ml-6 md:ml-0"></div>
              
              {/* Steps container */}
              <div className="reveal-container">
                {/* Step 1 */}
                <div className="relative mb-16 reveal-item">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex items-center mb-4 md:mb-0 z-10 md:w-1/2 md:justify-end md:pr-12">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg text-white font-bold text-xl">
                        1
                      </div>
                      <div className="ml-6 md:hidden">
                        <h3 className="text-2xl font-semibold text-gray-900">Buy the package</h3>
                      </div>
                    </div>
                    
                    <div className="pl-12 md:pl-0 md:w-1/2 md:pl-12">
                      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-50">
                        <h3 className="hidden md:block text-2xl font-semibold text-gray-900 mb-3">Buy the package</h3>
                        <p className="text-gray-600 mb-4">
                          Get the complete package from PrivJS – one payment, lifetime access, no subscriptions or hidden fees.
                        </p>
                        <a 
                          href="https://www.privjs.com/packages/react-dnd-kanban-board" 
                          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="mr-2">Visit PrivJS store</span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33334 8.00008H12.6667M12.6667 8.00008L8.00001 3.33341M12.6667 8.00008L8.00001 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative mb-16 reveal-item">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="md:order-2 flex items-center mb-4 md:mb-0 z-10 md:w-1/2 md:justify-start md:pl-12">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg text-white font-bold text-xl">
                        2
                      </div>
                      <div className="ml-6 md:hidden">
                        <h3 className="text-2xl font-semibold text-gray-900">Follow the guide</h3>
                      </div>
                    </div>
                    
                    <div className="md:order-1 pl-12 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-50">
                        <h3 className="hidden md:block text-2xl font-semibold text-gray-900 mb-3">Follow the guide</h3>
                        <p className="text-gray-600 mb-4">
                          Follow the step-by-step implementation guide provided directly on PrivJS after your purchase.
                        </p>
                        <div className="bg-gray-100 rounded-md p-3 font-mono text-sm text-gray-700 md:text-right">
                          npm install @your-org/react-dnd-kanban-board
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative mb-16 reveal-item">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex items-center mb-4 md:mb-0 z-10 md:w-1/2 md:justify-end md:pr-12">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg text-white font-bold text-xl">
                        3
                      </div>
                      <div className="ml-6 md:hidden">
                        <h3 className="text-2xl font-semibold text-gray-900">Customize cards</h3>
                      </div>
                    </div>
                    
                    <div className="pl-12 md:pl-0 md:w-1/2 md:pl-12">
                      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-50">
                        <h3 className="hidden md:block text-2xl font-semibold text-gray-900 mb-3">Customize cards</h3>
                        <p className="text-gray-600 mb-4">
                          Style your cards however you want – use your own CSS, tailwind classes, or styled components.
                        </p>
                        <div className="bg-gray-100 rounded-md p-3 font-mono text-sm text-gray-700">
                          {`<KanbanCard>
  <YourCustomContent />
</KanbanCard>`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative reveal-item">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="md:order-2 flex items-center mb-4 md:mb-0 z-10 md:w-1/2 md:justify-start md:pl-12">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg text-white font-bold text-xl">
                        4
                      </div>
                      <div className="ml-6 md:hidden">
                        <h3 className="text-2xl font-semibold text-gray-900">Start building</h3>
                      </div>
                    </div>
                    
                    <div className="md:order-1 pl-12 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-50">
                        <h3 className="hidden md:block text-2xl font-semibold text-gray-900 mb-3">Start building</h3>
                        <p className="text-gray-600 mb-4">
                          Focus on building your app's unique features, rather than reinventing the kanban wheel.
                        </p>
                        <span className="inline-block text-green-600 font-medium">
                          That's it. You're done. 🎉
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24 max-w-xl mx-auto text-center">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Need help with implementation?</h3>
              <p className="text-gray-600 mb-4">
                We also offer personalized support for integrating the Kanban board into your specific project.
              </p>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">
                Contact us for support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Version Section */}
      <section id="free-version" className="py-24 md:py-32 bg-gradient-to-b from-white to-[#f0f7ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallGrid)" />
              </svg>
            </div>
            
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Want to Try It First?
                  </h2>
                  <p className="text-xl opacity-90 mb-8">
                    We've released a <strong>free read-only version</strong> on NPM so you can try the look and feel.
                  </p>
                  <p className="text-lg opacity-80 mb-8">
                    It doesn't support card movement, but it's great for previewing how the board will look in your app.
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-xs opacity-70">Terminal</span>
                    </div>
                    <div className="font-mono text-sm bg-black/80 rounded p-3 overflow-x-auto">
                      npm install react-dnd-kanban-board-lite
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-full hover:bg-blue-50 transition-colors border border-white">
                      <span>View on NPM</span>
                    </a>
                    <a href="https://www.privjs.com/packages/react-dnd-kanban-board" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-medium rounded-full hover:bg-white/10 transition-colors border border-white">
                      <span>Get Full Version</span>
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  {/* Preview comparison */}
                  <div className="flex flex-col gap-6">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                      <h3 className="text-xl font-medium mb-3">Free Version</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <svg width="20" height="20" fill="none" className="mr-2 text-green-400">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-3 3a1 1 0 01-1.414 0l-1-1a1 1 0 011.414-1.414l.293.293 2.293-2.293a1 1 0 011.414 1.414z" fill="currentColor" />
                          </svg>
                          <span>Clean, professional design</span>
                        </div>
                        <div className="flex items-center">
                          <svg width="20" height="20" fill="none" className="mr-2 text-green-400">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-3 3a1 1 0 01-1.414 0l-1-1a1 1 0 011.414-1.414l.293.293 2.293-2.293a1 1 0 011.414 1.414z" fill="currentColor" />
                          </svg>
                          <span>Responsive layout</span>
                        </div>
                        <div className="flex items-center">
                          <svg width="20" height="20" fill="none" className="mr-2 text-green-400">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-3 3a1 1 0 01-1.414 0l-1-1a1 1 0 011.414-1.414l.293.293 2.293-2.293a1 1 0 011.414 1.414z" fill="currentColor" />
                          </svg>
                          <span>Customizable cards</span>
                        </div>
                        <div className="flex items-center opacity-50">
                          <svg width="20" height="20" fill="none" className="mr-2 text-red-400">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill="currentColor" />
                          </svg>
                          <span className="line-through">No drag & drop</span>
                        </div>
                        <div className="flex items-center opacity-50">
                          <svg width="20" height="20" fill="none" className="mr-2 text-red-400">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill="currentColor" />
                          </svg>
                          <span className="line-through">No card states</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 relative">
                      <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        RECOMMENDED
                      </div>
                      <h3 className="text-xl font-medium mb-3">Full Version ($30)</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <svg width="20" height="20" fill="none" className="mr-2 text-green-400">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-3 3a1 1 0 01-1.414 0l-1-1a1 1 0 011.414-1.414l.293.293 2.293-2.293a1 1 0 011.414 1.414z" fill="currentColor" />
                          </svg>
                          <span>Everything in free version</span>
                        </div>
                        <div className="flex items-center">
                          <svg width="20" height="20" fill="none" className="mr-2 text-green-400">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-3 3a1 1 0 01-1.414 0l-1-1a1 1 0 011.414-1.414l.293.293 2.293-2.293a1 1 0 011.414 1.414z" fill="currentColor" />
                          </svg>
                          <span><strong>Full drag & drop support</strong></span>
                        </div>
                        <div className="flex items-center">
                          <svg width="20" height="20" fill="none" className="mr-2 text-green-400">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-3 3a1 1 0 01-1.414 0l-1-1a1 1 0 011.414-1.414l.293.293 2.293-2.293a1 1 0 011.414 1.414z" fill="currentColor" />
                          </svg>
                          <span>Column management</span>
                        </div>
                        <div className="flex items-center">
                          <svg width="20" height="20" fill="none" className="mr-2 text-green-400">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-3 3a1 1 0 01-1.414 0l-1-1a1 1 0 011.414-1.414l.293.293 2.293-2.293a1 1 0 011.414 1.414z" fill="currentColor" />
                          </svg>
                          <span>Card state & storage</span>
                        </div>
                        <div className="flex items-center">
                          <svg width="20" height="20" fill="none" className="mr-2 text-green-400">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-3 3a1 1 0 01-1.414 0l-1-1a1 1 0 011.414-1.414l.293.293 2.293-2.293a1 1 0 011.414 1.414z" fill="currentColor" />
                          </svg>
                          <span>Event callbacks & APIs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The free version is perfect for evaluating if our design matches your needs. Ready to unlock the full power?
            </p>
            <a
              href="https://www.privjs.com/packages/react-dnd-kanban-board"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors text-lg shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">Upgrade to Full Version</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L8.23 1.77L15.17 8.7H0V11.3H15.17L8.23 18.23L10 20L20 10L10 0Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <rect width="40" height="40" rx="8" fill="white" />
                  <path d="M14 12L26 12L20 28L14 12Z" fill="#111" />
                </svg>
                <span className="text-xl font-bold">React Kanban</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                A simple, React-based Kanban board with drag & drop that just works. 
                Built by developers, for developers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Free Version</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} React Kanban. All rights reserved.
            </p>
            <div className="flex items-center">
              <a
                href="https://www.privjs.com/packages/react-dnd-kanban-board"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Buy Now on PrivJS</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
