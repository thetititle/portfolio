"use client";
import Link from "next/link";
import Image from "next/image";
import LogoW from "~/public/img/logo_origin_white.png";
import LogoD from "~/public/img/logo_origin_dark.png";
import styles from "../styles/header.module.css";
import fonts from "../styles/fonts.module.css";
import ico from "../styles/icon.module.css";

window.addEventListener("scroll", () => {
  const Logo = document.querySelector("span");
  const ScrollTop: number = window.scrollY;
  console.log("ddd", Logo);
  if (ScrollTop > 60) {
    Logo?.classList.remove("logo");
    Logo?.classList.add("logoDark");
  } else if (ScrollTop <= 60) {
    Logo?.classList.remove("logoDark");
    Logo?.classList.add("logo");
  }
});

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <Link href="#" className={styles.logo}>
          <span className={ico.icoLogo}></span>
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
