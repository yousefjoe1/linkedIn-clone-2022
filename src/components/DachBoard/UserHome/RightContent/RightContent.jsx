import React from "react";

import st from "./rightcontent.module.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const RightContent = () => {
  return (
    <section className={`${st.right_content_section}`}>
      {/* ------------ feed ----------------- */}
      <div className={`${st.recomm_addFeed}`}>
        <div className={`${st.addFeed}`}>
          <span>Add to your feed</span> icon
        </div>

        {/* ------------ Suggestions ------------- */}
        <div className={`${st.suggestions}`}>
          <span>
            <img
              src="https://scopetron.com/wp-content/uploads/2019/11/3_avatar-512.png"
              alt=""
            />
          </span>
          <div className={`${st.text_info}`}>
            <p>name</p>
            <p>Lorem ipsum dolor sit.</p>
            <button>+ Follow</button>
          </div>
        </div>
        <div className={`${st.suggestions}`}>
          <span>
            <img
              src="https://scopetron.com/wp-content/uploads/2019/11/3_avatar-512.png"
              alt=""
            />
          </span>
          <div className={`${st.text_info}`}>
            <p>name</p>
            <p>Lorem ipsum dolor sit.</p>
            <button>+ Follow</button>
          </div>
        </div>
        <p>
          View All Suggestions <AiOutlineArrowRight />
        </p>
      </div>
    </section>
  );
};

export default RightContent;
