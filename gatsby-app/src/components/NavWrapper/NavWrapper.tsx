import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import {HeaderNav} from "../../components/HeaderNav/HeaderNav";
import {BottomTabBar} from "../../components/BottomTabBar/BottomTabBar";

export const NavWrapper: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return isDesktop ? <HeaderNav /> : <BottomTabBar />;
};
