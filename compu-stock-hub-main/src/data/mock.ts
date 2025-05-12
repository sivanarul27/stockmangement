
import { 
  User, 
  UserRole, 
  InventoryItem, 
  Order, 
  Sale, 
  Invoice, 
  Supplier, 
  Customer,
  DashboardMetrics,
  AlertNotification
} from "../types";

// Mock Users
export const users: User[] = [
  {
    id: "user1",
    name: "Admin User",
    email: "admin@techretail.com",
    role: UserRole.ADMIN,
    createdAt: "2023-01-01T00:00:00Z",
    lastLogin: "2025-05-10T08:30:00Z"
  },
  {
    id: "user2",
    name: "John Smith",
    email: "john@techretail.com",
    role: UserRole.SHOP_OWNER,
    createdAt: "2023-01-02T00:00:00Z",
    lastLogin: "2025-05-09T10:15:00Z"
  },
  {
    id: "user3",
    name: "Emily Chen",
    email: "emily@techretail.com",
    role: UserRole.INVENTORY_MANAGER,
    createdAt: "2023-01-03T00:00:00Z",
    lastLogin: "2025-05-11T09:45:00Z"
  },
  {
    id: "user4",
    name: "Michael Brown",
    email: "michael@techretail.com",
    role: UserRole.SALES_STAFF,
    createdAt: "2023-01-04T00:00:00Z",
    lastLogin: "2025-05-10T14:20:00Z"
  },
];

// Mock Inventory Items
export const inventoryItems: InventoryItem[] = [
  {
    id: "item1",
    name: "Dell XPS 15 Laptop",
    category: "Laptops",
    description: "High-performance laptop with 15.6\" display, i7 processor",
    sku: "DELL-XPS15-001",
    currentQuantity: 8,
    maxQuantity: 50,
    price: 1499.99,
    cost: 1100.00,
    supplier: "Dell Technologies",
    lastUpdated: "2025-05-01T10:30:00Z"
  },
  {
    id: "item2",
    name: "Logitech MX Master 3 Mouse",
    category: "Peripherals",
    description: "Wireless mouse with advanced features",
    sku: "LOG-MX3-002",
    currentQuantity: 25,
    maxQuantity: 100,
    price: 99.99,
    cost: 65.00,
    supplier: "Logitech Inc",
    lastUpdated: "2025-05-03T14:15:00Z"
  },
  {
    id: "item3",
    name: "Samsung 32\" 4K Monitor",
    category: "Monitors",
    description: "32-inch 4K Ultra HD monitor with HDR",
    sku: "SAM-MON32-003",
    currentQuantity: 12,
    maxQuantity: 40,
    price: 349.99,
    cost: 250.00,
    supplier: "Samsung Electronics",
    lastUpdated: "2025-05-02T09:45:00Z"
  },
  {
    id: "item4",
    name: "Seagate 2TB External HDD",
    category: "Storage",
    description: "2TB portable external hard drive",
    sku: "SEA-2TB-004",
    currentQuantity: 5,
    maxQuantity: 60,
    price: 79.99,
    cost: 45.00,
    supplier: "Seagate Technology",
    lastUpdated: "2025-05-04T11:20:00Z"
  },
  {
    id: "item5",
    name: "NVIDIA RTX 4080 Graphics Card",
    category: "Components",
    description: "High-end graphics card for gaming and professional use",
    sku: "NVD-4080-005",
    currentQuantity: 3,
    maxQuantity: 30,
    price: 1199.99,
    cost: 900.00,
    supplier: "NVIDIA Corporation",
    lastUpdated: "2025-04-28T16:10:00Z"
  },
  {
    id: "item6",
    name: "Microsoft Office 365 (1-year)",
    category: "Software",
    description: "1-year subscription for Microsoft Office 365",
    sku: "MS-O365-006",
    currentQuantity: 50,
    maxQuantity: 200,
    price: 99.99,
    cost: 70.00,
    supplier: "Microsoft Corp",
    lastUpdated: "2025-05-05T13:40:00Z"
  },
];

// Mock Orders
export const orders: Order[] = [
  {
    id: "order1",
    type: "sale",
    items: [
      {
        itemId: "item1",
        name: "Dell XPS 15 Laptop",
        quantity: 1,
        unitPrice: 1499.99,
        totalPrice: 1499.99
      },
      {
        itemId: "item2",
        name: "Logitech MX Master 3 Mouse",
        quantity: 1,
        unitPrice: 99.99,
        totalPrice: 99.99
      }
    ],
    totalAmount: 1599.98,
    status: "completed",
    customerOrSupplier: "Alex Johnson",
    createdAt: "2025-05-05T11:30:00Z",
    updatedAt: "2025-05-05T12:00:00Z"
  },
  {
    id: "order2",
    type: "purchase",
    items: [
      {
        itemId: "item4",
        name: "Seagate 2TB External HDD",
        quantity: 10,
        unitPrice: 45.00,
        totalPrice: 450.00
      }
    ],
    totalAmount: 450.00,
    status: "pending",
    customerOrSupplier: "Seagate Technology",
    createdAt: "2025-05-08T09:15:00Z",
    updatedAt: "2025-05-08T09:15:00Z"
  },
  {
    id: "order3",
    type: "sale",
    items: [
      {
        itemId: "item3",
        name: "Samsung 32\" 4K Monitor",
        quantity: 2,
        unitPrice: 349.99,
        totalPrice: 699.98
      }
    ],
    totalAmount: 699.98,
    status: "processing",
    customerOrSupplier: "Maria Garcia",
    createdAt: "2025-05-10T14:45:00Z",
    updatedAt: "2025-05-10T15:00:00Z"
  },
  {
    id: "order4",
    type: "purchase",
    items: [
      {
        itemId: "item5",
        name: "NVIDIA RTX 4080 Graphics Card",
        quantity: 5,
        unitPrice: 900.00,
        totalPrice: 4500.00
      }
    ],
    totalAmount: 4500.00,
    status: "completed",
    customerOrSupplier: "NVIDIA Corporation",
    createdAt: "2025-05-01T10:00:00Z",
    updatedAt: "2025-05-03T11:30:00Z"
  },
];

// Mock Sales
export const sales: Sale[] = [
  {
    id: "sale1",
    orderId: "order1",
    customerId: "cust1",
    customerName: "Alex Johnson",
    items: [
      {
        itemId: "item1",
        name: "Dell XPS 15 Laptop",
        quantity: 1,
        unitPrice: 1499.99,
        totalPrice: 1499.99
      },
      {
        itemId: "item2",
        name: "Logitech MX Master 3 Mouse",
        quantity: 1,
        unitPrice: 99.99,
        totalPrice: 99.99
      }
    ],
    totalAmount: 1599.98,
    paymentMethod: "Credit Card",
    createdAt: "2025-05-05T12:00:00Z"
  },
  {
    id: "sale2",
    orderId: "order3",
    customerId: "cust2",
    customerName: "Maria Garcia",
    items: [
      {
        itemId: "item3",
        name: "Samsung 32\" 4K Monitor",
        quantity: 2,
        unitPrice: 349.99,
        totalPrice: 699.98
      }
    ],
    totalAmount: 699.98,
    paymentMethod: "PayPal",
    createdAt: "2025-05-10T15:00:00Z"
  },
];

// Mock Invoices
export const invoices: Invoice[] = [
  {
    id: "inv1",
    saleId: "sale1",
    customerName: "Alex Johnson",
    customerEmail: "alex@example.com",
    items: [
      {
        itemId: "item1",
        name: "Dell XPS 15 Laptop",
        quantity: 1,
        unitPrice: 1499.99,
        totalPrice: 1499.99
      },
      {
        itemId: "item2",
        name: "Logitech MX Master 3 Mouse",
        quantity: 1,
        unitPrice: 99.99,
        totalPrice: 99.99
      }
    ],
    subtotal: 1599.98,
    tax: 160.00,
    total: 1759.98,
    createdAt: "2025-05-05T12:05:00Z",
    dueDate: "2025-06-05T00:00:00Z",
    status: "paid"
  },
  {
    id: "inv2",
    saleId: "sale2",
    customerName: "Maria Garcia",
    customerEmail: "maria@example.com",
    items: [
      {
        itemId: "item3",
        name: "Samsung 32\" 4K Monitor",
        quantity: 2,
        unitPrice: 349.99,
        totalPrice: 699.98
      }
    ],
    subtotal: 699.98,
    tax: 70.00,
    total: 769.98,
    createdAt: "2025-05-10T15:10:00Z",
    dueDate: "2025-06-10T00:00:00Z",
    status: "pending"
  },
];

// Mock Suppliers
export const suppliers: Supplier[] = [
  {
    id: "sup1",
    name: "Dell Technologies",
    contactPerson: "Thomas Wilson",
    email: "thomas@dell.example.com",
    phone: "123-456-7890",
    address: "123 Tech Way, Austin, TX 78758"
  },
  {
    id: "sup2",
    name: "Logitech Inc",
    contactPerson: "Sarah Miller",
    email: "sarah@logitech.example.com",
    phone: "234-567-8901",
    address: "456 Input Drive, Fremont, CA 94538"
  },
  {
    id: "sup3",
    name: "Samsung Electronics",
    contactPerson: "David Kim",
    email: "david@samsung.example.com",
    phone: "345-678-9012",
    address: "789 Display Blvd, San Jose, CA 95134"
  },
  {
    id: "sup4",
    name: "Seagate Technology",
    contactPerson: "Jennifer Lee",
    email: "jennifer@seagate.example.com",
    phone: "456-789-0123",
    address: "101 Storage Street, Cupertino, CA 95014"
  },
];

// Mock Customers
export const customers: Customer[] = [
  {
    id: "cust1",
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "567-890-1234",
    address: "234 Main St, Springfield, IL 62701",
    purchaseHistory: []
  },
  {
    id: "cust2",
    name: "Maria Garcia",
    email: "maria@example.com",
    phone: "678-901-2345",
    address: "567 Oak Avenue, Chicago, IL 60601",
    purchaseHistory: []
  },
  {
    id: "cust3",
    name: "Robert Chen",
    email: "robert@example.com",
    phone: "789-012-3456",
    address: "890 Pine Road, Boston, MA 02108",
    purchaseHistory: []
  }
];

// Update customer purchase history
customers[0].purchaseHistory = [sales[0]];
customers[1].purchaseHistory = [sales[1]];

// Mock Dashboard Metrics
export const dashboardMetrics: DashboardMetrics = {
  totalInventoryValue: 39241.75,
  lowStockItems: 2,
  pendingOrders: 1,
  monthlySales: 6850.94,
  dailySales: 1599.98
};

// Mock Alert Notifications
export const alertNotifications: AlertNotification[] = [
  {
    id: "alert1",
    type: "low_stock",
    message: "NVIDIA RTX 4080 Graphics Card is running low on stock (3/30)",
    read: false,
    createdAt: "2025-05-10T08:00:00Z"
  },
  {
    id: "alert2",
    type: "low_stock",
    message: "Seagate 2TB External HDD is running low on stock (5/60)",
    read: false,
    createdAt: "2025-05-10T08:00:00Z"
  },
  {
    id: "alert3",
    type: "order_status",
    message: "New purchase order created for Seagate 2TB External HDD",
    read: true,
    createdAt: "2025-05-08T09:15:00Z"
  },
  {
    id: "alert4",
    type: "system",
    message: "System backup completed successfully",
    read: true,
    createdAt: "2025-05-09T00:00:00Z"
  },
];

export const currentUser: User = users[0]; // Default to admin user for mock data
