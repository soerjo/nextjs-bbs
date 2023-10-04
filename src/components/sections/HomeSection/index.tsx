'use client'

import React from "react";
import { motion } from "framer-motion"

import Background from "./Background";
import SectionComp from "@/components/atoms/SectionComp";
import BbsIcon from "@/components/assets/BbsIcon";
import DownIcon from "@/components/assets/DownIcon";
import translate from '@/constant/translate.constant.json'
import { AllContext } from "@/components/atoms/ContextComp";

const SectionHome = () => {
  const { setallContext, allContext } = React.useContext(AllContext);

  const handleLangToggle = () => {
    setallContext((prev: Record<string, any>) => ({ ...prev, lang: prev.lang === "en" ? "id" : "en" }))
  }

  return (
    <SectionComp id="home" classname="relative" >
      <Background />

      <div className="flex items-center justify-end w-full container px-4">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer select-none" >
          {/* toggle */}
          <div className="relative" >
            {/* input */}
            <input type="checkbox" id="toggleB" className="sr-only " onClick={handleLangToggle} />
            {/* line */}
            <div className="block bg-gray-600 w-14 h-8 rounded-full" />
            {/* dot */}
            <div className="uppercase dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition text-xs flex justify-center items-center font-bold cap">{allContext.lang}</div>
          </div>
        </label>
      </div>

      <div className="flex flex-col justify-between items-center container mx-auto h-full gap-12 px-8 md:px-0 py-0 md:py-32 md:-translate-y-[0px] -translate-y-[90px]" >
        <BbsIcon className="w-[120px] md:w-[200px]" />
        <div>
          <h1>{translate[`${allContext.lang as "id" | "en"}`].section_home.title}</h1>
          <div className="h-[3px] w-1/2 bg-white mx-auto" />
        </div>
        <p>{translate[`${allContext.lang as "id" | "en"}`].section_home.description}.</p>
        <a href="#service" className="text-white text-center text-sm md:text-xl font-medium flex flex-row gap-4 justify-center items-center hover:cursor-pointer">{translate[`${allContext.lang as "id" | "en"}`].section_home.button}<span><DownIcon className="w-[25px] md:w-auto" /></span></a>
      </div >
    </SectionComp>
  );
};

export default SectionHome;
