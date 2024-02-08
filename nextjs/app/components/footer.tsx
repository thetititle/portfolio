import Link from 'next/link'
import Image from 'next/image'
import LogoW from '~/public/img/logo_origin_white.png'
import LogoD from '~/public/img/logo_origin_dark.png'
import styles from '../styles/footer.module.css'
import fonts from "../styles/fonts.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="#" className={styles.logo}>
          <Image
          src={LogoW}
          alt="logo"
          style={{ width: "100px", height: "auto" }}
        />
        </Link>
      </div>
    </footer>
  );
}