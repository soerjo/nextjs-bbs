'use client'

import React from "react";
import BbsIcon from "@/components/assets/BbsIcon";
import SectionComp from "@/components/atoms/SectionComp";
import Background from "./Background";
import ServiceComponent from "./ServiceComponent";
import People01 from "@/components/assets/People01";
import People02 from "@/components/assets/People02";
import People03 from "@/components/assets/People03";
import Image from "next/image";
import PublicComponent from "./PublicComponent";

import translate from "@/constant/translate.constant.json";
import { AllContext } from "@/components/atoms/ContextComp";

const PeopleSection = () => {
    const { setallContext, allContext } = React.useContext(AllContext);
    return (
        <>
            <SectionComp id="people" classname="-z-10">
                <Background />

                <div className="flex flex-col  max-w-6xl container mx-auto h-full gap-12 px-8 py-0 md:py-24 ">
                    <div>
                        <div className="h-[3px] w-1/6 bg-white mx-auto mb-8" />
                        <h2>{
                            translate[`${allContext.lang as "id" | "en"}`].section_value
                                .title
                        }</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceComponent
                            Icon={<People01 />}
                            title={
                                translate[`${allContext.lang as "id" | "en"}`].section_goals
                                    .child[0].title
                            }
                            content={
                                translate[`${allContext.lang as "id" | "en"}`].section_goals
                                    .child[0].description
                            }
                        />
                        <ServiceComponent
                            Icon={<People02 />} title={
                                translate[`${allContext.lang as "id" | "en"}`].section_goals
                                    .child[1].title
                            }
                            content={
                                translate[`${allContext.lang as "id" | "en"}`].section_goals
                                    .child[1].description
                            }
                        />
                        <ServiceComponent
                            Icon={<People03 />} title={
                                translate[`${allContext.lang as "id" | "en"}`].section_goals
                                    .child[2].title
                            }
                            content={
                                translate[`${allContext.lang as "id" | "en"}`].section_goals
                                    .child[2].description
                            }
                        />
                    </div>
                    <div className="w-ful">
                        <BbsIcon className="w-[80px] md:w-[100px] opacity-60" />
                    </div>
                </div>
            </SectionComp>
            <SectionComp id="people" classname="">
                <div className="absolute h-full w-full -z-50 top-0 bg-[#232332]">
                    <Image
                        src={"/images/sea.png"}
                        alt="tongkang"
                        layout="fill"
                        objectFit="cover"
                        className="h-screen opacity-90"
                    />
                    <div className="absolute top-0 w-full h-[500px] z-50 bg-gradient-to-b from-[#232332] from-5% to-black-500/0 to-70%" />
                    <div className="absolute bottom-0 w-full h-[500px] z-50 bg-gradient-to-t from-[#232332] from-5% to-black-500/0 to-70%" />
                </div>

                <div className="relative flex flex-row w-full max-w-6xl container mx-auto h-full gap-12 px-8 py-0 md:py-24 ">
                    <div className="">
                        <div className="flex flex-col justify-center items-start">
                            <h2 className="text-left">{
                                translate[`${allContext.lang as "id" | "en"}`].section_value
                                    .title
                            }</h2>
                            <div className="h-[5px] w-[100px] bg-white mb-8" />
                        </div>

                        <div className="flex flex-col gap-8">
                            <PublicComponent
                                Icon={<People01 />}
                                title={
                                    translate[`${allContext.lang as "id" | "en"}`].section_value
                                        .child[0].title
                                }
                                content={
                                    translate[`${allContext.lang as "id" | "en"}`].section_value
                                        .child[0].description
                                } />
                            <PublicComponent
                                Icon={<People03 />}
                                title={
                                    translate[`${allContext.lang as "id" | "en"}`].section_value
                                        .child[1].title
                                }
                                content={
                                    translate[`${allContext.lang as "id" | "en"}`].section_value
                                        .child[1].description
                                } />
                        </div>

                        <div className="w-full mt-20">
                            <BbsIcon className="w-[80px] md:w-[100px] opacity-60 container" />
                        </div>
                    </div>
                    <div className="absolute md:static md:flex justify-center items-center -z-10 w-full">
                        <Image
                            src={"/images/tugboat2-2.png"}
                            alt="service"
                            width={360} height={360} className='object-cover w-full'
                        />
                    </div>
                </div>
            </SectionComp>
            <SectionComp id="people" classname="">
                <div className="absolute h-full w-full -z-50 top-0 bg-[#232332]">
                    <div className="absolute rounded-full h-[80px] md:h-[200px] w-[80px] md:w-[200px] z-50 top-0 bg-[#489DE8]/70 translate-x-[350px] translate-y-[250px]" />
                    <div className="absolute rounded-full h-[80px] md:h-[200px] w-[80px] md:w-[200px] z-50 top-0 bg-[#A9A9EB]/50 translate-x-[1090px] translate-y-[350px]" />

                    <div className="absolute rounded-full h-[600px] md:h-[1200px] w-[600px] md:w-[1200px] translate-x-[300px] -translate-y-[450px] md:translate-x-[600px] md:-translate-y-[600px] bg-gradient-radial from-[#F7941D]/40 from-1% to-black-500/0 to-60% z-50 right-0" />
                    <div className="absolute rounded-full h-[600px] md:h-[1200px] w-[600px] md:w-[1200px] -translate-x-[300px] -translate-y-[450px] md:-translate-x-[600px] md:translate-y-[200px] bg-gradient-radial from-[#00B0FF]/40 from-1% to-black-500/0 to-60% z-50 left-0" />
                </div>

                <div className="flex flex-row  max-w-6xl container mx-auto h-full gap-12 px-8 py-0 md:py-24 ">
                    <div className="mx-auto w-full">
                        <h2 className="mb-12">{
                            translate[`${allContext.lang as "id" | "en"}`].section_structure.title
                        }</h2>
                        <p className="text-base md:text-lg mb-4 max-w-3xl mx-auto">{
                            translate[`${allContext.lang as "id" | "en"}`].section_structure.description
                        }</p>
                        <div className="h-[3px] w-1/6 bg-white mx-auto mb-8" />


                        <div className="flex flex-row justify-center items-center gap-4 md:gap-8">
                            <div>
                                <div className="relative rounded-lg overflow-hidden flex">
                                    <Image src="/images/sonny-1.png" alt="sonny" width={290} height={400} priority className="scale-125 -translate-y-5 md:-translate-y-14 bottom-0" />
                                    <div className=" bg-[#FFFFFF]/10 backdrop-blur-md w-[320px] h-[820px] absolute top-0 -z-30" />
                                </div>
                                <p className="font-bold">Sonny Apriliano</p>
                                <p className="text-xs md:text-xl font-normal">Chief Executive Officer</p>
                            </div>
                            <div>
                                <div className="relative rounded-lg overflow-hidden flex">
                                    <Image src="/images/pakyul-1.png" alt="sonny" width={290} height={400} priority className="scale-125 -translate-y-5 md:-translate-y-14 bottom-0" />
                                    <div className=" bg-[#FFFFFF]/10 backdrop-blur-md w-[320px] h-[820px] absolute top-0 -z-30" />
                                </div>
                                <p className="font-bold">Sonny Apriliano</p>
                                <p className="text-xs md:text-xl font-normal">Chief Executive Officer</p>
                            </div>
                        </div>
                        <div className="w-full mt-20">
                            <BbsIcon className="w-[80px] md:w-[100px] opacity-60 container" />
                        </div>
                    </div>
                </div>
            </SectionComp>
        </>
    );
};

export default PeopleSection;
