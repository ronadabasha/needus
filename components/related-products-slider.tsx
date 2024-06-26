"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./product-card";
import { Pagination } from "swiper/modules";
import products from "@/data/products";

type Props = {
  relatedProductsIds: number[] | undefined;
};

const RelatedProductsSlider = ({ relatedProductsIds }: Props) => {
  return (
    relatedProductsIds?.length && (
      <div className="max-w-8xl w-full mx-auto md:mt-[120px] px-10 md:px-20 pb-[50px] md:pb-[60px]">
        <h2 className="h1-inter-m md:h2-inter-d text-needus-black mb-4 md:mb-16 text-center">
          Related Products
        </h2>
        <Swiper
          modules={[Pagination]}
          pagination={{
            enabled: true,
            clickable: true,
            type: "bullets",
          }}
          allowTouchMove
          slidesPerView={4}
          spaceBetween={28}
          breakpoints={{
            390: {
              slidesPerView: 2,
              spaceBetween: 35,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
          }}
        >
          {products?.map((product) => {
            return relatedProductsIds.includes(product.id) ? (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ) : null;
          })}
        </Swiper>
      </div>
    )
  );
};

export default RelatedProductsSlider;
