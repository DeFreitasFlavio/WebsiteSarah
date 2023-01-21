import "./photo.css";
import Photo1 from "../../assets/sunset-violet.jpg";
import Photo2 from "../../assets/watersurf.jpg";
import Photo3 from "../../assets/beautiful.jpg";

export default function Photo() {
  return (
    <>
      <div>
        <div className="box-left">
          <img
            src="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/325146398_698517035330741_3398435068471475882_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sC0Yugc0NXwAX886_JN&_nc_ht=scontent-cdg2-1.xx&oh=00_AfC7MfI_zDsP9CSa6jZNYUApqslxO3khVyR7qk-fNfcezA&oe=63D1914C"
            alt="Water + Hill"
            className="box"
          />
          <p className="Title">SUNSET, CUBA</p>
          <p className="text">petit souvenir des Caraïbes🌔</p>
        </div>
        <div className="box-right">
          <img src={Photo2} alt="Water + Hill" className="box" />
          <p className="Title">Surf on Water</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            minus obcaecati adipisci ex accusamus facere, blanditiis mollitia
            officia at totam, magnam debitis odio fugiat odit similique
            temporibus. Molestiae, minima iure!
          </p>
        </div>
        <div className="box-left middle">
          <img src={Photo3} alt="Water + Hill" className="box" />
          <p className="Title">Coast</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            asperiores numquam fuga molestias magnam dignissimos sapiente vero
            dolorum. Neque asperiores voluptate vel commodi. Beatae id dolorum
            similique deserunt eos cumque.
          </p>
        </div>
      </div>
    </>
  );
}
