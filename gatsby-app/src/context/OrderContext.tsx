import React, { useState, createContext } from "react";

export interface OrderItem {
  id: string;
  category: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  items: OrderItem[];
  total: number;
}

interface OrderContextType {
  order: Order;
  addToOrder: (item: OrderItem) => void;
  removeFromOrder: (itemId: string) => void;
}

const OrderContext = createContext<OrderContextType>({
  order: { items: [], total: 0 },
  addToOrder: () => {},
  removeFromOrder: () => {},
});

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [order, setOrder] = useState<Order>({ items: [], total: 0 });

  const addToOrder = (item: OrderItem) => {
    setOrder((prevOrder) => {
      const existingItemIndex = prevOrder.items.findIndex(
        (i) => i.id === item.id
      );
      let updatedItems: OrderItem[];

      if (existingItemIndex > -1) {
        updatedItems = [...prevOrder.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity,
        };
      } else {
        updatedItems = [...prevOrder.items, item];
      }

      const total = updatedItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );

      return { items: updatedItems, total };
    });
  };

  const removeFromOrder = (itemId: string) => {
    setOrder((prevOrder) => {
      const updatedItems = prevOrder.items.filter((i) => i.id !== itemId);
      const total = updatedItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );

      return { items: updatedItems, total };
    });
  };

  return (
    <OrderContext.Provider value={{ order, addToOrder, removeFromOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
