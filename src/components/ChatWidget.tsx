import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-80 glass-card rounded-2xl overflow-hidden shadow-2xl animate-slide-up">
          {/* Header */}
          <div className="bg-primary/10 p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Gira AI</p>
                <p className="text-xs text-primary">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto space-y-3">
            <p className="text-xs text-muted-foreground text-center">
              Need Help?
            </p>
            <div className="bg-secondary rounded-2xl rounded-tl-none p-3">
              <p className="text-sm">
                👋 Hello! Send a message to initiate conversation i.e "Hello"
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-secondary rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:glow-soft transition-all">
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-secondary text-foreground"
            : "bg-primary text-primary-foreground glow-primary hover:scale-110"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
