// components/Header.js
import React from "react";
import { JavaScriptIcon } from "@/components/javascripticon";

export const Header = () => {
  return (
    <div className="border-solid border-2 border-sky-500- h-16 text-black flex items-center justify-between md">
      <h1 className="px-10">Tom</h1>
      <div className="flex gap-3 items-center ml-6 ">
        <h1>About</h1>
        <h1>Work</h1>
        <h1>Testimonials</h1>
        <h1>Contact</h1>
        <JavaScriptIcon />
        <div className="h-9 w-32 border-solid border-2 border-sky-500 rounded-xl flex items-center justify-center ">
          <h1>Download CV</h1>
        </div>
      </div>
    </div>
  );
};
