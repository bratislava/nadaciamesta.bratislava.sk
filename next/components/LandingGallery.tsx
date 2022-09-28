import { useWindowSize } from '../utils/hooks';
import LandingSwiper from './LandingSwiper';

export interface ILandingGalleryProps {
  slidesTop: Array<{
    id: string;
    images?: Array<{ alternativeText?: string; url: string }>;
  }>;
  slidesBottom: Array<{
    id: string;
    images?: Array<{ alternativeText?: string; url: string }>;
  }>;
}

const LandingGallery = ({ slidesTop, slidesBottom }: ILandingGalleryProps) => {
  const { width } = useWindowSize();

  let numTopSlides = 1;
  let numBottomSlides = 1;

  if (width > 1300) {
    numTopSlides = 3;
    numBottomSlides = 2;
  } else if (width > 800) {
    numTopSlides = 2;
    numBottomSlides = 1;
  }

  return (
    <div className="flex flex-col self-stretch bg-white">
      <div
        className="flex justify-center"
        style={{ height: 390, paddingTop: 0 }}
      >
        <LandingSwiper
          numOfSlides={numTopSlides}
          speed={17000}
          slides={slidesTop}
        />
      </div>
      <div className="flex min-w-full justify-center" style={{ height: 390 }}>
        <LandingSwiper
          numOfSlides={numBottomSlides}
          speed={19000}
          slides={slidesBottom}
        />
      </div>
    </div>
  );
};

export default LandingGallery;
