
export enum UserRole {
  ADMIN = "admin",
  SHOP_OWNER = "shop_owner",
  INVENTORY_MANAGER = "inventory_manager",
  SALES_STAFF = "sales_staff",
  SUPPLIER = "supplier",
  CUSTOMER = "customer"
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  lastLogin?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  description: string;
  sku: string;
  currentQuantity: number;
  maxQuantity: number;
  price: number;
  cost: number;
  supplier: string;
  lastUpdated: string;
}

export interface Order {
  id: string;
  type: "purchase" | "sale";
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "processing" | "completed" | "cancelled";
  customerOrSupplier: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  itemId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Sale {
  id: string;
  orderId: string;
  customerId: string;
  customerName: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: string;
  createdAt: string;
}

export interface Invoice {
  id: string;
  saleId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  createdAt: string;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
}

export interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  purchaseHistory: Sale[];
}

export interface DashboardMetrics {
  totalInventoryValue: number;
  lowStockItems: number;
  pendingOrders: number;
  monthlySales: number;
  dailySales: number;
}

export interface AlertNotification {
  id: string;
  type: "low_stock" | "order_status" | "system";
  message: string;
  read: boolean;
  createdAt: string;
}
