const LayananCard = (props) => {
  return (
    <div className="col text-center p-5 bg-light">
      <h4 className="fw-semibold">{props.name}</h4>
      <p>{props.description}</p>
    </div>
  );
};
export default LayananCard;
