import { RiMailSendFill, RiWhatsappFill } from 'react-icons/ri';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { LanguageModal } from '../modal/all-modals';

export function LowBar(): JSX.Element {
  // states
  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(false);

  return (
    <div className='absolute bottom-0 h-[80px] w-full'>
      <div className='h-full w-full flex justify-evenly'>
        <button
          onClick={() => setShowLanguageModal(true)}
          className='custom-button bg-white text-black flex items-center gap-[10px]'>
          <img
            src='/images/language/spanish.image.jpg'
            alt='spanish-image'
            className='h-[30px] w-[30px] rounded-full'
          />
          <span>ES</span>
        </button>
        <button className='custom-button'>Contacto</button>
      </div>
      {showLanguageModal && <LanguageModal closeClick={setShowLanguageModal} />}
    </div>
  );
}
