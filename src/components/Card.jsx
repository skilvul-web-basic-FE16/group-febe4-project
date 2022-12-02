import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigation = useNavigate();

  const handleClick = (id) => {
    navigation(`/detailArticle/${id}`);
  };

  return (
    <div>
      <div className="col mb-2">
        <div className="card">
          <img src={props.imgURL} alt="" className="foto card-img-top w-100" />
          <div className="card-body ">
            <p className="text-black-50 card-text">{props.genre}</p>
            <h4 className="fw-semibold card-title">{props.title}</h4>
            <p className="card-text text-card">{props.description}</p>
            <div className="list-group">
              <button className="btn btn-success" onClick={() => handleClick(props.id)}>
                Baca Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
