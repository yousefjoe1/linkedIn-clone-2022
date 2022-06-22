import React from "react";
import { NavLink } from "react-router-dom";

import st from "./dachlinks.module.css";

const DachLinks = ({ target, icon, text }) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          borderBottom: isActive ? "2px solid black" : "",
        };
      }}
      to={`${target}`}
      className={st.dach_nav_link}
    >
      <span>{icon}</span>
      <span className={`${st.link_text}`}>{text}</span>
    </NavLink>
  );
};

export default DachLinks;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// <div className={`${st.dach_links}`}>
//       <NavLink
//         style={({ isActive }) => {
//           return {
//             borderBottom: isActive ? "2px solid black" : "",
//           };
//         }}
//         to={"/dachboard/home"}
//         className={st.dach_nav_link}
//       >
//         <span>
//           <FaHome />
//         </span>
//         <span className={`${st.link_text}`}>Home</span>

//       </NavLink>
//       <NavLink
//         style={({ isActive }) => {
//           return {
//             borderBottom: isActive ? "2px solid black" : "",
//           };
//         }}
//         to={"/dachboard/network"}
//         className={st.dach_nav_link}
//       >
//         <span>
//           {" "}
//           <BiNetworkChart />
//         </span>
//         <span className={`${st.link_text}`}>NetWork</span>
//       </NavLink>

//       <NavLink
//         style={({ isActive }) => {
//           return {
//             borderBottom: isActive ? "2px solid black" : "",
//           };
//         }}
//         to={"/dachboard/jobs"}
//         className={st.dach_nav_link}
//       >
//         <span>
//           <BsBriefcaseFill />
//         </span>
//         <span className={`${st.link_text}`}>Home</span>
//       </NavLink>

//       <NavLink
//         style={({ isActive }) => {
//           return {
//             borderBottom: isActive ? "2px solid black" : "",
//           };
//         }}
//         to={"/dachboard/messages"}
//         className={st.dach_nav_link}
//       >
//         <span>
//           <AiOutlineMessage />
//         </span>
//         <span className={`${st.link_text}`}>Home</span>
//       </NavLink>

//       <NavLink
//         style={({ isActive }) => {
//             return {
//                 borderBottom: isActive ? "2px solid black" : "",
//             };
//         }}
//         to={"/dachboard/notify"}
//         className={st.dach_nav_link}
//         >
//         <span>
//           <MdNotifications />
//         </span>
//         <span className={`${st.link_text}`}>Home</span>
//       </NavLink>
//     </div>
{
  /* --------------------- Notifications ---------------------- */
}
{
  /* --------------- NetWork --------------------- */
}
{
  /* --------------------- Jobs ---------------------- */
}
{
  /* --------------------- Messaging ---------------------- */
}
