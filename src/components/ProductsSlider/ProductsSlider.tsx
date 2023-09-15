import './ProductsSlider.scss';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { NavigationOptions } from 'swiper/types/modules/navigation';
import 'swiper/scss';

import { Product } from '@/types/Product';
import { Button } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';
import { NoResults } from '@/components/NoResults';

type Props = {
  products: Product[];
};

export const ProductSlider: React.FC<Props> = ({
  products,
}) => {
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  if (!products.length) {
    return <NoResults category="Products" />;
  }

  return (
    <div className="ProductsSlider">
      <div className="ProductsSlider__buttons">
        <Button
          refProp={prevButtonRef}
          variant="arrow"
          arrowDirection="left"
          aria-label="slide-left"
        />

        <Button
          refProp={nextButtonRef}
          variant="arrow"
          aria-label="slide-right"
        />
      </div>

      <div className="ProductsSlider__content">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation as NavigationOptions;

            navigation.prevEl = prevButtonRef.current;
            navigation.nextEl = nextButtonRef.current;
          }}
          slidesPerView={1}
          slidesPerGroup={1}
          speed={300}
          spaceBetween={16}
          breakpoints={{
            580: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              speed: 400,
            },
            900 : {
              slidesPerView: 3,
              slidesPerGroup: 3,
              speed: 600,
            },
            1150: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              speed: 600,
            },
          }}
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
