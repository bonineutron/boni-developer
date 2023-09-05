import { ContactModal, LanguageModal } from '../modal/all-modals';
import { useTranslation } from 'react-i18next';
import { HiLanguage } from 'react-icons/hi2';
import { useState } from 'react';

export function LowBar(): JSX.Element {
  // configuration
  const { t } = useTranslation();

  // states
  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  return (
    <div className='absolute bottom-0 h-[80px] w-full'>
      <div className='h-full w-full flex justify-evenly'>
        <button
          onClick={() => setShowLanguageModal(true)}
          className='custom-button bg-white text-black flex items-center gap-[5px]'>
          <HiLanguage className='text-[22px]' />
          <span>{t('lowBar.language')}</span>
        </button>
        <button onClick={() => setShowContactModal(true)} className='custom-button'>
          {t('lowBar.contact')}
        </button>
      </div>
      {showLanguageModal && <LanguageModal closeClick={setShowLanguageModal} />}
      {showContactModal && <ContactModal closeClick={setShowContactModal} />}
    </div>
  );
}
