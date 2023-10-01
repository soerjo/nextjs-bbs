import BbsIcon from "@/components/assets/BbsIcon";
import SectionComp from "@/components/atoms/SectionComp";
import React from "react";
import Background from "./Background";
import ServiceComponent from "./ServiceComponent";
import People01 from "@/components/assets/People01";
import People02 from "@/components/assets/People02";
import People03 from "@/components/assets/People03";

const PeopleSection = () => {
    return (
        <SectionComp id="people" classname="">
            < Background />

            <div className="flex flex-col  max-w-6xl container mx-auto h-full gap-12 px-8 md:px-0 py-0 md:py-24 ">
                <div>
                    <div className="h-[3px] w-1/6 bg-white mx-auto mb-8" />
                    <h2>COMPANY VALUE</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceComponent Icon={<People01 />} title="Integrity" content="The unwavering commitment to honesty, truthfulness, and moral principles, even when no one is watching." />
                    <ServiceComponent Icon={<People02 />} title="Integrated" content="Through our integrated approach, synergize every aspect of our business to ensure optimal efficiency." />
                    <ServiceComponent Icon={<People03 />} title="Team Work" content="Working together towards a common goal, leveraging their diverse skills and strengths to achieve success." />
                </div>
                <div className="w-ful">
                    <BbsIcon className="w-[80px] md:w-[100px] opacity-60" />
                </div>
            </div>
        </SectionComp >
    );
};

export default PeopleSection;
