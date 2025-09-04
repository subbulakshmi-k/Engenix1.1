import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const HomePage = () => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    
    // Reset the added state after 2 seconds
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const featuredProducts = [
     {
      id: 1,
      name: 'LED Smart Bulbs',
      price: 299,
      image: 'https://cdn.pixabay.com/photo/2018/10/28/17/35/smart-home-3779361_640.jpg',
      category: 'Lighting',
      icon: '💡',
      color: 'from-yellow-400 to-orange-500',
      description: 'Energy-efficient smart LED bulbs with app control'
    },
    {
      id: 2,
      name: 'Circuit Breakers',
      price: 1299,
      image: 'https://cdn.pixabay.com/photo/2016/01/29/03/22/circuit-breakers-1167327_640.jpg',
      category: 'Safety',
      icon: '🔒',
      color: 'from-red-400 to-pink-500',
      description: 'High-quality MCB circuit breakers for electrical safety'
    },
    {
      id: 3,
      name: 'Power Outlets',
      price: 199,
      image: 'https://cdn.pixabay.com/photo/2020/02/07/20/40/energy-4828337_640.jpg',
      category: 'Accessories',
      icon: '🔌',
      color: 'from-blue-400 to-cyan-500',
      description: 'Modern modular power outlets with USB charging'
    },
    {
      id: 4,
      name: 'LED Strip Lights',
      price: 599,
      image: 'https://cdn.pixabay.com/photo/2017/11/16/08/01/led-2953660_640.jpg',
      category: 'Lighting',
      icon: '🌈',
      color: 'from-purple-400 to-pink-500',
      description: 'Flexible RGB LED strip lights with remote control'
    },
    {
      id: 5,
      name: 'Smart Switches',
      price: 899,
      image: 'https://cdn.pixabay.com/photo/2019/05/14/17/56/button-4203036_1280.jpg',
      category: 'Smart Home',
      icon: '📱',
      color: 'from-green-400 to-blue-500',
      description: 'WiFi-enabled smart switches with voice control'
    },
    {
      id: 6,
      name: 'Solar Panels',
      price: 15999,
      image: 'https://cdn.pixabay.com/photo/2016/02/02/18/31/solar-panel-1175819_640.jpg',
      category: 'Solar',
      icon: '☀️',
      color: 'from-orange-400 to-yellow-500',
      description: 'High-efficiency solar panels for sustainable energy'
    },
    {
      id: 7,
      name: 'Voltage Stabilizers',
      price: 15999,
      image: 'https://cdn.pixabay.com/photo/2023/05/16/15/34/wires-7997980_640.jpg',
      category: 'voltage',
      icon: '☀️',
      color: 'from-orange-400 to-yellow-500',
      description: 'High-efficiency solar panels for sustainable energy'
    },
    {
      id: 8,
      name: 'Power Meters',
      price: 599,
      image: 'https://cdn.pixabay.com/photo/2017/08/06/20/09/electricity-2595842_1280.jpg',
      category: 'Lighting',
      icon: '🌈',
      color: 'from-purple-400 to-pink-500',
      description: 'Flexible RGB LED strip lights with remote control'
    },
  ];

  const services = [
    {
      icon: '🔌',
      title: 'Electrical Installation',
      description: 'Professional installation of electrical systems and appliances',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-500/10'
    },
    {
      icon: '⚡',
      title: 'Wiring Services',
      description: 'Complete home and commercial wiring solutions',
      color: 'from-yellow-400 to-orange=-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: '🏠',
      title: 'Home Automation',
      description: 'Smart home solutions for modern living',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: '☀️',
      title: 'Solar Consultation',
      description: 'Sustainable solar energy solutions and consultation',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-500/10'
    }
  ];

  return (
    <div className="min-h-screen electric-bg electric-grid">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="floating">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-400 text-sm font-medium border border-cyan-500/30">
                  ⚡ Premium Electric Solutions
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-white" style={{fontFamily: 'Orbitron'}}>
                <span className="neon-text text-cyan-400">POWER</span>
                <br />
                <span className="text-white">YOUR</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FUTURE</span>
              </h1>
              <p className="text-xl mb-10 text-slate-300 leading-relaxed" style={{fontFamily: 'Exo 2'}}>
                Experience the next generation of electrical solutions with cutting-edge technology, 
                premium quality components, and revolutionary smart home automation systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/products" className="btn-electric">
                  🛒 Explore Products
                </Link>
                <Link to="/services" className="btn-electric-outline">
                  ⚡ Our Services
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-cyan-500/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 neon-text" style={{fontFamily: 'Orbitron'}}>500+</div>
                  <div className="text-sm text-slate-400">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 neon-text" style={{fontFamily: 'Orbitron'}}>1000+</div>
                  <div className="text-sm text-slate-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 neon-text" style={{fontFamily: 'Orbitron'}}>24/7</div>
                  <div className="text-sm text-slate-400">Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 floating">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Professional Electrical Services" 
                  className="rounded-2xl shadow-2xl border border-cyan-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 electric-card p-4 w-32 text-center">
                <div className="text-2xl mb-2 glow-icon">⚡</div>
                <div className="text-sm text-cyan-400 font-semibold">Smart Tech</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 electric-card p-4 w-36 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">15+ Years</p>
                    <p className="text-sm text-slate-400">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-purple-400 text-sm font-medium border border-purple-500/30">
                💡 Premium Collection
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'Orbitron'}}>
              <span className="neon-text text-purple-400">FEATURED</span>
              <span className="text-white"> PRODUCTS</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover our cutting-edge electrical products engineered with precision, 
              designed for performance, and built to power your future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <div key={product.id} className="electric-card group hover:scale-105 transition-all duration-500 lightning">
                <div className="aspect-square mb-6 overflow-hidden rounded-xl relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${product.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center glow-icon`}>
                      <span className="text-white text-xl">{product.icon}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${product.color} bg-opacity-20 text-white text-xs font-medium rounded-full border border-current border-opacity-30`}>
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" style={{fontFamily: 'Exo 2'}}>{product.name}</h3>
                <p className="text-3xl font-bold text-cyan-400 mb-6 neon-text" style={{fontFamily: 'Orbitron'}}>₹{product.price.toLocaleString()}</p>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className={`w-full btn-electric ${addedToCart[product.id] ? 'bg-green-600 hover:bg-green-700' : ''}`}
                  disabled={addedToCart[product.id]}
                >
                  {addedToCart[product.id] ? '✅ Added to Cart!' : '🛒 Add to Cart'}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">
              Professional Services
            </h2>
            <p className="text-xl text-white-600 max-w-2xl mx-auto">
              Expert electrical services for all your residential and commercial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-white">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>
      <br></br>
      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Products Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
          
          <br></br>
      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Power Up Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our experts for personalized electrical solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-electric-yellow text-gray-990 hover:bg-yellow-420">
              Get Free Quote
            </Link>
            <a href="tel:+91 8778485218" className="btn-secondary">
              Call Now: +91 9442004969
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
