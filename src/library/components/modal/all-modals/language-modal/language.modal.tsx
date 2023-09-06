import { ELanguage } from '../../../../../shared/enums/language.enum';
import { useTranslation } from 'react-i18next';
import { Modal } from '../../modal';

interface LanguageModalProps {
  closeClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export function LanguageModal({ closeClick }: LanguageModalProps): JSX.Element {
  // configuration
  const { t, i18n } = useTranslation();

  // methods
  const changeLanguage = (lenguage: ELanguage): void => {
    i18n.changeLanguage(lenguage);
  };

  // styles
  const optionLeguage: string = 'custom-button bg-white text-black flex items-center gap-[10px] w-[200px]';

  return (
    <Modal closeClick={closeClick}>
      <div className='flex flex-col gap-[20px]'>
        <button
          onClick={() => {
            changeLanguage(ELanguage.spanish);
          }}
          className={optionLeguage}>
          <img
            src='/images/language/spanish.image.svg'
            alt='spanish-image'
            className='h-[30px] w-[30px] rounded-full'
          />
          <span>{t('languageModal.spanish')}</span>
        </button>
        <button
          onClick={() => {
            changeLanguage(ELanguage.english);
          }}
          className={optionLeguage}>
          <img
            src='/images/language/english.image.svg'
            alt='spanish-image'
            className='h-[30px] w-[30px] rounded-full'
          />
          <span>{t('languageModal.english')}</span>
        </button>
      </div>
    </Modal>
  );
}
