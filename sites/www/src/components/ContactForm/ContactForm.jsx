import styles from './ContactForm.module.css';

export default function ContactForm ({ onSubmit }) {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <label className={styles.label}>
                Navn:
                <input type="text" name="name" className={styles.input} required />
            </label>
            <label className={styles.label}>
                Email:
                <input type="email" name="email" className={styles.input} required />
            </label>
            <label className={styles.label}>
                Besked:
                <textarea name="message" className={styles.textarea} required></textarea>
            </label>
            <button type="submit" className={styles.button}>Send</button>
        </form>
    );
}