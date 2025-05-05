
import React from 'react';
import { Drawer } from '@/components/ui/drawer';
import { Order, OrderStatus } from '@/types';
import { formatCurrency } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export interface OrderDetailsDrawerProps {
  order: Order;
  open: boolean;
  onClose: () => void;
}

const OrderDetailsDrawer: React.FC<OrderDetailsDrawerProps> = ({ order, open, onClose }) => {
  if (!order) return null;

  const getStatusBadgeColor = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500';
      case 'processing':
        return 'bg-blue-500';
      case 'completed':
        return 'bg-green-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Order Details</h2>
          <button onClick={onClose} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600">Order ID: {order.id}</p>
          <p className="text-sm text-gray-600">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
          <div className="flex items-center mt-1">
            <span className="text-sm text-gray-600 mr-2">Status:</span>
            <Badge className={getStatusBadgeColor(order.status)}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </Badge>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Customer Information</h3>
          <p className="text-sm">Name: {order.customerName}</p>
          <p className="text-sm">Phone: {order.customerPhone}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Items</h3>
          <div className="space-y-2">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    {item.quantity} x {formatCurrency(item.price)}
                  </p>
                </div>
                <p className="font-semibold">{formatCurrency(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center font-semibold">
            <p>Total Amount:</p>
            <p>{formatCurrency(order.totalAmount)}</p>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default OrderDetailsDrawer;
