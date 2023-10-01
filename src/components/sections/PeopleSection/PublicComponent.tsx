import Image from "next/image";
import React from "react";
import { text } from "stream/consumers";

interface IPublicComponent {
    flip?: boolean;
    Icon: React.JSX.Element;
    title: string;
    content: string;
}

const PublicComponent = ({ title, content, Icon }: IPublicComponent) => {
    return (
        <div className={"flex flex-col justify-center items-start gap-4"}>
            <div className="flex flex-row justify-center items-center gap-4">
                {Icon}
                <h3 className={"text-center text-2xl mb-0"}>{title}</h3>
            </div>
            <p className={"text-base text-left font-normal"}>
                {content}
            </p>
        </div>
    );
};

export default PublicComponent;
