import React from "react";
import appImage from '../assets/images/App.png';
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/about/About";
import ServiceList from "../components/services/ServiceList";
import DoctorList from "../components/doctors/DoctorList";
import FaqItem from "../components/faq/FaqItem";
import FaqList from "../components/faq/FaqList";
import Testimonial from "../components/testimonial/Testimonial";


const Home = () => {
  return (
    <>
      {/* ====hero==== */}
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ====hero content==== */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[700] md:text-[60px] md:leading-[70px]">
                    Busca y encuentra al cuidador que necesitás.
                  </h1>
                  <p className="text__para">
                  Bienvenido a Medicare, su principal destino para reservar citas en línea sin problemas. Busca a tu enfermero ideal en nuestra plataforma ofrece una experiencia perfecta, lo que le permite programar citas con facilidad. Di adiós a los largos tiempos de espera y saluda a la eficiencia con Medicare.
                  </p>
                  <button className="btn">Reserva una cita</button>
                </div>
                {/* ====counter==== */}
                
              </div>
              {/* ====hero image==== */}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={heroImg01} alt="" />
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* ====hero end==== */}
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Proporcionar los mejores servicios de enfermeros en línea
              </h2>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Encuentra un Cuidador
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Medicare te facilita el acceso a cientos de cuidadores calificados con múltiples herramientas que te facilitan la búsqueda y gestión del día a día en el cuidado de tu ser querido.
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Encuentralos
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Al cargar el perfil completo de tu familiar, Medicare te permite buscar detalladamente el cuidador ideal para tu necesidad.
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Reservar una cita
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Los cuidadores calificados se postularán y podrás hacer una selección de acuerdo a tus preferencias sin mencionar datos familiares o de vivienda.

                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <About />
      {/* ====services==== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">¿De qué manera un cuidador calificado puede ayudar?</h2>
            
          </div>

          <ServiceList />
        </div>
      </section>
      {/* ====service section end==== */}

      
      {/* ====our doctors==== */}
      {/* our doctors */}
      <section>
          <div className="container">
            <div className='xl:w-[470px] mx-auto'>
              <h2 className='heading text-center'>El App</h2>
              <br />
              <p className='text_para text-center'>
              Fácil. Encontrá al Cuidador que necesitás en tres simples pasos.
              </p>
              <br />
              <img 
    className="img-with-animation skip-lazy animated-in" 
    data-delay="0" 
    height="1000" 
    width="512" 
    data-animation="fade-in-from-left" 
    src={appImage} 
    alt="Perfil Cuidador Cuidarlos APP" 
    srcSet={`${appImage} 512w, ${appImage} 154w`} 
    sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
/>
            </div>
          </div>
        </section>
      {/* ====doctors end==== */}
      {/* ====faq==== */}
      <section>
        <div className="container">
          <div className="flex jsutify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
              Preguntas frecuentes sobre la App
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ====faq end==== */}
      
    </>
  );
};

export default Home;
