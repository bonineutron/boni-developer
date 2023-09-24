import { Detail, ListInformation, PhoneCover } from 'components';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  subTitle: string;
  description: string;
  images: string[];
  technologies: string[];
  urlSite?: string;
  seeMoreComponent: JSX.Element;
}

export function ExperienceCard({
  title,
  subTitle,
  description,
  images,
  technologies,
  urlSite,
  seeMoreComponent
}: Props): JSX.Element {
  // configuration
  const { t } = useTranslation();

  return (
    <div className='card'>
      <Detail title={title} subTitle={subTitle} description={description} seeMoreComponent={seeMoreComponent} />
      <div className='h-[260px] w-fit flex gap-[10px]'>
        <PhoneCover images={images} height='100%' />
        <div className='h-full w-[130px] flex flex-col justify-between items-end pt-[10px]'>
          <ListInformation items={technologies} />
          {urlSite && (
            <a
              href={urlSite}
              target='_blank'
              rel='noopener noreferrer'
              className={'text-[18px] italic font-medium underline underline-offset-[3px] active:text-gray-200'}>
              {t('generics.see-site')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
