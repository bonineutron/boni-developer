import { Image, ImagesTransition, SeeMoreInformation } from 'components';
import { useTranslation } from 'react-i18next';

interface Props {
   title: string;
   position: string;
   description: string;
   images: string[];
   seeMoreComponent: JSX.Element;
}

export function PresentationCard({ title, position, description, seeMoreComponent, images }: Props): JSX.Element {
   // configuration
   const { t } = useTranslation();

   return (
      <div className='card'>
         <div className='text-center leading-none text-[20px]'>
            <span className='italic'>{t('generics.greeting')}</span>
            <h2 className='text-[30px] font-medium my-2'>{title}</h2>
            <h1 className='italic'>{position}</h1>
         </div>
         <ImagesTransition images={images} height='180px' width='200px' className='rounded-md' />
         <SeeMoreInformation paragraph={description} limit={20} children={seeMoreComponent} />
      </div>
   );
}
