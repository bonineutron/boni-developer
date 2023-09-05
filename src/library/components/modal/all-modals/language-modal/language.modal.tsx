import { Modal } from '../../modal';

interface LanguageModalProps {
  closeClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export function LanguageModal({ closeClick }: LanguageModalProps): JSX.Element {
  // styles
  const optionLeguage: string = 'custom-button bg-white text-black flex items-center gap-[10px] w-[200px]';

  return (
    <Modal closeClick={closeClick}>
      <div className='flex flex-col gap-[20px]'>
        <button onClick={() => {}} className={optionLeguage}>
          <img
            src='/images/language/spanish.image.jpg'
            alt='spanish-image'
            className='h-[30px] w-[30px] rounded-full'
          />
          <span>Español</span>
        </button>
        <button onClick={() => {}} className={optionLeguage}>
          <img
            src='/images/language/english.image.jpg'
            alt='spanish-image'
            className='h-[30px] w-[30px] rounded-full'
          />
          <span>Ingles</span>
        </button>
      </div>
    </Modal>
  );
}
