import { Image, SeeMoreInformation } from 'components';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  position: string;
  description: string;
  image: string;
  seeMoreComponent: JSX.Element;
}

export function PresentationCard({ title, position, description, seeMoreComponent, image }: Props): JSX.Element {
  // configuration
  const { t } = useTranslation();

  return (
    <div className='card'>
      <div className='text-center leading-none text-[20px]'>
        <span className='italic'>{t('generics.greeting')}</span>
        <h2 className='text-[30px] font-medium my-2'>{title}</h2>
        <h1 className='italic'>{position}</h1>
      </div>
      <Image src={image} alt='presentation-picture' height='140px' width='230px' className='rounded-md' />
      <SeeMoreInformation paragraph={description} limit={28} children={seeMoreComponent} />
    </div>
  );
}
