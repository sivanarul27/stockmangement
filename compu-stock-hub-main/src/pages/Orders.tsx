
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Filter, ShoppingCart, ShoppingBag } from 'lucide-react';
import { orders as initialOrders } from '@/data/mock';
import { DataTable } from '@/components/DataTable';
import { columns } from '@/components/orders/OrderColumns';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OrdersPage: React.FC = () => {
  const [orders] = useState(initialOrders);
  const [orderType, setOrderType] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredOrders = orders.filter(order => {
    const matchesType = orderType === "all" || order.type === orderType;
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    const matchesSearch = order.customerOrSupplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  const purchaseOrders = orders.filter(order => order.type === "purchase");
  const salesOrders = orders.filter(order => order.type === "sale");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Order Management</h1>
        
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> New Order
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Order</DialogTitle>
                <DialogDescription>
                  Fill in the details for the new order.
                </DialogDescription>
              </DialogHeader>
              <Tabs defaultValue="sale">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="sale">Sales Order</TabsTrigger>
                  <TabsTrigger value="purchase">Purchase Order</TabsTrigger>
                </TabsList>
                <TabsContent value="sale">
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <label htmlFor="customer">Customer</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select customer" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alex">Alex Johnson</SelectItem>
                          <SelectItem value="maria">Maria Garcia</SelectItem>
                          <SelectItem value="robert">Robert Chen</SelectItem>
                          <SelectItem value="new">+ Add New Customer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      {/* Order items would go here */}
                      <p className="text-sm text-muted-foreground">Order items input would be here</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="purchase">
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <label htmlFor="supplier">Supplier</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select supplier" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dell">Dell Technologies</SelectItem>
                          <SelectItem value="logitech">Logitech Inc</SelectItem>
                          <SelectItem value="samsung">Samsung Electronics</SelectItem>
                          <SelectItem value="seagate">Seagate Technology</SelectItem>
                          <SelectItem value="new">+ Add New Supplier</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      {/* Order items would go here */}
                      <p className="text-sm text-muted-foreground">Order items input would be here</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <DialogFooter>
                <Button type="submit">Create Order</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orders.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sale Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{salesOrders.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Purchase Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{purchaseOrders.length}</div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Order List</CardTitle>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex-1 min-w-[200px]">
              <Input
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={orderType} onValueChange={setOrderType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Order Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="sale">Sales</SelectItem>
                <SelectItem value="purchase">Purchases</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Order Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={filteredOrders} />
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersPage;
