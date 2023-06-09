import React from "react";
import avatar from "../../../images/jenniferAvatar2.jpg";

export default function About() {
  const name = "Jennifer Eckenrode";
  return (
    <div className="mockup-window mt-20 mb-20 border border-accent bg-base-300">
      <div className="flex bg-base-200 px-4 py-16">
        <div className="hero-content max-w-[87rem] flex-col items-start lg:flex-row-reverse">
          <div className="avatar">
            <div className="w-87 rounded-full">
              <img src={avatar} alt="Jennifer Eckenrode Avatar" />
            </div>
          </div>

          <div className="card-body">
            <h2 className="card-title mb-5 text-5xl font-bold text-accent">
            Hello! I am  <span></span> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <pre data-prefix="< " className="prefix"></pre> <span></span>Jennifer  Eckenrode!
              <pre data-prefix=" />" className="prefix"></pre>
            </h2>
            <p className="py-6">I'm a Full-Stack Web Developer.</p>
          </div>

          <div className="mockup-code">
            <pre data-prefix="$">
              <code>npm i jennifer</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix=">" className="text-green-400">
              <code>Done!</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div
          className="chat chat-start my-1 bg-base-200"
          style={{ marginTop: "-0.4rem" }}
        >
          <div className="chat-bubble chat-bubble-info">
            Certified Full-Stack student Web Developer from Southern Methodist
            University,
          </div>
        </div>
        <div
          className="chat chat-start bg-base-200"
          style={{ marginTop: "-0.3rem" }}
        >
          <div className="chat-bubble chat-bubble-success">
            Using thorough coding and best practices with the skills I have
            learned and applied, all to become a full-time developer.
          </div>
        </div>
        <div
          className="chat chat-end bg-base-200"
          style={{ marginTop: "-0.2rem" }}
        >
          <div className="chat-bubble chat-bubble-warning">
            Go ahead, check out my resume tab to see all of my developer
            proficiencies!
          </div>
        </div>
        <div
          className="chat chat-end bg-base-200"
          style={{ marginTop: "-0.2rem" }}
        >
          <div className="chat-bubble chat-bubble-error">
            Also, you can view my projects or my socials as you please, and let
            me know if there's anything I can do for you!
          </div>
        </div>
      </div>
    </div>
  );
}
