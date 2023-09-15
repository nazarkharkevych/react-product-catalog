import { Link } from 'react-router-dom';
import './Carousel.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { NavigationOptions } from 'swiper/types/modules/navigation';
import 'swiper/scss';

import { Button } from '@/components/Button';
import { CarouselImage } from '@/types/CarouselImage';

type Props = {
  images: CarouselImage[],
};

export const Carousel: React.FC<Props> = ({ images }) => {
  return (
    <div
      className="Carousel"
    >
      <div className="Carousel__container">
        <Button
          variant="arrow"
          arrowDirection="left"
          aria-label="carosuel-left"
          className="Carousel__button"
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: '[aria-label="carosuel-right"]',
            prevEl: '[aria-label="carosuel-left"]',
          }}
          pagination={{
            bulletClass: 'Carousel__badge',
            bulletActiveClass: 'Carousel__badge--active',
            el: '.Carousel__badges',
            clickable: true,
          }}
          speed={300}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation as NavigationOptions;

            navigation.nextEl = '[aria-label="carosuel-right"]';
            navigation.prevEl = '[aria-label="carosuel-left"]';
          }}
        >
          {images.map(({ link, alt, images }) => (
            <SwiperSlide key={alt}>
              <Link to={link} className="Carousel__link">
                <picture>
                  <source
                    media="(min-width:901px)"
                    srcSet={images[0]}
                  />
                  <img
                    src={images[1]}
                    alt={alt}
                    className="Carousel__image"
                  />
                </picture>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          variant="arrow"
          className="Carousel__button"
          aria-label="carosuel-right"
        />
      </div>

      <div className="Carousel__badges" />
    </div>
  );
};
