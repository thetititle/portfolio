import Image from "next/image";
import styles from "./styles/page.module.css";
import fonts from "../styles/fonts.module.css";

export default function Home() {
  return (
    <div className={styles.sectionWrap}>
      <section className={styles.section1}>
        <article>
          <h1>
            hello!<br/>this is thetititle&#x27;s portpoilo<em>.</em>
          </h1>
          <span>
            This is my main works archive website.<br/>I hope we can have the
            opportunity to work together. God bless you and have a beautiful day
            :)
          </span>
        </article>
      </section>
      <section>section02</section>
      <section>section03</section>
      <section>section04</section>
    </div>
  );
}
