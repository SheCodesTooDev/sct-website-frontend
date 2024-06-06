import styles from "../style/Home.module.css";
const ExploreSection = () => {
  return (
    <div>
      <h3 className={styles.explore}>
        Explore the programming areas of interest you desire.
      </h3>

      <div className={styles.greenBackground}></div>
      <button className={styles.exploreButton}>Explore our Courses</button>
      <div className={styles.homeImages}>
        <div className={styles.columnOne}>
          <img src="/images/1.jpg" alt="Image 1" />
          <img src="/images/2.jpg" alt="Image 2" />
        </div>
        <div className={styles.columnTwo}>
          <img src="/images/3.jpg" alt="Image 3" />
          <img src="/images/4.jpg" alt="Image 4" />
        </div>

        <div className={styles.columnThree}>
          <img src="/images/5.jpg" alt="Image 5" />

          <img src="/images/6.jpg" alt="Image 6" />
        </div>
        <div className={styles.columnFour}>
          <img src="/images/7 .jpeg" alt="Image 7" />

          <img src="/images/8 .jpeg" alt="Image 8" />
        </div>
        <div className={styles.columnFive}>
          <img src="/images/9.jpeg" alt="Image 9" />
          <img src="/images/10 .jpeg" alt="Image 10" />
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
