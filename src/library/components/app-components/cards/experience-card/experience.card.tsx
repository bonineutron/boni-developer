import { useEffect, useState } from 'react';
import { Detail } from 'components';

const images = [
  'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1600'
];

export function ExperienceCard(): JSX.Element {
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
    <div className='card'>
      <Detail
        title='Tribes Media'
        subTitle='2021'
        description='Uno de los desafíos que más recuerdo fue integrar el API de Stripe, donde aprendí a adaptar mi código con un
          proyecto realizado por otro profesional.'
      />
      <div className='h-fit w-fit flex gap-[10px] mx-auto'>
        <div className='relative h-[250px] w-[120px] flex justify-center'>
          <img src='/images/global/phone-cover.svg' alt='phone' height='100%' width='auto' className='absolute z-[2]' />
          <div className='absolute h-[220px] w-[110px] bottom-[5px] z-[1]'>
            {images.map((image: string, index: number) => (
              <img
                key={`image_${index}`}
                src={image}
                alt={`slide ${index + 1}`}
                className={`absolute h-full w-full rounded-md object-cover opacity-0 transition-all duration-[1000ms] ease-out ${
                  index === currentSlide ? 'opacity-100' : ''
                }`}
              />
            ))}
            <img src={images[0]} alt='why it contains is absolute' className='invisible' />
          </div>
        </div>
        <div className='h-full w-[140px] flex flex-col py-[10px] justify-between items-end'>
          <div className='h-fit w-full flex flex-col font-medium'>
            <span>React.js</span>
            <span>React Native</span>
            <span>Firebase</span>
            <span>Scss</span>
            <span>Revenuecat</span>
            <span>Node.js</span>
          </div>
          <a
            href='https://github.com/bonineutron'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[18px] underline underline-offset-[5px] font-medium italic'>
            Ver sitio
          </a>
        </div>
      </div>
    </div>
  );
}
