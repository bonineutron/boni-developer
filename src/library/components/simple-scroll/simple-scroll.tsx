import { ICard } from '../../../shared/interfaces/home.interfaces';
import { BusinessCard } from '../business-card/business-card';
import ReactFullpage from '@fullpage/react-fullpage';
import { useState, useEffect, useRef } from 'react';

export function SimpleScroll() {
  // configuration
  const licenseKey: string = import.meta.env.VITE_LICENSE_KEY;
  const refCard_1 = useRef<HTMLDivElement>(null);
  const refCard_2 = useRef<HTMLDivElement>(null);

  // refactor
  const references: ICard[] = [
    {
      cardReference: refCard_1,
      setTransition: () => setTransitionCard_1(true),
      cleanTransition: () => setTransitionCard_1(false)
    },
    {
      cardReference: refCard_2,
      setTransition: () => setTransitionCard_2(true),
      cleanTransition: () => setTransitionCard_2(false)
    }
  ];

  // states
  const [transitionCard_1, setTransitionCard_1] = useState<boolean>(false);
  const [transitionCard_2, setTransitionCard_2] = useState<boolean>(false);

  // effects
  useEffect(() => {
    setTimeout(() => {
      const observers: IntersectionObserver[] = references.map((reference: ICard) => createObserver(reference));
      return () => {
        observers.forEach((observer: IntersectionObserver) => observer.disconnect());
      };
    }, 2500);
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
    <div className='fixed h-full'>
      <ReactFullpage
        scrollingSpeed={400}
        licenseKey={licenseKey}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <div ref={refCard_1}>
                  <div
                    className={`w-[90%] p-[30px] mx-auto bg-white rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.3)] transition-all duration-[800ms] delay-[200ms] ease-out translate-x-[-100vw] ${
                      transitionCard_1 ? '!translate-x-[0vw]' : ''
                    }`}>
                    <BusinessCard />
                  </div>
                </div>
              </div>
              <div className='section'>
                <div ref={refCard_2}>
                  <div
                    className={`w-[90%] p-[30px] mx-auto bg-white rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.3)] transition-all duration-[800ms] delay-[200ms]  ease-out translate-x-[-100vw] ${
                      transitionCard_2 ? '!translate-x-[0vw]' : ''
                    }`}>
                    <BusinessCard />
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
