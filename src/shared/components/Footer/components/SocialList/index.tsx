import { Link } from 'react-router-dom';
import { DynamicIcon } from './components/DynamicIcon';
import styles from './styles.module.scss'

export const SocialList = () => {
  return (
    <ul className={styles.socialList}>
      <li>
        <Link className={styles.link} target="_blank" rel="noreferrer" to="https://www.facebook.com">
          <DynamicIcon className={styles.icon} iconName="facebook" />
        </Link>
      </li>
      <li >
        <Link className={styles.link} target="_blank" rel="noreferrer" to="https://www.whatsapp.com">
          <DynamicIcon className={styles.icon} iconName="whatsapp" />
        </Link>
      </li>
      <li>
        <Link className={styles.link} target="_blank" rel="noreferrer" to="https://www.snapchat.com">
          <DynamicIcon className={styles.icon} iconName="snapchat" />
        </Link>
      </li>
    </ul>
  );
};
