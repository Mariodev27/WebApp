import { services } from "../assets/data/services";
import ServiceCard from "../components/services/ServiceCard";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cold-1 md:grid-cold-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
