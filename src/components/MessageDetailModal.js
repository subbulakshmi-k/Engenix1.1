import React, { useState } from 'react';

const MessageDetailModal = ({ message, isOpen, onClose, onSendReply }) => {
  const [replyText, setReplyText] = useState('');
  const [isSending, setIsSending] = useState(false);

  if (!isOpen || !message) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSendReply = async () => {
    if (!replyText.trim()) return;
    
    setIsSending(true);
    await onSendReply(message.id, replyText);
    setReplyText('');
    setIsSending(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900">Message Details</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900">From:</h4>
              <p className="text-gray-700">{message.name}</p>
              <p className="text-sm text-gray-600">{message.email}</p>
              {message.phone && <p className="text-sm text-gray-600">{message.phone}</p>}
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">Service:</h4>
              <p className="text-gray-700">{message.service || 'General Inquiry'}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">Message:</h4>
              <p className="text-gray-700 bg-gray-50 p-3 rounded">{message.message}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">Received:</h4>
              <p className="text-sm text-gray-600">{formatDate(message.timestamp)}</p>
            </div>

            {message.reply && (
              <div>
                <h4 className="font-semibold text-green-800">Reply:</h4>
                <p className="text-gray-700 bg-green-50 p-3 rounded">{message.reply}</p>
                <p className="text-sm text-green-600 mt-1">
                  Replied on: {formatDate(message.replyTimestamp)}
                </p>
              </div>
            )}

            {!message.reply && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Reply to Message:</h4>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="4"
                  placeholder="Type your reply here..."
                />
                <div className="flex justify-end space-x-2 mt-3">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSendReply}
                    disabled={!replyText.trim() || isSending}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? 'Sending...' : 'Send Reply'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDetailModal;
