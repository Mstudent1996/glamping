import styles from './ActivityList.module.css';
import { ActivityCard } from '../ActivityCard/ActivityCard';

export default function ActivityList ({ activities }) {
    return (
        <div className={styles.activityList}>
            {activities.map((activity, index) => (
                <ActivityCard
                    key={index}
                    title={activity.title}
                    description={activity.description}
                    date={activity.date}
                    time={activity.time}
                    images={activity.images}
                />
            ))}
        </div>
    );
}




