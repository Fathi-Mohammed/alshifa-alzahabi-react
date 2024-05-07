import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Nav } from './components/Nav';
import HeaderLogo from '@/assets/images/logo.png';
import { FaBars } from 'react-icons/fa6';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            <figure>
              <img src={HeaderLogo} alt="logo" />
            </figure>
          </Link>

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
