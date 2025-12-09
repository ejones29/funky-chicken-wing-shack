import type { MenuItem } from "./sanity";
export interface MenuPageProps {
  data: {
    menuItems: {
      nodes: MenuItem[];
    };
  };
}
