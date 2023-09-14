import { ExperienceCard, LowBar, PresentationCard } from '../../components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect } from 'react';
import 'swiper/scss/pagination';
import './home.module.scss';
import 'swiper/scss';

export function HomeTemplate() {
  // configuration
  const transitionContainer = useRef<HTMLDivElement>(null);

  // effects
  useEffect(() => {
    setTimeout(() => {
      if (transitionContainer.current) {
        transitionContainer.current.classList.add('opacity-100');
      }
    }, 1500);
  }, []);

  return (
    <div
      ref={transitionContainer}
      id='home-template'
      className='relative h-full w-full opacity-0 transition-all duration-[1000ms]'>
      <div className='absolute h-fit w-full top-0 right-0 bottom-0 left-0 m-auto pb-[100px] pt-[20px]'>
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true
          }}
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
            disabledClass: 'pointer-events-none opacity-50'
          }}
          className='w-full py-[30px]'>
          <SwiperSlide>
            <PresentationCard
              title='Andrés Bonilla'
              subTitle='Sr. Front-end Developer'
              description='Me esfuerzo constantemente por tener orden en todo lo que hago y mejorar es algo que me gusta hacer.En este sitio iré registrando algunos momentos de mi vida, aquellos que han hecho de mí una mejor persona y un mejor desarrollador.'
              image='/images/global/presentation-picture.jpg'
              skills={[
                { label: 'React', progressPercentage: '80%' },
                { label: 'Angular', progressPercentage: '80%' },
                { label: 'React Native', progressPercentage: '80%' },
                { label: 'Flutter', progressPercentage: '80%' }
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCard />
          </SwiperSlide>
        </Swiper>
        <div className='absolute hidden md:block'>
          <div className='z-[2] top-[30%] right-0 pr-2 image-swiper-button-next'>
            <IoIosArrowForward className='text-[35px] text-black' />
          </div>
          <div className='z-[2] top-[30%] left-0 pl-2 image-swiper-button-prev'>
            <IoIosArrowBack className='text-[30px] text-black' />
          </div>
        </div>
      </div>
      <LowBar />
    </div>
  );
}
