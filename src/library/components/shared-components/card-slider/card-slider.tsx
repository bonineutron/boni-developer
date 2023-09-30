import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import './card-slider.module.scss';
import 'swiper/scss/pagination';
import 'swiper/scss';

interface Props {
  cards: JSX.Element[];
  slidesPerView: number;
}

export function CardSlider({ cards, slidesPerView }: Props): JSX.Element {
  // configuration
  const { t } = useTranslation();

  return (
    <div className='relative h-fit w-full pb-[30px] md:pb-[60px]'>
      <Swiper
        slidesPerView={slidesPerView}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'pointer-events-none opacity-50'
        }}
        pagination={{
          clickable: true
        }}
        className='w-full py-[30px]'>
        {cards.map((card, index) => (
          <SwiperSlide key={`swiper-slide_${index}`}>{card}</SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute left-0 right-0 bottom-[26px] h-[24px] w-fit mx-auto hidden md:flex justify-center gap-[50px] text-[18px] font-medium italic'>
        <button className='image-swiper-button-prev w-[120px] flex items-center justify-end active:text-gray-200'>
          <IoIosArrowBack />
          <span>{t('generics.previous')}</span>
        </button>
        <button className='image-swiper-button-next w-[120px] flex items-center active:text-gray-200'>
          <span>{t('generics.next')}</span>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
