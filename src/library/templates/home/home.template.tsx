import { CardSlider, ExperienceCard, LowBar, PresentationCard } from 'components';
import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
        window.addEventListener('resize', handleResizeWindow);
      }
    }, 1500);

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
      <div className='h-full w-full flex items-center'>
        <p className='custom-paragraph'>{paragraph}</p>
      </div>
    );
  };

  return (
    <div
      ref={transitionContainer}
      id='home-template'
      className='h-full w-full max-w-[1400px] mx-auto flex justify-center items-center opacity-0 transition-all duration-[1000ms] pb-[80px]'>
      <CardSlider
        slidesPerView={validateSlidesPerView(widthScreen)}
        cards={[
          <PresentationCard
            title='Andrés Bonilla'
            position='Sr. Front-end Developer'
            description={t('cards.presentation.description')}
            image='images/global/presentation-picture.jpeg'
            seeMoreComponent={seeMoreComponent(t('cards.presentation.description'))}
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
          />
        ]}
      />
      <LowBar />
    </div>
  );
}
