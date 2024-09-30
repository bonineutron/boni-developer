import { useTranslation } from 'react-i18next';
import { Modal } from 'components';
import { ELanguage } from 'enums';
import { useState } from 'react';

interface Props {
   setShowLanguageModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function LanguageModal({ setShowLanguageModal }: Props): JSX.Element {
   // configuration
   const { t, i18n } = useTranslation();

   // states
   const [hideModal, setHideModal] = useState<boolean>(false);

   // methods
   const changeLanguage = (lenguage: ELanguage): void => {
      i18n.changeLanguage(lenguage);
   };

   // styles
   const optionLeguage: string =
      'custom-button bg-white text-black flex items-center gap-[10px] w-[200px] active:bg-gray-200';

   return (
      <Modal closeClick={setShowLanguageModal} hideModal={hideModal}>
         <div className='flex flex-col gap-[20px]'>
            <button
               onClick={() => {
                  changeLanguage(ELanguage.spanish);
                  setHideModal(true);
               }}
               className={optionLeguage}>
               <img
                  src='/images/language/spanish.image.svg'
                  alt='spanish-image'
                  className='h-[30px] w-[30px] rounded-full'
               />
               <span>{t('language.spanish')}</span>
            </button>
            <button
               onClick={() => {
                  changeLanguage(ELanguage.english);
                  setHideModal(true);
               }}
               className={optionLeguage}>
               <img
                  src='/images/language/english.image.svg'
                  alt='spanish-image'
                  className='h-[30px] w-[30px] rounded-full'
               />
               <span>{t('language.english')}</span>
            </button>
         </div>
      </Modal>
   );
}
