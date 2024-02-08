"use client";
import Link from "next/link";
import Image from "next/image";
import LogoW from "~/public/img/logo_origin_white.png";
import LogoD from "~/public/img/logo_origin_dark.png";
import styles from "../styles/header.module.css";
import fonts from "../styles/fonts.module.css";
import HeaderStyle from "../scripts/headerScript";

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <Link href="#" className={styles.logo}>
          <Image
            src={LogoW}
            alt="logo"
            style={{ width: "100px", height: "auto" }}
          />
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
