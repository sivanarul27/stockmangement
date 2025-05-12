
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Package, 
  ShoppingCart, 
  FileText, 
  DollarSign, 
  Users, 
  User, 
  Settings,
  LayoutDashboard,
} from 'lucide-react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types';

const AppSidebar = () => {
  const sidebar = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const { user, isAuthorized } = useAuth();
  
  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) => isActive 
    ? "bg-sidebar-accent text-primary font-medium" 
    : "hover:bg-sidebar-accent/50";

  // Define menu items with role-based access
  const menuItems = [
    {
      label: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
      roles: [UserRole.ADMIN, UserRole.SHOP_OWNER, UserRole.INVENTORY_MANAGER, UserRole.SALES_STAFF]
    },
    {
      label: "Inventory",
      path: "/inventory",
      icon: Package,
      roles: [UserRole.ADMIN, UserRole.SHOP_OWNER, UserRole.INVENTORY_MANAGER]
    },
    {
      label: "Orders",
      path: "/orders",
      icon: ShoppingCart,
      roles: [UserRole.ADMIN, UserRole.SHOP_OWNER, UserRole.INVENTORY_MANAGER, UserRole.SALES_STAFF]
    },
    {
      label: "Sales",
      path: "/sales",
      icon: DollarSign,
      roles: [UserRole.ADMIN, UserRole.SHOP_OWNER, UserRole.SALES_STAFF]
    },
    {
      label: "Invoices",
      path: "/invoices",
      icon: FileText,
      roles: [UserRole.ADMIN, UserRole.SHOP_OWNER, UserRole.SALES_STAFF]
    },
    {
      label: "Users",
      path: "/users",
      icon: Users,
      roles: [UserRole.ADMIN]
    },
    {
      label: "Suppliers",
      path: "/suppliers",
      icon: User,
      roles: [UserRole.ADMIN, UserRole.SHOP_OWNER, UserRole.INVENTORY_MANAGER]
    },
    {
      label: "Customers",
      path: "/customers",
      icon: User,
      roles: [UserRole.ADMIN, UserRole.SHOP_OWNER, UserRole.SALES_STAFF]
    },
    {
      label: "Settings",
      path: "/settings",
      icon: Settings,
      roles: [UserRole.ADMIN, UserRole.SHOP_OWNER]
    }
  ];

  // Filter menu items based on user role
  const authorizedItems = menuItems.filter(item => 
    user && isAuthorized(item.roles)
  );

  return (
    <Sidebar 
      className={cn("bg-sidebar border-r border-sidebar-border", 
        sidebar.state === "collapsed" ? "w-14" : "w-64")}
      collapsible="icon"
    >
      <SidebarTrigger className="m-2 self-end text-white" />

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {authorizedItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.path} 
                      end 
                      className={cn(
                        "flex items-center py-2 px-3 rounded-md text-sidebar-foreground", 
                        getNavCls
                      )}
                    >
                      <item.icon className={cn("h-5 w-5", sidebar.state === "collapsed" ? "mx-auto" : "mr-2")} />
                      {sidebar.state !== "collapsed" && <span>{item.label}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
