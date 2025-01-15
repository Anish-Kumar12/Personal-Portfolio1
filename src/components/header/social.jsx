import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";

const Social = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.instagram.com/a_nish_kr'
        aria-label='Facebook'
        target='_blank'
        rel='noreferrer'
      >
        <FaInstagramSquare />
      </a>
      <a
        href='https://www.linkedin.com/in/anishkumar34/'
        aria-label='Linkedin'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
      <a
        href='https://github.com/Anish-Kumar12'
        aria-label='Github'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;
