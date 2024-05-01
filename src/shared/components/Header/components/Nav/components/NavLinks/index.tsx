import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from './styles.module.scss';

interface isActiveProps {
  isActive: boolean;
}

type props = {
  onClick: () => void;
}
export const NavLinks = ({ onClick }: props ) => {
  const {t} = useTranslation();

  const navLinkClass = ({ isActive }: isActiveProps) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;
  return (
    <ul className={styles.navLinks}>
      <li className={styles.listItem}>
        <NavLink onClick={onClick} className={navLinkClass} to="/">
          {t("Home")}
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink onClick={onClick} className={navLinkClass} to="/about-us">
          {t("AboutUs")}
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink onClick={onClick} className={navLinkClass} to="/services">
          {t("Services")}
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink onClick={onClick} className={navLinkClass} to="/contact-us">
          {t("ContactUs")}
        </NavLink>
      </li>
    </ul>
  )
}
