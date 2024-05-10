import { Features } from './components/Features';
import { Hero } from './components/Hero';

export type Idata = {
  title: string;
  desc : string;
}

export const AboutUs = () => {
  const data : Idata[] = [
    {
      title: 'الرؤية',
      desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،  يبدو مقسما ولا  أن يطلع على صورة حقيقية لتصميم الموقع.',
    },
    {
      title: 'الرسالة',
      desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،  يبدو مقسما ولا  أن يطلع على صورة حقيقية لتصميم الموقع.',
    },
    {
      title: 'الأهداف',
      desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،  يبدو مقسما ولا  أن يطلع على صورة حقيقية لتصميم الموقع.',
    }
  ];
  return (
    <>
      <Hero />
      <Features data={data} />
    </>
  );
};