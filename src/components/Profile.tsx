import React from "react";

const Profile = () => {
  return (
    <section id="about">
      <img
      // className="w-[20vw] h-[25vh] object-cover object-bottom rounded-lg"
      // src="/src/assets/profile-img.jpg"
      ></img>
      <h1 className="text-5xl">I'm Xiu Min</h1>
      <p className="text-2xl font-opensans">
        Full Stack Software Engineer based in Singapore.
      </p>
      <button className="main-btn">Talk with me</button>
      <button className="sec-btn">See my work</button>
    </section>
  );
};

export default Profile;
