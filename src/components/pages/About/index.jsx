import React from "react";
import avatar from "../../../images/jenniferAvatar2.jpg";

export default function About() {
  const name = "Jennifer Eckenrode";
  return (
    // <div>
    //   <header className="about-Header">
    //     <h1>Hello, my name is {name}</h1>
    //     <div className="avatar-image">
    //       <img src={avatar} alt="Jennifer Avatar" />
    //     </div>
    //   </header>
    //   <p>
    //     I'm a Southern Methodist University Full-Stack Web Development student.
    //     Coding diligently to become a full-time developer with the skills
    //     I'm learning and applying around the clock!
    //   </p>
    // </div>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Hello, my name is {name}
      </p>
      <p className="text-gray-500 text-lg">
        I'm a Southern Methodist University Full-Stack Web Development student.
        Coding diligently to become a full-time developer with the skills I'm
        learning and applying around the clock!
      </p>
    </div>
  );
}
