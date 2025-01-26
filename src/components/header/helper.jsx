import { BsFillChatFill } from 'react-icons/bs';

const Helper = () => {
  return (
    <div className='cta'>
      <a
        href='https://drive.google.com/file/d/1HHljZymbRoiRFRJqQBZAWJLohRTZMCQn/view?usp=sharing'
        target='_blank'
        rel='noreferrer'
        className='btn cta-icon dl'
      >
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary cta-icon'>
        <BsFillChatFill /> Let&apos;s Talk
      </a>
    </div>
  );
};

export default Helper;
