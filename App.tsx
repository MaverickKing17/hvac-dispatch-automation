
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
  Users
} from 'lucide-react';
import AIDispatcherChat from './components/AIDispatcherChat';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      id: 'furnace',
      title: 'Furnace Repair & Install',
      description: 'We utilize precision diagnostic sensors and high-efficiency heat exchanger technology. Our ENERGY STAR® certified installations are optimized for the Toronto climate, ensuring your home stays warm even during -30°C polar vortex events while significantly lowering your monthly utility bills.',
      icon: <Flame className="text-orange-500" size={32} />
    },
    {
      id: 'ac',
      title: 'AC Service & Maintenance',
      description: 'Advanced SEER2-compliant cooling solutions engineered to tackle Ontario\'s humid summers. Our technicians use digital refrigerant gauges for hyper-accurate multi-point tune-ups, preventing 95% of common summer breakdowns before they happen.',
      icon: <ThermometerSnowflake className="text-blue-500" size={32} />
    },
    {
      id: 'emergency',
      title: '24/7 Emergency Repairs',
      description: 'Critical failures happen at the worst times. Our proprietary AI Dispatcher monitors our fleet\'s real-time GPS locations across the GTA, automatically routing the most qualified technician to your door within minutes—completely bypassing traditional hold times.',
      icon: <Zap className="text-yellow-500" size={32} />
    }
  ];

  const differentiators = [
    {
      title: "Certified Experts",
      description: "Every Omega technician is TSSA-certified and undergoes rigorous background checks and seasonal training.",
      icon: <Award className="text-blue-600" size={32} />
    },
    {
      title: "Upfront Pricing",
      description: "No hourly surprises. We provide a fixed-price quote before any work starts. What we quote is what you pay.",
      icon: <Banknote className="text-green-600" size={32} />
    },
    {
      title: "100% Satisfaction",
      description: "Our job isn't done until you're comfortable. We offer a 1-year warranty on all labour and parts.",
      icon: <ShieldCheck className="text-orange-600" size={32} />
    },
    {
      title: "Local GTA Presence",
      description: "From Scarborough to Etobicoke, we are your neighbours. We know the unique HVAC needs of Toronto homes.",
      icon: <Users className="text-purple-600" size={32} />
    }
  ];

  const reviews = [
    { author: "Mark R.", location: "North York", text: "The furnace died during a blizzard. The AI chat booked my spot in 30 seconds. A technician was here in an hour. Incredible service." },
    { author: "Sarah L.", location: "Scarborough", text: "Fair pricing and very professional. They don't charge extra for being the 'premium' choice. Highly recommend Omega." },
    { author: "James T.", location: "Etobicoke", text: "Best HVAC experience in Toronto. The instant dispatch is a game-changer. No more listening to hold music!" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-orange-100 selection:text-orange-900">
      {/* Top Banner */}
      <div className="bg-blue-950 text-white py-2 px-4 text-xs sm:text-sm font-medium flex justify-center items-center gap-4 border-b border-blue-900">
        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-orange-400" /> Serving the GTA & North York</span>
        <span className="hidden sm:flex items-center gap-1.5"><Clock size={14} className="text-orange-400" /> Open 24/7/365</span>
        <a href="tel:4165550199" className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
          <Phone size={14} className="text-orange-400" /> (416) 555-0199
        </a>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-900 text-white p-2 rounded-lg rotate-3">
            <ThermometerSnowflake size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-900">OMEGA<span className="text-orange-600">HVAC</span></span>
        </div>

        <div className="hidden md:flex gap-8 font-semibold text-sm text-gray-600">
          <a href="#services" className="hover:text-blue-900 transition-colors">Services</a>
          <a href="#why-us" className="hover:text-blue-900 transition-colors">Why Omega?</a>
          <a href="#ai-edge" className="hover:text-blue-900 transition-colors">AI Dispatch</a>
          <a href="#reviews" className="hover:text-blue-900 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-blue-900 transition-colors">Book Now</a>
        </div>

        <div className="flex gap-4">
          <a href="tel:4165550199" className="hidden lg:flex bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-orange-200 transition-all items-center gap-2">
            <Phone size={18} /> CALL NOW
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-600">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 pt-20 px-8 flex flex-col gap-8 md:hidden">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 text-gray-600">
            <X size={32} />
          </button>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold">Services</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold">Why Omega?</a>
          <a href="#ai-edge" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold">The AI Edge</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold">Testimonials</a>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">24/7 Heating & AC</span> <br />
              Experts in Toronto.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Serving the GTA and North York with premium HVAC solutions. Powered by <span className="font-bold text-blue-900 underline decoration-orange-400 decoration-2">Instant AI Dispatch</span>—get a technician scheduled in under 60 seconds, even at 3 AM.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="tel:4165550199" className="bg-blue-900 hover:bg-blue-950 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 group">
                <Phone size={24} className="group-hover:shake" /> CALL (416) 555-0199
              </a>
              <a href="#contact" className="bg-white hover:bg-gray-50 text-blue-900 border-2 border-blue-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Request a Quote <ArrowRight size={20} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 items-center text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex text-orange-500"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                <span className="font-bold text-gray-900">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-500" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" />
                <span className="font-medium">No Hidden Fees</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop" 
                  alt="Toronto HVAC Technician" 
                  className="rounded-2xl object-cover w-full h-[450px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-5 rounded-xl shadow-lg border border-white">
                  <p className="text-sm font-bold text-blue-900 mb-1 italic">"The fastest service in the GTA. Technician arrived within 45 minutes."</p>
                  <p className="text-xs text-gray-500 font-medium">— Verified Customer in North York</p>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-4 tracking-tight">Expert HVAC Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From emergency repairs to new high-efficiency installations, we handle it all with precision.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="mb-6 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{service.description}</p>
                <a href="#contact" className="text-orange-600 font-bold flex items-center gap-2 group mt-auto pt-4">
                  Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-4 tracking-tight">Why Toronto Homeowners Trust Omega</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Premium service isn't just about technology—it's about the people and promises behind it.</p>
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

          <div className="mt-20 p-8 md:p-12 bg-blue-50 rounded-[2.5rem] border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-extrabold text-blue-900 mb-4">Beyond the AI: Our Human Promise</h3>
              <p className="text-blue-800/80 leading-relaxed">
                While our AI handles the logistics at light-speed, your home is serviced by real Toronto locals. Our human dispatch team supervises every AI interaction 24/7 to ensure no homeowner is ever left out in the cold.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-4xl font-black text-blue-900">15+</p>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Years in GTA</p>
              </div>
              <div className="w-px h-12 bg-blue-200"></div>
              <div className="text-center">
                <p className="text-4xl font-black text-blue-900">10k+</p>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Homes Serviced</p>
              </div>
            </div>
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
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-orange-400">The 'Instant Dispatch' Advantage</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Traditional HVAC companies make you wait on hold for minutes, only to tell you someone might call you back in 4 hours. 
                <span className="block mt-4 font-bold text-white">We've solved that problem.</span>
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-orange-500/20 text-orange-400 p-3 rounded-xl h-fit">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Zero Wait Times</h4>
                    <p className="text-blue-200">Our 24/7 AI Dispatcher answers instantly at any hour. No music, no transfers, just immediate action.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-orange-500/20 text-orange-400 p-3 rounded-xl h-fit">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Smarter Scheduling</h4>
                    <p className="text-blue-200">AI automatically routes the nearest available technician in North York or the GTA directly to your door.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-orange-500/20 text-orange-400 p-3 rounded-xl h-fit">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Accurate Updates</h4>
                    <p className="text-blue-200">Receive real-time text updates with your technician's ETA and bio. You're never in the dark.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 bg-blue-900/50 p-8 md:p-12 rounded-[2.5rem] border border-blue-800 shadow-2xl">
              <div className="text-center mb-10">
                <div className="inline-block p-4 bg-orange-500 rounded-full mb-6 shadow-lg shadow-orange-500/30">
                  <Bot size={48} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 italic">"I had a technician booked at 2:45 AM while I was still in my pyjamas."</h3>
                <p className="text-blue-300">— Recent Emergency Customer</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-950/50 rounded-2xl border border-blue-800">
                  <span className="text-sm font-medium">System Response Time</span>
                  <span className="text-orange-400 font-bold">&lt; 2 Seconds</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-950/50 rounded-2xl border border-blue-800">
                  <span className="text-sm font-medium">Emergency Call Reliability</span>
                  <span className="text-orange-400 font-bold">100%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-950/50 rounded-2xl border border-blue-800">
                  <span className="text-sm font-medium">Technician Match Accuracy</span>
                  <span className="text-orange-400 font-bold">99.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section id="reviews" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-4 tracking-tight">Trusted Across the GTA</h2>
            <div className="flex justify-center gap-1 text-orange-500 mb-4">
              <Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} />
            </div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Over 500+ 5-Star Reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-between">
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
            <p className="text-gray-600">Fill out the form below or use our <span className="font-bold text-blue-900">AI Dispatcher</span> for faster booking.</p>
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
                <option>Furnace Repair/Emergency</option>
                <option>AC Repair/Emergency</option>
                <option>Seasonal Maintenance</option>
                <option>New Installation Quote</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Issue Description (Optional)</label>
              <textarea placeholder="Tell us what's happening..." rows={4} className="w-full bg-gray-50 border-gray-200 border-2 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full bg-blue-900 hover:bg-blue-950 text-white py-5 rounded-2xl font-extrabold text-xl shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3">
              REQUEST DISPATCH <ArrowRight />
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              By clicking, you agree to be contacted via phone/text. Message and data rates may apply.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="bg-blue-600 p-2 rounded-lg">
                <ThermometerSnowflake size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">OMEGA<span className="text-orange-500">HVAC</span></span>
            </div>
            <p className="mb-8 max-w-sm">Toronto's premier choice for intelligent HVAC services. We combine classic Canadian service values with modern AI efficiency.</p>
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
              <li><a href="#" className="hover:text-white transition-colors">Furnace Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AC Installation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maintenance Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Duct Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Thermostats</a></li>
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
          <p>© 2024 Omega Heating and AC. An Omega Business Solution.</p>
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
