import { BASE_URL, token } from "./../../config.js";
import { toast } from "react-toastify";

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message + "Please try again");
      }
      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-medium">Appointment Charges</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          ₹{ticketPrice}
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-medium">Available time slots: </p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-medium">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-medium">
              10AM - 4PM
            </p>
          </li>

          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-medium">
              Tuesday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-medium">
              10AM - 4PM
            </p>
          </li>

          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-medium">
              Thursday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-medium">
              10AM - 4PM
            </p>
          </li>
        </ul>
      </div>
      <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
