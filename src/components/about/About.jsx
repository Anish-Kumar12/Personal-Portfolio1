import './about.css';
import { FaAward } from 'react-icons/fa';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { VscFolderLibrary } from 'react-icons/vsc';
import about_me from  '../../assets/about_me.jpg'

const About = () => {
  return (
    <section id='about'>
      <h1 className='small-title'>Get To Know</h1>
      <h2 className='medium-title'>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <picture>
              <source
                media='(max-width: 600px)'
                srcSet={about_me}
                type='image/webp'
                width='250'
                height='250'
              />
              <source
                media='(max-width: 1024px)'
                srcSet={about_me}
                type='image/webp'
                width='440'
                height='440'
              />
              <source
                media='(min-width: 1025px)'
                srcSet={about_me}
                type='image/webp'
                width='1000'
                height='1000'
              />
              <source
                media='(max-width: 600px)'
                srcSet={about_me}
                type='image/jpeg'
                width='250'
                height='250'
              />
              <source
                media='(max-width: 1024px)'
                srcSet={about_me}
                type='image/jpeg'
                width='440'
                height='440'
              />
              <source
                media='(min-width: 1025px)'
                srcSet={about_me}
                type='image/jpeg'
                width='1000'
                height='1000'
              />
              <img
                src={about_me}
                type='image/jpg'
                alt='about'
                width='1000'
                height='1000'
              />
            </picture>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h3>Experience</h3>
              <small>1+ Years </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h3>Projects</h3>
              <small>10+ Completed</small>
            </article>

            <article className='about__card'>
              <TfiHeadphoneAlt className='about__icon' />
              <h3>Worldwide</h3>
              <small>Remotely Available</small>
            </article>
          </div>

          <p>
          Full stack web developer proficient in building responsive single page web applications 
          and efficient backends using NodeJS, Express, frameworks like Django and React.
          Ability to implement performance optimization using threading and caching to make backend efficient.
          Adaptive to new technologies such as Cloud, AI and containers.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
