import React from "react";
import aboutImg from "../../assets/images/nurse.png";
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
    <h2 className="heading">Garantía de CuidaTec: Siempre a tu Lado</h2>
    <p className="text__para">
    En CuidaTec, nos comprometemos a proporcionar un servicio confiable y continuo. Mantenemos un pool de cuidadores verificados para asegurar que siempre haya apoyo disponible. En caso de cualquier imprevisto, activamos rápidamente un reemplazo calificado para garantizar que tu adulto mayor reciba cuidado ininterrumpido.
    </p>
    <p className="text__para mt-[30px]">
    Tu tranquilidad es nuestra prioridad, asegurando que nunca te falte el apoyo necesario. Descubre por qué CuidaTec es la elección de confianza en el mercado.
    </p>
    <a href="https://www.udep.edu.pe/hoy/2021/08/adultos-mayores-son-fuente-de-sabiduria-consejo-y-amor/" target="_blank" rel="noopener noreferrer">
    <button className="btn">Aprende Más</button>
</a>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;
