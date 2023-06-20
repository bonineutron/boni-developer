import { BusinessCard } from '../business-card/business-card';
import ReactFullpage from '@fullpage/react-fullpage';
import { useState, useEffect } from 'react';

export function SimpleScroll() {
  // configuration
  const licenseKey: string = import.meta.env.VITE_LICENSE_KEY;

  // states
  const [transition, setTransition] = useState<boolean>(false);

  // effects
  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 2000);
  }, []);

  return (
    <div
      className={`fixed h-full transition-all duration-[500ms] ease-out ${!transition ? 'translate-y-[100vh]' : ''}`}>
      <ReactFullpage
        scrollingSpeed={600}
        licenseKey={licenseKey}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <div className='w-[90%] p-[30px] mx-auto bg-white-boni rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.3)] mb-[80px]'>
                  <BusinessCard />
                </div>
              </div>
              <div className='section'>
                <div className='w-[90%] p-[30px] mx-auto bg-white-boni rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.3)] mb-[80px]'>
                  <BusinessCard />
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
