import React from "react";
import { Outlet } from "react-router-dom";
import DachNav from "../DachNav/DachNav";

import st from "./dach.module.css";

const Dach = () => {
  return (
    <section className={`${st.dachSection}`}>
      <DachNav />
      <div className="container">
        <Outlet />
      </div>
    </section>
  );
};

export default Dach;
