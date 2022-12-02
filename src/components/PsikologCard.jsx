import { useNavigate } from "react-router-dom";

const PsikologCard = (props) => {
  const navigation = useNavigate();

  const handleClick = (id) => {
    navigation(`/detailPsikolog/${id}`);
  };

  return (
    <div>
      <div className="col mb-2">
        <div className="card">
          <img src={props.gambarURL} alt="" className="foto w-100 card-img-top" />
          <div className="card-body">
            <h4 className="fw-semibold card-title">{props.nama}</h4>
            <div className="list-group list-group-flush mb-2">
              <div className="d-flex align-items-center pb-1">
                <box-icon type="solid" name="briefcase-alt-2"></box-icon>
                <p className="list-group-item hapus-padding card-text">Spesialis {props.spesialis}</p>
              </div>{" "}
              <div className="d-flex align-items-center pb-3">
                <box-icon name="time" type="solid"></box-icon>
                <p className="list-group-item card-text hapus-padding"> {props.pengalaman}</p>
              </div>
              <div className="list-group">
                <button className="btn btn-success" onClick={() => handleClick(props.id)}>
                  Detail Psikolog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PsikologCard;
