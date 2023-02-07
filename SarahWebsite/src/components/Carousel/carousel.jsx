import React, { useEffect } from "react";
import "./carousel.css";
import Surf from "../../assets/SUNSETCUBA.jpeg";
import MenWater from "../../assets/P1022657.jpg";
import Water from "../../assets/P1022573.jpg";
import MenWater2 from "../../assets/P1022593.jpg";
import Water2 from "../../assets/water.jpg";

export default function Carousel() {
  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex > slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      });
    });
  }, []);

  return (
    <div className="carousel" data-carousel>
      <button className="carousel-button prev" data-carousel-button="prev">
        &#8592;
      </button>
      <button className="carousel-button next" data-carousel-button="next">
        &#8594;
      </button>
      <button className="carousel-button down">&#8595;</button>
      <ul data-slides>
        <li className="slide" data-active>
          <img src={Surf} className="surf" />
        </li>
        <li className="slide">
          <img src={MenWater} className="surf" />
        </li>
        <li className="slide">
          <img src={Water} className="surf" />
        </li>
        <li className="slide">
          <img src={MenWater2} className="surf" />
        </li>
        <li className="slide">
          <img src={Water2} className="surf" />
        </li>
      </ul>
    </div>
  );
}
