import "./header.css";
import Logo from "../../assets/logo.jpg";

export default function Header() {
  return (
    <>
      <div className="position">
        <div className="Header">
          <div className="Left">
            {/* <div className="bar" /> */}
            <img src={Logo} className="logo" />
            <p className="color">Sarah Thiolat</p>
          </div>
          <div className="Middle">
            <p className="color">Accueil</p>
            <p className="color">Collection</p>
            <p className="color">Contact</p>
            <p className="color">A Propos</p>
          </div>
          <div className="Right">
            <p className="color">Login</p>
            {/* <div className="bar" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
