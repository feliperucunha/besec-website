import React from "react";
//*import Component
import ClientsSlider from "./ClientsSlider";

const Clients = () => {
  return (
    <section>
      <div className=" container-fluid mx-auto">
        <div
          className=" min-h-[600px] "
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px] ">
            <h2 className="text-[40px] font-bold leading-tight text-center mb-[80px] uppercase">
              Principais Clientes
            </h2>
            <ClientsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
