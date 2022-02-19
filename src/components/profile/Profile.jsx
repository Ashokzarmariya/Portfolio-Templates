import React from "react";
import "./Profilecss.css";


const Profile = () => {
  const profileImg="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664__340.jpg"
  return (
    <div className="box">
      <div className="d-flex profile container  rounded flex-wrap">
        <div className=" d-flex justify-content-center mx-5 ashokImg">
          <img
            className="rounded-circle"
            src={profileImg}
            alt="ashok-zarmariya"
          />
        </div>
        <div className="summry">
          <h1 className="my-2">Your Name </h1>
          <div className="blue">Full-Stack Web Devloper</div>
          <hr className="border border-light" />
          <p>
          When I first attended the Masai School workshop, I didn't know much about coding. But after the workshop, I realized that I had fallen in love with coding and web development. So I decided to join Masai School and pursue a career in software development.
          </p>
          <button className="btn btn-dark border"><a className="text-decoration-none text-light" href="/" target="_blank" rel="noopener noreferrer">RESUME</a> </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
