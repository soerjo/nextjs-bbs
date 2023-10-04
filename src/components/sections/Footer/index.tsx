'use client'

import React from "react";
import Link from "next/link";

import translate from "@/constant/translate.constant.json";
import { AllContext } from "@/components/atoms/ContextComp";

const listmedsos = ["facebook", "twitter", "linkedin", "youtube", "instagram"];

const listservices = [
    {
        title: "Services",
        list: [
            {
                title: "TC/FC",
                link: "#",
            },
            {
                title: "Management Operation",
                link: "#",
            },
            {
                title: "LTC",
                link: "#",
            },
            {
                title: "Vessel",
                link: "#",
            },
            {
                title: "Buy & Sale Agency",
                link: "#",
            },
        ],
    },
    {
        title: "Resources",
        list: [
            {
                title: "News",
                link: "#",
            },
            {
                title: "Blog",
                link: "#",
            },
            {
                title: "Videos",
                link: "#",
            },
            {
                title: "FaQs",
                link: "#",
            },
        ],
    },
];

const Footer = () => {
    const { setallContext, allContext } = React.useContext(AllContext);
    return (
        <footer id="about" className="bg-[#363c77] ">
            <div className="flex flex-col md:flex-row justify-between container p-8 mx-auto gap-8">
                <div className="flex flex-col justify-center items-start gap-4 w-full md:max-w-sm">
                    <h3 className="text-2xl font-bold text-left">{
                        translate[`${allContext.lang as "id" | "en"}`].section_footer
                            .title
                    }</h3>
                    <p className="text-left font-light text-base">{
                        translate[`${allContext.lang as "id" | "en"}`].section_footer
                            .description
                    }</p>
                    {/* <div className="flex justify-center items-center gap-2">
                        {listmedsos.map((list, index) => {
                            return (
                                <div key={index} className="bg-white p-2 rounded-full">
                                    <Image src={"/icon/vision-01.svg"} alt="gb" width={20} height={20} />
                                </div>
                            );
                        })}
                    </div> */}
                </div>
                <div className="flex justify-start items-start gap-2 md:gap-8 py-4">
                    {listservices.map((list, index) => {
                        return (
                            <div key={index}>
                                <h3 className="flex justify-start md:justify-end text-xl font-bold pb-4">{list.title}</h3>
                                <ul className="flex flex-col justify-end gap-1 text-white">
                                    {list.list.map((childlist, index) => (
                                        <li key={index} className="text-left md:text-right">
                                            <Link href={childlist.link}>{childlist.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="bg-[#121212]">
                <div className="container px-4 py-2 flex justify-between items-center mx-auto">
                    <p className="text-white md:text-sm font-light text-xs">{`© ${new Date().getUTCFullYear()} Buana Bahari Samudera`}</p>
                    <ul className="justify-center items-center gap-8 hidden sm:flex">
                        <li className="text-white md:text-sm font-light text-xs"><Link href={'#'}>Privacy Policy</Link></li>
                        <li className="text-white md:text-sm font-light text-xs"><Link href={'#'}>Terms of Services</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
