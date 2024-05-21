import React from "react";
import aboutImg from "../../assets/images/about4.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ====about img==== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* ====about content==== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
    <h2 className="heading">Cuidado de los Adultos Mayores</h2>
    <p className="text__para">
        El cuidado de los adultos mayores es de vital importancia. Su experiencia y sabiduría son invaluables para nuestra sociedad y merecen la mejor atención y cuidado.
    </p>
    <p className="text__para mt-[30px]">
        Nos esforzamos cada día para proporcionar servicios de alta calidad que satisfacen sus necesidades únicas, respetando su dignidad y promoviendo su bienestar.
    </p>
    <Link to="/">
        <button className="btn">Aprende Más</button>
    </Link>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;
