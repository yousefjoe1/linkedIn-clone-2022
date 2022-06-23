import React from "react";

import st from "./center.module.css";

import {
  MdOutlineAddPhotoAlternate,
  MdOutlineEventAvailable,
} from "react-icons/md";
import { RiVideoFill, RiArticleLine } from "react-icons/ri";
import Posts from "../Posts/Posts";

const CenterContent = () => {
  return (
    <section className={`${st.center_contaianer}`}>
      <div className={`${st.post_container}`}>
        {/*--------------- Add A Post ----------------*/}
        <div className={`${st.post}`}>
          <img
            src="https://scopetron.com/wp-content/uploads/2019/11/3_avatar-512.png"
            alt=""
          />
          <input type="text" />
        </div>
        <div className={`${st.media}`}>
          <button>
            <MdOutlineAddPhotoAlternate /> <span>Photo</span>
          </button>
          <button>
            <RiVideoFill /> <span>Video</span>
          </button>
          <button>
            <MdOutlineEventAvailable /> <span>Event</span>
          </button>
          <button>
            <RiArticleLine /> <span>Write article</span>
          </button>
        </div>
      </div>

      {/*-------------------- All Posts ---------------------*/}
      <Posts />
    </section>
  );
};

export default CenterContent;
