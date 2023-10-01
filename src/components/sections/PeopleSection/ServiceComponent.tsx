import Image from "next/image";
import React from "react";
import { text } from "stream/consumers";

interface IServiceComponent {
    flip?: boolean;
    Icon: React.JSX.Element;
    title: string;
    content: string;
}

const ServiceComponent = ({ title, content, Icon }: IServiceComponent) => {
    return (
        <div className={"flex flex-col justify-center items-center gap-4"}>
            {Icon}
            <h3 className={"text-center text-2xl mb-0"}>{title}</h3>
            <p className={"text-base text-center font-normal"}>
                {content}
            </p>
        </div>
    );
};

export default ServiceComponent;
