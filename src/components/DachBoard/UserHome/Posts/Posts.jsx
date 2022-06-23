import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import st from "./posts.module.css";

import { GiEarthAfricaEurope } from "react-icons/gi";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [usres, setUsers] = useState([]);

  const getUsersAndPosts = async () => {
    const call1 = await fetch("https://jsonplaceholder.typicode.com/posts");
    const allPosts = await call1.json();
    setPosts(allPosts.slice(0, 10));
    const call2 = await fetch("https://jsonplaceholder.typicode.com/users");
    const allUsers = await call2.json();
    setUsers(allUsers);
  };

  useEffect(() => {
    getUsersAndPosts();
  }, []);

  return (
    <section className={`${st.posts_section}`}>
      {usres?.map((user, i) => (
        <div key={user.id} className={st.post_container}>
          <div className={st.userInfo}>
            <span>
              <img
                src="https://scopetron.com/wp-content/uploads/2019/11/3_avatar-512.png"
                alt=""
              />
            </span>
            <div className={`${st.txt_info}`}>
              <p>{user.name}</p>
              <p>Lorem ipsum dolor sit.</p>
              <p>
                {i + 1}d .<GiEarthAfricaEurope />
              </p>
            </div>
            <button className={`${st.follow}`}>Follow+</button>
          </div>
          <div className={st.post_body}>
            <p>{posts[i].body}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Posts;
