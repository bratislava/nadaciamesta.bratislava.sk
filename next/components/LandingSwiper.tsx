import cx from 'classnames';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface ILandingSwiperProps {
  numOfSlides: number;
  speed: number;
  slides: Array<{
    id: string;
    images?: Array<{ alternativeText?: string; url: string; formats?: any }>;
  }>;
}

const LandingSwiper = ({ numOfSlides, speed, slides }: ILandingSwiperProps) => {
  return (
    <Swiper
      slidesPerView={numOfSlides}
      spaceBetween={15}
      speed={speed}
      loop
      freeMode={{
        enabled: true,
        sticky: false,
      }}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      className={cx('linear-swiper')}
    >
      {slides.map((project) => (
        <SwiperSlide
          key={project.id}
          style={{
            borderWidth: 1,
            height: 380,
            width: 700,
            marginTop: parseInt(project.id) % 2 ? '5px' : 0,
          }}
        >
          <Link href={`/projects/${project.id}`}>
            <a href={`/projects/${project.id}`}>
              {project.images.length > 0 ? (
                <img
                  src={
                    project.images[0]?.formats?.medium?.url ||
                    project.images[0]?.url ||
                    'https://via.placeholder.com/300?text=NO%20IMAGE'
                  }
                  alt={
                    project.images[0]?.alternativeText || 'Placeholder image'
                  }
                />
              ) : (
                <div>Žiaden obrázok</div>
              )}
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LandingSwiper;
