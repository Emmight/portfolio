import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">

      <div className="preloader-content">

        <h1 className="preloader-logo">
          EMMIGHT
        </h1>

        <p className="preloader-text">
          Full-Stack Developer & Creative Designer
        </p>

        <div className="loader">

          <div className="loader-fill"></div>

        </div>

      </div>

    </div>
  );
};

export default Preloader;