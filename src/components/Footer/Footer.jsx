import clsx from "clsx";
import styles from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.footerContent)}>
        <span className={styles.rodo}>
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </span>
        <div className={styles.footerIcons}>
          <FaInstagram className={styles.icon} />
          <FaFacebookSquare className={styles.icon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
