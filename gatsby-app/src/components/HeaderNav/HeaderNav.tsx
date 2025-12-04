
import React from 'react'
import {Link} from 'gatsby'
import * as styles from './HeaderNav.module.css'

const links = ["Menu", "Flavors", "Account", "Cart" ];

export const HeaderNav: React.FC = () => {
  return (
    <div className={styles.headerNav}>
      <div className={styles.inner}>
        <nav>
          <ul className={styles.navList}>
            {links.map((link) => (
              <Link to={`/${link.toLowerCase()}`} key={link} className={styles.navItem}>
                {link}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};