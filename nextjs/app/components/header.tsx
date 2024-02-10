"use client";
import Link from "next/link";
import Image from "next/image";
import LogoW from "~/public/img/logo_origin_white.png";
import LogoD from "~/public/img/logo_origin_dark.png";
import styles from "../styles/header.module.css";
import fonts from "../styles/fonts.module.css";
import ico from "../styles/icon.module.css";

export default function Header() {
  let scrollDorp : boolean = true;
  window.addEventListener("scroll", () => {
    const ScrollTop: number = window.scrollY;
    if (ScrollTop <= 60) {
      scrollDorp = true;
      console.log('scrollDorp1', scrollDorp)
    } else if (ScrollTop > 60) {
      scrollDorp = false;
      console.log('scrollDorp2', scrollDorp)
    }
  });
  return (
    <header>
      <div className={styles.container}>
        <Link href="#" className={styles.logo}>
          <span className={`${ scrollDorp ? ico.logo : ico.logoDark}`} ></span>
        </Link>
        <div className={styles.tabWrapper}>
          <ul>
            <li className={styles.active}>
              <a href="#">hello</a>
            </li>
            <li>
              <a href="#">introduce</a>
            </li>
            <li>
              <a href="#">product</a>
            </li>
            <li>
              <a href="#">this page</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
