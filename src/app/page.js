import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
        <h1 className="text-4xl font-bold  text-amber-300 md:text-blue-600 lg:text-pink-300 xl:text-red-600" >Text</h1>
    </div>
  );
}
