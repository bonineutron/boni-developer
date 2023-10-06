import { useEffect, useRef, useState } from 'react';

export function BackgroundTransition(): JSX.Element {
  // configuration
  const activateBlur = useRef<HTMLDivElement>(null);
  const background_1 = useRef<HTMLDivElement>(null);

  // states
  const [activateSecondaryColor, setActivateSecondaryColor] = useState<boolean>(false);

  // effects
  useEffect(() => {
    setTimeout(() => {
      if (activateBlur.current && background_1.current) {
        activateBlur.current.classList.add('backdrop-blur-[40px]');
        background_1.current.classList.add('opacity-100');
      }
    }, 500);
    setTimeout(() => {
      setActivateSecondaryColor(true);
    }, 1000);
  }, []);

  // styles
  const colorClass: string =
    'absolute top-0 h-full w-[20%] transition-all ease-out bg-secondary-color duration-[2000ms]';

  return (
    <div className='absolute top-0 left-0 h-full w-full bg-white flex items-center'>
      <div className='w-full flex justify-center'>
        <img src='/images/boni-dev-md.svg' alt='logo' className='w-[180px]' />
      </div>
      <div className='absolute top-0 left-0 h-full w-full'>
        <div
          ref={background_1}
          className={`h-full w-full bg-primary-color transition-all ease-out opacity-0 duration-1000`}
        />
        <div className={`${colorClass} left-[-20%] ${activateSecondaryColor ? 'left-[0%]' : ''}`} />
        <div className={`${colorClass} right-[-20%] ${activateSecondaryColor ? 'right-[0%]' : ''}`} />
      </div>
      <div ref={activateBlur} className='absolute h-full w-full transition-all duration-1000' />
    </div>
  );
}
