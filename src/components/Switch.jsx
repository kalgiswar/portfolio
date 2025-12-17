"use client";

import React from "react";
import styled from "styled-components";

const Switch = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/kalgiswar-resume.pdf";   // file must be inside /public
    link.download = "Kalgiswar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledWrapper>
      <div className="container">
        <label className="label">

          {/* HIDDEN CHECKBOX */}
          <input
            type="checkbox"
            className="input"
            onClick={handleDownload}
          />

          {/* ANIMATED CIRCLE */}
          <span className="circle">
            <svg
              className="icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 19V5m0 14-4-4m4 4 4-4"
              />
            </svg>

            <div className="square" />
          </span>

          {/* TEXT */}
          <p className="title">Download</p>
          <p className="title">Open</p>

        </label>
      </div>
    </StyledWrapper>
  );
};

export default Switch;

const StyledWrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  .label {
    background-color: transparent;
    border: 2px solid rgb(91, 91, 240);
    display: flex;
    align-items: center;
    border-radius: 50px;
    width: 160px;
    cursor: pointer;
    transition: all 0.4s ease;
    padding: 5px;
    position: relative;
  }

  .label::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #fff;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: auto;
    opacity: 0;
    visibility: hidden;
  }

  .input {
    display: none;
  }

  .title {
    font-size: 17px;
    color: #fff;
    transition: all 0.4s ease;
    position: absolute;
    right: 18px;
    bottom: 14px;
  }

  .title:last-child {
    opacity: 0;
    visibility: hidden;
  }

  .circle {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: rgb(91, 91, 240);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
  }

  .icon {
    color: #fff;
    width: 30px;
    position: absolute;
    transition: all 0.4s ease;
  }

  .square {
    width: 15px;
    aspect-ratio: 1;
    border-radius: 2px;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    transition: all 0.4s ease;
  }

  .circle::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #3333a8;
    height: 0;
    transition: all 0.4s ease;
  }

  .label:has(.input:checked) {
    width: 57px;
    animation: installed 0.4s ease 3.5s forwards;
  }

  .label:has(.input:checked)::before {
    animation: rotate 3s ease-in-out 0.4s forwards;
  }

  .input:checked + .circle {
    animation: pulse 1s forwards, circleDelete 0.2s ease 3.5s forwards;
    rotate: 180deg;
  }

  .input:checked + .circle::before {
    animation: installing 3s ease-in-out forwards;
  }

  .input:checked + .circle .icon {
    opacity: 0;
    visibility: hidden;
  }

  .input:checked + .circle .square {
    opacity: 1;
    visibility: visible;
  }

  .input:checked ~ .title {
    opacity: 0;
    visibility: hidden;
  }

  .input:checked ~ .title:last-child {
    animation: showInstalledMessage 0.4s ease 3.5s forwards;
  }

  @keyframes pulse {
    0% { scale: 0.95; }
    70% { scale: 1; box-shadow: 0 0 0 16px rgba(255,255,255,0); }
    100% { scale: 0.95; }
  }

  @keyframes installing {
    from { height: 0; }
    to { height: 100%; }
  }

  @keyframes rotate {
    0% {
      transform: rotate(-90deg) translate(27px) rotate(0);
      opacity: 1;
    }
    99% {
      transform: rotate(270deg) translate(27px) rotate(270deg);
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes installed {
    100% {
      width: 150px;
      border-color: rgb(35, 174, 35);
    }
  }

  @keyframes circleDelete {
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes showInstalledMessage {
    100% {
      opacity: 1;
      visibility: visible;
      right: 56px;
    }
  }
`;
