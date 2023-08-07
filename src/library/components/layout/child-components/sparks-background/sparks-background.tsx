import styles from './sparks-background.module.scss';
import { useState, useEffect, useRef } from 'react';

export function SparksBackground(): JSX.Element {
  // configuration
  const backgroundBlur = useRef<HTMLDivElement>(null);

  // states
  const [showSparks, setShowSparks] = useState<boolean>(false);

  // effects
  useEffect(() => {
    setTimeout(() => {
      if (backgroundBlur.current) {
        backgroundBlur.current.classList.add('!blur-[100px]');
      }
    });
    setTimeout(() => {
      setShowSparks(true);
    }, 1500);
  }, []);

  return (
    <div
      ref={backgroundBlur}
      className='absolute top-0 left-0 h-full w-full bg-white/80 flex justify-center items-center transition-all duration-[2000ms] delay-1000'>
      <img src='/images/boni-dev-md.svg' alt='logo' className='absolute w-[180px]' />
      {showSparks && (
        <>
          <div className={styles.spark1} />
          <div className={styles.spark2} />
          <div className={styles.spark3} />
          <div className={styles.spark4} />
        </>
      )}
    </div>
  );
}
