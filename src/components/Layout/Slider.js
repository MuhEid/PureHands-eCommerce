import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './Slider.module.css';

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/thumbs";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SliderImage from './SliderImage';

export default function Slider(props) {
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
        {props.sources.map((src) => (
          <SwiperSlide className={classes.slide}>
            <SliderImage path={src} />
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  );
}
