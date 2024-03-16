import clsx from "clsx";
import styles from "./Header.module.scss";
import globalStyles from "styles/globals.scss";

const Header = () => {
  return (
    <header className={styles.welcomePage}>
      <div className={clsx("container", styles.welcomePageContent)}>
        <h1 className={clsx(styles.welcomePageSlogan, globalStyles.h1)}>
          Nasza firma oferuje najwyższej jakości produkty.
        </h1>
        <span className={styles.welcomePageSubtitle}>
          Nie wierz nam na słowo - sprawdź
        </span>
        <a href="#offer" className={styles.welcomePageCto}>
          oferta
        </a>
      </div>
      <div className={styles.welcomePageOverlay}></div>
    </header>
  );
};

export default Header;
