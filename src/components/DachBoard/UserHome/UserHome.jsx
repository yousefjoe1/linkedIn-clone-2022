import React from "react";
import CenterContent from "./CenterContent/CenterContent";
import LeftContent from "./LeftContent/LeftContent";

import st from "./userhome.module.css";

const UserHome = () => {
  return (
    <section className={`${st.user_home} container`}>
      <div className={`row`}>
        {/* ------ Left Side --------- */}
        <div className={`${st.left_content} col-lg-3 col-md-4 col-sm-12 `}>
          <LeftContent />
        </div>
        <div className={`${st.center_content} col-lg-6 col-md-8 col-sm-12 `}>
          <CenterContent />
        </div>
        <div
          className={`${st.right_content} col-lg-3 col-md-3  d-sm-none d-md-block d-xs-none`}
        >
          Right Side
        </div>
      </div>
    </section>
  );
};

export default UserHome;
