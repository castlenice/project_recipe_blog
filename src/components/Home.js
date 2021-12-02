import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class BootstrapCarouselComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12"></div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/493/900/600"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h2>Fresh Strawberries</h2>
                    <p>
                      An underestimated ingredient in almost everything.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/225/900/600?img=2"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h2>Take a break with a cup of tea</h2>
                    <p>
                      We bake your favorite cake.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/431/900/600?img=3"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h2>Enjoy a cup of coffee</h2>
                    <p>
                      What is coffee without delicious baked goods?
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BootstrapCarouselComponent;
