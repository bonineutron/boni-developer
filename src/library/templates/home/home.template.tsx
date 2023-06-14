import { ICard } from '../../../shared/interfaces/home.interfaces';
import ReactFullpage from '@fullpage/react-fullpage';
import { useState, useEffect, useRef } from 'react';
import { Backgroundtransition, BusinessCard } from '../../components';
import styles from './home.module.scss';

export function HomeTemplate() {
  // configuration
  const licenseKey: string = import.meta.env.VITE_LICENSE_KEY;
  const refCard_1 = useRef<HTMLDivElement>(null);
  const refCard_2 = useRef<HTMLDivElement>(null);

  // refactor
  const references: ICard[] = [
    {
      cardReference: refCard_1,
      setTransition: () => setTransitionCard_1(styles.transitionCard_1),
      cleanTransition: () => setTransitionCard_1('')
    },
    {
      cardReference: refCard_2,
      setTransition: () => setTransitionCard_2(styles.transitionCard_2),
      cleanTransition: () => setTransitionCard_2('')
    }
  ];

  // states
  const [transitionCard_1, setTransitionCard_1] = useState<string>('');
  const [transitionCard_2, setTransitionCard_2] = useState<string>('');

  // effects
  useEffect(() => {
    const observers: IntersectionObserver[] = references.map((reference: ICard) => createObserver(reference));
    return () => {
      observers.forEach((observer: IntersectionObserver) => observer.disconnect());
    };
  }, []);

  // methods
  const createObserver = (card: ICard): IntersectionObserver => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          card.setTransition();
        } else {
          card.cleanTransition();
        }
      });
    });

    if (card.cardReference.current) {
      observer.observe(card.cardReference.current);
    }

    return observer;
  };

  return (
    <div id='home-template' className='h-full flex items-center'>
      <img src='/images/boni-dev-md.svg' alt='logo' className='mx-auto w-[200px]' />
      <Backgroundtransition />
      {/* <div className='h-full'>
        <ReactFullpage
          scrollingSpeed={800}
          licenseKey={licenseKey}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div className='section'>
                  <div ref={refCard_1} className={`${styles.card_1} ${transitionCard_1}`}>
                    <BusinessCard />
                  </div>
                </div>
                <div className='section'>
                  <div ref={refCard_2} className={`${styles.card_2} ${transitionCard_2}`}>
                    <BusinessCard />
                  </div>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div> */}
    </div>
  );
}
