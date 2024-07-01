import React from "react";
import appImage from '../assets/images/App.png';
import appImage2 from '../assets/images/App2.png';
import appImage3 from '../assets/images/App3.png';
import appImage4 from '../assets/images/App4.png';
import appImage5 from '../assets/images/App5.png';
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
                  Bienvenido a CuidaTec
                  </h1>
                  <p className="text__para">
                  CuidaTec conecta a las familias con enfermeros de confianza en su área, brindando un acceso rápido y conveniente a una red de cuidadores dedicados. Nuestra plataforma ofrece una experiencia perfecta, permitiéndote programar citas con facilidad y garantizando siempre un enfermero disponible. Di adiós a las preocupaciones y saluda a la tranquilidad con CuidaTec.
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
                  CuidaTec te facilita el acceso a cuidadores calificados con múltiples herramientas que simplifican la búsqueda y gestión diaria del cuidado de tu ser querido.
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
                  Con CuidaTec, al cargar el perfil completo de tu familiar, puedes buscar detalladamente al cuidador ideal para tus necesidades.
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
                  Los cuidadores calificados se postulan y tú puedes seleccionar según tus necesidades.
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
      <div style={{display: 'flex', justifyContent: 'center'}}>
  <button className="btn">Descarga el App</button>
</div>
      <br />
      <div className="flex justify-around">
        <img 
          className="img-with-animation skip-lazy animated-in" 
          data-delay="0" 
          height="1000" 
          width="512" 
          data-animation="fade-in-from-left" 
          src={appImage} 
          alt="App Image 1" 
          srcSet={`${appImage} 512w, ${appImage} 154w`} 
          sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
        />
        <img 
          className="img-with-animation skip-lazy animated-in" 
          data-delay="0" 
          height="1000" 
          width="512" 
          data-animation="fade-in-from-left" 
          src={appImage2} 
          alt="App Image 2" 
          srcSet={`${appImage2} 512w, ${appImage2} 154w`} 
          sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
        />
        <img 
          className="img-with-animation skip-lazy animated-in" 
          data-delay="0" 
          height="1000" 
          width="512" 
          data-animation="fade-in-from-left" 
          src={appImage3} 
          alt="App Image 3" 
          srcSet={`${appImage3} 512w, ${appImage3} 154w`} 
          sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
        />
      </div>
      <div className="flex justify-around">
        <img 
          className="img-with-animation skip-lazy animated-in" 
          data-delay="0" 
          height="1000" 
          width="512" 
          data-animation="fade-in-from-left" 
          src={appImage4} 
          alt="App Image 4" 
          srcSet={`${appImage4} 512w, ${appImage4} 154w`} 
          sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
        />
        <img 
          className="img-with-animation skip-lazy animated-in" 
          data-delay="0" 
          height="1000" 
          width="512" 
          data-animation="fade-in-from-left" 
          src={appImage5} 
          alt="App Image 5" 
          srcSet={`${appImage5} 512w, ${appImage5} 154w`} 
          sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
        />
      </div>
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
