import clsx from "clsx";
import styles from "./Navbar.module.scss";
import globalStyles from "styles/globals.scss";
import { navOptions } from "data/navOptions";
import { nanoid } from "nanoid";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [showMenu]);

  return (
    <nav className={styles.navContainer}>
      <div className={clsx("container", styles.navbar)}>
        <span className={clsx(globalStyles.h4)}>Moja firma</span>
        <div className={clsx(styles.menu, showMenu && styles.showMenu)}>
          <ul className={styles.navLinks}>
            {navOptions.map((option) => (
              <li key={nanoid()}>
                {option.isScroll && (
                  <a className={styles.allowedCto} href={option.path}>
                    {option.name}
                  </a>
                )}
                {!option.isScroll && (
                  <p className={styles.notAllowedCto}>{option.name}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.navButton} onClick={toggleMenu}>
          {showMenu ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
