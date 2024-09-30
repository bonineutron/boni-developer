import { BackgroundTransition } from './child-components';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ELanguage } from 'enums';

interface Props {
   children: React.ReactNode;
}

export function Layout({ children }: Props) {
   // configuration
   const { i18n } = useTranslation();
   const { language } = useParams();

   // effects
   useEffect(() => {
      if (language) {
         if (language === ELanguage.spanish) {
            i18n.changeLanguage(ELanguage.spanish);
            return;
         }
         i18n.changeLanguage(ELanguage.english);
      }
   }, [language]);

   return (
      <div id='layout' className='relative dvh-compatible h-[100dvh] w-screen overflow-hidden'>
         <BackgroundTransition />
         {children}
      </div>
   );
}
