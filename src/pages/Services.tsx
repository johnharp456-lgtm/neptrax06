import { useState, useEffect, useRef } from 'react';
import {
  Palette,
  Code,
  Search,
  Layers,
  Bot,
  Share2,
  TrendingUp,
  Zap,
  Smartphone,
  BarChart3,
  ShoppingCart,
  PenTool,
  Laptop,
  Rocket,
  Clock
} from 'lucide-react';
import WebGLParticles from './WebGLParticles';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  // Intersection Observer for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const servicesList = [
    {
      title: 'Custom Website Design',
      description: 'Crafted pixel-perfect designs that reflect your brand identity. We create stunning, user-friendly websites that captivate visitors and convert them into loyal customers through strategic visual storytelling.',
      icon: Palette,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      title: 'Full-Stack Web Development',
      description: 'Building robust, scalable web applications with cutting-edge technologies. From front-end interfaces to back-end architecture, we deliver high-performance solutions that grow with your business needs.',
      icon: Code,
      gradient: 'from-cyan-500 via-blue-500 to-blue-600'
    },
    {
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that engages customers 24/7. Our chatbots provide instant support, answer queries, and guide users through seamless experiences while learning from every interaction.',
      icon: Bot,
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    },
    {
      title: 'Social Media Management & Growth',
      description: 'Strategic social media campaigns that build communities and drive engagement. We manage your presence across platforms, create compelling content, and grow your audience organically with data-driven strategies.',
      icon: Share2,
      gradient: 'from-orange-500 via-red-500 to-pink-500'
    },
    {
      title: 'Brand Identity & Visual Design',
      description: 'Comprehensive brand development from concept to execution. We craft memorable logos, color palettes, and visual systems that establish strong brand recognition and communicate your unique value proposition.',
      icon: Layers,
      gradient: 'from-blue-600 via-blue-500 to-cyan-500'
    },
    {
      title: 'Social Media & Digital Advertising',
      description: 'High-converting ad campaigns across Facebook, Instagram, LinkedIn, and Google. We optimize targeting, creative, and messaging to maximize ROI and deliver measurable results for your marketing investment.',
      icon: TrendingUp,
      gradient: 'from-cyan-500 via-teal-500 to-green-500'
    },
    {
      title: 'SEO Optimization & Growth Strategy',
      description: 'Comprehensive SEO solutions that boost your search rankings and organic traffic. We implement technical optimizations, content strategies, and link-building campaigns that deliver sustainable growth and visibility.',
      icon: Search,
      gradient: 'from-teal-500 via-cyan-500 to-blue-500'
    },
    {
      title: 'AI Automation Agents',
      description: 'Custom AI-powered automation that streamlines workflows and increases efficiency. From data processing to customer service, we build intelligent agents that handle repetitive tasks and free up your team.',
      icon: Zap,
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      title: 'Mobile App Design & Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences. We design and develop iOS and Android apps that are intuitive, fast, and aligned with your business objectives.',
      icon: Smartphone,
      gradient: 'from-cyan-500 via-blue-500 to-blue-600'
    },
    {
      title: 'Marketing Audit & Strategic Planning',
      description: 'In-depth analysis of your marketing performance with actionable recommendations. We identify opportunities, optimize spending, and create comprehensive strategies that align with your business goals and budget.',
      icon: BarChart3,
      gradient: 'from-green-500 via-teal-500 to-cyan-500'
    },
    {
      title: 'E-Commerce Store Development',
      description: 'Complete e-commerce solutions built for conversions and scalability. From product catalogs to secure checkout systems, we create online stores that provide seamless shopping experiences and drive revenue.',
      icon: ShoppingCart,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      title: 'Content Creation & Copywriting',
      description: 'Compelling content that resonates with your audience and drives action. Our expert writers craft SEO-optimized blog posts, website copy, and marketing materials that establish authority and generate leads.',
      icon: PenTool,
      gradient: 'from-orange-500 via-red-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden" ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <WebGLParticles />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-500 bg-clip-text text-transparent animate-glow-text">
                OUR SERVICES
              </span>
            </h1>
          </div>

          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Crafting digital excellence through innovative solutions that transform your vision into reality
            </p>
          </div>

          <div className="flex gap-6 justify-center flex-wrap">
            <button
              onClick={() => onNavigate('contact')}
              className="group relative px-12 py-4 rounded-full bg-transparent border-2 border-cyan-400/50 text-white font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/25 backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Start Your Project</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Enhanced Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-glow-text">
              Explore All The Services Neptrax Provides
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="service-card group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-none p-6 border border-gray-700/50 transition-all duration-500 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image Placeholder */}
                  <div className="relative mb-6 rounded-none overflow-hidden h-48 bg-gray-800/50">
                    <img
                      src="/demo.png"
                      alt={service.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 mix-blend-overlay`}></div>

                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-none bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="text-white" size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* New Services Showcase Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-glow-text">
              Our Core Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transforming ideas into powerful digital solutions that drive growth
            </p>
          </div>

          {/* Services Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Featured Service Card */}
            <div className="service-card group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 transition-all duration-500 overflow-hidden hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="service-tag absolute top-6 left-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
                Featured Service
              </div>
              
              <div className="service-image relative h-64 rounded-xl mb-8 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30"></div>
                <img
                  src="/demo.png"
                  alt="Website Development"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl">
                    <Laptop className="text-white" size={40} />
                  </div>
                </div>
              </div>

              <div className="service-content relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Website Development
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Developing digital experiences that are as beautiful as they are functional. 
                  We create responsive, user-friendly websites that help your business stand out.
                </p>
                <a 
                  href="#" 
                  className="service-link inline-flex items-center text-cyan-400 font-semibold text-lg hover:text-cyan-300 transition-colors duration-300 group/link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('projects');
                  }}
                >
                  Explore Projects 
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>

            {/* Newly Added Service Card */}
            <div className="service-card group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 transition-all duration-500 overflow-hidden hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="service-tag absolute top-6 left-6 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
                Newly Added
              </div>
              
              <div className="service-image relative h-64 rounded-xl mb-8 bg-gradient-to-br from-emerald-500/20 to-green-600/20 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30"></div>
                <img
                  src="/demo.png"
                  alt="AI Chatbots Development"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-2xl">
                    <Bot className="text-white" size={40} />
                  </div>
                </div>
              </div>

              <div className="service-content relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  AI Chatbots Development
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Your Dedicated AI Support Bot, Built Just for Coaches. 
                  Automate customer interactions and provide 24/7 support with intelligent chatbots.
                </p>
                <a 
                  href="#" 
                  className="service-link inline-flex items-center text-emerald-400 font-semibold text-lg hover:text-emerald-300 transition-colors duration-300 group/link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('projects');
                  }}
                >
                  Explore Projects 
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mission Statement Section */}
          <div className="mission-section relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-4">
                <Rocket className="text-cyan-400" size={32} />
                Streamline Your Business
                <Clock className="text-purple-400" size={32} />
              </h2>
              
              <div className="mission-text text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                <span className="highlight bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-3 py-1 rounded-lg mx-1">
                  Simplify operations.
                </span>
                <span className="highlight bg-gradient-to-r from-emerald-500/20 to-green-500/20 px-3 py-1 rounded-lg mx-1">
                  Accelerate results.
                </span>
                Reclaim your time for what truly grows your business. 
                From no-code agility to custom development, we make workflows 
                effortless and impactful.
              </div>

              <div className="mt-12">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group relative px-12 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Get Started Today</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Animation Styles */}
      <style jsx>{`
        @keyframes glow-text {
          0%, 100% {
            text-shadow:
              0 0 20px rgba(34, 211, 238, 0.5),
              0 0 40px rgba(34, 211, 238, 0.3),
              0 0 60px rgba(34, 211, 238, 0.2);
          }
          50% {
            text-shadow:
              0 0 30px rgba(34, 211, 238, 0.7),
              0 0 60px rgba(34, 211, 238, 0.5),
              0 0 80px rgba(34, 211, 238, 0.3);
          }
        }

        @keyframes card-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-glow-text {
          animation: glow-text 3s ease-in-out infinite;
        }

        .service-card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .service-card.card-visible {
          animation: card-fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}