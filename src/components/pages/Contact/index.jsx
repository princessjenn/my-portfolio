import React from "react";
import avatar from "../../../images/jenniferAvatar2.jpg";

export default function Contact() {
  return (
    <div>
      <div>
        <section className="body-font relative text-gray-700">
          <div className="container mx-auto px-5 py-24">
            <div className="mb-12 flex w-full flex-col text-center">
              <h1 className="title-font mb-4 text-left text-2xl font-medium text-error sm:text-3xl">
                Contact Me
              </h1>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={avatar} alt="Avatar" />
                  </div>
                </div>
                <div className="chat-bubble-white chat-bubble">
                  In the fields below, please enter your name, email address,
                  and message you'd like to send:
                </div>
              </div>
            </div>
            <div className="mx-auto md:w-2/3 lg:w-1/2 ">
              <div className="-m-2 flex flex-wrap">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input-bordered input-primary w-full max-w-xs rounded border bg-transparent px-3 py-1 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input-bordered input-warning w-full max-w-xs rounded border bg-transparent px-3 py-1 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="max-w-xsleading-6 input-bordered input-error h-32 w-full resize-none rounded border bg-transparent px-3 py-1 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <button className="btn btn-success btn-outline">
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
