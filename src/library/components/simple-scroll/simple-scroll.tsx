import { BusinessCard, ExperienceCard } from '../index';
import ReactFullpage from '@fullpage/react-fullpage';
import { useState, useEffect } from 'react';

export function SimpleScroll() {
  // configuration
  const licenseKey: string = import.meta.env.VITE_LICENSE_KEY;

  // states
  const [transition, setTransition] = useState<boolean>(false);

  // effects
  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 2000);
  }, []);

  return (
    <div
      className={`fixed h-full transition-all duration-[500ms] ease-out ${!transition ? 'translate-y-[100vh]' : ''}`}>
      <ReactFullpage
        scrollingSpeed={600}
        licenseKey={licenseKey}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <div className='w-[90%] p-[30px] mx-auto bg-white-boni rounded-xl shadow-md mb-[80px]'>
                  <BusinessCard />
                </div>
              </div>
              <div className='section'>
                <div className='w-[90%] p-[30px] mx-auto bg-white-boni rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.3)] mb-[80px]'>
                  <ExperienceCard
                    images={[
                      '/images/experience/tribes_1.png',
                      '/images/experience/tribes_2.png',
                      '/images/experience/tribes_3.png'
                    ]}
                    company='Tribes Media'
                    year='2021'
                    description='Uno de los desafíos que más recuerdo fue integrar el API de Stripe, donde aprendí a adaptar mi código con un proyecto realizado por otro profesional.'
                    skills='React.js • Sass • Tailwind • Firebase • Stripe • Figma • Revenuecat • React.js • Sass • Tailwind • Firebase • Stripe • Figma • Revenuecat'
                  />
                </div>
              </div>
              <div className='section'>
                <div className='w-[90%] p-[30px] mx-auto bg-white-boni rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.3)] mb-[80px]'>
                  <ExperienceCard
                    images={['/images/experience/ugroup_1.png', '/images/experience/ugroup_2.png']}
                    company='Ultra Group'
                    year='2022'
                    description='Aquí aprendí a analizar un problema desde diferentes puntos de vista y a crear un sistema organizado para su respectiva ejecución.'
                    skills='React.js • Sass • Tailwind • Storybook • Npm • Azure • React.js • Sass • Tailwind • Storybook • Npm • Azure'
                  />
                </div>
              </div>
              <div className='section'>
                <div className='w-[90%] p-[30px] mx-auto bg-white-boni rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.3)] mb-[80px]'>
                  <ExperienceCard
                    images={['/images/experience/ciomprix_1.png', '/images/experience/ciomprix_2.png']}
                    company='Ciomprix'
                    year='2022'
                    description='La gran variedad de desafíos que se presentaron en Ciomprix mejoró la estimación del esfuerzo que me tomaría solucionar un problema.'
                    skills='Next.js • Sass • Tailwind • Firebase • Pwa • Aws • Node.js • MySQL • Next.js • Sass • Tailwind • Firebase • Pwa • Aws • Node.js • MySQL'
                  />
                </div>
              </div>
              <div className='section'>
                <div className='w-[90%] p-[30px] mx-auto bg-white-boni rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.3)] mb-[80px]'>
                  <ExperienceCard
                    images={[
                      '/images/experience/fundes_1.png',
                      '/images/experience/fundes_2.png',
                      '/images/experience/fundes_3.png'
                    ]}
                    company='Fundes'
                    year='2023'
                    description='Me permitieron aportar bastante en el producto que recibiría el usuario, tanto en soluciones tecnológicas como en la experiencia de usuario.'
                    skills='Angular.js • Sass • Tailwind • Firebase • Aws • Hotjar • Angular.js • Sass • Tailwind • Firebase • Aws • Hotjar'
                  />
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
