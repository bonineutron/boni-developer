import { useEffect, useState } from 'react';

interface Props {
   images: string[];
   height: string;
   width: string;
   className?: string;
}

export function ImagesTransition({ images, height, width, className }: Props): JSX.Element {
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
      <div className={`relative overflow-hidden ${className || ''}`} style={{ height: height, width: width }}>
         {images.map((image: string, index: number) => (
            <img
               key={`image_${index}`}
               src={image}
               alt={`slide ${index + 1}`}
               className={`absolute top-0 left-0 h-full w-full object-cover transition-all duration-500 ease-out opacity-0 ${
                  index === currentSlide ? 'opacity-100' : ''
               }`}
            />
         ))}
      </div>
   );
}
