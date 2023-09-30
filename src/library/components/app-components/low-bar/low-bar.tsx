import { ContactModal, Image, LanguageModal } from 'components';
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
    <div className='absolute bottom-0 h-[70px] w-full flex justify-evenly md:items-center lg:h-[100px]'>
      <div className='hidden lg:flex items-center gap-[10px]'>
        <Image
          src='/images/language/spanish.image.svg'
          alt='colombian-flag'
          height='30px'
          width='auto'
          className='rounded-md'
        />
        <p className='text-[18px] font-medium'>{t('generics.made-colombia')}</p>
      </div>
      <div className='h-fit w-fit flex gap-[40px] lg:gap-[20px]'>
        <button
          onClick={() => setShowLanguageModal(true)}
          className='custom-button bg-white text-black flex items-center gap-[5px]'>
          <HiLanguage className='text-[22px]' />
          <span>{t('language.label')}</span>
        </button>
        <button onClick={() => setShowContactModal(true)} className='custom-button'>
          {t('generics.contact')}
        </button>
      </div>
      {showLanguageModal && <LanguageModal setShowLanguageModal={setShowLanguageModal} />}
      {showContactModal && <ContactModal setShowContactModal={setShowContactModal} />}
    </div>
  );
}
