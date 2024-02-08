"use client";
import Image from "next/image";
import styles from "./styles/page.module.css";
import fonts from "../styles/fonts.module.css";
import HeaderScroll from "./scripts/pageScript";

window.addEventListener('scroll', () => {
  console.log(HeaderScroll);
});

export default function Home() {
  return (
    <div className={styles.sectionWrap}>
      <section className={styles.section1} id="hello">
        <article>
          <h1>
            hello!
            <br />
            this is thetititle&#x27;s portpoilo<em>.</em>
          </h1>
          <span>
            This is my main works archive website.
            <br />I hope we can have the opportunity to work together. God bless
            you and have a beautiful day :)
          </span>
        </article>
      </section>
      <section>
        <article>section02</article>
      </section>
      <section>
        <article>section03</article>
      </section>
      <section>
        <article>section03</article>
      </section>
    </div>
  );
}
