import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import heroImage from "../../assets/stays/tentlights.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <img src={heroImage} alt="Hero" className={styles.heroImage} />

      {/* Logo */}
      <img src={logo} alt="Logo" className={styles.logo} />

      {/* Title */}
      <h1 className={styles.title}>
        Gittes <br /> Glamping
      </h1>

      {/* CTA button */}
      <button className={styles.cta}>BOOK NU</button>

      {/* Burger button */}
      <button className={styles.burger} onClick={() => setMenuOpen(true)}>
        ☰
      </button>

      {/* BURGER MENU OVERLAY */}
      {menuOpen && (
        <div className={styles.menuOverlay}>
          <button className={styles.close} onClick={() => setMenuOpen(false)}>
            ✕
          </button>

          <nav className={styles.menuList}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Forside
            </Link>
            <Link to="/stays" onClick={() => setMenuOpen(false)}>
              Ophold
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Kontakt
            </Link>
            <Link to="/activities" onClick={() => setMenuOpen(false)}>
              Aktiviteter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
