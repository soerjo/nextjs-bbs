import Image from "next/image";
import React from "react";
import { text } from "stream/consumers";

interface IServiceComponent {
    flip?: boolean;
    imagesrc: string;
    title: string;
    content: string;
}

const ServiceComponent = ({ flip, imagesrc, title, content }: IServiceComponent) => {
    return (
        <div className={flip ? "flex flex-col md:flex-row-reverse justify-center items-center gap-8 md:gap-16 w-full text-right" : "flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 w-full text-right"}>
            <div className="relative flex justify-center items-center w-full  md:w-2/6 ">
                <div className="border-[3px] border-white w-[300px] h-[300px] rounded-full absolute" />
                <Image
                    src={imagesrc}
                    alt="service"
                    width={350}
                    height={350}
                    layout="responsive"

                />
                <Image
                    src={imagesrc}
                    alt="service"
                    width={350}
                    height={350}
                    layout="responsive"
                    className="absolute opacity-20 scale-150 -z-10 blur-xl bg-gradient-radial translate-x-10"
                />
            </div>
            <div className="w-full md:w-4/6">
                <h3 className={flip ? "text-center md:text-right" : "text-center md:text-left"}>{title}</h3>
                <p className={flip ? "text-base text-center md:text-right" : "text-base text-center md:text-left"}>
                    {content}
                </p>
            </div>
        </div>
    );
};

export default ServiceComponent;
