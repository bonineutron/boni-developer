import { useTranslation } from 'react-i18next';
import { VscClose } from 'react-icons/vsc';
import { useRef, useEffect } from 'react';

interface Props {
   children: React.ReactNode;
   closeClick: React.Dispatch<React.SetStateAction<boolean>>;
   hideModal?: boolean;
}

export function Modal({ children, closeClick, hideModal }: Props): JSX.Element {
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

   useEffect(() => {
      if (hideModal) {
         if (transitionContainer.current) {
            transitionContainer.current.classList.remove('opacity-100');
         }
         setTimeout(() => {
            closeClick(false);
         }, 200);
      }
   }, [hideModal]);

   return (
      <div
         ref={transitionContainer}
         className='absolute bottom-0 dvh-compatible h-[100dvh] w-screen flex justify-center items-center opacity-0 bg-white/30 backdrop-blur-[30px] transition-all duration-200 z-[10]'>
         {children}
         <button
            onClick={() => {
               if (transitionContainer.current) {
                  transitionContainer.current.classList.remove('opacity-100');
               }
               setTimeout(() => {
                  closeClick(false);
               }, 200);
            }}
            className='absolute bottom-[70px] text-[18px] font-medium italic flex items-center active:text-gray-200'>
            <span>{t('generics.close')}</span>
            <VscClose className='text-[30px]' />
         </button>
      </div>
   );
}
