import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Electrical Installation',
      icon: '🔌',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop',
      description: 'Complete electrical installation services for residential and commercial properties.',
      features: [
        'New electrical panel installation',
        'Outlet and switch installation',
        'Lighting fixture installation',
        'Electrical wiring for new construction',
        'Code compliance and safety inspections'
      ],
      price: 'Starting from ₹2,500'
    },
    {
      id: 2,
      title: 'Wiring Services',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      description: 'Professional wiring solutions for homes, offices, and industrial facilities.',
      features: [
        'Complete home rewiring',
        'Additional circuit installation',
        'Electrical troubleshooting',
        'Wire replacement and upgrades',
        'Emergency electrical repairs'
      ],
      price: 'Starting from ₹1,900'
    },
    {
      id: 3,
      title: 'Home Automation',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      description: 'Transform your home into a smart home with our automation solutions.',
      features: [
        'Smart lighting control systems',
        'Automated security systems',
        'Smart thermostat installation',
        'Voice-controlled devices setup',
        'Mobile app integration'
      ],
      price: 'Starting from ₹14,000'
    },
    {
      id: 4,
      title: 'Solar Consultation',
      icon: '☀️',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
      description: 'Sustainable solar energy solutions for reduced electricity bills.',
      features: [
        'Solar panel system design',
        'Energy consumption analysis',
        'Government subsidy assistance',
        'Installation and maintenance',
        'Grid-tie and off-grid solutions'
      ],
      price: 'Free consultation'
    },
    {
      id: 5,
      title: 'Electrical Maintenance',
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop',
      description: 'Regular maintenance services to keep your electrical systems running smoothly.',
      features: [
        'Preventive maintenance programs',
        'Electrical system inspections',
        'Equipment testing and calibration',
        'Safety audits and compliance',
        '24/7 emergency support'
      ],
      price: 'Starting from ₹1,500'
    },
    {
      id: 6,
      title: 'Industrial Solutions',
      icon: '🏭',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      description: 'Specialized electrical services for industrial and commercial facilities.',
      features: [
        'Motor control systems',
        'Power distribution design',
        'Industrial automation',
        'Energy efficiency solutions',
        'Compliance and safety systems'
      ],
      price: 'Custom quote'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your requirements and assess your electrical needs'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our experts create a detailed plan and provide transparent pricing'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Professional installation with quality materials and workmanship'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing maintenance and support for all our installations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Professional electrical services delivered by certified experts with 15+ years of experience
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary-600">{service.price}</span>
                      <Link to="/contact" className="btn-primary text-sm">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure quality service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br></br>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Engenix?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're committed to providing exceptional electrical services with guaranteed satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Certified Professionals</h3>
              <p className="text-gray-300">Licensed and insured electricians with extensive training and experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-300">Round-the-clock emergency electrical services for urgent repairs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-gray-300">All work comes with warranty and satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>
            <br></br>
      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us today for a free consultation and personalized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-electric-yellow text-gray-900 hover:bg-yellow-400">
              Get Free Quote
            </Link>
            <a href="tel:+919876543210" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Call: +91 98765 43210
            </a>
          </div>
        </div>
        <br></br>
      </section>
    </div>
  );
};

export default ServicesPage;

