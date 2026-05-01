import { AlertTriangle } from 'lucide-react';
import RetroWindow from './RetroWindow';
import RetroButton from './RetroButton';

const AuthPromptModal = ({ onClose, onOpenLogin }) => (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <RetroWindow title="SYSTEM_ALERT" headerColor="bg-red-800" className="w-full max-w-sm" onClose={onClose}>
      <div className="text-center py-4">
        <AlertTriangle size={40} className="mx-auto text-red-600 mb-4" />
        <h3 className="font-black text-lg mb-2">Guest Account Limitation</h3>
        <p className="font-mono text-sm text-gray-600 mb-6">
          You must log in with your email to track progress and earn XP.
        </p>
        <div className="flex flex-col gap-3">
          <RetroButton color="bg-blue-300" onClick={() => { onClose(); onOpenLogin(); }}>
            Log In / Sign Up
          </RetroButton>
          <button onClick={onClose} className="font-mono text-xs text-gray-500 hover:text-black underline">
            Continue as Guest
          </button>
        </div>
      </div>
    </RetroWindow>
  </div>
);

export default AuthPromptModal;
