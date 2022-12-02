import LayananCard from "./LayananCard";
import dataLayanan from "./dataLayanan";

const Layanan = () => {
  return (
    <div className="cardlayanan">
      <div className="container mt-5">
        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 g-4">
          {dataLayanan.map((item, index) => {
            return <LayananCard key={index} name={item.name} description={item.description} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Layanan;
