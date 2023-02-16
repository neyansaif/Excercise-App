import React from "react";

const Activities = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="pic/pic1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="pic/pic2.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="pic/pic3.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="pic/pic4.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="pic/pic5.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* cards */}
      <h2 className="text-center text-light p-5">Activites</h2>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img
                  src="pic/card1.jpg"
                  className="card-img-top"
                  alt="Card 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Running</h5>
                  <p className="card-text">
                    Running is a popular form of aerobic exercise that involves
                    moving at a steady pace for an extended period of time, and
                    is known to provide numerous health benefits, such as
                    improving cardiovascular health, strengthening bones and
                    muscles, and reducing stress and anxiety.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img
                  src="pic/card2.jpg"
                  className="card-img-top"
                  alt="Card 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Bicycle Ride</h5>
                  <p className="card-text">
                    Bicycle riding is a low-impact form of exercise that can be
                    enjoyed by people of all ages and fitness levels, and is
                    known to provide a range of health benefits, increased
                    muscle strength and flexibility, and reduced risk of chronic
                    diseases such as diabetes and heart disease.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="pic/card3.jpg"
                  className="card-img-top"
                  alt="Card 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Swimming</h5>
                  <p className="card-text">
                    Swimming is a full-body workout that can help improve
                    cardiovascular health, making it an excellent exercise
                    option for individuals with injuries or conditions that
                    limit their ability to engage in higher-impact activities
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="pic/card4.jpg"
                  className="card-img-top"
                  alt="Card 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Walking</h5>
                  <p className="card-text">
                    Walking is a simple yet effective form of exercise that can
                    be easily incorporated into daily routines, and is known to
                    provide a range of health benefits,  and
                    reducing the risk of chronic diseases such as diabetes and
                    obesity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="pic/card5.jpg"
                  className="card-img-top"
                  alt="Card 5"
                />
                <div className="card-body">
                  <h5 className="card-title">Hiking</h5>
                  <p className="card-text">
                    Hiking is a great way to enjoy the outdoors while also
                    providing a range of physical and mental health benefits,
                    including improved cardiovascular health, increased muscle
                    strength and endurance,  and
                    enhanced mood and well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
