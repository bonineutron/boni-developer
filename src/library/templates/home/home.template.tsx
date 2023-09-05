import { LowBar } from '../../components';
import { useRef, useEffect } from 'react';

export function HomeTemplate() {
  // configuration
  const transitionContainer = useRef<HTMLDivElement>(null);

  // effects
  useEffect(() => {
    setTimeout(() => {
      if (transitionContainer.current) {
        transitionContainer.current.classList.add('opacity-100');
      }
    }, 1500);
  }, []);

  return (
    <div
      ref={transitionContainer}
      id='home-template'
      className='relative h-full w-full opacity-0 transition-all duration-[1000ms]'>
      <LowBar />
    </div>
  );
}
