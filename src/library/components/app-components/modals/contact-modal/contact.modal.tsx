import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiMailSendFill } from 'react-icons/ri';
import { Modal } from 'components';

interface Props {
  setShowContactModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ContactModal({ setShowContactModal }: Props): JSX.Element {
  // styles
  const optionContact: string =
    'custom-button flex items-center gap-2 w-[200px] bg-white text-black active:bg-gray-200';
  const iconContact: string = 'text-[30px]';

  return (
    <Modal closeClick={setShowContactModal}>
      <div className='flex flex-col gap-[20px]'>
        <a
          href='https://www.linkedin.com/in/bonineutron/'
          target='_blank'
          rel='noopener noreferrer'
          className={optionContact}>
          <FaLinkedin className={iconContact} />
          <span>Linkedin</span>
        </a>
        <a href='https://github.com/bonineutron' target='_blank' rel='noopener noreferrer' className={optionContact}>
          <FaGithub className={iconContact} />
          <span>Github</span>
        </a>
        <a href='mailto:mailofbonilla@gmail.com' target='_blank' rel='noopener noreferrer' className={optionContact}>
          <RiMailSendFill className={iconContact} />
          <span>Email</span>
        </a>
        <a
          href='https://api.whatsapp.com/send?phone=573203604288'
          target='_blank'
          rel='noopener noreferrer'
          className={optionContact}>
          <IoLogoWhatsapp className={iconContact} />
          <span>Whatsapp</span>
        </a>
      </div>
    </Modal>
  );
}
