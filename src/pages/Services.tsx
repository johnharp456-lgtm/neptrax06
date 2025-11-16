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
  PenTool
} from 'lucide-react';
import WebGLParticles from './WebGLParticles';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
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

      {/* Premium Services Showcase Section */}
      <section className="relative py-32 bg-gradient-to-b from-[#0f172a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Three-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Part 1: Featured Service Card */}
            <div className="flex flex-col justify-between featured-service-card group">
              <div>
                <span className="inline-block text-sm font-medium text-cyan-400/80 mb-4 tracking-wider">
                  Featured Service
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-6 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                  Website Development
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Developing digital experiences that are as beautiful as they are functional.
                </p>
              </div>

              {/* Featured Image Placeholder */}
              <div className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 featured-image-frame group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="/demo.png"
                  alt="Website Development"
                  className="w-full h-64 md:h-72 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>

              {/* Explore Link */}
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-white/30 rounded-full text-white font-semibold hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 transition-all duration-300 group/link"
              >
                Explore Projects
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>

            {/* Part 2: Central Text Block */}
            <div className="flex flex-col justify-center items-center md:items-start central-text-block py-8 md:py-0">
              <h2 className="text-5xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 text-center md:text-left">
                <span className="block">Simplify</span>
                <span className="block">operations.</span>
                <span className="block">Accelerate</span>
                <span className="block">results.</span>
                <span className="block">Reclaim your time for what</span>
                <span className="block">truly grows your</span>
                <span className="block">business.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mt-8 text-center md:text-left max-w-md">
                From no-code agility to custom development, we make workflows effortless and impactful.
              </p>
            </div>

            {/* Part 3: Newly Added Card */}
            <div className="flex flex-col justify-between newly-added-card group">
              <div>
                <span className="inline-block text-sm font-medium text-cyan-400/80 mb-4 tracking-wider">
                  Newly Added
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-6 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                  AI Chatbots Development
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Your Dedicated AI Support Bot, Built Just for Coaches
                </p>
              </div>

              {/* Newly Added Image Placeholder */}
              <div className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 newly-added-image-frame group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="/demo.png"
                  alt="AI Chatbots Development"
                  className="w-full h-64 md:h-72 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>

              {/* Explore Link */}
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-white/30 rounded-full text-white font-semibold hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 transition-all duration-300 group/link"
              >
                Explore Projects
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </a>
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

        /* Featured & Newly Added Cards */
        .featured-service-card,
        .newly-added-card {
          position: relative;
          padding: 2rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 1.5rem;
          backdrop-filter: blur(10px);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .featured-service-card::before,
        .newly-added-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, transparent 100%);
          border-radius: 1.5rem;
          opacity: 0;
          transition: opacity 0.5s duration-300;
          pointer-events: none;
        }

        .featured-service-card:hover::before,
        .newly-added-card:hover::before {
          opacity: 1;
        }

        .featured-service-card:hover,
        .newly-added-card:hover {
          border-color: rgba(34, 211, 238, 0.3);
          background: rgba(15, 23, 42, 0.8);
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(34, 211, 238, 0.15);
        }

        .featured-image-frame,
        .newly-added-image-frame {
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(148, 163, 184, 0.1);
          transition: all 0.5s duration-300;
        }

        .featured-image-frame:hover,
        .newly-added-image-frame:hover {
          box-shadow: 0 8px 40px rgba(34, 211, 238, 0.2);
          border-color: rgba(34, 211, 238, 0.2);
        }

        /* Central Text Block */
        .central-text-block h2 {
          font-size: clamp(2.5rem, 8vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .central-text-block h2 span:nth-child(1),
        .central-text-block h2 span:nth-child(2) {
          background: linear-gradient(135deg, #ffffff 0%, #e5f3ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .central-text-block h2 span:nth-child(3),
        .central-text-block h2 span:nth-child(4) {
          background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .central-text-block h2 span:nth-child(5),
        .central-text-block h2 span:nth-child(6),
        .central-text-block h2 span:nth-child(7) {
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Responsive Typography */
        @media (max-width: 768px) {
          .featured-service-card,
          .newly-added-card {
            padding: 1.5rem;
          }

          .featured-service-card h3,
          .newly-added-card h3 {
            font-size: 2rem;
          }

          .central-text-block h2 {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 640px) {
          .featured-service-card,
          .newly-added-card {
            padding: 1.25rem;
          }

          .featured-image-frame,
          .newly-added-image-frame {
            height: 240px;
          }
        }
      `}</style>
    </div>
  );
}