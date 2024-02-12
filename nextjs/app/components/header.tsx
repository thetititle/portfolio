"use client";
import { useState } from "react"; 
import Link from "next/link";
import Image from "next/image";
import LogoW from "~/public/img/logo_origin_white.png";
import LogoD from "~/public/img/logo_origin_dark.png";
import styles from "../styles/header.module.css";
import fonts from "../styles/fonts.module.css";
import ico from "../styles/icon.module.css";

export default function Header() {
  const [isScroll, setScroll] = useState(true);
  window.addEventListener("scroll", ():any => {
    const Header = document.querySelector("header");
    const ScrollTop:number = window.scrollY;
    if (ScrollTop > 60) {
      Header?.classList.add("drop");
      setScroll(isScroll => false);
    } else if (ScrollTop <= 60) {
      Header?.classList.remove("drop");
      setScroll(isScroll => true);
    }
  });

  return (
    <header>
      <div className={styles.container}>
        <Link href="#" className={styles.logo}>
          <span className={`${ isScroll ? ico.logo : ico.logoDark}`} ></span>
        </Link>
        <div className={styles.tabWrapper}>
          <ul>
            <li className={styles.active}>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
