import Carousel from 'react-bootstrap/Carousel';
import CarrouselCard from '../Carrousel/CarrouselCard';
import { objOne, objTwo, objThree } from '../../data/CarrouselData';
// style
import './Carrousel.css';

const Carrousel = () => {
  return (
    <div className="banner-section" style={{ marginLeft: '3em' }}>
      <div className="container-fluid">
        <section className="slide-wrapper">
          <div className="container-fluid">
            <Carousel>
              <Carousel.Item>
                <CarrouselCard {...objOne} />
              </Carousel.Item>
              <Carousel.Item>
                <CarrouselCard {...objTwo} />
              </Carousel.Item>
              <Carousel.Item>
                <CarrouselCard {...objThree} />
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Carrousel;
