import './MobileCarousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  images: string[];
};

export const MobileCarousel: React.FC<Props> = ({ images }) => {
  return (
    <div className="MobileCarousel">
      <Swiper>
        {images.map(image => (
          <SwiperSlide key={image}>
            <img src={image} alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
