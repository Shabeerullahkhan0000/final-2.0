import { useState } from 'react';

export default function AppSidebar() {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="w-64 bg-surface border-r border-subtle flex flex-col">
      <div className="p-6 border-b border-subtle">
        <h2 className="text-lg font-semibold text-primary">Workspace</h2>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <button className={`w-full text-left p-3 rounded-lg ${activeItem === 'dashboard' ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-overlay'}`} onClick={() => setActiveItem('dashboard')}>
          Dashboard
        </button>
        <button className={`w-full text-left p-3 rounded-lg ${activeItem === 'files' ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-overlay'}`} onClick={() => setActiveItem('files')}>
          Files
        </button>
        <button className={`w-full text-left p-3 rounded-lg ${activeItem === 'settings' ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-overlay'}`} onClick={() => setActiveItem('settings')}>
          Settings
        </button>
      </nav>
    </div>
  );
}

