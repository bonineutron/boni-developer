import { useTranslation } from 'react-i18next';
import { VscClose } from 'react-icons/vsc';
import { useRef, useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode;
  closeClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ children, closeClick }: ModalProps): JSX.Element {
  // configuration
  const transitionContainer = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // effects
  useEffect(() => {
    setTimeout(() => {
      if (transitionContainer.current) {
        transitionContainer.current.classList.add('opacity-100');
      }
    });
  }, []);

  return (
    <div
      ref={transitionContainer}
      className='absolute bottom-0 h-[100dvh] w-full flex justify-center items-center opacity-0 bg-white/30 backdrop-blur-[30px] transition-all duration-[1000ms]'>
      {children}
      <button
        onClick={() => closeClick(false)}
        className='absolute bottom-[70px] text-[18px] font-medium italic flex items-center'>
        <span>{t('modal.close')}</span>
        <VscClose className='text-[30px]' />
      </button>
    </div>
  );
}
