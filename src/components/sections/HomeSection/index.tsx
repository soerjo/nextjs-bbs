'use client'

import React from "react";
import { motion } from "framer-motion"

import Background from "./Background";
import SectionComp from "@/components/atoms/SectionComp";
import BbsIcon from "@/components/assets/BbsIcon";
import DownIcon from "@/components/assets/DownIcon";

const SectionHome = () => {
  return (
    <SectionComp id="home" >
      <Background />
      <div className="flex flex-col justify-between items-center container mx-auto h-full gap-12 px-8 md:px-0 py-0 md:py-32 md:-translate-y-[0px] -translate-y-[90px]" >
        <BbsIcon className="w-[120px] md:w-[200px]" />
        <div>
          <h1>BUANA BAHARI SAMUDRA</h1>
          <div className="h-[3px] w-1/2 bg-white mx-auto" />
        </div>
        <p>Buana Bahari Samudera takes great pride in providing an unparalleled cargo service that not only ensures swift and reliable delivery but also prioritizes the safety of your valuable goods.</p>
        <a href="#service" className="text-white text-center text-sm md:text-xl font-medium flex flex-row gap-4 justify-center items-center hover:cursor-pointer">Explore More <span><DownIcon className="w-[25px] md:w-auto" /></span></a>
      </div >
    </SectionComp>
  );
};

export default SectionHome;
