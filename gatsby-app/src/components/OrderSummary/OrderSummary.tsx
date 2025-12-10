import React from "react";
import * as styles from "./OrderSummary.module.css";

interface OrderSummaryProps {
  items: {
    id: string;
    category: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  removeFromOrder: (itemId: string) => void;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  removeFromOrder,
}) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Separate flavor items from other items
  const flavorItems = items.filter((item) => item.category === "flavor");
  const nonFlavorItems = items.filter((item) => item.category !== "flavor");

  // Find wings item to append flavors to
  const wingsItem = nonFlavorItems.find((item) =>
    item.name.toLowerCase().includes("wings")
  );
  const otherItems = nonFlavorItems.filter(
    (item) => !item.name.toLowerCase().includes("wings")
  );

  return (
    <div className={styles.orderSummary}>
      <ul className={styles.itemList}>
        {wingsItem && (
          <li key="wings" className={styles.item}>
            <span>
              {wingsItem.name}{" "}
              <span className={styles.itemQuantity}>
                (x{wingsItem.quantity})
              </span>
              {flavorItems.length > 0 && (
                <span className={styles.selectedFlavor}>
                  - {flavorItems.map((f) => f.name).join(", ")}
                </span>
              )}
            </span>
            <span className={styles.price}>
              ${(wingsItem.price * wingsItem.quantity).toFixed(2)}
            </span>
            <span className={styles.removeButton}>
              <button onClick={() => removeFromOrder(wingsItem.id)}>🗑️</button>
            </span>
          </li>
        )}
        {otherItems.map((item, index) => (
          <li key={index} className={styles.item}>
            <span>
              {item.name}{" "}
              <span className={styles.itemQuantity}>(x{item.quantity})</span>
            </span>
            <span className={styles.price}>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            <span className={styles.removeButton}>
              <button onClick={() => removeFromOrder(item.id)}>🗑️</button>
            </span>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <strong>Total:</strong>
        <strong>${total.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default OrderSummary;
