import React from "react";
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
                    We help patients live a healthy, longer life
                  </h1>
                  <p className="text__para">
                    Welcome to Medicare, your premier destination for
                    hassle-free online appointment booking. From doctor's visits
                    to specialist consultations, our platform offers a seamless
                    experience, empowering you to schedule appointments with
                    ease. Say goodbye to long wait times and hello to efficiency
                    with Medicare.
                  </p>
                  <button className="btn">Book an Appointment</button>
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
                Providing the best medical services online
              </h2>
              <p className="text__para text-center">
                World-class care for everyone. Our health system offers
                unmatched, expert health care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Doctor
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health system offers
                    unmatched, expert health care. From the lab to the clinic.
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
                    Find a Location
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health system offers
                    unmatched, expert health care. From the lab to the clinic.
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
                    Book Appointment
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health system offers
                    unmatched, expert health care. From the lab to the clinic.
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
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
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
                src="https://www.cuidarlos.com/wp-content/uploads/2023/04/perfil-cuidador-iphone.png" 
                alt="Perfil Cuidador Cuidarlos APP" 
                srcSet="https://www.cuidarlos.com/wp-content/uploads/2023/04/perfil-cuidador-iphone.png 512w, https://www.cuidarlos.com/wp-content/uploads/2023/04/perfil-cuidador-iphone-154x300.png 154w" 
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
                Frequently asked questions by our beloved patients
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
