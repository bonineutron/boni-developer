import { useEffect, useRef } from 'react';

export function BackgroundTransition(): JSX.Element {
  // configuration
  const background_1 = useRef<HTMLDivElement>(null);
  const background_2 = useRef<HTMLDivElement>(null);
  const activateBlur = useRef<HTMLDivElement>(null);

  // effects
  useEffect(() => {
    setTimeout(() => {
      if (activateBlur.current) {
        activateBlur.current.classList.add('backdrop-blur-[40px]');
      }
    }, 500);
    setTimeout(() => {
      if (background_1.current) {
        background_1.current.classList.add('w-[100%]');
      }
    }, 1000);
    setTimeout(() => {
      if (background_2.current) {
        background_2.current.classList.add('w-[40%]');
      }
    }, 1500);
  }, []);

  // styles
  const colorClass: string = 'absolute top-0 left-0 h-full w-[0%] transition-all ease-out';

  return (
    <div className='absolute top-0 left-0 h-full w-full bg-white flex items-center'>
      <div className='w-full flex justify-center'>
        <img src='/images/boni-dev-md.svg' alt='logo' className='w-[180px]' />
      </div>
      <div className='absolute top-0 left-0 h-full w-full'>
        <div ref={background_1} className={`${colorClass} bg-primary-color duration-500`} />
        <div ref={background_2} className={`${colorClass} bg-secondary-color duration-[4000ms] delay-500`} />
      </div>
      <div ref={activateBlur} className='absolute h-full w-full transition-all duration-1000' />
    </div>
  );
}
