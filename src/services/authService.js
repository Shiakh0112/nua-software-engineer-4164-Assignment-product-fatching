import api from './api';

// Simulate API calls for authentication
// In a real app, these would be actual API endpoints

export const authService = {
  // Login user
  login: async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock users database
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        
        if (user) {
          // Generate a mock token
          const token = 'mock-jwt-token-' + Math.random().toString(36).substr(2, 9);
          resolve({
            data: {
              id: user.id,
              name: user.name,
              email: user.email,
              token,
            },
          });
        } else {
          reject({
            response: {
              data: {
                message: 'Invalid email or password',
              },
            },
          });
        }
      }, 1000);
    });
  },

  // Register user
  register: async (name, email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock users database
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if user already exists
        if (users.some((u) => u.email === email)) {
          reject({
            response: {
              data: {
                message: 'User with this email already exists',
              },
            },
          });
          return;
        }
        
        // Create new user
        const newUser = {
          id: Date.now().toString(),
          name,
          email,
          password,
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Generate a mock token
        const token = 'mock-jwt-token-' + Math.random().toString(36).substr(2, 9);
        
        resolve({
          data: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            token,
          },
        });
      }, 1000);
    });
  },

  // Logout user
  logout: () => {
    return Promise.resolve();
  },
};