import { useContext } from "react";
import OrderContext from "../context/OrderContext";

/**
 * Custom hook to access the order context.
 *
 * This is a thin wrapper around useContext(OrderContext) that provides:
 * - Access to the order state (items, total)
 * - addToOrder and removeFromOrder functions
 *
 * Note: The order management logic (addToOrder, removeFromOrder) lives in OrderContext,
 * not in this hook. This follows the standard React Context pattern where:
 * 1. State and state-modifying functions are centralized in the Context Provider
 * 2. The hook is just a convenient accessor with error handling
 * 3. All components share the same function instances (better performance)
 * 4. No risk of stale closures since functions always reference the latest state
 *
 * @throws Error if used outside of OrderProvider
 * @returns The order context value containing order state and functions
 */
export const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }

  return context;
};
