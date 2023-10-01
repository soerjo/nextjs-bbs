'use client'

import React from "react";
import { useInView } from "framer-motion";
import { AllContext } from "../ContextComp";

export interface ISectionComp {
    children: React.ReactNode,
    classname?: string,
    id: string
}

export default function SectionComp({ children, id, classname }: ISectionComp) {
    // const ref = React.useRef(null)
    // const isInView = useInView(ref, { margin: '-50%' })
    // const { setallContext } = React.useContext(AllContext);

    // React.useEffect(() => {
    //     isInView && setallContext(id)

    // }, [isInView])


    return (
        <section id={id} className={"relative flex flex-col min-h-screen w-full pt-10 md:pt-0 justify-center items-center " + classname}>
            {children}
            {/* <div className="h-[100px] md:h-[200px] w-full " /> */}
        </section>
    );
}
