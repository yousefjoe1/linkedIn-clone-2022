import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

import st from "./leftcontent.module.css";

import { AiOutlineArrowDown } from "react-icons/ai";

const LeftContent = () => {
  return (
    <section className={`${st.left_section}`}>
      <div className={`${st.user_stuff}`}>
        <div className={`${st.img_name_title}`}>
          <img
            src="https://scopetron.com/wp-content/uploads/2019/11/3_avatar-512.png"
            alt=""
          />
          <Link to={"/profile"}>User Name</Link>
          <p>user title</p>
        </div>
        <hr />
        <p>
          <span>Who's viewed your profile</span> <span>0</span>
        </p>
        <p>
          <span>Connections</span> <span>0</span>
        </p>

        <hr />

        <p> Access exclusive tools & insights Try Premium for free </p>
        <p>My Items</p>
      </div>
      <div className={st.rc_gr}>
        <Accordion defaultActiveKey={["1"]} alwaysOpen>
          <Accordion.Item eventKey="1">
            <div className={`${st.recent_icon} `}>
              <span>Recent</span>
              <Accordion.Header
                className={`${st.acc_header}`}
              ></Accordion.Header>
            </div>

            <br />
            <Accordion.Body>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey={["1"]} alwaysOpen>
          <Accordion.Item eventKey="1">
            <div className={`${st.recent_icon} `}>
              <span>Groups</span>
              <Accordion.Header
                className={`${st.acc_header}`}
              ></Accordion.Header>
            </div>

            <br />
            <Accordion.Body>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default LeftContent;
