import { CardSlider, ExperienceCard, LowBar, PresentationCard } from '../../components';
import { useRef, useEffect, useState } from 'react';

export function HomeTemplate() {
  // configuration
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

  return (
    <div
      ref={transitionContainer}
      id='home-template'
      className='relative h-full w-full max-w-[1400px] mx-auto flex justify-center items-center opacity-0 transition-all duration-[1000ms] pb-[80px]'>
      <CardSlider
        slidesPerView={validateSlidesPerView(widthScreen)}
        cards={[
          <PresentationCard
            title='Andrés Bonilla'
            subTitle='Sr. Front-end Developer'
            description='Me esfuerzo constantemente por tener orden en todo lo que hago y mejorar es algo que me gusta hacer.En este sitio iré registrando algunos momentos de mi vida, aquellos que han hecho de mí una mejor persona y un mejor desarrollador.'
            image='/images/global/presentation-picture.jpg'
            skills={[
              { label: 'React', progressPercentage: '80%' },
              { label: 'Angular', progressPercentage: '80%' },
              { label: 'React Native', progressPercentage: '80%' },
              { label: 'Flutter', progressPercentage: '80%' }
            ]}
          />,
          <ExperienceCard />,
          <ExperienceCard />,
          <ExperienceCard />
        ]}
      />
      <LowBar />
    </div>
  );
}
