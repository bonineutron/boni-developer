import styles from './experience-card.module.scss';
import { useState, useEffect } from 'react';

interface ExperienceCardProps {
  images: string[];
  company: string;
  year: string;
  description: string;
  skills: string;
}

export function ExperienceCard({ images, company, year, description, skills }: ExperienceCardProps): JSX.Element {
  // states
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // effects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide: number) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center gap-[15px] leading-none text-black-boni'>
      <div className='w-full'>
        <h1 className='text-[30px] font-medium text-primary-color mb-[5px]'>{company}</h1>
        <h2 className='font-medium text-[20px] mb-[10px]'>{year}</h2>
        <p className='text-[18px] leading-[24px]'>{description}</p>
      </div>
      <div className='w-full flex flex-col gap-[10px]'>
        <div className='relative w-full'>
          {images.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt={`slide ${index + 1}`}
              className={`absolute top-0 w-full rounded-lg opacity-0 transition-all duration-[1000ms] ease-out ${
                index === currentSlide ? '!opacity-100' : ''
              }`}
            />
          ))}
          <img src={images[0]} alt='why it contains is absolute' className='invisible' />
        </div>
        <div className={styles.animation}>
          <p>{skills}</p>
        </div>
      </div>
    </div>
  );
}
