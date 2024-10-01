import { DesktopCover, Detail, ListInformation, PhoneCover } from 'components';
import { useTranslation } from 'react-i18next';

interface Props {
   title: string;
   subTitle: string;
   description: string;
   images: string[];
   technologies: string[];
   urlSite?: string;
   seeMoreComponent: JSX.Element;
   desktop?: boolean;
}

export function ExperienceCard({
   title,
   subTitle,
   description,
   images,
   technologies,
   urlSite,
   seeMoreComponent,
   desktop
}: Props): JSX.Element {
   // configuration
   const { t } = useTranslation();

   return (
      <div className='card'>
         <Detail title={title} subTitle={subTitle} description={description} seeMoreComponent={seeMoreComponent} />

         <div className='w-full h-fit flex flex-col gap-3'>
            <div className={`w-full flex justify-center gap-[10px] ${desktop ? 'h-[170px] flex-col' : 'h-[260px]'}`}>
               {desktop ? (
                  <DesktopCover images={images} height='100%' />
               ) : (
                  <>
                     <PhoneCover images={images} height='100%' />

                     <div className='h-full w-[130px] flex flex-col justify-between items-end pt-[10px]'>
                        <ListInformation items={technologies} />

                        {urlSite && (
                           <a
                              href={urlSite}
                              target='_blank'
                              rel='noopener noreferrer'
                              className={
                                 'text-[18px] italic font-medium underline underline-offset-[3px] active:text-gray-200'
                              }>
                              {t('generics.see-site')}
                           </a>
                        )}
                     </div>
                  </>
               )}
            </div>

            {desktop && <ListInformation items={technologies} desktop />}
         </div>
      </div>
   );
}
