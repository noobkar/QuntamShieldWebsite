import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoImg}></div>
            <div className={styles.logoText}>Quantum<span>Shield</span></div>
          </div>
          <nav>
            <ul className={styles.navMenu}>
              <li><Link href="/">Features</Link></li>
              <li><Link href="/">Pricing</Link></li>
              <li><Link href="/">FAQ</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
              <li><a href="#" className="btn btn-secondary">Login</a></li>
              <li><a href="#" className="btn btn-primary">Get Started</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
