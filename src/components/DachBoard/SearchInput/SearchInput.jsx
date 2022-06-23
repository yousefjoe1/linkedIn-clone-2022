import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";

import st from "./searchinput.module.css";

import { BiSearchAlt2 } from "react-icons/bi";

const SearchInput = () => {
  const [searchicon, setSearchicon] = useState(false);
  window.onresize = () => {
    if (window.innerWidth < 995) {
      setSearchicon(true);
    } else {
      setSearchicon(false);
    }
  };

  return (
    <>
      {!searchicon ? (
        <input type="text" />
      ) : (
        <button>
          <BiSearchAlt2 />
        </button>
      )}
    </>
  );
};

export default SearchInput;
