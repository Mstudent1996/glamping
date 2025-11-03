import styles from './ActivityCard.module.css';

export default function ActivityCard ({ title, description, date, time, images }) {
    return (
      <div className={styles.card}>
        <div className={styles.images}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Activity image ${index + 1}`}
              className={styles.image}
            />
          ))}
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.datetime}>
          <span className={styles.date}>{date}</span>
          <span className={styles.time}>{time}</span>
        </div>
      </div>
    );
}