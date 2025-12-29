
import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ThermometerSnowflake, 
  Flame, 
  Wrench, 
  Star, 
  CheckCircle,
  Zap,
  ArrowRight,
  Menu,
  X,
  Bot,
  Award,
  Banknote,
  Users,
  Search,
  ChevronDown
} from 'lucide-react';
import AIDispatcherChat from './components/AIDispatcherChat';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      id: 'furnace',
      title: 'Emergency Furnace Repair Toronto',
      description: 'When the temperature drops in Toronto, you need a furnace that works. We specialize in TSSA-certified repair and high-efficiency installation of all major brands like Lennox, Carrier, and York. Our technicians utilize thermal imaging and precision combustion analysis to ensure your heating system operates at peak efficiency during GTA winters.',
      icon: <Flame className="text-orange-500" size={32} />
    },
    {
      id: 'ac',
      title: 'AC Maintenance & GTA Cooling',
      description: 'Don\'t let the humid Ontario summer catch you off guard. Our multi-point AC tune-ups include refrigerant leak detection, evaporator coil cleaning, and electrical system checks. We provide energy-efficient cooling solutions for North York, Scarborough, and Etobicoke homeowners looking to reduce their carbon footprint and hydro bills.',
      icon: <ThermometerSnowflake className="text-blue-500" size={32} />
    },
    {
      id: 'emergency',
      title: '24/7 AI-Powered Dispatching',
      description: 'We are the first HVAC company in Toronto to utilize a fully integrated AI Dispatcher. This proprietary technology routes our nearest licensed technician to your home in real-time. Whether it\'s a 2 AM boiler leak or a Christmas Day furnace failure, our AI ensures you never talk to an answering machine.',
      icon: <Zap className="text-yellow-500" size={32} />
    }
  ];

  const differentiators = [
    {
      title: "Certified Toronto Pros",
      description: "Our team consists of TSSA-licensed gas fitters and 313A refrigeration mechanics who understand the specific building codes of the City of Toronto.",
      icon: <Award className="text-blue-600" size={32} />
    },
    {
      title: "Transparent Flat-Rate Pricing",
      description: "We use upfront pricing guides so you know exactly what the job costs before we start. No hidden 'GTA premium' surcharges or hourly padding.",
      icon: <Banknote className="text-green-600" size={32} />
    },
    {
      title: "Industry Leading Warranty",
      description: "Every repair is backed by our 100% Satisfaction Guarantee. We offer a minimum 1-year parts and labour warranty on all service calls.",
      icon: <ShieldCheck className="text-orange-600" size={32} />
    },
    {
      title: "Rapid North York Response",
      description: "Centrally located in North York, we can reach most GTA neighbourhoods in under an hour during emergency peak times.",
      icon: <Users className="text-purple-600" size={32} />
    }
  ];

  const faqs = [
    {
      q: "How fast can you respond to a furnace emergency in Toronto?",
      a: "With our AI Dispatcher technology, we typically have a technician at your door in the GTA within 60-90 minutes of your request, 24/7."
    },
    {
      q: "Do you service older homes in neighbourhoods like Old Toronto or The Beach?",
      a: "Yes! Our technicians are specially trained in retrofitting high-efficiency HVAC systems into Toronto's historic homes while maintaining structural integrity."
    },
    {
      q: "What brands of air conditioners and furnaces do you install?",
      a: "We are authorized dealers for Carrier, Lennox, and York, but our repair experts are certified to service all makes and models found in Ontario homes."
    }
  ];

  const reviews = [
    { author: "Mark R.", location: "North York", text: "The furnace died during a blizzard. The AI chat booked my spot in 30 seconds. A technician was here in an hour. Incredible service." },
    { author: "Sarah L.", location: "Scarborough", text: "Fair pricing and very professional. They don't charge extra for being the 'premium' choice. Highly recommend Omega." },
    { author: "James T.", location: "Etobicoke", text: "Best HVAC experience in Toronto. The instant dispatch is a game-changer. No more listening to hold music!" }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-orange-100 selection:text-orange-900">
      {/* Top Banner */}
      <div className="bg-blue-950 text-white py-2 px-4 text-xs sm:text-sm font-medium flex justify-center items-center gap-4 border-b border-blue-900">
        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-orange-400" /> Serving Downtown Toronto, North York & GTA</span>
        <span className="hidden sm:flex items-center gap-1.5"><Clock size={14} className="text-orange-400" /> 24/7 Dispatch Ready</span>
        <a href="tel:4165550199" className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
          <Phone size={14} className="text-orange-400" /> (416) 555-0199
        </a>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-blue-900 text-white p-2 rounded-lg rotate-3">
            <ThermometerSnowflake size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-900">OMEGA<span className="text-orange-600">HVAC</span></span>
        </div>

        <div className="hidden md:flex gap-8 font-semibold text-sm text-gray-600">
          <button onClick={() => scrollTo('services')} className="hover:text-blue-900 transition-colors">Services</button>
          <button onClick={() => scrollTo('why-us')} className="hover:text-blue-900 transition-colors">Why Omega?</button>
          <button onClick={() => scrollTo('ai-edge')} className="hover:text-blue-900 transition-colors">AI Dispatch</button>
          <button onClick={() => scrollTo('reviews')} className="hover:text-blue-900 transition-colors">Reviews</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-blue-900 transition-colors">Book Now</button>
        </div>

        <div className="flex gap-4">
          <a href="tel:4165550199" className="hidden lg:flex bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-orange-200 transition-all items-center gap-2">
            <Phone size={18} /> CALL NOW
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-600 p-2">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 pt-20 px-8 flex flex-col gap-8 md:hidden animate-in slide-in-from-right duration-300">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 text-gray-600">
            <X size={32} />
          </button>
          <button onClick={() => scrollTo('services')} className="text-2xl font-bold text-left">Services</button>
          <button onClick={() => scrollTo('why-us')} className="text-2xl font-bold text-left">Why Omega?</button>
          <button onClick={() => scrollTo('ai-edge')} className="text-2xl font-bold text-left">The AI Edge</button>
          <button onClick={() => scrollTo('reviews')} className="text-2xl font-bold text-left">Testimonials</button>
          <a href="tel:4165550199" className="bg-blue-900 text-white p-4 rounded-xl text-center font-bold text-xl flex items-center justify-center gap-3">
            <Phone /> (416) 555-0199
          </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative py-16 md:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="flex h-2 w-2 rounded-full bg-orange-600 animate-ping"></span>
              Emergency Dispatch Active
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-blue-950 leading-[1.1] mb-6">
              Don't Freeze Tonight. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Toronto's Best HVAC</span> <br />
              Experts are Ready.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Searching for <span className="font-bold text-blue-900 italic">"furnace repair near me"</span> in the GTA? Omega provides premium heating and air conditioning services powered by <span className="font-bold text-blue-900 underline decoration-orange-400 decoration-2">Instant AI Dispatch</span>. Get a technician scheduled in under 60 seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="tel:4165550199" className="bg-blue-900 hover:bg-blue-950 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 group">
                <Phone size={24} className="group-hover:shake" /> CALL (416) 555-0199
              </a>
              <button onClick={() => scrollTo('contact')} className="bg-white hover:bg-gray-50 text-blue-900 border-2 border-blue-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Request a Quote <ArrowRight size={20} />
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 items-center text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex text-orange-500"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                <span className="font-bold text-gray-900">4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-500" />
                <span className="font-medium">TSSA Licensed & Insured</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1024&auto=format&fit=crop" 
                  alt="Certified Toronto HVAC Technician providing emergency furnace repair" 
                  className="rounded-2xl object-cover w-full h-[450px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-5 rounded-xl shadow-lg border border-white">
                  <p className="text-sm font-bold text-blue-900 mb-1 italic">"The most reliable furnace repair service in North York. Highly recommend."</p>
                  <p className="text-xs text-gray-500 font-medium">— Local Toronto Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-4 tracking-tight">Premium HVAC Solutions for Toronto</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From emergency central air conditioning service to high-efficiency furnace installations, we provide the GTA's most responsive HVAC care.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="mb-6 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{service.description}</p>
                <button onClick={() => scrollTo('contact')} className="text-orange-600 font-bold flex items-center gap-2 group mt-auto pt-4 text-left">
                  Request Service <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-4 tracking-tight">The Best Rated HVAC Team in Ontario</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">We've built our reputation on fast responses, technical excellence, and the smartest dispatch system in the industry.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {differentiators.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm transition-colors hover:bg-white hover:border-blue-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Edge Section */}
      <section id="ai-edge" className="py-24 bg-blue-950 text-white px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <div className="w-[600px] h-[600px] bg-blue-400 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-orange-400">Toronto's First AI-Driven Dispatch</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Most Toronto HVAC companies are stuck in the 90s. While they leave you on hold with elevator music, our <span className="text-white font-bold">Intelligent Dispatch Engine</span> is already analyzing technician proximity to get you help faster.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-orange-500/20 text-orange-400 p-3 rounded-xl h-fit">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Instant Emergency Queueing</h4>
                    <p className="text-blue-200">Our 24/7 AI system processes your furnace or AC emergency instantly, bypassing human reception errors and delays.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-orange-500/20 text-orange-400 p-3 rounded-xl h-fit">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Real-Time GPS Tracking</h4>
                    <p className="text-blue-200">The AI identifies the closest technician in your Toronto neighbourhood—whether you're in York, East York, or Scarborough.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 bg-blue-900/50 p-8 md:p-12 rounded-[2.5rem] border border-blue-800 shadow-2xl text-center">
                <div className="inline-block p-4 bg-orange-500 rounded-full mb-6 shadow-lg shadow-orange-500/30">
                  <Bot size={48} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 italic">The Future of Home Comfort</h3>
                <p className="text-blue-200 mb-8 leading-relaxed">"By using AI to handle the scheduling logistics, we allow our technicians to focus 100% on what they do best: fixing your HVAC system."</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-950/50 p-4 rounded-xl border border-blue-800">
                        <p className="text-2xl font-bold text-orange-400">98%</p>
                        <p className="text-xs uppercase tracking-widest font-bold">Faster Booking</p>
                    </div>
                    <div className="bg-blue-950/50 p-4 rounded-xl border border-blue-800">
                        <p className="text-2xl font-bold text-orange-400">24/7</p>
                        <p className="text-xs uppercase tracking-widest font-bold">Always Online</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - SEO Powerhouse */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Serving the Greater Toronto Area</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> North York</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> Scarborough</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> Etobicoke</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> Downtown Toronto</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> East York</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> York</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> Thornhill</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> Richmond Hill</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> Markham</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> Vaughan</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> Mississauga</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> Pickering</div>
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Powerhouse */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 text-center mb-16">HVAC Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-2 border-gray-50 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-blue-900">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-in slide-in-from-top-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section id="reviews" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-4 tracking-tight">GTA Homeowner Testimonials</h2>
            <div className="flex justify-center gap-1 text-orange-500 mb-4">
              <Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} />
            </div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Verified Local Reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex text-orange-500 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={16}/>)}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                </div>
                <div>
                  <p className="font-bold text-blue-900">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.location}, ON</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="contact" className="py-24 px-6 bg-orange-50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4">Book Your Service Call</h2>
            <p className="text-gray-600">Fill out the form below for a high-priority dispatch or use the <span className="font-bold text-blue-900 underline">AI Chat Widget</span> for instant routing.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border-gray-200 border-2 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" placeholder="(416) 000-0000" className="w-full bg-gray-50 border-gray-200 border-2 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Service Needed</label>
              <select className="w-full bg-gray-50 border-gray-200 border-2 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none cursor-pointer">
                <option>Furnace Repair (Emergency)</option>
                <option>AC Repair (Emergency)</option>
                <option>Furnace/AC Installation Quote</option>
                <option>Seasonal Maintenance Plan</option>
                <option>Duct Cleaning & Indoor Air Quality</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Issue Details</label>
              <textarea placeholder="Tell us what's happening..." rows={4} className="w-full bg-gray-50 border-gray-200 border-2 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full bg-blue-900 hover:bg-blue-950 text-white py-5 rounded-2xl font-extrabold text-xl shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 active:scale-95">
              REQUEST PRIORITY DISPATCH <ArrowRight />
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-4 leading-tight">
              By submitting, you consent to receive SMS/Phone communications regarding your service request. We respect your privacy in accordance with CASL and GDPR.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-blue-600 p-2 rounded-lg">
                <ThermometerSnowflake size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">OMEGA<span className="text-orange-500">HVAC</span></span>
            </div>
            <p className="mb-8 max-w-sm">Toronto's premier choice for high-efficiency HVAC solutions. From historic Old Toronto homes to new condos in North York, we provide the 24/7 service you deserve.</p>
            <div className="flex gap-4">
              <a href="tel:4165550199" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                <Phone size={20} />
              </a>
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                <MapPin size={20} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors text-left">Toronto Furnace Repair</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors text-left">GTA AC Installation</button></li>
              <li><button onClick={() => scrollTo('why-us')} className="hover:text-white transition-colors text-left">Maintenance Plans</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors text-left">Duct Cleaning</button></li>
              <li><button onClick={() => scrollTo('ai-edge')} className="hover:text-white transition-colors text-left">Smart Home HVAC</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Information</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><MapPin size={16} className="text-orange-500" /> 123 Finch Ave W, North York, ON</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-orange-500" /> (416) 555-0199</li>
              <li className="flex items-center gap-3"><Clock size={16} className="text-orange-500" /> 24/7/365 Emergency Service</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Omega Heating and AC. Toronto's AI-Powered HVAC Solution.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Licencing</a>
          </div>
        </div>
      </footer>

      {/* Floating AI Widget */}
      <AIDispatcherChat />
    </div>
  );
};

export default App;
