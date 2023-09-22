import { Detail } from 'components';
import PhoneCover from 'library/components/shared-components/phone-cover/phone-cover';

export function ExperienceCard(): JSX.Element {
  return (
    <div className='card'>
      <Detail
        title='Tribes Media'
        subTitle='2021'
        description='Uno de los desafíos que más recuerdo fue integrar el API de Stripe, donde aprendí a adaptar mi código con un
          proyecto realizado por otro profesional.'
      />
      <PhoneCover images={images} height='100%' />
      {/* <div className='h-fit w-fit flex gap-[10px] mx-auto'>
        <div className='relative h-[250px] w-[120px] flex justify-center'>
          <img src='/images/global/phone-cover.svg' alt='phone' height='100%' width='auto' className='absolute z-[2]' />
          
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
      </div> */}
    </div>
  );
}

const images = [
  'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1600',
  '/images/experience/test.png'
];
