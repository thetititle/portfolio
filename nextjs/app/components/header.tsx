import Link from "next/link";
import Image from "next/image";
import LogoW from "~/public/img/logo_origin_white.png";
import LogoD from "~/public/img/logo_origin_dark.png";
import styles from "../styles/header.module.css";
import fonts from "../styles/fonts.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <Link href="#">
          <Image src={LogoW} alt="logo" width={100} height={55} />
        </Link>
        <div className={styles.tabWrapper}>
          <ul>
            <li className={styles.active}>
              <a href="#">hello</a>
            </li>
            <li className={`${styles["active"]} ${fonts["fontUp"]}`}>
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
