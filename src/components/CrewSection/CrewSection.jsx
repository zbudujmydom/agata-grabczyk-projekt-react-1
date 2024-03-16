import clsx from "clsx";
import styles from "./CrewSection.module.scss";
import specialistManImage from "assets/specialist-man.jpg";
import specialistGirlImage from "assets/specialist-girl.jpg";
// import globalStyles from "styles/globals.scss";

const CrewSection = () => {
  return (
    <section className={clsx("section", styles.ourCrewSection)} id="crew">
      <div className={clsx("container", styles.ourCrewSectionContent)}>
        <h2 className={styles.crewSectionSlogan}>Nasi specjaliści</h2>
        <ul className={styles.ourCrewList}>
          <li className={styles.ourCrewListElement}>
            <img
              className={styles.ourCrewImage}
              src={specialistManImage}
              alt="specialist-man"
            />
            <div className={styles.listElement}>
              <h4 className={styles.crewName}>Jan Nowak [Dział Handlowy]</h4>
              <p className={styles.crewDescription}>
                Cras rutrum a dui non volutpat. Praesent in mauris tristique
                diam imperdiet hendrerit. Fusce tincidunt imperdiet purus, ut
                volutpat mi tempor et. Etiam placerat nunc felis, vel tincidunt
                diam sodales ut. Proin eu elementum elit. Maecenas et lectus a
                turpis dictum blandit ut id nunc.
              </p>
            </div>
          </li>
          <li className={styles.ourCrewListElement}>
            <img
              className={styles.ourCrewImage}
              src={specialistGirlImage}
              alt="specialist-girl"
            />
            <div className={styles.listElement}>
              <h4 className={styles.crewName}>
                Anna Kowalska [Dział Sprzedaży]
              </h4>
              <p className={styles.crewDescription}>
                Cras rutrum a dui non volutpat. Praesent in mauris tristique
                diam imperdiet hendrerit. Fusce tincidunt imperdiet purus, ut
                volutpat mi tempor et. Etiam placerat nunc felis, vel tincidunt
                diam sodales ut. Proin eu elementum elit. Maecenas et lectus a
                turpis dictum blandit ut id nunc.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CrewSection;
