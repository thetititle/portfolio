import Link from "next/link";
import Image from "next/image";
import LogoW from "~/public/img/logo_origin_white.png";
import LogoD from "~/public/img/logo_origin_dark.png";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="#">
          <Image src={LogoW} alt="logo" width={100} height={55} />
        </Link>
      </div>
    </header>
  );
}
