import ReactFullpage from '@fullpage/react-fullpage';
import { useRef } from 'react';
import './home.module.scss';

export function HomeTemplate() {
  // configuration
  const licenseKey: string = import.meta.env.VITE_LICENSE_KEY;
  const classContentCards: string = 'flex justify-around items-center h-full';
  const titleRef = useRef<HTMLDivElement>(null);

  return (
    <div id='home-template' className='h-full flex justify-center items-center'>
      <span id='card-blur' className='fixed w-[90%] h-[500px] bg-white/40 backdrop-blur-xl rounded-xl' />
      <ReactFullpage
        scrollingSpeed={500}
        licenseKey={licenseKey}
        onLeave={(origin, destination, item) => {
          console.log('sale');

          let section = destination.item;

          // Aplica la animación de transición deseada al título de la sección
          titleRef?.current?.classList.remove('test');
        }}
        afterLoad={(item, destination, direction) => {
          let section = destination.item;
          console.log('entra');

          // Elimina la clase de transición una vez que la sección se ha cargado
          titleRef?.current?.classList.add('test');
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <div className='w-[90%] h-[500px] mx-auto'>
                  <div className={classContentCards}>
                    <div ref={titleRef}>Titulo Prueba 1</div>
                    <img
                      src='https://images.unsplash.com/photo-1685433339650-74938cc6bfe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                      alt='img_1'
                      className='h-[300px]'
                    />
                  </div>
                </div>
              </div>
              <div className='section'>
                <div className='w-[90%] h-[500px] mx-auto'>
                  <div className={classContentCards}>
                    <div>Titulo Prueba 2</div>
                    <img
                      src='https://plus.unsplash.com/premium_photo-1684315352401-062806d5d9ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                      alt='img_2'
                      className='h-[300px]'
                    />
                  </div>
                </div>
              </div>
              <div className='section'>
                <div className='w-[90%] h-[500px] mx-auto'>
                  <div className={classContentCards}>
                    <div>Titulo Prueba 3</div>
                    <img
                      src='https://images.unsplash.com/photo-1685433339650-74938cc6bfe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                      alt='img_1'
                      className='h-[300px]'
                    />
                  </div>
                </div>
              </div>
              <div className='section'>
                <div className='w-[90%] h-[500px] mx-auto'>
                  <div className={classContentCards}>
                    <div>Titulo Prueba 4</div>
                    <img
                      src='https://plus.unsplash.com/premium_photo-1684315352401-062806d5d9ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                      alt='img_2'
                      className='h-[300px]'
                    />
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
