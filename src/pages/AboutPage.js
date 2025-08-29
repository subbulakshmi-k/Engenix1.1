import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Raghav Kumar',
      position: 'Founder & Lead Electrician',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      experience: '15+ years',
      description: 'Licensed master electrician with expertise in residential and commercial electrical systems.'
    },
    {
      name: 'Priya Sharma',
      position: 'Project Manager',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZHqWA3ajb0g2TmGMYzSoRpiR5HqjelAKfw&sht',
      experience: '8+ years',
      description: 'Ensures smooth project execution and maintains quality standards across all installations.'
    },
    {
      name: 'Amit Singh',
      position: 'Senior Technician',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      experience: '12+ years',
      description: 'Specialist in home automation and smart electrical systems installation.'
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'ENGENIX was established with a vision to provide quality electrical services.'
    },
    {
      year: '2012',
      title: 'First Major Contract',
      description: 'Completed electrical installation for a 50-unit residential complex.'
    },
    {
      year: '2016',
      title: 'Smart Home Division',
      description: 'Launched home automation services to meet growing demand for smart solutions.'
    },
    {
      year: '2020',
      title: 'Solar Solutions',
      description: 'Expanded services to include solar panel installation and consultation.'
    },
    {
      year: '2024',
      title: '500+ Happy Customers',
      description: 'Reached milestone of serving over 500 satisfied customers across the region.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Quality First',
      description: 'We never compromise on the quality of materials or workmanship in any project.'
    },
    {
      icon: '🤝',
      title: 'Customer Trust',
      description: 'Building long-term relationships through transparent communication and reliable service.'
    },
    {
      icon: '⚡',
      title: 'Innovation',
      description: 'Staying updated with latest electrical technologies and smart solutions.'
    },
    {
      icon: '🛡️',
      title: 'Safety Standards',
      description: 'Adhering to highest safety standards and electrical codes in all installations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ENGENIX</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Powering communities with reliable electrical solutions since 2009
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                    Founded in 2009, ENGENIX started as a modest venture with a clear vision — to provide reliable, high-quality electrical solutions that both homeowners and businesses could count on.
                </p>
                <p>
From a one-man operation, we have evolved into a full-fledged electrical services company, proudly delivering excellence to over 500 satisfied clients across the region. Our growth is fueled by continuous innovation, adoption of the latest technologies, and an uncompromising commitment to customer satisfaction.
                </p>
                <p>
Today, we offer end-to-end electrical services — from routine repairs to advanced home automation and solar power installations. Our team of certified professionals combines decades of expertise with meticulous attention to detail, ensuring every project is executed with safety, precision, and long-lasting quality.
                </p>
                <p>
At ENGENIX, we don't just install wires and systems — we power homes, energize businesses, and build trust that lasts for years.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=500&fit=crop" 
                alt="Electrical work" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-electric-yellow p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-700">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide safe, reliable, and innovative electrical solutions that enhance the quality 
                of life for our customers while maintaining the highest standards of professionalism 
                and customer service.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-electric-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gray-900 text-2xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading electrical services provider in the region, known for our expertise, 
                reliability, and commitment to sustainable energy solutions that power a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-electric-yellow hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg">
                      <div className="text-electric-yellow font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-6 h-6 bg-electric-yellow rounded-full flex-shrink-0 z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional electrical services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card p-6 text-center group hover:shadow-xl transition-shadow duration-300">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-electric-yellow font-semibold mb-3">{member.experience}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Experience the ENGENIX difference - quality, reliability, and exceptional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-electric-yellow text-gray-900 hover:bg-yellow-400">
              Start Your Project
            </Link>
            <Link to="/services" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
