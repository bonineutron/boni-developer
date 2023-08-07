import { RiMailSendFill, RiWhatsappFill } from 'react-icons/ri';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { useState, useEffect } from 'react';

export function LowBar(): JSX.Element {
  // states
  const [transition, setTransition] = useState<boolean>(false);

  // effects
  useEffect(() => {
    setTransition(true);
  }, []);

  return (
    <div
      className={`fixed h-[80px] w-full bg-white-boni bottom-[-80px] shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all duration-[500ms] delay-[1600ms] ${
        transition ? 'bottom-[0px]' : ''
      }`}>
      <div className='flex h-full w-[70%] items-center mx-auto justify-between text-[30px] text-black-boni'>
        <a href='https://www.linkedin.com/in/bonineutron/' target='_blank' className='h-full flex items-center'>
          <BsLinkedin />
        </a>
        <a href='https://github.com/bonineutron' target='_blank' className='h-full flex items-center'>
          <BsGithub />
        </a>
        <a href='https://api.whatsapp.com/send?phone=573203604288' target='_blank' className='h-full flex items-center'>
          <RiWhatsappFill className='text-[35px]' />
        </a>
        <a href='mailto:mailofbonilla@gmail.com' target='_blank' className='h-full flex items-center'>
          <RiMailSendFill className='text-[35px]' />
        </a>
      </div>
    </div>
  );
}
