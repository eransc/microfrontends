'use client'
import { useEffect } from 'react';

export default function DashboardCRAHost() {
  const containerId = 'dashboard-cra-container';
  const scriptId = 'dashboard-cra-script';

  useEffect(() => {
    // Only load the script if it hasn't been loaded yet
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'http://localhost:3003/dashboard-cra.umd.cjs'; // Adjust if your Vite output is different
      script.onload = () => {
        if (window.mountDashboardCRA) {
          window.mountDashboardCRA(containerId);
        }
      };
      document.body.appendChild(script);
    } else if (window.mountDashboardCRA) {
      window.mountDashboardCRA(containerId);
    }
  }, []);

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-8 ml-64">
        <div id={containerId} />
      </main>
    </div>
  );
}