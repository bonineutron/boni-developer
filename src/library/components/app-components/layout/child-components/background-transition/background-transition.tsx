import styles from './backgorund-transition.module.scss';
import { useEffect, useRef } from 'react';

export function BackgroundTransition(): JSX.Element {
   // configuration
   const activateBlur = useRef<HTMLDivElement>(null);
   const background_1 = useRef<HTMLDivElement>(null);

   // effects
   useEffect(() => {
      setTimeout(() => {
         if (activateBlur.current && background_1.current) {
            activateBlur.current.classList.add('backdrop-blur-[200px]');
            background_1.current.classList.add('opacity-100');
         }
      }, 500);
   }, []);

   return (
      <div className='absolute top-0 left-0 h-full w-full bg-primary-color flex items-center'>
         <div className='w-full flex justify-center'>
            <img src='/images/boni-dev-md.svg' alt='logo' className='w-[180px]' />
         </div>

         <div className='absolute top-0 left-0 h-full w-full'>
            <div ref={background_1} className={`h-full w-full transition-all ease-out opacity-100 duration-1000`} />

            <div className={`${styles.colorOne}`} />

            <div className={`${styles.colorTwo} `} />
         </div>

         <div ref={activateBlur} className='absolute h-full w-full transition-all duration-1000' />
      </div>
   );
}
