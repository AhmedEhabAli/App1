import style from "./Contact.module.css";

export default function Contact() {
  const inputs = [
    { text: "userName:", placeholder: "userName", type: "text" },
    { text: "userAge:", placeholder: "userAge", type: "number" },
    { text: "userEmail:", placeholder: "userEmail", type: "email" },
    { text: "userPassword:", placeholder: "userPassword", type: "password" },
  ];
  return (
    <section>
      <div className="container">
        <div className={`${style.m}`}>
          <h2
            className={`mb-3 fs-1 fw-bolder text-uppercase text-center ${style.bgcolor} `}
          >
            contact section
          </h2>
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
            <div className={` ${style.line}`}></div>
            <i className={`fa-solid fa-star ${style.bgcolor} `}></i>
            <div className={` ${style.line}`}></div>
          </div>
        </div>
        <form action="" className={`w-75 p-3 mx-auto mt-5  ${style.mb} `}>
          {inputs.map((input, index) => (
            <div key={index} className="position-relative">
              <input
                type={input.type}
                placeholder={input.placeholder}
                id={input.text}
                className="form-control border-0 border-bottom mt-5 shadow-none"
                onInput={(e) => {
                  const label = e.target.nextSibling;
                  e.target.value.length > 0
                    ? (label.classList.add(style.apparent),
                      label.classList.remove(style.hidden))
                    : (label.classList.remove(style.apparent),
                      label.classList.add(style.hidden));
                }}
              />
              <label htmlFor={input.text} className={`${style.hidden}`}>
                {input.text}
              </label>
            </div>
          ))}
          <button
            className={` ${style.custom} text-white mt-4 mb-5 border-0 p-2 rounded-2`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
