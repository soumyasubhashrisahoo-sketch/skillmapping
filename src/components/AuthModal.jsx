import { useState } from 'react';
import { User } from 'lucide-react';
import RetroWindow from './RetroWindow';
import RetroButton from './RetroButton';

const AuthModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim().includes('@')) {
      onLogin(email.trim().toLowerCase());
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <RetroWindow title="LOGIN.EXE" headerColor="bg-blue-900" className="w-full max-w-sm" onClose={onClose}>
        <div className="text-center mb-6">
          <User size={48} className="mx-auto mb-2 text-gray-700" />
          <h2 className="text-xl font-black">Identify Yourself</h2>
          <p className="font-mono text-xs text-gray-500">Enter your email to track progress.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            autoFocus
            required
            placeholder="Enter Email Address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[3px] border-black p-2 font-mono outline-none shadow-inner bg-gray-50 focus:bg-white"
          />
          <RetroButton color="bg-green-300" className="w-full py-3" onClick={handleSubmit}>
            Access System
          </RetroButton>
        </form>
      </RetroWindow>
    </div>
  );
};

export default AuthModal;
