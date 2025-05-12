
import React, { createContext, useContext, useState, useEffect } from "react";
import { AlertNotification } from "../types";
import { alertNotifications as mockAlerts } from "../data/mock";

interface NotificationContextType {
  notifications: AlertNotification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addNotification: (notification: Omit<AlertNotification, "id" | "read" | "createdAt">) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<AlertNotification[]>([]);
  
  useEffect(() => {
    // In a real app, fetch from API
    setNotifications(mockAlerts);
  }, []);
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };
  
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };
  
  const addNotification = (notification: Omit<AlertNotification, "id" | "read" | "createdAt">) => {
    const newNotification: AlertNotification = {
      ...notification,
      id: `alert${notifications.length + 1}`,
      read: false,
      createdAt: new Date().toISOString()
    };
    
    setNotifications(prev => [newNotification, ...prev]);
  };
  
  return (
    <NotificationContext.Provider value={{ 
      notifications, 
      unreadCount, 
      markAsRead, 
      markAllAsRead,
      addNotification
    }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
