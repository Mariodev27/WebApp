import React from "react";
import { services } from "./../../assets/data/services";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <div className="grid grid-cold-1 md:grid-cold-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {services.map((item, index) => (
        <ServiceCard item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default ServiceList;
