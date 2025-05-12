
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Package, 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  ShoppingCart,
  Users
} from 'lucide-react';
import { inventoryItems, dashboardMetrics, orders, sales, customers } from '@/data/mock';
import { DataTable } from '@/components/DataTable';
import { columns as inventoryColumns } from '@/components/inventory/InventoryColumns';
import { columns as orderColumns } from '@/components/orders/OrderColumns';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard: React.FC = () => {
  // Get low stock items
  const lowStockItems = inventoryItems.filter(
    item => (item.currentQuantity / item.maxQuantity) <= 0.2
  );

  // Recent orders (last 5)
  const recentOrders = [...orders].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 5);

  // Mock sales data for chart
  const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 8000 },
    { name: 'May', sales: 6850 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      {/* Low stock alerts */}
      {lowStockItems.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Low Stock Alerts</h2>
          <div className="space-y-2">
            {lowStockItems.map(item => (
              <Alert key={item.id} variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Low Stock: {item.name}</AlertTitle>
                <AlertDescription>
                  Current quantity: {item.currentQuantity} of {item.maxQuantity} ({Math.round((item.currentQuantity / item.maxQuantity) * 100)}%)
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </div>
      )}

      {/* Metrics */}
      <div className="grid-dashboard">
        <Card className="stock-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Inventory Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">${dashboardMetrics.totalInventoryValue.toLocaleString()}</div>
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stock-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{dashboardMetrics.pendingOrders}</div>
              <Clock className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stock-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">${dashboardMetrics.monthlySales.toLocaleString()}</div>
              <TrendingUp className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stock-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Daily Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">${dashboardMetrics.dailySales.toLocaleString()}</div>
              <DollarSign className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sales Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
          <CardDescription>Monthly sales performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#0099ff" name="Sales ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <Card>
          <div className="table-container">
            <DataTable columns={orderColumns} data={recentOrders} />
          </div>
        </Card>
      </div>

      {/* Low Stock Items */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Low Stock Items</h2>
        <Card>
          <div className="table-container">
            <DataTable columns={inventoryColumns} data={lowStockItems} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
