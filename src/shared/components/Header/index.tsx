import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';
import HeaderLogo from '@/assets/images/logo.png';
import { Nav } from './components/Nav';
import { FaBars } from 'react-icons/fa6';
import { useState } from 'react';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <figure>
              <img src={HeaderLogo} alt="logo" />
            </figure>
          </div>

          <Nav onClick={handleNavToggle} isNavOpen={isNavOpen} />
          <button onClick={handleNavToggle} className={styles.navToggle}>
            <FaBars />
          </button>
        </div>
      </Container>
      <div onClick={handleNavToggle} className={`${styles.overlay} ${isNavOpen ? `${styles.active}` : ''}`}></div>
    </header>
  );
};
