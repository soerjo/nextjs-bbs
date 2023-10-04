'use client'

import React from "react";
import BbsIcon from "@/components/assets/BbsIcon";
import SectionComp from "@/components/atoms/SectionComp";
import Background from "./Background";
import ServiceComponent from "./ServiceComponent";

import translate from "@/constant/translate.constant.json";
import { AllContext } from "@/components/atoms/ContextComp";

const ServiceSection = () => {
    const { setallContext, allContext } = React.useContext(AllContext);

    return (
        <SectionComp id="service" classname="">
            <Background />

            <div className="flex flex-col  max-w-4xl container mx-auto h-full gap-12 px-8 md:px-4 py-0 md:py-24 ">
                <div>
                    <div className="h-[3px] w-1/6 bg-white mx-auto mb-8" />
                    <h2>{
                        translate[`${allContext.lang as "id" | "en"}`].section_service
                            .title
                    }</h2>
                </div>
                <div className="bg-gradient-to-r from-[#D9D9D9]/20 border-[1px] border-white/20 backdrop-blur-md rounded-3xl p-8 mx-auto">
                    <p className="text-lg">
                        {
                            translate[`${allContext.lang as "id" | "en"}`].section_service
                                .description
                        }
                    </p>
                </div>
                <div className="flex flex-col gap-32 pt-24">
                    <ServiceComponent
                        imagesrc="/images/service-1.png"
                        title={
                            translate[`${allContext.lang as "id" | "en"}`].section_service
                                .child[0].title
                        }
                        content={
                            translate[`${allContext.lang as "id" | "en"}`].section_service
                                .child[0].description
                        }
                    />
                    <ServiceComponent
                        flip
                        imagesrc="/images/service-2.png"
                        title={
                            translate[`${allContext.lang as "id" | "en"}`].section_service
                                .child[1].title
                        }
                        content={
                            translate[`${allContext.lang as "id" | "en"}`].section_service
                                .child[1].description
                        }
                    />
                    <ServiceComponent
                        imagesrc="/images/service-3.png"
                        title={
                            translate[`${allContext.lang as "id" | "en"}`].section_service
                                .child[2].title
                        }
                        content={
                            translate[`${allContext.lang as "id" | "en"}`].section_service
                                .child[2].description
                        }
                    />
                </div>
                <div className="w-ful">
                    <BbsIcon className="w-[80px] md:w-[100px] opacity-60" />
                </div>
            </div>
        </SectionComp>
    );
};

export default ServiceSection;
