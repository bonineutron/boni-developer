import { useEffect, useRef } from 'react';

export function Backgroundtransition() {
  // configuration
  const background_1 = useRef<HTMLDivElement>(null);
  const background_2 = useRef<HTMLDivElement>(null);
  const background_3 = useRef<HTMLDivElement>(null);

  // effects
  useEffect(() => {
    setTimeout(() => {
      if (background_1.current) {
        background_1.current.classList.add('!w-[100%]');
      }
      if (background_2.current) {
        background_2.current.classList.add('!w-[75%]');
      }
      if (background_3.current) {
        background_3.current.classList.add('!w-[50%]');
      }
    }, 1000);
  }, []);

  return (
    <>
      <div
        ref={background_1}
        className='absolute h-full w-[0%] bg-[#64b5f6] shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out'
      />
      <div
        ref={background_2}
        className='absolute h-full w-[0%] bg-[#2196f3] shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all duration-500 delay-[200ms] ease-out'
      />
      <div
        ref={background_3}
        className='absolute h-full w-[0%] bg-[#bbdefb] shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all duration-500 delay-[400ms] ease-out'
      />
    </>
  );
}
