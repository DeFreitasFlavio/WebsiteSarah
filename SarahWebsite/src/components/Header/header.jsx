import "./header.css";

export default function Header() {
  return (
    <>
      <div className="position">
        <div className="Header">
          <div className="Left">
            {/* <div className="bar" /> */}
            <img
              src="https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/324558422_564348688872653_19847098762469474_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mjbYHvFue-0AX8ph2cq&_nc_ht=scontent-cdt1-1.xx&oh=00_AfCMHSQKboSdZr7y6dpQidXoQMjoW2U2eZwsFur6mDxJJQ&oe=63D071DD"
              className="logo"
            />
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
