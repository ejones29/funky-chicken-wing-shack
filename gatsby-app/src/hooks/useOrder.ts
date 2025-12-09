import { menuItem } from "./../pages/menu/menu.module.css.d";
import { useState } from "react";

interface OrderItem {
  id: string;
  category: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  items: OrderItem[];
  total: number;
}

export const useOrder = ({}) => {
  // state to hold the current order
  const [order, setOrder] = useState<Order>({ items: [], total: 0 });

  // function to add an item to the order
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

  // function to remove an item from the order
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

  return { order, addToOrder, removeFromOrder };
};
