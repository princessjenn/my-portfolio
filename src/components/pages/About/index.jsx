import React from "react";
import avatar from "../../../images/jenniferAvatar2.jpg";
import { useState } from "react";
import Heart from "react-animated-heart";

export default function About() {
  const name = "Jennifer Eckenrode";
  const [isClick, setClick] = useState(false);
  return (
    <div className="mockup-window border bg-base-300">
      <div className="flex justify-center bg-base-200 px-4 py-16">

        <div className="card card-side bg-base-100 shadow-xl">
          <div className="avatar">
            <img src={avatar} alt="Jennifer Eckenrode Avatar" />
          </div>
          <div className="card-body">
            <h2 className="card-title mb-5 text-3xl font-bold text-[#c918cc]">Hello, my name is {name}!</h2>
            <p>I'm a Full-Stack Web Developer.</p>
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-info">Certified Full-Stack student Web Developer from Southern Methodist University</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-success">Using thorough coding and best practices with the skills I have learned and applied, all to become a full-time developer.</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-warning">Go ahead, check out my resume tab to see all of my developer proficiencies! </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-error"> Also, you can view my projects or my socials as you please, and let me know if there's anything I can do for you!</div>
        </div>
      </div>

      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <div className="items-center grid-flow-col">
    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clip-rule="evenodd" className="fill-current">
      <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>
      Made with{" "}
      <span className="text-lg">
        <div className="App">
          <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </div>
      </span>
    </p>
  </div>
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
        <path d="M24 4.557c-.882.392-1.832.655-2.827.774 1.013-.609 1.794-1.574 2.164-2.724-.951.564-2.006.974-3.128 1.195-.896-.957-2.177-1.555-3.594-1.555-3.179 0-5.514 2.966-4.797 6.045-4.092-.205-7.72-2.165-10.149-5.144-1.29 2.213-.668 5.108 1.523 6.574-.807-.026-1.566-.247-2.229-.616-.054 2.281 1.582 4.415 3.95 4.89-.694.188-1.451.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </div>
</footer>
</div>
  );
}




