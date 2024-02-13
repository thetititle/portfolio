"use client";
import { useState, useEffect, useContext } from "react";
// import dynamic from 'next/dynamic'
// const DynamicHeader = dynamic(()=> import('./components/header'), {ssr : false})
import Footer from "./components/footer";
import Link from "next/link";
import styles from "./styles/page.module.css";
import headerStyle from "./styles/header.module.css";
import Image from "next/image";
import fonts from "./styles/fonts.module.css";
import ico from "./styles/icon.module.css";
import selfie from "../public/img/self.png";
// import axios from 'axios';

export default function Home({}) {
  const [isScroll, setScroll] = useState(true);
  const [selectNav, setNav] = useState("hello");
  
  useEffect(() => {
    window.addEventListener("scroll", (): any => {
      const Header = document.querySelector("header");
      const ScrollTop: number = window.scrollY;
      if (ScrollTop > 60) {
        Header?.classList.add("drop");
        setScroll((isScroll) => false);
      } else if (ScrollTop <= 60) {
        Header?.classList.remove("drop");
        setScroll((isScroll) => true);
      }
    });
  
  })
  
  useEffect(() => {
    getStaticProps();
  })
  
  const getStaticProps = (async () => {
    const res = await fetch('api/user')
    const data = await res.json()
    console.log('data', data)
    return { props: { data } }
  })
  
  const moveSection = (e: any) => {
    e.preventDefault();
    const lowText = e.target.innerHTML;
    var newText = lowText.split(" ");
    const selectTab = newText.join("");
    const scrollPosition = document.getElementById(selectTab)?.offsetTop;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    setNav((selectNav) => selectTab);
  };

  return (
    <main>
      <header>
        <div className={headerStyle.container}>
          <Link href="#" className={headerStyle.logo}>
            <span className={`${isScroll ? ico.logo : ico.logoDark}`}></span>
          </Link>
          <div className={headerStyle.tabWrapper}>
            <ul onClick={moveSection}  className={`${isScroll ? '' : headerStyle.drop}`}>
              <li
                className={`${selectNav === "hello" ? headerStyle.active : ""}`}
              >
                <a href="#">hello</a>
              </li>
              <li
                className={`${
                  selectNav === "introduce" ? headerStyle.active : ""
                }`}
              >
                <a href="#">introduce</a>
              </li>
              <li
                className={`${
                  selectNav === "product" ? headerStyle.active : ""
                }`}
              >
                <a href="#">product</a>
              </li>
              <li
                className={`${
                  selectNav === "thispage" ? headerStyle.active : ""
                }`}
              >
                <a href="#">this page</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className={styles.sectionWrap}>
        <section className={styles.section1} id="hello">
          <article>
            <h1>
              hello!
              <br />
              this is thetititle&#x27;s portpoilo<em>.</em>
            </h1>
            <em>used NEXT.JS with TypeScript</em>
            <span>
              This is my main works archive website.
              <br />I hope we can have the opportunity to work together. God
              bless you and have a beautiful day :)
            </span>
          </article>
        </section>
        <p className={fonts.tc}>Let me introduce my self!</p>
        <section className={styles.section2} id="introduce">
          <div className={styles.container}>
            <article>
              <div id="left">
                <Image
                  src={selfie}
                  alt="minoticon"
                />
                <div className={styles.userinfo}>
                  <ul>
                    <li className={fonts.conTt}>SUJI BAE</li>
                    <li className={fonts.bTt}>배수지</li>
                    <li>1990.01.09</li>
                  </ul>
                  <ul>
                    <li className={fonts.eb}>Phone.</li>
                    <li>010-8316-2942</li>
                  </ul>
                  <ul>
                    <li className={fonts.eb}>Email.</li>
                    <li>business.thetititle@gmail.com</li>
                  </ul>
                  <ul>
                    <li className={fonts.eb}>Based in.</li>
                    <li>Seoul, Korea</li>
                  </ul>
                </div>
              </div>
              <div id="right">
                <div>
                  <article>
                    <p className={fonts.conTt}>⏰TIME LINE</p>
                    <div>
                      <div>
                        <ul>
                          <li>
                            <span></span>
                          </li>
                          <li>
                            <ul>
                              <li></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                <div>
                  <article>
                    <p className={fonts.conTt}>🎮SKILLS</p>
                    <div>
                      <ul>
                        <li>
                          이미지
                        </li>
                      </ul>
                    </div>
                  </article>
                  <article>
                    <p className={fonts.conTt}>🔗LINKS</p>
                    <span>Please visit this link for more information about me!</span>
                    <div>
                    </div>
                  </article>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="product">
          <div className={styles.container}>
            <article>section03</article>
          </div>
        </section>
        <section id="thispage">
          <div className={styles.container}>
            <article>section04</article>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

