import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import userDatabase from '../services/userDatabase';

const UserLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    const storedSession = localStorage.getItem('userSession');
    
    if (storedUser && storedSession) {
      setCurrentUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const onLoginSubmit = (data) => {
    const result = userDatabase.authenticateUser(data.email, data.password);
    
    if (result.success) {
      // Store session information
      localStorage.setItem('currentUser', JSON.stringify(result.user));
      localStorage.setItem('userSession', JSON.stringify(result.session));
      
      setCurrentUser(result.user);
      setIsLoggedIn(true);
      setShowSuccess(true);
      reset();
      
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/');
      }, 2000);
    } else {
      alert('Invalid email or password. Try demo@raghavelectric.com / demo123 or admin@raghavelectric.com / admin123');
    }
  };

  const handleRegister = (data) => {
    const result = userDatabase.createUser({
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      password: data.password,
      role: 'customer'
    });
    
    if (result.success) {
      // Auto login after successful registration
      const loginResult = userDatabase.authenticateUser(data.email, data.password);
      
      if (loginResult.success) {
        localStorage.setItem('currentUser', JSON.stringify(loginResult.user));
        localStorage.setItem('userSession', JSON.stringify(loginResult.session));
        
        setCurrentUser(loginResult.user);
        setIsLoggedIn(true);
        setShowSuccess(true);
        reset();
        
        setTimeout(() => {
          setShowSuccess(false);
          navigate('/');
        }, 3000);
      }
    } else {
      alert(result.error || 'Registration failed. Please try again.');
    }
  };

  const handleLogout = () => {
    const session = JSON.parse(localStorage.getItem('userSession') || '{}');
    if (session.id) {
      userDatabase.invalidateSession(session.id);
    }
    
    localStorage.removeItem('userSession');
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  // Initialize with demo user if none exist
  useEffect(() => {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    if (registeredUsers.length === 0) {
      const demoUser = {
        id: 1,
        name: 'Demo User',
        email: 'demo@Engenix.com',
        phone: '+91 98765 43210',
        password: 'demo123',
        registrationDate: new Date().toISOString()
      };
      localStorage.setItem('registeredUsers', JSON.stringify([demoUser]));
    }
  }, []);

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-primary-600 text-white section-padding">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-xl text-primary-100">
              Hello {currentUser?.name}, manage your account and orders
            </p>
          </div>
        </section>

        {/* Success Message */}
        {showSuccess && (
          <div className="max-w-4xl mx-auto px-4 pt-8">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Successfully logged in! Welcome to Raghav Electric.
              </div>
            </div>
          </div>
        )}

        {/* User Dashboard */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* User Profile */}
              <div className="lg:col-span-1">
                <div className="card p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">
                        {currentUser?.name?.charAt(0)?.toUpperCase()}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">{currentUser?.name}</h2>
                    <p className="text-gray-600">{currentUser?.email}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <p className="text-gray-900">{currentUser?.phone || 'Not provided'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                      <p className="text-gray-900">
                        {new Date(currentUser?.loginTime).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full mt-6 btn-secondary text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Quick Actions */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link to="/products" className="btn-primary text-center">
                      Browse Products
                    </Link>
                    <Link to="/services" className="btn-secondary text-center">
                      View Services
                    </Link>
                    <Link to="/contact" className="btn-secondary text-center">
                      Contact Support
                    </Link>
                    <a href="tel:+919876543210" className="btn-secondary text-center">
                      Call Us
                    </a>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Account Overview</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-green-600">✓</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Account Active</p>
                          <p className="text-sm text-gray-600">Your account is in good standing</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600">🛍️</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Ready to Shop</p>
                          <p className="text-sm text-gray-600">Explore our electrical products</p>
                        </div>
                      </div>
                      <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium">
                        Shop Now →
                      </Link>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-yellow-600">🔧</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Need Service?</p>
                          <p className="text-sm text-gray-600">Book electrical services</p>
                        </div>
                      </div>
                      <Link to="/services" className="text-yellow-600 hover:text-yellow-700 font-medium">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Support */}
                <div className="card p-6 bg-primary-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
                  <p className="text-gray-600 mb-4">
                    Our customer support team is here to help you with any questions or concerns.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="btn-primary">
                      Contact Support
                    </Link>
                    <a href="https://wa.me/919876543210" className="btn-secondary">
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Raghav Electric</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                reset();
              }}
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        {/* Form */}
        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <form onSubmit={handleSubmit(isLogin ? onLoginSubmit : handleRegister)} className="space-y-6">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: !isLogin && 'Name is required' })}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                id="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <button type="submit" className="w-full btn-primary">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

            {/* Demo Credentials */}
            {isLogin && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Demo Credentials:</strong><br />
                  User: demo@Engenix.com / demo123
                </p>
              </div>
            )}
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link to="/" className="text-sm text-gray-600 hover:text-primary-600">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
