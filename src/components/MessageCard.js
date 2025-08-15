import React from 'react';

const MessageCard = ({ message, onReply, onDelete, onMarkRead }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'unread': return 'bg-red-100 text-red-800';
      case 'read': return 'bg-blue-100 text-blue-800';
      case 'replied': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'unread': return 'New';
      case 'read': return 'Read';
      case 'replied': return 'Replied';
      default: return status;
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-semibold text-gray-900">{message.name}</h4>
            <p className="text-sm text-gray-600">{message.email}</p>
            {message.phone && (
              <p className="text-sm text-gray-500">{message.phone}</p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
              {getStatusText(message.status)}
            </span>
          </div>
        </div>

        <div className="mb-3">
          {message.service && (
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Service:</span> {message.service}
            </p>
          )}
          <p className="text-gray-700">{message.message}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">{formatDate(message.timestamp)}</p>
          
          <div className="flex space-x-2">
            {message.status === 'unread' && (
              <button
                onClick={() => onMarkRead(message.id)}
                className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              >
                Mark Read
              </button>
            )}
            
            <button
              onClick={() => onReply(message)}
              className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
            >
              Reply
            </button>
            
            <button
              onClick={() => onDelete(message.id)}
              className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>

        {message.reply && (
          <div className="mt-3 p-3 bg-green-50 border-l-4 border-green-400">
            <p className="text-sm font-medium text-green-800 mb-1">Reply:</p>
            <p className="text-sm text-green-700">{message.reply}</p>
            <p className="text-xs text-green-600 mt-1">
              {formatDate(message.replyTimestamp)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageCard;
