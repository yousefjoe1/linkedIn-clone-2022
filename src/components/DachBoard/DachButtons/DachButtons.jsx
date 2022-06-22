import React from "react";

import st from "./dachbtns.module.css";

const DachButtons = () => {
  return (
    <div className={`${st.dach_btns_container}`}>
      <button>Me</button>
      <button>Work</button>
      <button>Post a job</button>
    </div>
  );
};

export default DachButtons;
