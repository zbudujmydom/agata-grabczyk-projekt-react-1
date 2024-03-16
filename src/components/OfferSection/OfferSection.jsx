import clsx from "clsx";
import styles from "./OfferSection.module.scss";
import { offerOptions } from "data/offerOptions";
import { nanoid } from "nanoid";

const OfferSection = () => {
  return (
    <section className={clsx("section", styles.offerSection)} id="offer">
      <div className={clsx("container", styles.offerSectionContent)}>
        <h2 className={styles.offerSectionSlogan}>
          Czym zajmuje się nasza firma?
        </h2>
        <ul class={styles.offerTiles}>
          {offerOptions.map((option) => (
            <li className={clsx(styles.offerTile, styles.new)} key={nanoid()}>
              {option.isNew ? (
                <>
                  <h4 className={styles.tileText}>{option.name}</h4>
                  <p className={styles.tileDescription}>(nowość)</p>
                  <div className={styles.orangePoint}></div>
                </>
              ) : (
                <h4 className={styles.tileText}>{option.name}</h4>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OfferSection;
