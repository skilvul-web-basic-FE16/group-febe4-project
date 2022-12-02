const AboutCard = (props) => {
  return (
    <div className="cardAbout row justify-content-around align-items-center g-5 g-lg-0 p-5">
      <div className="col-lg-6 order-lg-2 order-2 g-5 ">
        <p>{props.role}</p>
        <p className="fw-semibold fs-2 nama">{props.nama}</p>
        <p className="fw-semibold text-success posisi">{props.posisi}</p>
        <p className="my-4">{props.description}</p>
        <a href={props.linkCV} className="btn btn-success btn-md">
          CV Saya
        </a>
      </div>
      <div className="col-lg-6 order-lg-1 order-1 g-5 px-2">
        <img src={props.foto} alt="" className="poto w-100 rounded-4" />
      </div>
    </div>
  );
};

export default AboutCard;
