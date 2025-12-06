import style from "./Portfolio.module.css";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
export default function Portfolio() {
  const portfolio = [
    {
      img: portfolio1,
    },
    {
      img: portfolio2,
    },
    {
      img: portfolio3,
    },
  ];
  const repeatedPortfolio = [...portfolio, ...portfolio];
  return (
    <section>
      <div className="container">
        <div className={`${style.m}`}>
          <h2
            className={`mb-3 fs-1 fw-bolder text-uppercase text-center ${style.bgcolor} `}
          >
            portfolio component
          </h2>
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
            <div className={` ${style.line}`}></div>
            <i className={`fa-solid fa-star ${style.bgcolor} `}></i>
            <div className={` ${style.line}`}></div>
          </div>
        </div>
        <div className="row g-5 mb-4">
          {repeatedPortfolio.map((i, index) => (
            <div className="col-lg-4" key={index}>
              <div
                className={`position-relative overflow-hidden h-100 ${style.portfolio}`}
              >
                <img
                  src={i.img}
                  className="w-100 rounded-3 "
                  alt="portfolio1"
                />
                <div className={`${style.box} rounded-3`}>
                  <i
                    className={`fa-solid fa-plus custom text-white ${style.custom}`}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
