import { Col, Row } from 'react-bootstrap';

const CarrouselCard = ({ h1, h2, p, button, button2, img }) => {
  return (
    <>
      <Row>
        <Col sm={5}>
          <div className="banner_title">
            <h1 className="banner_text">{h1} </h1>
            <h2 className="mens_text">
              <strong>{h2}</strong>
            </h2>
            <p className="lorem_text">{p}</p>
            <button className="buy_bt">{button}</button>
            <button className="more_bt">{button2}</button>
          </div>
        </Col>

        <Col sm={5}>
          <div className="shoes_img">
            <img src={img} alt="" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CarrouselCard;
