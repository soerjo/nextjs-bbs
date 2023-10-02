import BbsIcon from "@/components/assets/BbsIcon";
import SectionComp from "@/components/atoms/SectionComp";
import React from "react";
import Background from "./Background";
import ServiceComponent from "./ServiceComponent";

const ServiceSection = () => {
    return (
        <SectionComp id="service" classname="">
            < Background />

            <div className="flex flex-col  max-w-4xl container mx-auto h-full gap-12 px-8 md:px-4 py-0 md:py-24 ">
                <div>
                    <div className="h-[3px] w-1/6 bg-white mx-auto mb-8" />
                    <h2>OUR SERVICES</h2>
                </div>
                <div className="bg-gradient-to-r from-[#D9D9D9]/20 border-[1px] border-white/20 backdrop-blur-md rounded-3xl p-8 mx-auto">
                    <p className="text-lg">
                        Introducing our five high-quality cargo services meticulously
                        designed to cater to your shipping needs, each developed with
                        dedicated precision to deliver an unparalleled shipping experience
                        tailored to your utmost satisfaction.
                    </p>
                </div>
                <div className="flex flex-col gap-32 pt-24">
                    <ServiceComponent imagesrc="/images/service-1.png" title="Time or Freight Charter" content="Explore our versatile fleet of tugboats and barges designed to meet your specific time and freight charter needs. Whether it's bulk cargo or specialized transport, we've got you covered." />
                    <ServiceComponent flip imagesrc="/images/service-2.png" title="Management Operation" content="Optimize your maritime operations with our top-notch Tongkang Management Services. Our experienced team ensures smooth operations, maintenance, and logistics for your fleet. Focus on your core business while we handle the rest. Explore our services now" />
                    <ServiceComponent imagesrc="/images/service-3.png" title="Buy and Sale Agency" content="Step into a world of specialized expertise with our Buy and Sale Agency for Barge Services, where we present an extensive selection of meticulously curated vessels, each tailored to meet your unique requirements, ensuring a seamless and efficient transaction experience" />
                </div>
                <div className="w-ful">
                    <BbsIcon className="w-[80px] md:w-[100px] opacity-60" />
                </div>
            </div>
        </SectionComp >
    );
};

export default ServiceSection;
