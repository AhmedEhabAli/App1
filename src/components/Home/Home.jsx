import hero from "../../assets/Hero.svg";

export default function Home() {
  return (
    <section className="hero-section">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div>
          <div className="text-center">
            <img
              src={hero}
              className="mb-3"
              width="250px"
              alt="Hero illustration"
            />
          </div>
          <div className="text-white text-uppercase text-center mt-4">
            <h2 className="mb-3 fs-1 fw-bolder">Start Framework</h2>

            <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
              <div className="line"></div>
              <i className="fa-solid fa-star "></i>
              <div className="line"></div>
            </div>

            <div>Graphic Artist - Web Designer - Illustrator</div>
          </div>
        </div>
      </div>
    </section>
  );
}
