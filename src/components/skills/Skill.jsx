import './skill.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const data_frontend = [
  {
    skill: 'HTML',
    level: 'Experienced'
  },
  {
    skill: 'CSS',
    level: 'Experienced'
  },
  {
    skill: 'JavaScript',
    level: 'Experienced'
  },
  {
    skill: 'TypeScript',
    level: 'Intermediate'
  },
  {
    skill: 'Bootstrap',
    level: 'Experienced'
  },
  {
    skill: 'Tailwind',
    level: 'Experienced'
  },
  {
    skill: 'React',
    level: 'Experienced'
  },
  {
    skill: 'Vite',
    level: 'Experienced'
  },
  {
    skill: 'NextJS',
    level: 'Intermediate'
  }
];

const data_backend = [
  {
    skill: 'Node JS',
    level: 'Experienced'
  },
  {
    skill: 'MongoDB',
    level: 'Experienced'
  },
  {
    skill: 'MySQL',
    level: 'Experienced'
  },
  {
    skill: 'Firebase',
    level: 'Intermediate'
  },
  {
    skill: 'Tensorflow',
    level: 'intermediate'
  },
  {
    skill: 'Keras',
    level: 'intermediate'
  },
  {
    skill: 'Docker',
    level: 'Experienced'
  },
  {
    skill: 'Model Fintunning',
    level: 'Experienced'
  }
];

const Skill = () => {
  return (
    <section id='experience'>
      <h1 className='small-title'>What Skills I have</h1>
      <h2 className='medium-title'>Technical Level</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {data_frontend.map(({ skill, level }, index) => {
              return (
                <article key={index} className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div className='experience__skill'>
                    <h4>{skill}</h4>
                    <small className='text-light'>{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend & ML/AI</h3>
          <div className='experience__content'>
            {data_backend.map(({ skill, level }, index) => {
              return (
                <article key={index} className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div className='experience__skill'>
                    <h4>{skill}</h4>
                    <small className='text-light'>{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
