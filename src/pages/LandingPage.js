import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
             Engenix
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Your trusted partner for comprehensive electrical solutions since 1995
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-electric-yellow text-gray-900 hover:bg-yellow-400 px-8 py-3">
                Contact Us
              </Link>
              <Link to="/services" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 px-8 py-3">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading electrical solutions provider
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Established in 1995</h3>
              <p className="text-gray-600 mb-4">
                Engenix was founded with a vision to provide reliable and innovative electrical solutions 
                to homes and businesses across India. What started as a small electrical shop has grown into 
                a comprehensive service provider.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past 28 years, we have successfully completed over 5000+ projects ranging from 
                residential wiring to large-scale industrial installations.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600">28+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">5000+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">10000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1621905252507-69f6646db940?w=600&h=400&fit=crop" 
                alt="Company History" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Visual Depiction */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
<h2 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design Engineering</h3>
              <p className="text-gray-600">
                Custom electrical designs for residential, commercial, and industrial projects
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation Services</h3>
              <p className="text-gray-600">
                Professional installation of electrical systems with safety compliance
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
              <p className="text-gray-600">
                Regular maintenance and 24/7 support for all electrical systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcase of our latest electrical installations and solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop" 
                alt="Residential Complex" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Modern Apartment Complex</h3>
              <p className="text-gray-600 text-sm">
                Complete electrical installation for 150+ unit residential complex
              </p>
            </div>

            <div className="card p-6">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-69f6646db940?w=400&h=250&fit=crop" 
                alt="Commercial Building" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Tech Park Installation</h3>
              <p className="text-gray-600 text-sm">
                Smart electrical systems for 5-story commercial building
              </p>
            </div>

            <div className="card p-6">
              <img 
                src="https://images.unsplash.com/photo-1607462109225-6b64db2b4a4b?w=400&h=250&fit=crop" 
                alt="Industrial Facility" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Manufacturing Plant</h3>
              <p className="text-gray-600 text-sm">
                Industrial electrical setup for 50,000 sq ft manufacturing facility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss your electrical needs and create a custom solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-electric-yellow text-gray-900 hover:bg-yellow-400 px-8 py-3">
              Contact Us
            </Link>
            <Link to="/admin" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 px-8 py-3">
              Admin Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
