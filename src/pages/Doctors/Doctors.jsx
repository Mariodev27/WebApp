import DoctorCard from "./../../components/doctors/DoctorCard";
import { doctors } from "./../../assets/data/doctor";
import Testimonial from "../../components/testimonial/Testimonial";
import { BASE_URL } from "./../../config";
import useFetchData from "./../../hooks/useFetchData";
import Loader from "../../components/loader/loading";
import Error from "../../components/error/error";
import { useEffect, useState } from "react";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());
    console.log("Handle Search");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);
    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);
  return (
    <>
      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {doctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Lo que dicen nuestros clientes</h2>
            <p className="font-light text-center text__para">
              Nuestros clientes están satisfechos con nuestros servicios. Aquí hay algunos
              testimonios de nuestros clientes.</p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
