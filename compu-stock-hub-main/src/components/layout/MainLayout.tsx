
import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from './AppSidebar';
import Header from './Header';
import { useAuth } from '@/contexts/AuthContext';

const MainLayout: React.FC = () => {
  const { user, isLoading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse-slow flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-brand-300 mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <div className="flex flex-1 w-full overflow-hidden">
          <AppSidebar />
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
