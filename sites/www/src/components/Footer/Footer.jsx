import styles from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialMedia}>
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                </a>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                </a>
            </div>
            <div className={styles.logo}>
                <img src="../assets/logo.png" alt="Company Logo" className={styles.logoImage} />
            </div> 
</footer>
    );
}           



