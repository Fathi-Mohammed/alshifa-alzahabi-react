import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/images/logo.png';

import styles from './styles.module.scss';
import { ProblemCard } from './components/ProblemCard';
import { tabTitle } from '@/shared/utils/tabTitle';

export const Blog = () => {
  const { t } = useTranslation();
  tabTitle(t("Blog"));


  const data = [
    {
      id: 1,
      title: 'مشكلة عائلية',
      desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم إذا كنت تحتاج',
    },
    {
      id: 2,
      title: 'مشكلة عائلية',
      desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم إذا كنت تحتاج',
    },
    {
      id: 3,
      title: 'مشكلة عائلية',
      desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم إذا كنت تحتاج',
    },
  ]
  return (
    <main className={`${styles.blogSection} default_page `}>
      <Container>
        <div className="page_head_wrapper">
          <h2 className="page_main_title__">{t('blog')}</h2>
          <p className="page_sub_title__">{t('blogSubTitle')}</p>
        </div>

        <Row className={styles.blogRow}>
          {data.map((item) => (
            <Col lg={4}>
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
                <input className={styles.radioInput} type="radio" name="radio" id="yes" />
                <div className={styles.customRadio}></div>
                {t('yes')}
              </label>
              <label className={styles.radioLabel} htmlFor="no">
                <input className={styles.radioInput} type="radio" name="radio" id="no" />
                <div className={styles.customRadio}></div>
                {t('no')}
              </label>
            </div>
          </div>
        </div>


        <div className="page_head_wrapper">
          <h2 className="page_main_title__">{t('newSolvedTopics')}</h2>
        </div>
        

        <Row>
          {data.map((item) => (
            <Col lg={4}>
              <ProblemCard data={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};
