"use client";
import dynamic from 'next/dynamic'
import Image from "next/image";
import styles from "./styles/page.module.css";
import fonts from "../styles/fonts.module.css";
// import Header from "./components/header";
import Footer from "./components/footer";

const DYnamicHeader = dynamic(()=> import('./components/header'), {ssr : false})

window.addEventListener('scroll', () => {
  const Header = document.querySelector('header');
  const ScrollTop = window.scrollY;
  if (ScrollTop > 60) {
    Header?.classList.add('drop');
  }else if((ScrollTop <= 60)) {
    Header?.classList.remove('drop');
  }
});

export default function Home() {
  return (
  <main>
    <DYnamicHeader />
      <div className={styles.sectionWrap}>
        <section className={styles.section1} id="hello">
          <article>
            <h1>
              hello!
              <br />
              this is thetititle&#x27;s portpoilo<em>.</em>
            </h1>
            <em>used by NEXT.JS</em>
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
    <Footer />
  </main>
  );
}
