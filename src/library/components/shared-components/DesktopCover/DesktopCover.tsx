import { ImagesTransition } from 'components';

interface Props {
   images: string[];
   height: string;
}

export function DesktopCover({ images, height }: Props): JSX.Element {
   return (
      <div className='relative w-full' style={{ height: height }}>
         <img
            src='/images/global/desktop-cover.svg'
            alt='desktop-cover'
            className='absolute top-0 left-0 right-0 mx-auto h-full w-full z-[1]'
         />

         <ImagesTransition
            images={images}
            height='83%'
            width='70%'
            className='absolute top-[11%] left-0 right-0 mx-auto '
         />

         <img src='/images/global/phone-cover.svg' alt='phone-cover' className='h-full invisible' />
      </div>
   );
}
