// Message service for handling contact form messages and admin responses
const messageService = {
  // Storage key for messages
  STORAGE_KEY: 'contactMessages',

  // Get all messages
  getAllMessages: function() {
    const messages = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    return messages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  },

  // Get unread messages count
  getUnreadCount: function() {
    const messages = this.getAllMessages();
    return messages.filter(msg => msg.status === 'unread').length;
  },

  // Add new message from contact form
  addMessage: function(messageData) {
    const messages = this.getAllMessages();
    const newMessage = {
      id: Date.now(),
      ...messageData,
      timestamp: new Date().toISOString(),
      status: 'unread',
      reply: null,
      replyTimestamp: null
    };
    
    messages.unshift(newMessage);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(messages));
    
    return newMessage;
  },

  // Update message status (read/unread/replied)
  updateMessageStatus: function(messageId, status) {
    const messages = this.getAllMessages();
    const messageIndex = messages.findIndex(msg => msg.id === messageId);
    
    if (messageIndex !== -1) {
      messages[messageIndex].status = status;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(messages));
      return messages[messageIndex];
    }
    
    return null;
  },

  // Add admin reply to message
  addReply: function(messageId, replyText) {
    const messages = this.getAllMessages();
    const messageIndex = messages.findIndex(msg => msg.id === messageId);
    
    if (messageIndex !== -1) {
      messages[messageIndex].reply = replyText;
      messages[messageIndex].replyTimestamp = new Date().toISOString();
      messages[messageIndex].status = 'replied';
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(messages));
      return messages[messageIndex];
    }
    
    return null;
  },

  // Delete message
  deleteMessage: function(messageId) {
    const messages = this.getAllMessages();
    const filteredMessages = messages.filter(msg => msg.id !== messageId);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredMessages));
    return true;
  },

  // Search messages
  searchMessages: function(searchTerm) {
    const messages = this.getAllMessages();
    if (!searchTerm) return messages;
    
    const term = searchTerm.toLowerCase();
    return messages.filter(msg => 
      msg.name.toLowerCase().includes(term) ||
      msg.email.toLowerCase().includes(term) ||
      msg.message.toLowerCase().includes(term) ||
      msg.service.toLowerCase().includes(term)
    );
  },

  // Filter messages by status
  filterByStatus: function(status) {
    const messages = this.getAllMessages();
    if (!status) return messages;
    return messages.filter(msg => msg.status === status);
  },

  // Get message statistics
  getStats: function() {
    const messages = this.getAllMessages();
    return {
      total: messages.length,
      unread: messages.filter(msg => msg.status === 'unread').length,
      replied: messages.filter(msg => msg.status === 'replied').length,
      read: messages.filter(msg => msg.status === 'read').length
    };
  }
};

export default messageService;
