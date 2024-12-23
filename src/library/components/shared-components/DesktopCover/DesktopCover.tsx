import { ImagesTransition } from 'components';
import { useEffect, useState } from 'react';

interface Props {
   images: string[];
   height: string;
}

export function DesktopCover({ images, height }: Props): JSX.Element {
   // States
   const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

   // Effects
   useEffect(() => {
      const handleResize = () => {
         setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   // height='83%' 75
   // width='70%' 76

   return (
      <div className='relative w-full' style={{ height: height }}>
         <img
            src='/images/global/desktop-cover.svg'
            alt='desktop-cover'
            className='absolute top-0 left-0 right-0 mx-auto h-full w-[260px] xl:w-full z-[1]'
         />

         <ImagesTransition
            images={images}
            height={screenWidth > 1280 ? '83%' : '122px'}
            width={screenWidth > 1280 ? '70%' : '197px'}
            className='absolute top-[11%] left-0 right-0 mx-auto '
         />

         <img src='/images/global/phone-cover.svg' alt='phone-cover' className='h-full invisible' />
      </div>
   );
}
