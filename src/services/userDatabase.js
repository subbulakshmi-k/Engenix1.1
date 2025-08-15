// Mock user database service for demo purposes
const userDatabase = {
  // Mock users for demo
  users: [
    {
      id: 1,
      name: 'Demo User',
      email: 'demo1@Engenix.com',
      phone: '+91 98765 43210',
      password: 'demo123',
      role: 'customer',
      registrationDate: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Sobika',
      email: 'sobika2742003@gmail.com',
      phone: '+91 9876543210',
      password: 'shobi@2003', // Changed from 'shobi' to new secure password
      role: 'customer',
      registrationDate: new Date().toISOString()
    }
  ],

  // Authenticate user
  authenticateUser: function(email, password) {
    // Demo authentication
    if (email === 'demo@Engenix.com' && password === 'demo123') {
      return {
        success: true,
        user: this.users[0],
        session: { id: 'demo-session-123', userId: 1, createdAt: new Date().toISOString() }
      };
    }
    
    if (email === 'sobika2742003@gmail.com' && password === 'Raghav@2024') {
      return {
        success: true,
        user: this.users[1],
        session: { id: 'sobika-session-456', userId: 2, createdAt: new Date().toISOString() }
      };
    }
    
    return {
      success: false,
      error: 'Invalid email or password'
    };
  },

  // Create new user
  createUser: function(userData) {
    const existingUser = this.users.find(u => u.email === userData.email);
    if (existingUser) {
      return {
        success: false,
        error: 'Email already exists'
      };
    }

    const newUser = {
      id: this.users.length + 1,
      ...userData,
      registrationDate: new Date().toISOString()
    };
    
    this.users.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(this.users));
    
    return {
      success: true,
      user: newUser
    };
  },

  // Invalidate session
  invalidateSession: function(sessionId) {
    // Mock session invalidation
    console.log('Session invalidated:', sessionId);
  },

  // Get registered users
  getRegisteredUsers: function() {
    return JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  }
};

export default userDatabase;
