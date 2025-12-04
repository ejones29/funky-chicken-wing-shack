
import React from 'react'
import {Link} from 'gatsby'
import * as styles from './HeaderNav.module.css'
import Logo from '../Logo/Logo'

const links = ["Home", "Menu", "Account", "Cart" ];

export const HeaderNav: React.FC = () => {
  return (
    <div className={styles.headerNav}>
      <div className={styles.inner}>
        <nav>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link}>
                <a href="#" className={styles.navItem}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};