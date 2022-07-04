import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './Slider.module.css';

import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation , Pagination, Scrollbar, A11y } from 'swiper';
import SliderImage from './SliderImage';

export default function Slider() {
  return (
    <>
      <Swiper
        // navigation={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={classes.slider}
      >
        <SwiperSlide className={classes.slide}>
          <SliderImage path={'/boho-bedroom.png.webp'} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage
            path={'/Dussehra-Decoration-Ideas-For-Home-In-2021..jpg'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage
            path={'/unnamed_333a1d55-8689-4a4c-b0f2-9c6f5e1141cc_1200x1200.jpg'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage path={'/imgonline-com-ua-resize-0pI1srjjyBD.jpg'} />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
