import { ICard } from '../../../shared/interfaces/home.interfaces';
import ReactFullpage from '@fullpage/react-fullpage';
import { useState, useEffect, useRef } from 'react';
import styles from './home.module.scss';

export function HomeTemplate() {
  // configuration
  const refCard_1 = useRef<HTMLDivElement>(null);
  const refCard_2 = useRef<HTMLDivElement>(null);
  const licenseKey: string = import.meta.env.VITE_LICENSE_KEY;

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
  const classContentCards: string = 'h-full flex justify-center items-center gap-10';

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
    <div id='home-template' className='h-full flex justify-center items-center'>
      <ReactFullpage
        scrollingSpeed={200}
        licenseKey={licenseKey}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <div
                  className={`w-[90%] h-[500px] bg-white/40 backdrop-blur-xl rounded-xl mx-auto ${styles.card_1} ${transitionCard_1}`}>
                  <div className={classContentCards}>
                    <div ref={refCard_1}>Titulo Prueba 1</div>
                    <img
                      src='https://images.unsplash.com/photo-1685433339650-74938cc6bfe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                      alt='img_1'
                      className='w-[100px] rounded-lg'
                    />
                  </div>
                </div>
              </div>
              <div className='section'>
                <div
                  className={`w-[90%] h-[500px] bg-white/40 backdrop-blur-xl rounded-xl mx-auto ${styles.card_2} ${transitionCard_2}`}>
                  <div className={classContentCards}>
                    <div ref={refCard_2}>Titulo Prueba 2</div>
                    <img
                      src='https://plus.unsplash.com/premium_photo-1684315352401-062806d5d9ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                      alt='img_2'
                      className='w-[100px] rounded-lg'
                    />
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
