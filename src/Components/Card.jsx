import "../assets/Styles/Card.css";
const Card = ({area, supervisor, img, color, time,classcard }) => {
  return (
    <>
      <section
        className={`${classcard} container__card`}
        style={{
          borderTop: `3px solid var(${color})`,
          animationDuration: `${time}s`,
        }}
      >
        <h4 className="poppins-semibold">{area}</h4>
        <p className="poppins-regular">{supervisor}</p>
        <img src={img} alt="icon-logo" />
      </section>
    </>
  );
};

export default Card;
