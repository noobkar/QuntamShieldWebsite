import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <div className={styles.logo}>
            <div className={styles.logoImg}></div>
            <div className={styles.logoText}>Quantum<span>Shield</span></div>
          </div>
          <p>Securing your digital presence with quantum-grade protection since 2023.</p>
          <div className={styles.socialLinks}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">System Status</a></li>
            <li><a href="#">Get Started Guide</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Legal</h3>
          <ul>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">GDPR Compliance</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2025 QuantumShield VPN. All rights reserved.</p>
      </div>
    </footer>
  );
}
