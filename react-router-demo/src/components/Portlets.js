import React from "react";
import "../static/styles/Portlets.css";

import PortletTestimonials from "./PortletTestimonials";
import PortletEvents from "./PortletEvents";
import PortletServices from "./PortletServices";

function Portlets() {


  return (
    <div className="portlets">
 
  
      <PortletServices />
      <PortletEvents />
      <PortletTestimonials />

    </div>
  );
}

export default Portlets;
