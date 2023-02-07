import "./photo.css";
import Photo1 from "../../assets/P1011713.jpg";
import Photo3 from "../../assets/P1011718.jpg";
import SunsetCuba from "../../assets/SUNSETCUBA.jpeg";
import OldEngland from "../../assets/P1011871.jpg";
import Plane from "../../assets/P1011932.jpg";
import Monument from "../../assets/P1011934.jpg";
import Tower from "../../assets/P1011950.jpg";
import Tower2 from "../../assets/P1011965.jpg";
import Tower3 from "../../assets/P1011967.jpg";
import Legume from "../../assets/P1022078.jpg";
import Legume2 from "../../assets/P1022080.jpg";
import Car from "../../assets/P1022091.jpg";
import Street from "../../assets/P1022100.jpg";
import Cafe from "../../assets/P1022112.jpg";
import House from "../../assets/P1022150.jpg";
import Leaf from "../../assets/P1022155.jpg";
import Cow from "../../assets/P1022180.jpg";
import Cuba from "../../assets/P1022327.jpg";
import Mountain from "../../assets/P1022329.jpg";
import Sunset from "../../assets/P1022333.jpg";
import Tree from "../../assets/P1022335.jpg";

export default function Photo() {
  return (
    <>
      <div>
        <div className="box-left">
          <div className="blur">
            <img src={SunsetCuba} alt="Water + Hill" className="box" />
          </div>
          <p className="Title">SUNSET, CUBA</p>
          <p className="text">petit souvenir des Caraïbes🌔</p>
        </div>
        <div className="box-right">
          <img src={Photo1} alt="Water + Hill" className="box" />
        </div>
        <div className="box-left">
          <img src={Photo3} alt="Water + Hill" className="box" />
        </div>
        <div className="box-middle">
          <img src={OldEngland} alt="Water + Hill" className="box" />
        </div>
        <div className="box-right">
          <img src={Plane} alt="Water + Hill" className="box" />
        </div>
        <div className="box-left">
          <img src={Monument} alt="Water + Hill" className="box" />
        </div>
        <div className="box-right">
          <img src={Tower} alt="Water + Hill" className="box" />
        </div>
        <div className="box-middle">
          <img src={Tower2} alt="Water + Hill" className="box" />
        </div>
        <div className="box-left">
          <img src={Tower3} alt="Water + Hill" className="box" />
        </div>
        <div className="box-right">
          <img src={Legume} alt="Water + Hill" className="box" />
        </div>
        <div className="box-left">
          <img src={Legume2} alt="Water + Hill" className="box" />
        </div>
        <div className="box-middle">
          <img src={Car} alt="Water + Hill" className="box" />
        </div>
        <div className="box-right">
          <img src={Legume} alt="Water + Hill" className="box" />
        </div>
        <div className="box-left">
          <img src={Street} alt="Water + Hill" className="box" />
        </div>
        <div className="box-right">
          <img src={Cafe} alt="Water + Hill" className="box" />
        </div>
        <div className="box-middle">
          <img src={House} alt="Water + Hill" className="box" />
        </div>
        <div className="box-left">
          <img src={Leaf} alt="Water + Hill" className="box" />
        </div>
        <div className="box-right">
          <img src={Cow} alt="Water + Hill" className="box" />
        </div>
        <div className="box-left">
          <img src={Cuba} alt="Water + Hill" className="box" />
        </div>
        <div className="box-middle">
          <img src={Mountain} alt="Water + Hill" className="box" />
        </div>
        <div className="box-right">
          <img src={Sunset} alt="Water + Hill" className="box" />
        </div>
        <div className="box-left">
          <img src={Tree} alt="Water + Hill" className="box" />
        </div>
        <div className="box-right">
          <img src={Legume} alt="Water + Hill" className="box" />
        </div>
        <div className="box-middle">
          <img src={Tower2} alt="Water + Hill" className="box" />
        </div>
        <div className="box-left">
          <img src={Tower3} alt="Water + Hill" className="box" />
        </div>
      </div>
    </>
  );
}
