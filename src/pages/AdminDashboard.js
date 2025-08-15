import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import messageService from '../services/messageService';
import MessageCard from '../components/MessageCard';
import MessageDetailModal from '../components/MessageDetailModal';

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: ''
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [stats, setStats] = useState({ total: 0, unread: 0, replied: 0, read: 0 });
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const adminSession = localStorage.getItem('adminSession');
    if (adminSession === 'true') {
      setIsLoggedIn(true);
    } else {
      navigate('/admin-login');
    }
  }, [navigate]);

  // Load messages and stats
  useEffect(() => {
    if (isLoggedIn) {
      loadMessages();
    }
  }, [isLoggedIn]);

  const loadMessages = () => {
    const allMessages = messageService.getAllMessages();
    const messageStats = messageService.getStats();
    setMessages(allMessages);
    setStats(messageStats);
  };

  // Handle message actions
  const handleReply = (message) => {
    setSelectedMessage(message);
    setShowMessageModal(true);
  };

  const handleSendReply = async (messageId, replyText) => {
    await messageService.addReply(messageId, replyText);
    loadMessages();
  };

  const handleDeleteMessage = (messageId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      messageService.deleteMessage(messageId);
      loadMessages();
    }
  };

  const handleMarkRead = (messageId) => {
    messageService.updateMessageStatus(messageId, 'read');
    loadMessages();
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
    if (status) {
      const filtered = messageService.filterByStatus(status);
      setMessages(filtered);
    } else {
      setMessages(messageService.getAllMessages());
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const searched = messageService.searchMessages(term);
    setMessages(searched);
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('adminSession');
    localStorage.removeItem('adminUser');
    setIsLoggedIn(false);
    navigate('/admin-login');
  };

  // Navigation handler
  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300`}>
          <nav className="mt-5 px-2">
            <button
              onClick={() => handleNavigation('overview')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'overview' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Overview
            </button>
            <button
              onClick={() => handleNavigation('products')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'products' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Products
            </button>
            <button
              onClick={() => handleNavigation('messages')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'messages' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Messages
              {stats.unread > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {stats.unread}
                </span>
              )}
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeSection === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900">Total Products</h3>
                  <p className="text-3xl font-bold text-blue-600">{products.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900">Total Messages</h3>
                  <p className="text-3xl font-bold text-purple-600">{stats.total}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900">Unread Messages</h3>
                  <p className="text-3xl font-bold text-red-600">{stats.unread}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900">Replied Messages</h3>
                  <p className="text-3xl font-bold text-green-600">{stats.replied}</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'products' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Products Management</h2>
              <p className="text-gray-600">Product management section will be implemented here.</p>
            </div>
          )}

          {activeSection === 'messages' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
                <div className="flex space-x-2">
                  <select
                    value={filterStatus}
                    onChange={(e) => handleFilterChange(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Messages</option>
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </select>
                  
                  <input
                    type="text"
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293L12 20.586l-3.707-3.293a1 1 0 00-.707-.293H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                  <p className="text-gray-600">Messages from the contact form will appear here.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map(message => (
                    <MessageCard
                      key={message.id}
                      message={message}
                      onReply={handleReply}
                      onDelete={handleDeleteMessage}
                      onMarkRead={handleMarkRead}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Message Detail Modal */}
      <MessageDetailModal
        message={selectedMessage}
        isOpen={showMessageModal}
        onClose={() => setShowMessageModal(false)}
        onSendReply={handleSendReply}
      />
    </div>
  );
};

export default AdminDashboard;
