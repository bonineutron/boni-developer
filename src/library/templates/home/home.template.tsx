import { CardSlider, ExperienceCard, Image, LowBar, PresentationCard } from 'components';
import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './home.module.scss';

export function HomeTemplate() {
   // configuration
   const { t } = useTranslation();
   const transitionContainer = useRef<HTMLDivElement>(null);

   const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);

   // effects
   useEffect(() => {
      setTimeout(() => {
         if (transitionContainer.current) {
            transitionContainer.current.classList.add('opacity-100');
         }
      }, 1000);

      window.addEventListener('resize', handleResizeWindow);

      return () => {
         window.removeEventListener('resize', handleResizeWindow);
      };
   }, []);

   // methods
   const handleResizeWindow = (): void => {
      setWidthScreen(window.innerWidth);
   };

   const validateSlidesPerView = (number: number): number => {
      // medium breakpoint
      if (number >= 768 && number < 1024) {
         return 2;
      }
      // large breakpoint
      if (number >= 1024) {
         return 3;
      }
      // mobile
      return 1;
   };

   const seeMoreComponent = (paragraph: string): JSX.Element => {
      return (
         <div className='h-full w-full flex items-center max-h-[390px] overflow-y-auto'>
            <p className='custom-paragraph'>
               {paragraph.split('\n').map((line, index) => (
                  <span key={index} style={{ display: 'block', marginBottom: '10px' }}>
                     {line}
                     <br />
                  </span>
               ))}
            </p>
         </div>
      );
   };

   return (
      <div
         ref={transitionContainer}
         id='home-template'
         className='h-full w-full max-w-[1400px] mx-auto flex justify-center items-center opacity-0 transition-all duration-1000'>
         <div
            className={`absolute top-0 left-0 h-[60px] w-full bg-white shadow-md flex items-center justify-center ${styles.animationTopBar}`}>
            <Image src='/images/boni-dev-md.svg' alt='boni-logo' height='30px' width='auto' />
         </div>
         <CardSlider
            slidesPerView={validateSlidesPerView(widthScreen)}
            cards={[
               <PresentationCard
                  title='Andrés Bonilla'
                  position='Full Stack Developer'
                  description={t('cards.presentation.description')}
                  images={['images/global/presentation-picture.jpg']}
                  seeMoreComponent={seeMoreComponent(t('cards.presentation.description'))}
               />,
               <ExperienceCard
                  title='Fundes Synergy'
                  subTitle='2024'
                  description={t('cards.fundes.description')}
                  images={['images/experience/fundes/fundes_1.svg', 'images/experience/fundes/fundes_2.svg']}
                  technologies={['React.js', 'S3', 'Node.js', 'Material UI', 'MySQL', 'AWS Lambda']}
                  seeMoreComponent={seeMoreComponent(t('cards.fundes.description'))}
                  desktop
               />,
               <ExperienceCard
                  title='JRS'
                  subTitle='2024'
                  description={t('cards.jrs.description')}
                  images={['images/experience/jrs/jrs_1.svg', 'images/experience/jrs/jrs_2.svg']}
                  technologies={['React.js', 'Node.js', 'Prisma', 'MySQL', 'Docker', 'S3']}
                  seeMoreComponent={seeMoreComponent(t('cards.jrs.description'))}
                  desktop
               />,
               <ExperienceCard
                  title='Simon'
                  subTitle='2023'
                  description={t('cards.simon.description')}
                  images={[
                     'images/experience/simon/simon_1.png',
                     'images/experience/simon/simon_2.png',
                     'images/experience/simon/simon_3.png'
                  ]}
                  technologies={['React.js', 'AWS', 'Redux', 'G. Analytics', 'UX', 'Hotjar', 'Mixpanel']}
                  seeMoreComponent={seeMoreComponent(t('cards.simon.description'))}
                  urlSite='https://app.holasimon.ai/simon/home'
               />,
               <ExperienceCard
                  title='Gepp'
                  subTitle='2022'
                  description={t('cards.gepp.description')}
                  images={[
                     'images/experience/gepp/gepp_1.png',
                     'images/experience/gepp/gepp_2.png',
                     'images/experience/gepp/gepp_3.png',
                     'images/experience/gepp/gepp_4.png'
                  ]}
                  technologies={['React.js', 'AWS', 'Node.js', 'Firebase', 'G. Analytics', 'Flutter', 'Adobe Xd']}
                  seeMoreComponent={seeMoreComponent(t('cards.gepp.description'))}
               />,
               <ExperienceCard
                  title='Glitch'
                  subTitle='2021'
                  description={t('cards.glitch.description')}
                  images={[
                     'images/experience/glitch/glitch_1.png',
                     'images/experience/glitch/glitch_2.png',
                     'images/experience/glitch/glitch_3.png'
                  ]}
                  technologies={['React.js', 'React Native', 'Firebase', 'MongoDB', 'GraphgQL', 'Sripe', 'Revenuecat']}
                  seeMoreComponent={seeMoreComponent(t('cards.glitch.description'))}
                  urlSite='https://glitchanimation.com/'
               />
            ]}
         />
         <LowBar />
      </div>
   );
}
