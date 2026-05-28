import styles from './CssModules.module.scss';

const CssModules = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>- CssModules -</p>
      <button className={styles.button}>FIGHT!!</button>
    </div>
  );
};

export default CssModules;
