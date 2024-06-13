import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ProblemCard } from './components/ProblemCard';
import { tabTitle } from '@/shared/utils/tabTitle';
import logo from '@/assets/images/logo.png';
import styles from './styles.module.scss';
import useApi from '@/shared/hooks/useApi';
import { SolvedSection } from './components/SolvedSection';

export const Blog = () => {
  const { t } = useTranslation();
  tabTitle(t('Blog'));

  const { data, isLoading }: any = useApi.get(
    import.meta.env.VITE_FORUMS + '?is_solved=0',
  );

  return (
    <main className={`${styles.blogSection} default_page `}>
      <Container>
        <div className="page_head_wrapper">
          <h2 className="page_main_title__">{t('blog')}</h2>
          <p className="page_sub_title__">{t('blogSubTitle')}</p>
        </div>

        <Row className={styles.blogRow}>
          {!isLoading &&
            data?.data?.map((item) => (
              <Col key={item.id} lg={4}>
                <ProblemCard data={item} />
              </Col>
            ))}
        </Row>

        <div className={styles.quistionWrapper}>
          <img className={styles.logo} src={logo} alt="" />
          <div>
            <h4 className={styles.title}>{t('blogQuestion')}</h4>
            <div className={styles.radioWrapper}>
              <label className={styles.radioLabel} htmlFor="yes">
                <input
                  className={styles.radioInput}
                  type="radio"
                  name="radio"
                  id="yes"
                />
                <div className={styles.customRadio}></div>
                {t('yes')}
              </label>
              <label className={styles.radioLabel} htmlFor="no">
                <input
                  className={styles.radioInput}
                  type="radio"
                  name="radio"
                  id="no"
                />
                <div className={styles.customRadio}></div>
                {t('no')}
              </label>
            </div>
          </div>
        </div>
        <SolvedSection />
      </Container>
    </main>
  );
};
