import React from "react";

import st from "./dachbtns.module.css";

import { AiOutlineArrowDown } from "react-icons/ai";
import { SiPolywork } from "react-icons/si";
import { MdOutlinePostAdd } from "react-icons/md";

const DachButtons = () => {
  return (
    <div className={`${st.dach_btns_container}`}>
      <button className={`${st.meBtn}`}>
        <span>
          <img
            src="https://scopetron.com/wp-content/uploads/2019/11/3_avatar-512.png"
            alt=""
          />
        </span>
        <span>
          Me <AiOutlineArrowDown />
        </span>
      </button>
      <button>
        <span>
          <SiPolywork />
        </span>
        <span>Work</span>
      </button>
      <button>
        <span>
          <MdOutlinePostAdd />
        </span>
        <span>Post a job</span>
      </button>
    </div>
  );
};

export default DachButtons;
