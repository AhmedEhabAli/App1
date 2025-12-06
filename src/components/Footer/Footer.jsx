export default function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="card-group m-4">
          <div className="card bg-transparent border-0 text-white">
            <div className="card-body text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>

          <div className="card bg-transparent border-0 text-white">
            <div className="card-body text-center">
              <h3>AROUND THE WEB</h3>

              <div className="icon  d-flex justify-content-center align-items-center gap-2">
                <i className="fa-brands fa-facebook border "></i>
                <i className="fa-brands fa-twitter border "></i>
                <i className="fa-brands fa-linkedin-in border "></i>
                <i className="fa-solid fa-globe border "></i>
              </div>
            </div>
          </div>

          <div className="card bg-transparent border-0 text-white">
            <div className="card-body text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="end-footer text-white text-center">
        <p className="pt-2">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
