import React from 'react';
import resume from "../../../images/resumeImage.png";
import { BsDownload } from "react-icons/bs"

export default function Resume() {
  const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=19SIAhsFKCE9xUqaO0P7EPyMha9m18j3z";
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${resume})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content fixed text-center text-neutral-content">
        <div className="max-w-md border border-outline rounded-lg bg-neutral bg-opacity-60 p-20">
          <h1 className="mb-5 text-5xl font-bold text-secondary">Want to see what I'm made of?</h1>
          <p className="mb-5">Here's a download link to <br></br> my resume PDF: </p>
          <a href={resumeDownloadUrl} className="btn btn-secondary">
           Resume
           <BsDownload className="inline-block mr-2" />
            </a>
        </div>
      </div>
    </div>
  );
}
