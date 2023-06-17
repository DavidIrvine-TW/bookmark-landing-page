import React from "react";
import error from "../assets/icon-error.svg";
import { useState, useRef } from "react";

function EmailSection() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [thanksMsg, setThanksMsg] = useState(false);
  let timeoutRef = null;

  const verifyEmailHandler = () => {
    // Regular expression pattern to test for a valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      setValidEmail(true);
      setEmailError("");
      setThanksMsg(true);
      clearTimeout(timeoutRef);
      timeoutRef = setTimeout(() => {
        setThanksMsg(false);
      }, 4000);
    } else {
      setValidEmail(false);
      setEmailError("Whoops, make sure it's a valid email!");
    }
    setEmail("");
  };

  return (
    <article className="h-[360px] bg-softblue px-[2rem] pt-[3.75rem] ">
      <div className="text-center mb-[2rem] tablet:mb-[2.5rem] w-[311px] mx-auto tablet:w-[442px]">
        <p className="text-white text-[0.75rem] tracking-[4.62px] leading-[40px] font-bold tablet:text-[0.8125rem] ">
          35,000+ ALREADY JOINED
        </p>
        <p className="text-white text-[1.5rem] tablet:text-[2rem] tracking-[-0.08px] leading-[29px] font-bold ">
          Stay up-to-date with what we’re doing
        </p>
      </div>

      <div className="h-[70px] w-[311px] rounded mx-auto tablet:w-[442px] tablet:flex gap-[1rem]">
        <div
          className={`${
            validEmail ? "" : "bg-softred"
          }  w-full rounded flex-col justify-between items-center p-[2px] h-[70px] tablet:h-[70px]`}
        >
          <div className="flex bg-white items-center justify-between rounded pr-[0.5rem]">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="px-[0.5rem] h-[48px] w-full rounded-xl tablet:w-[250px] border-0 outline-none"
            />
            {validEmail ? (
              ""
            ) : (
              <img className="w-[20px] h-[20px]" src={error} />
            )}
          </div>
          {validEmail ? (
            ""
          ) : (
            <p className="text-white text-[0.7rem] tablet:text-[0.75rem] italic ml-[0.5rem] pt-[2px] tablet:pt-[0] ">
              {emailError}
            </p>
          )}
          {thanksMsg ? (
            <p className="text-white text-[0.7rem] tablet:text-[1rem] italic ml-[0.5rem] pt-[2px] tablet:pt-[0] ">
              Email successful!
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="mx-auto">
          <button
            onClick={verifyEmailHandler}
            className="hover:border-2 hover:text-softred hover:border-softred hover:bg-white mx-auto 
            tablet:mt-[2px] mt-[1rem] tablet:w-[126px] bg-softred text-white font-bold text-[0.875rem] tracking-[0.25px] 
            leading-[28px] py-[0.625rem] rounded-md w-[311px]"
          >
            Contact us
          </button>
        </div>
      </div>
    </article>
  );
}

export default EmailSection;
