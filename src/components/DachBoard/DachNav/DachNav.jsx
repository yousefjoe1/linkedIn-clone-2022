import React from "react";
import { Link } from "react-router-dom";
import DachLinks from "../DachLinks/DachLinks";

import st from "./dachnav.module.css";

import { FaHome } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import DachButtons from "../DachButtons/DachButtons";
import SearchInput from "../SearchInput/SearchInput";

const DachNav = () => {
  return (
    <header className={`${st.header} container-fluid`}>
      <div className={`${st.navContainer} container`}>
        {/* Dachboard Icon && Search Input */}
        <div className={`${st.dachIcon_search}`}>
          <Link to={"/dachboard/home"}>
            <img
              src="https://www.officefriendly.co.uk/wp-content/uploads/2018/06/Linkedin1.jpg"
              alt=""
            />
          </Link>

          <SearchInput />
        </div>

        {/* ----------------------- Dachboard Links ---------------------  */}
        <div className={`${st.dach_links_Container}`}>
          <DachLinks text="Home" icon={<FaHome />} target="/dachboard/home" />
          <DachLinks
            text="Network"
            icon={<BiNetworkChart />}
            target="/dachboard/network"
          />
          <DachLinks
            text="Jobs"
            icon={<BsBriefcaseFill />}
            target="/dachboard/jobs"
          />
          <DachLinks
            text="Messages"
            icon={<AiOutlineMessage />}
            target="/dachboard/messages"
          />
          <DachLinks
            text="Notifications"
            icon={<MdNotifications />}
            target="/dachboard/notify"
          />

          {/* ----------------- Dach Buttons ------------------- */}
          <div className={`${st.dach_btns}`}>
            <DachButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DachNav;
