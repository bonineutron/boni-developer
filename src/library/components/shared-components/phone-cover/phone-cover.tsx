import { ImagesTransition } from 'components';

interface Props {
  images: string[];
  height: string;
}

export function PhoneCover({ images, height }: Props): JSX.Element {
  return (
    <div className='relative w-fit' style={{ height: height }}>
      <img src='/images/global/phone-cover.svg' alt='phone-cover' className='absolute top-0 h-full z-[1]' />
      <ImagesTransition
        images={images}
        height='87%'
        width='91%'
        className='absolute top-[12%] left-0 right-0 mx-auto rounded-[2%]'
      />
      <img src='/images/global/phone-cover.svg' alt='phone-cover' className='h-full invisible' />
    </div>
  );
}
