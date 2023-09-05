import { SparksBackground } from './child-components/sparks-background/sparks-background';
import { ELanguage } from '../../../shared/enums/language.enum';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
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
    <div id='layout' className='relative h-[100dvh] w-screen overflow-hidden'>
      <SparksBackground />
      {children}
    </div>
  );
}
